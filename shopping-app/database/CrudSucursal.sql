--Crud Sucursal 

CREATE or replace PROCEDURE sp_InsertSucursal(
	_nombre   VARCHAR(50)
)
LANGUAGE PLPGSQL AS $$
BEGIN
	if ((COALESCE(TRIM(_nombre),'') = '')) then
		RAISE 'Error: Null parameter';
	ELSIF EXISTS(SELECT * FROM sucursal WHERE nombre = _nombre ) THEN
		RAISE 'Error:that sucursal name is already in use, please try another.';
	else
		BEGIN
			INSERT INTO Sucursal VALUES
			(_nombre);
			COMMIT;
		END;
	END IF;
END;$$

CREATE FUNCTION getAllSucursales() 
RETURNS TABLE (
	id    INT,
	nombre  VARCHAR(50)
	
) AS $$
	SELECT id, nombre from Sucursal;
$$ LANGUAGE SQL;

CREATE FUNCTION getSucursal(_ID INT) 
RETURNS TABLE (
	id    INT,
	nombre  VARCHAR(50)
	
) AS $$
	SELECT id, nombre from Sucursal where id = _id;
$$ LANGUAGE SQL;


CREATE or replace PROCEDURE updateSucursal(
	_id          BIGINT,
	_name    VARCHAR(50))
LANGUAGE PLPGSQL AS $$
BEGIN
    IF ((_id IS NULL) OR  (COALESCE(TRIM(_name),'') = '') ) THEN
		RAISE 'Error: Null parameter.';
		
	ELSIF NOT EXISTS(SELECT * FROM Categoria WHERE id = _id) THEN
		RAISE 'Error: Sucursal not exists.';
	ELSIF EXISTS(SELECT * FROM sucursal WHERE nombre = _name and id != _id) THEN
		RAISE 'Error:that sucursal name is already in use in other instance, please try another.';
	ELSE
		BEGIN
			UPDATE Sucursal
			SET nombre = _name
			WHERE id = _id;
			COMMIT;
		END;
	END IF;
END;$$

CREATE or replace PROCEDURE sp_deleteSucursal( 
	_id INT
)
LANGUAGE PLPGSQL AS $$
BEGIN
	IF NOT EXISTS(SELECT * FROM sucursal WHERE id = _id) THEN
		RAISE 'Error: Sucursal not exists.';
			
	ELSE
		BEGIN
			DELETE FROM sucursal WHERE id = _id;
			COMMIT;
		END;
	END IF;
END;$$