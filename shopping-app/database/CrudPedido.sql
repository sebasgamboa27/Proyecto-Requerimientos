--///////////////////////////////CRUD Pedido

CREATE or replace PROCEDURE sp_InsertPedido(
	_precioTotal		float,
	_usuarioId		int 
)
LANGUAGE PLPGSQL AS $$
BEGIN
	if ((COALESCE(TRIM(_estado),'') = '')  OR (_precioTotal IS NULL)
	   OR (_usuarioId IS NULL)) then
		RAISE 'Error: Null parameter';
	ELSIF NOT EXISTS(SELECT U.* FROM Usuario U WHERE U.id = _usuarioId ) THEN
		RAISE 'Error: USER doesn''t exists..';
	else
		BEGIN
			INSERT INTO Pedido (estado ,fecha,precioTotal,usuarioId) VALUES
			(
			 True,
			 NOW(),
			_precioTotal,
			_usuarioId
			);
			COMMIT;
		END;
	END IF;
END;$$


CREATE or replace FUNCTION getAllPedidos() 
RETURNS TABLE (
	id 				int ,
	estado 			varchar(50),
	fecha 			TIMESTAMP ,
	precioTotal		float,
	usuarioId		int,
	nombreUsuario varchar(50)
) AS $$
begin
	return query SELECT pe.id,pe.estado,pe.fecha ,pe.precioTotal,pe.usuarioId, U.nombreUsuario FROM Pedido pe, Usuario U where U.id = pe.usuarioId;	
end; 
$$ LANGUAGE PLPGSQL;

CREATE or replace FUNCTION getPedidoWhitId(_id int) 
RETURNS TABLE (
	id 				int ,
	estado 			bool,
	fecha 			TIMESTAMP ,
	precioTotal		float,
	usuarioId		int,
	nombreUsuario varchar(50)
) AS $$
declare 
	aux TIMESTAMP;
	begin
	if exists(select PE.* from Pedido PE where PE.id = _id)then
		select pe.fecha into aux from Pedido pe where pe.id = _id;
	else
		RAISE 'Error: Pedido no existe';
	end if;
	
	if((Now() -  + (min * interval '5 minute')) < aux)then
		return query SELECT pe.id,TRUE,pe.fecha ,pe.precioTotal,pe.usuarioId, U.nombreUsuario FROM Pedido pe, Usuario U where U.id = pe.usuarioId and pe.id = _id;	
	else
		return query SELECT pe.id,FALSE,pe.fecha ,pe.precioTotal,pe.usuarioId, U.nombreUsuario FROM Pedido pe, Usuario U where U.id = pe.usuarioId and pe.id = _id;
	end if;
	end;
$$ LANGUAGE PLPGSQL;

CREATE FUNCTION getPedidoWhitUserId(_userId int) 
RETURNS TABLE (
	id 				int ,
	estado 			bool,
	fecha 			TIMESTAMP ,
	precioTotal		float,
	usuarioId		int,
	nombreUsuario varchar(50)
) AS $$
DECLARE
	PedidoRow RECORD;
	begin
	if exists (select u.* from Usuario u where u.id = _userId)then
		for PedidoRow in select * from Pedido pe where pe.usuarioId = _userId  
		loop
			if((Now() - (interval '5 minute')) < PedidoRow.fecha)then
				return query SELECT pe.id,TRUE,pe.fecha ,pe.precioTotal,pe.usuarioId, U.nombreUsuario FROM Pedido pe, Usuario U where U.id = _userId and pe.id = PedidoRow.id;	
			else
				return query SELECT pe.id,FALSE,pe.fecha ,pe.precioTotal,pe.usuarioId, U.nombreUsuario FROM Pedido pe, Usuario U where U.id = _userId and pe.id = PedidoRow.id;
			end if;		
		end loop;
	end if;
end;
$$ LANGUAGE PLPGSQL;

CREATE or replace PROCEDURE sp_updatePedido(
	_id 				int,
	_estado 			varchar(50),
	_fecha 			TIMESTAMP,
	_precioTotal		float,
	_usuarioId		int 
)
LANGUAGE PLPGSQL AS $$
BEGIN
	if ((_id IS NULL) OR (COALESCE(TRIM(_estado),'') = '') OR (_fecha IS NULL) OR (_precioTotal IS NULL)
	   OR (_usuarioId IS NULL)) then
		RAISE 'Error: Null parameter';
		
	ELSIF NOT EXISTS(SELECT u.* FROM Usuario u WHERE u.id = _usuarioId) THEN
		RAISE 'Error: usuario doesn''t exists.';
	
	ELSIF NOT EXISTS(SELECT pe.* FROM Pedido pe WHERE pe.id = _id) THEN
		RAISE 'Error:Pedido doesn''t exists.';	
	
	ELSE
		BEGIN
			UPDATE Usuario
			SET 
			estado= _estado,
	 		fecha= _fecha ,
	 		precioTotal = _precioTotal,
			usuarioId = _usuarioId	 
			WHERE id = _id;
			COMMIT;
		END;
	END IF;
END;$$

CREATE or replace PROCEDURE sp_deletePedido( 
	_id INT
)
LANGUAGE PLPGSQL AS $$
BEGIN
	IF NOT EXISTS(SELECT pe.* FROM Pedido pe WHERE pe.id = _id) THEN
		RAISE 'Error: Articulo not exists.';
			
	ELSE
		BEGIN
			DELETE FROM Pedido pe WHERE pe.id = _id;
			COMMIT;
		END;
	END IF;
END;$$
