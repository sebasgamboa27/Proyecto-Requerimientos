--Crud Sucursal 

CREATE or replace PROCEDURE sp_InsertSucursal(
	_nombre   VARCHAR(50)
)
LANGUAGE PLPGSQL AS $$
BEGIN
	if ((COALESCE(TRIM(_nombre),'') = '')) then
		RAISE 'Error: Null parameter';
	ELSIF EXISTS(SELECT S.* FROM sucursal S WHERE S.nombre = _nombre ) THEN
		RAISE 'Error:that sucursal name is already in use, please try another.';
	else
		BEGIN
			INSERT INTO Sucursal (nombre) VALUES
			(_nombre);
			COMMIT;
		END;
	END IF;
END;$$

CREATE OR REPLACE FUNCTION getAllSucursales() 
RETURNS TABLE (
	id    INT,
	nombre  VARCHAR(50)
	
) AS $$
begin
	return query SELECT s.id, s.nombre from Sucursal s;
end;
$$ LANGUAGE PLPGSQL;

CREATE OR REPLACE FUNCTION getSucursal(_ID INT) 
RETURNS TABLE (
	id    INT,
	nombre  VARCHAR(50)
	
) AS $$
begin 
	return query SELECT S.id, S.nombre from Sucursal S where S.id = _id;
end;
$$ LANGUAGE PLPGSQL;


CREATE or replace PROCEDURE updateSucursal(
	_id          BIGINT,
	_name    VARCHAR(50))
LANGUAGE PLPGSQL AS $$
BEGIN
    IF ((_id IS NULL) OR  (COALESCE(TRIM(_name),'') = '') ) THEN
		RAISE 'Error: Null parameter.';
		
	ELSIF NOT EXISTS(SELECT CA.* FROM Categoria CA WHERE CA.id = _id) THEN
		RAISE 'Error: Sucursal not exists.';
	ELSIF EXISTS(SELECT S.* FROM sucursal S WHERE S.nombre = _name and S.id != _id) THEN
		RAISE 'Error:that sucursal name is already in use in other instance, please try another.';
	ELSE
		BEGIN
			UPDATE Sucursal S
			SET S.nombre = _name
			WHERE S.id = _id;
			COMMIT;
		END;
	END IF;
END;$$

CREATE or replace PROCEDURE sp_deleteSucursal( 
	_id INT
)
LANGUAGE PLPGSQL AS $$
BEGIN
	IF NOT EXISTS(SELECT S.* FROM sucursal S WHERE S.id = _id) THEN
		RAISE 'Error: Sucursal not exists.';
			
	ELSE
		BEGIN
			DELETE FROM sucursal S WHERE S.id = _id;
			COMMIT;
		END;
	END IF;
END;$$
