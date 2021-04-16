--------/////////////////////////////////////////crud Tipo Usuario

CREATE or replace PROCEDURE sp_InsertTipoUsuario(
	_nombre   VARCHAR(50)
)
LANGUAGE PLPGSQL AS $$
BEGIN
	if ((COALESCE(TRIM(_nombre),'') = '')) then
		RAISE 'Error: Null parameter';
	ELSIF EXISTS(SELECT * FROM TipoUsuario WHERE nombre = _nombre ) THEN
		RAISE 'Error:that TipoUsuario name is already in use, please try another.';
	else
		BEGIN
			INSERT INTO TipoUsuario VALUES
			(_nombre);
			COMMIT;
		END;
	END IF;
END;$$

CREATE FUNCTION getAllTipoUsuarios() 
RETURNS TABLE (
	id    INT,
	nombre  VARCHAR(50)
	
) AS $$
	SELECT id, nombre from TipoUsuario;
$$ LANGUAGE SQL;

CREATE FUNCTION getTipoUsuariosWhitNombre(_nombre VARCHAR(50) ) 
RETURNS TABLE (
	id    INT,
	nombre  VARCHAR(50)
	
) AS $$
	SELECT id, nombre from TipoUsuario where nombre = _nombre ;
$$ LANGUAGE SQL;

CREATE FUNCTION getTipoUsuariosWhitId(_id int) 
RETURNS TABLE (
	id    INT,
	nombre  VARCHAR(50)
	
) AS $$
	SELECT id, nombre from TipoUsuario where id = _id ;
$$ LANGUAGE SQL;

CREATE or replace PROCEDURE updateTipoUsuario (
	_id          INT,
	_name    VARCHAR(50))
LANGUAGE PLPGSQL AS $$
BEGIN
    IF ((_id IS NULL) OR  (COALESCE(TRIM(_name),'') = '') ) THEN
		RAISE 'Error: Null parameter.';
		
	ELSIF NOT EXISTS(SELECT * FROM TipoUsuario WHERE id = _id) THEN
		RAISE 'Error: TipoUsuario not exists.';
	ELSIF EXISTS(SELECT * FROM TipoUsuario WHERE nombre = _name and id != _id ) THEN
		RAISE 'Error:that TipoUsuario name is already in use, please try another.';
	
	ELSE
		BEGIN
			UPDATE TipoUsuario
			SET nombre = _name
			WHERE id = _id;
			COMMIT;
		END;
	END IF;
END;$$

CREATE or replace PROCEDURE sp_deleteTipoUsuario( 
	_id INT
)
LANGUAGE PLPGSQL AS $$
BEGIN
	IF NOT EXISTS(SELECT * FROM TipoUsuario WHERE id = _id) THEN
		RAISE 'Error: Sucursal not exists.';
			
	ELSE
		BEGIN
			DELETE FROM TipoUsuario WHERE id = _id;
			COMMIT;
		END;
	END IF;
END;$$
