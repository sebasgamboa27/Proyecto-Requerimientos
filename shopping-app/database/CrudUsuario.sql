		-----------//////////////////////////////////crud usuario

CREATE or replace PROCEDURE sp_InsertUsuario(
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

	if ( (COALESCE(TRIM(_nombre),'') = '') OR (COALESCE(TRIM(_apellido),'') = '') OR 
		(COALESCE(TRIM(_contrasena ),'') = '') OR  (COALESCE(TRIM(_correo ),'') = '') OR 
		(COALESCE(TRIM(_direccionFisica ),'') = '') OR
		(COALESCE(TRIM(_nombreUsuario ),'') = '') OR (_cedula IS NULL) OR (_tipoId IS NULL)) then
		RAISE 'Error: Null parameter';		
	ELSIF EXISTS(SELECT * FROM Usuario WHERE correo = _correo ) THEN
		RAISE 'Error:that email already exists, please try another.';
	ELSIF NOT EXISTS(SELECT * FROM TipoUsuario WHERE id = _tipoId) THEN
		RAISE 'Error: categoria doesn''t exists.';
	else
		BEGIN
			INSERT INTO Usuario (nombre,apellido ,contrasena,correo ,direccionFisica,nombreUsuario,cedula,tipoId) VALUES
			( 
			_nombre,
			_apellido,
			_contrasena,
			_correo,
			_direccionFisica,
			_nombreUsuario,
			_cedula,
			_tipoId	);
			COMMIT;
		END;
	END IF;
END;$$



CREATE OR REPLACE FUNCTION public.getallusuarios(
	)
    RETURNS TABLE(id integer, nombre character varying, apellido character varying, contrasena character varying, correo character varying, direccionfisica character varying, nombreusuario character varying, cedula integer, tipoid integer) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
begin
	return query (SELECT U.id, U.nombre,U.apellido,U.contrasena,U.correo ,U.direccionFisica,U.nombreUsuario,U.cedula,U.tipoId from Usuario U where U.tipoId=2);

end;
$BODY$;

ALTER FUNCTION public.getallusuarios()

CREATE OR REPLACE FUNCTION public.getususariowhitid(
	_id integer)
    RETURNS TABLE(id integer, nombre character varying, apellido character varying, contrasena character varying, correo character varying, direccionfisica character varying, nombreusuario character varying, cedula integer, tipoid integer) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
begin
	IF NOT EXISTS(SELECT * FROM Usuario U WHERE U.id = _id) THEN
		RAISE 'Error: User doesnt exists.';
	else
		BEGIN
			
				RETURN QUERY SELECT U.id, U.nombre,U.apellido,U.contrasena,U.correo ,U.direccionFisica,U.nombreUsuario,U.cedula,U.tipoId from Usuario U WHERE U.id = _id;
		END;
	END IF;
	
end;
$BODY$;
////////////////////////
CREATE or replace FUNCTION getLoginUser(_UserName varchar (50), _Password varchar (50)) 
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
	IF NOT EXISTS(SELECT U.* FROM Usuario u WHERE u.nombreUsuario = _UserName) THEN
		RAISE 'Error: User % doesn''t exists.', _UserName;
	else
		BEGIN
			SELECT U.contrasena 
			INTO encryptedPassword
			FROM Usuario U WHERE U.nombreUsuario = _UserName;
			
			IF (encryptedPassword = _Password) THEN
				RETURN QUERY SELECT U.id, U.nombre,U.apellido,U.contrasena,U.correo ,U.direccionFisica,U.nombreUsuario,U.cedula,U.tipoId from Usuario U WHERE U.nombreUsuario = _UserName;
			ELSE
				Return ;
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
	if ((_id is null) or (COALESCE(TRIM(_nombre),'') = '') OR (COALESCE(TRIM(_apellido),'') = '') OR 
		(COALESCE(TRIM(_contrasena ),'') = '') OR  (COALESCE(TRIM(_correo ),'') = '') OR 
		(COALESCE(TRIM(_direccionFisica ),'') = '') OR
		(COALESCE(TRIM(_nombreUsuario ),'') = '') OR (_cedula IS NULL) OR (_tipoId IS NULL)) then
		RAISE 'Error: Null parameter';
		
	ELSIF NOT EXISTS(SELECT u.* FROM Usuario U WHERE U.id = _id) THEN
		RAISE 'Error: USER doesn''t exists.';
	
	ELSIF NOT EXISTS(SELECT tp.* FROM TipoUsuario TP WHERE TP.id = _tipoId) THEN
		RAISE 'Error: TipoUsuario doesn''t exists.';	
	
	ELSIF EXISTS(SELECT u.* FROM Usuario U WHERE U.correo = _correo and U.id != _id ) THEN
		RAISE 'Error:that email is already in use in other instance, please try another.';
	
	ELSE
		BEGIN
			UPDATE Usuario 
			SET
			nombre = _nombre,
			apellido = _apellido,
			contrasena = _contrasena,
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
			DELETE FROM Usuario U WHERE U.id = _id;
			COMMIT;
		END;
	END IF;
END;$$
