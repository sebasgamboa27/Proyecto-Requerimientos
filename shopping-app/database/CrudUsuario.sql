------------//////////////////////////////////crud usuario
CREATE or replace PROCEDURE sp_InsertUsuario(
	_id 				int,
	_nombre				varchar(50),
	_apellido 			varchar(50),
	_contrasena 		varchar(50),
	_correo 			varchar(50),
	_direccionFisica 	varchar(50),
	_nombreUsuario		varchar(50),
	_cedula				int,
	_tipoId				int
)
LANGUAGE PLPGSQL AS $$
BEGIN
	if ((id is null) or (COALESCE(TRIM(_nombre),'') = '') OR (COALESCE(TRIM(_apellido),'') = '') OR 
		(COALESCE(TRIM(_contrasena ),'') = '') OR  (COALESCE(TRIM(_correo ),'') = '') OR 
		(COALESCE(TRIM(_direccionFisica ),'') = '') OR
		(COALESCE(TRIM(_nombreUsuario ),'') = '') OR (_cedula IS NULL) OR (_tipoId IS NULL)) then
		RAISE 'Error: Null parameter';
	ELSIF EXISTS(SELECT * FROM Usuario WHERE id = _id ) THEN
		RAISE 'Error:that id already exists, please try another.';
		
	ELSIF EXISTS(SELECT * FROM Usuario WHERE correo = _correo ) THEN
		RAISE 'Error:that email already exists, please try another.';
	ELSIF NOT EXISTS(SELECT * FROM TipoUsuario WHERE id = _tipoId) THEN
		RAISE 'Error: categoria doesn''t exists.';
	else
		BEGIN
			INSERT INTO Articulo VALUES
			(_id ,
			_nombre,
			_apellido,
			crypt(_contrasena, gen_salt('bf')),
			_correo,
			_direccionFisica,
			_nombreUsuario,
			_cedula,
			_tipoId	);
			COMMIT;
		END;
	END IF;
END;$$

CREATE FUNCTION getAllUsuarios() 
RETURNS TABLE (
	id 					int,
	nombre 				varchar(50),
	apellido 			varchar(50),
	contrasena 			varchar(50),
	correo 				varchar(50),
	direccionFisica 	varchar(50),
	nombreUsuario		varchar(50),
	cedula				int,
	tipoId				int
) AS $$
	SELECT id, nombre,apellido,contrasena,correo ,direccionFisica,nombreUsuario,cedula,tipoId from Usuario;
$$ LANGUAGE SQL;

CREATE FUNCTION getUsusarioWhitId(_id int ) 
RETURNS TABLE (
	id 					int,
	nombre 				varchar(50),
	apellido 			varchar(50),
	contrasena 			varchar(50),
	correo 				varchar(50),
	direccionFisica 	varchar(50),
	nombreUsuario		varchar(50),
	cedula				int,
	tipoId				int
) AS $$
begin
	IF NOT EXISTS(SELECT * FROM Usuario WHERE id = _id) THEN
		RAISE 'Error: User doesnt exists.';
	else
		BEGIN
			
				RETURN QUERY SELECT id, nombre,apellido,contrasena,correo ,direccionFisica,nombreUsuario,cedula,tipoId from Usuario WHERE id = _id;
		END;
	END IF;
	
end;
$$ LANGUAGE PLPGSQL;
////////////////////////

CREATE FUNCTION getLoginUser(_UserName varchar(50), _password varchar(50)) 
RETURNS TABLE (
	id 					int,
	nombre 				varchar(50),
	apellido 			varchar(50),
	contrasena 			varchar(50),
	correo 				varchar(50),
	direccionFisica 	varchar(50),
	nombreUsuario		varchar(50),
	cedula				int,
	tipoId				int
) AS $$
DECLARE
	encryptedPassword VARCHAR(50);
begin
	IF NOT EXISTS(SELECT * FROM Usuario WHERE nombreUsuario = _UserName) THEN
		RAISE 'Error: User % doesn''t exists.', _UserName;
	else
		BEGIN
			SELECT contrasena 
			INTO encryptedPassword
			FROM Usuario WHERE nombreUsuario = _UserName;
			
			IF (crypt(_password, encryptedPassword) = encryptedPassword) THEN
				RETURN QUERY SELECT id, nombre,apellido,contrasena,correo ,direccionFisica,nombreUsuario,cedula,tipoId from Usuario WHERE nombreUsuario = _UserName;
			ELSE
				RAISE 'Error: Incorrect password for user %.', _UserName;
			END IF;
		END;
	END IF;
	
end;
$$ LANGUAGE PLPGSQL;


CREATE or replace PROCEDURE sp_updateUsuario(
	_id 				int,
	_nombre				varchar(50),
	_apellido 			varchar(50),
	_contrasena 		varchar(50),
	_correo 			varchar(50),
	_direccionFisica 	varchar(50),
	_nombreUsuario		varchar(50),
	_cedula				int,
	_tipoId				int
)
LANGUAGE PLPGSQL AS $$
BEGIN
	if ((id is null) or (COALESCE(TRIM(_nombre),'') = '') OR (COALESCE(TRIM(_apellido),'') = '') OR 
		(COALESCE(TRIM(_contrasena ),'') = '') OR  (COALESCE(TRIM(_correo ),'') = '') OR 
		(COALESCE(TRIM(_direccionFisica ),'') = '') OR
		(COALESCE(TRIM(_nombreUsuario ),'') = '') OR (_cedula IS NULL) OR (_tipoId IS NULL)) then
		RAISE 'Error: Null parameter';
		
	ELSIF NOT EXISTS(SELECT * FROM Usuario WHERE id = _id) THEN
		RAISE 'Error: USER doesn''t exists.';
	
	ELSIF NOT EXISTS(SELECT * FROM TipoUsuario WHERE id = _tipoId) THEN
		RAISE 'Error: TipoUsuario doesn''t exists.';	
	
	ELSIF EXISTS(SELECT * FROM Usuario WHERE correo = _correo and id != _id ) THEN
		RAISE 'Error:that email is already in use in other instance, please try another.';
	
	ELSE
		BEGIN
			UPDATE Usuario
			SET
			nombre = _nombre,
			apellido = _apellido,
			contrasena = crypt(_contrasena, gen_salt('bf')),
			correo = _correo,
			direccionFisica = _direccionFisica,
			nombreUsuario= _nombreUsuario,
			cedula = _cedula,
			tipoId = _tipoId	 
			WHERE id = _id;
			COMMIT;
		END;
	END IF;
END;$$

CREATE or replace PROCEDURE sp_deleteUsuario( 
	_id INT
)
LANGUAGE PLPGSQL AS $$
BEGIN
	IF NOT EXISTS(SELECT * FROM Usuario WHERE id = _id) THEN
		RAISE 'Error: Articulo not exists.';
			
	ELSE
		BEGIN
			DELETE FROM Usuario WHERE id = _id;
			COMMIT;
		END;
	END IF;
END;$$
