------////////////////////////////////////////////////////////////Crud Categoria

CREATE or replace PROCEDURE sp_InsertCategoria(
	_nombre   VARCHAR(50)
)
LANGUAGE PLPGSQL AS $$
BEGIN
	if ((COALESCE(TRIM(_nombre),'') = '')) then
		RAISE 'Error: Null parameter';
	ELSIF EXISTS(SELECT  ca.* FROM Categoria ca WHERE ca.nombre = _nombre ) THEN
		RAISE 'Error:that Categoria name is already in use, please try another.';
	else
		BEGIN
			INSERT INTO Categoria (nombre)VALUES
			(_nombre);
			COMMIT;
		END;
	END IF;
END;$$
select * from getAllCategorias()
CREATE or replace FUNCTION getAllCategorias() 
RETURNS TABLE (
	id    INT,
	nombre  VARCHAR(50)
	
) AS $$
begin
	return query SELECT c.id, c.nombre from Categoria c;
end;
$$ LANGUAGE PLPGSQL;

CREATE or replace FUNCTION getCategoria(_id int) 
RETURNS TABLE (
	id    INT,
	nombre  VARCHAR(50)
	
) AS $$
begin
	return query SELECT Ca.id, Ca.nombre from Categoria Ca where Ca.id = _id;
end;
$$ LANGUAGE PLPGSQL;

CREATE or replace FUNCTION getCategoriaId(_name varchar(50)) 
RETURNS INT AS $$
Declare 
_id int;
begin
	if exists(SELECT ca.* from Categoria ca where ca.nombre = _name)then
	SELECT ca.id into _id from Categoria ca where ca.nombre = _name;
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
		
	ELSIF NOT EXISTS(SELECT ca.* FROM Categoria ca WHERE ca.id = _id) THEN
		RAISE 'Error: Categoria not exists.';
		
	ELSIF EXISTS(SELECT ca.* FROM Categoria ca WHERE ca.nombre = _name and ca.id != _id ) THEN
		RAISE 'Error:that Categoria name is already in use in other instance, please try another.';
	
	ELSE
		BEGIN
			UPDATE Categoria ca
			SET ca.nombre = _name
			WHERE ca.id = _id;
			COMMIT;
		END;
	END IF;
END;$$

CREATE or replace PROCEDURE sp_deleteCategoria( 
	_id INT
)
LANGUAGE PLPGSQL AS $$
BEGIN
	IF NOT EXISTS(SELECT ca.* FROM Categoria ca WHERE ca.id = _id) THEN
		RAISE 'Error: Sucursal not exists.';
			
	ELSE
		BEGIN
			DELETE FROM Categoria  ca WHERE ca.id = _id;
			COMMIT;
		END;
	END IF;
END;$$

