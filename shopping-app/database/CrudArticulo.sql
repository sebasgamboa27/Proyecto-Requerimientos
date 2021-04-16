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
	ELSIF EXISTS(SELECT * FROM Articulo WHERE nombre = _nombre AND categoriaId = _categoriaId AND sucursalId = _sucursalId ) THEN
		RAISE 'Error:that Categoria already exists, please try another.';
	ELSIF NOT EXISTS(SELECT * FROM categoria WHERE id = _categoriaId) THEN
		RAISE 'Error: categoria doesn''t exists.';
	ELSIF NOT EXISTS(SELECT * FROM sucursal WHERE id = _sucursalId) THEN
		RAISE 'Error: sucursal doesn''t exists.';
	else
		BEGIN
			INSERT INTO Articulo VALUES
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
	SELECT id, nombre, descripccion, precio, cantidad, categoriaId, sucursalId from Articulo;
$$ LANGUAGE SQL;

 
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
	SELECT id, nombre, descripccion, precio, cantidad, categoriaId, sucursalId from Articulo where _idSucursal = sucursalId ;
$$ LANGUAGE SQL;



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
	SELECT id, nombre, descripccion, precio, cantidad, categoriaId, sucursalId from Articulo where getCategoriaId(nombCat) = categoriaId and sucursalId = _sucursalId ;
$$ LANGUAGE SQL;

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
	SELECT id, nombre, descripccion, precio, cantidad, categoriaId, sucursalId from Articulo where nombArt  = nombre and sucursalId = _sucursalId ;
$$ LANGUAGE SQL;


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
	ELSIF NOT EXISTS(SELECT * FROM Articulo WHERE id = _id) THEN
		RAISE 'Error: Articulo doesn''t exists.';
		
	ELSIF NOT EXISTS(SELECT * FROM Sucursal WHERE id = _sucursalId) THEN
		RAISE 'Error: Sucursal doesn''t exists.';	
	
	ELSIF NOT EXISTS(SELECT * FROM Categoria WHERE id = _categoriaId) THEN
		RAISE 'Error: Categoria doesn''t exists.';	
	
	ELSIF EXISTS(SELECT * FROM Articulo WHERE nombre = _nombre and id != _id ) THEN
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
	IF NOT EXISTS(SELECT * FROM Articulo WHERE id = _id) THEN
		RAISE 'Error: Articulo not exists.';
			
	ELSE
		BEGIN
			DELETE FROM Articulo WHERE id = _id;
			COMMIT;
		END;
	END IF;
END;$$

