------////////////////////////////////////////////////////////////Crud Categoria
CREATE or replace PROCEDURE sp_InsertCategoria(
	_nombre   VARCHAR(50)
)
LANGUAGE PLPGSQL AS $$
BEGIN
	if ((COALESCE(TRIM(_nombre),'') = '')) then
		RAISE 'Error: Null parameter';
	ELSIF EXISTS(SELECT * FROM Categoria WHERE nombre = _nombre ) THEN
		RAISE 'Error:that Categoria name is already in use, please try another.';
	else
		BEGIN
			INSERT INTO Categoria VALUES
			(_nombre);
			COMMIT;
		END;
	END IF;
END;$$

CREATE FUNCTION getAllCategorias() 
RETURNS TABLE (
	id    INT,
	nombre  VARCHAR(50)
	
) AS $$
	SELECT id, nombre from Categoria;
$$ LANGUAGE SQL;

CREATE FUNCTION getCategoria(_id int) 
RETURNS TABLE (
	id    INT,
	nombre  VARCHAR(50)
	
) AS $$
	SELECT id, nombre from Categoria where id = _id;
$$ LANGUAGE SQL;

CREATE FUNCTION getCategoriaId(_name varchar(50)) 
RETURNS INT AS $$
Declare 
_id int;
begin
	if exists(SELECT * from Categoria where nombre = _name)then
	SELECT id into _id from Categoria where nombre = _name;
	return _id;
	end if;
end;


$$ LANGUAGE PLPGSQL;


CREATE or replace PROCEDURE updateCategoria(
	_id          INT,
	_name    VARCHAR(50))
LANGUAGE PLPGSQL AS $$
BEGIN
    IF ((_id IS NULL) OR  (COALESCE(TRIM(_name),'') = '') ) THEN
		RAISE 'Error: Null parameter.';
		
	ELSIF NOT EXISTS(SELECT * FROM Categoria WHERE id = _id) THEN
		RAISE 'Error: Categoria not exists.';
		
	ELSIF EXISTS(SELECT * FROM Categoria WHERE nombre = _name and id != _id ) THEN
		RAISE 'Error:that Categoria name is already in use in other instance, please try another.';
	
	ELSE
		BEGIN
			UPDATE Categoria
			SET nombre = _name
			WHERE id = _id;
			COMMIT;
		END;
	END IF;
END;$$

CREATE or replace PROCEDURE sp_deleteCategoria( 
	_id INT
)
LANGUAGE PLPGSQL AS $$
BEGIN
	IF NOT EXISTS(SELECT * FROM Categoria WHERE id = _id) THEN
		RAISE 'Error: Sucursal not exists.';
			
	ELSE
		BEGIN
			DELETE FROM Categoria WHERE id = _id;
			COMMIT;
		END;
	END IF;
END;$$

