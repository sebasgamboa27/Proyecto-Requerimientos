-----------//////////////////////////////////////////////////////////////////CRUD Articulo

CREATE or replace PROCEDURE sp_InsertArticulo(
	_nombre	varchar(50),
	_descripccion	varchar(50),
	_precio	float,
	_cantidad	int,
	_categoriaId	int, 
	_sucursalId	int 
)
LANGUAGE PLPGSQL AS $$
BEGIN
	if ((COALESCE(TRIM(_nombre),'') = '') OR (COALESCE(TRIM(_descripccion),'') = '') OR (_precio IS NULL) OR 
		(_cantidad IS NULL) OR (_categoriaId IS NULL) OR (_sucursalId IS NULL)) then
		RAISE 'Error: Null parameter';
	ELSIF EXISTS(SELECT ar.* FROM Articulo ar WHERE ar.nombre = _nombre AND ar.categoriaId = _categoriaId AND ar.sucursalId = _sucursalId ) THEN
		RAISE 'Error:that Categoria already exists, please try another.';
	ELSIF NOT EXISTS(SELECT ca.* FROM categoria ca WHERE ca.id = _categoriaId) THEN
		RAISE 'Error: categoria doesn''t exists.';
	ELSIF NOT EXISTS(SELECT s.* FROM sucursal s WHERE s.id = _sucursalId) THEN
		RAISE 'Error: sucursal doesn''t exists.';
	else
		BEGIN
			INSERT INTO Articulo(nombre,descripccion,precio,cantidad,categoriaId,sucursalId) VALUES
			(_nombre, _descripccion, _precio, _cantidad, _categoriaId, _sucursalId);
			COMMIT;
		END;
	END IF;
END;$$

CREATE or replace FUNCTION getAllArticulos() 
RETURNS TABLE (
	id      int,
	nombre	varchar(50),
	descripccion	varchar(50),
	precio	float,
	cantidad	int,
	categoriaId	int,
	sucursalId	int
) AS $$
begin
	return query SELECT  Ar.id,  Ar.nombre,  Ar.descripccion,  Ar.precio,  Ar.cantidad,  Ar.categoriaId,  Ar.sucursalId from Articulo Ar;
end;
$$ LANGUAGE PLPGSQL;

 
CREATE or replace FUNCTION getAllArticulosSucursal(_idSucursal int ) 
RETURNS TABLE (
	id      int,
	nombre	varchar(50),
	descripccion	varchar(50),
	precio	float,
	cantidad	int,
	categoriaId	int,
	sucursalId	int
) AS $$
begin
	return query SELECT Ar.id, Ar.nombre, Ar.descripccion, Ar.precio, Ar.cantidad, Ar.categoriaId, Ar.sucursalId from Articulo Ar where _idSucursal = Ar.sucursalId ;
end;
$$ LANGUAGE PLPGSQL;



create or replace function getArticuloWhitNombCat(nombCat varchar(50),_sucursalId int)
RETURNS TABLE (
	id      int,
	nombre	varchar(50),
	descripccion	varchar(50),
	precio	float,
	cantidad	int,
	categoriaId	int,
	sucursalId	int
) AS $$
begin
	return query SELECT Ar.id, Ar.nombre, Ar.descripccion, Ar.precio, Ar.cantidad, Ar.categoriaId, Ar.sucursalId from Articulo Ar where getCategoriaId(nombCat) = AR.categoriaId and Ar.sucursalId = _sucursalId ;
end;
$$ LANGUAGE PLPGSQL;

create or replace function getArticuloWhitNomb(nombArt varchar(50),_sucursalId int )
RETURNS TABLE (
	id      int,
	nombre	varchar(50),
	descripccion	varchar(50),
	precio	float,
	cantidad	int,
	categoriaId	int,
	sucursalId	int
) AS $$
begin 
	return query SELECT AR.id, AR.nombre, AR.descripccion, AR.precio, AR.cantidad, AR.categoriaId, AR.sucursalId from Articulo AR where nombArt  = AR.nombre and AR.sucursalId = _sucursalId ;
end;
$$ LANGUAGE PLPGSQL;


CREATE or replace PROCEDURE sp_updateArticulo(
	_id int,
	_nombre	varchar(50),
	_descripccion	varchar(50),
	_precio	float,
	_cantidad	int,
	_categoriaId	int, 
	_sucursalId	int 
)
LANGUAGE PLPGSQL AS $$
BEGIN
    if ((_id IS NULL) OR (COALESCE(TRIM(_nombre),'') = '') OR (COALESCE(TRIM(_descripccion),'') = '') OR (_precio IS NULL) OR 
		(_cantidad IS NULL) OR (_categoriaId IS NULL) OR (_sucursalId IS NULL)) then
		RAISE 'Error: Null parameter';
	ELSIF NOT EXISTS(SELECT ar.* FROM Articulo ar WHERE ar.id = _id) THEN
		RAISE 'Error: Articulo doesn''t exists.';
		
	ELSIF NOT EXISTS(SELECT s.* FROM Sucursal s WHERE s.id = _sucursalId) THEN
		RAISE 'Error: Sucursal doesn''t exists.';	
	
	ELSIF NOT EXISTS(SELECT ca.* FROM Categoria ca WHERE ca.id = _categoriaId) THEN
		RAISE 'Error: Categoria doesn''t exists.';	
	
	ELSIF EXISTS(SELECT ar.* FROM Articulo ar WHERE ar.nombre = _nombre and ar.id != _id ) THEN
		RAISE 'Error:that Articulo name is already in use in other instance, please try another.';
	
	ELSE
		BEGIN
			UPDATE Articulo
			SET
			nombre = _nombre,
			descripccion = _descripccion,
			precio = _precio,	
			cantidad = _cantidad,	
			categoriaId = _categoriaId, 
			sucursalId = _sucursalId	 
			WHERE id = _id;
			COMMIT;
		END;
	END IF;
END;$$

CREATE or replace PROCEDURE sp_deleteArticulo( 
	_id INT
)
LANGUAGE PLPGSQL AS $$
BEGIN
	IF NOT EXISTS(SELECT ar.* FROM Articulo ar WHERE ar.id = _id) THEN
		RAISE 'Error: Articulo not exists.';
			
	ELSE
		BEGIN
			DELETE FROM Articulo Ar WHERE Ar.id = _id;
			COMMIT;
		END;
	END IF;
END;$$

