--//////////////////////////////CRUD ArticuloXPedido

CREATE or replace PROCEDURE sp_InsertArticuloXPedido(
	_pedidoId int ,
	_ArticuloId int 
)
LANGUAGE PLPGSQL AS $$
BEGIN
	if ((_pedidoId IS NULL) OR (_ArticuloId IS NULL)) then
		RAISE 'Error: Null parameter';
	ELSIF NOT EXISTS(SELECT pe.* FROM Pedido pe   WHERE pe.id = _pedidoId ) THEN
		RAISE 'Error: Pedido doesn''t exists.';
	ELSIF NOT EXISTS(SELECT ar.* FROM Articulo ar WHERE ar.id = _ArticuloId ) THEN
		RAISE 'Error: Articulo doesn''t exists.';
	ELSIF EXISTS(SELECT ap.* FROM ArticuloXPedido ap WHERE ap.ArticuloId = _ArticuloId and ap.pedidoId = _pedidoId) THEN
		RAISE 'Error:ArticuloXPedido already exists.';
	else
		BEGIN
			INSERT INTO ArticuloXPedido (pedidoId,ArticuloId)VALUES
			(_pedidoId ,
			_ArticuloId
			);
			COMMIT;
		END;
	END IF;
END;$$

CREATE or replace FUNCTION getAllArticuloXPedido() 
RETURNS TABLE (
	pedidoId int ,
	ArticuloId int 
	
) AS $$
begin
	return query SELECT AP.pedidoId, AP.ArticuloId from ArticuloXPedido AP;
end;
$$ LANGUAGE PLPGSQL;


CREATE OR REPLACE FUNCTION getArticuloXPedido(_pedidoId int ,_ArticuloId int) 
RETURNS TABLE (
	pedidoId int ,
	ArticuloId int 
	
) AS $$
begin
	return query SELECT AP.pedidoId, AP.ArticuloId from ArticuloXPedido AP where AP.pedidoId = _pedidoId and AP.ArticuloId = _ArticuloId;
end;
$$ LANGUAGE PLPGSQL;


CREATE or replace PROCEDURE sp_deleteArticuloXPedido( 
	_pedidoId int ,
	_ArticuloId int 
)
LANGUAGE PLPGSQL AS $$
BEGIN
	if ((_pedidoId IS NULL) OR (_ArticuloId IS NULL)) then
		RAISE 'Error: Null parameter';
	ELSEIF NOT EXISTS(SELECT ap.* FROM ArticuloXPedido ap WHERE ap.pedidoId = _pedidoId and  ap.ArticuloId = _ArticuloId ) THEN
		RAISE 'Error: ArticuloXPedido not exists.';
			
	ELSE
		BEGIN
			DELETE FROM ArticuloXPedido AP WHERE AP.pedidoId = _pedidoId and  AP.ArticuloId = _ArticuloId;
			COMMIT;
		END;
	END IF;
END;$$
