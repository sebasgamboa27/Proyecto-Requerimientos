--------/////////////////////////////////////////crud Tipo Usuario

CREATE or replace PROCEDURE sp_InsertTipoUsuario(
	_nombre   VARCHAR(50)
)
LANGUAGE PLPGSQL AS $$
BEGIN
	if ((COALESCE(TRIM(_nombre),'') = '')) then
		RAISE 'Error: Null parameter';
	ELSIF EXISTS(SELECT tp.* FROM TipoUsuario tp WHERE tp.nombre = _nombre ) THEN
		RAISE 'Error:that TipoUsuario name is already in use, please try another.';
	else
		BEGIN
			INSERT INTO TipoUsuario(nombre) VALUES
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

CREATE OR REPLACE FUNCTION getTipoUsuariosWhitNombre(_nombre VARCHAR(50) ) 
RETURNS TABLE (
	id    INT,
	nombre  VARCHAR(50)
	
) AS $$
BEGIN
	RETURN QUERY SELECT TU.id, TU.nombre from TipoUsuario TU where TU.nombre = _nombre ;
END;
$$ LANGUAGE PLPGSQL;


CREATE OR REPLACE FUNCTION getTipoUsuariosWhitId(_id int) 
RETURNS TABLE (
	id    INT,
	nombre  VARCHAR(50)
	
) AS $$
BEGIN
	SELECT TP.id, TP.nombre from TipoUsuario TP where TP.id = _id ;
END;
$$ LANGUAGE PLPGSQL;

CREATE or replace PROCEDURE updateTipoUsuario (
	_id          INT,
	_name    VARCHAR(50))
LANGUAGE PLPGSQL AS $$
BEGIN
    IF ((_id IS NULL) OR  (COALESCE(TRIM(_name),'') = '') ) THEN
		RAISE 'Error: Null parameter.';
		
	ELSIF NOT EXISTS(SELECT tp.* FROM TipoUsuario tp WHERE tp.id = _id) THEN
		RAISE 'Error: TipoUsuario not exists.';
	ELSIF EXISTS(SELECT tp.* FROM TipoUsuario tp WHERE tp.nombre = _name and tp.id != _id ) THEN
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
	IF NOT EXISTS(SELECT tp.* FROM TipoUsuario tp WHERE tp.id = _id) THEN
		RAISE 'Error: Sucursal not exists.';
			
	ELSE
		BEGIN
			DELETE FROM TipoUsuario TP WHERE TP.id = _id;
			COMMIT;
		END;
	END IF;
END;$$

