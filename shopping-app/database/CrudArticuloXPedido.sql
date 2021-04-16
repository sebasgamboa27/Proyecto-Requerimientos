--//////////////////////////////CRUD ArticuloXPedido

CREATE or replace PROCEDURE sp_InsertArticuloXPedido(
	_pedidoId int ,
	_ArticuloId int 
)
LANGUAGE PLPGSQL AS $$
BEGIN
	if ((_pedidoId IS NULL) OR (_ArticuloId IS NULL)) then
		RAISE 'Error: Null parameter';
	ELSIF NOT EXISTS(SELECT * FROM Pedido WHERE id = _pedidoId ) THEN
		RAISE 'Error: Pedido doesn''t exists.';
	ELSIF NOT EXISTS(SELECT * FROM Articulo WHERE id = _ArticuloId ) THEN
		RAISE 'Error: Articulo doesn''t exists.';
	ELSIF EXISTS(SELECT * FROM ArticuloXPedido WHERE ArticuloId = _ArticuloId and pedidoId = _pedidoId) THEN
		RAISE 'Error:ArticuloXPedido already exists.';
	else
		BEGIN
			INSERT INTO ArticuloXPedido VALUES
			(_pedidoId ,
			_ArticuloId
			);
			COMMIT;
		END;
	END IF;
END;$$

CREATE FUNCTION getAllArticuloXPedido() 
RETURNS TABLE (
	pedidoId int ,
	ArticuloId int 
	
) AS $$
	SELECT pedidoId, ArticuloId from ArticuloXPedido;
$$ LANGUAGE SQL;


CREATE FUNCTION getArticuloXPedido(_pedidoId int ,_ArticuloId int) 
RETURNS TABLE (
	pedidoId int ,
	ArticuloId int 
	
) AS $$
	SELECT pedidoId, ArticuloId from ArticuloXPedido where pedidoId = _pedidoId and ArticuloId = _ArticuloId;
$$ LANGUAGE SQL;


CREATE or replace PROCEDURE sp_deleteArticuloXPedido( 
	_pedidoId int ,
	_ArticuloId int 
)
LANGUAGE PLPGSQL AS $$
BEGIN
	if ((_pedidoId IS NULL) OR (_ArticuloId IS NULL)) then
		RAISE 'Error: Null parameter';
	ELSEIF NOT EXISTS(SELECT * FROM ArticuloXPedido WHERE pedidoId = _pedidoId and  ArticuloId = _ArticuloId ) THEN
		RAISE 'Error: ArticuloXPedido not exists.';
			
	ELSE
		BEGIN
			DELETE FROM ArticuloXPedido WHERE pedidoId = _pedidoId and  ArticuloId = _ArticuloId;
			COMMIT;
		END;
	END IF;
END;$$

