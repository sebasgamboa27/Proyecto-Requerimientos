--///////////////////////////////CRUD Pedido

CREATE or replace PROCEDURE sp_InsertPedido(
	_estado 			varchar(50),
	_precioTotal		float,
	_usuarioId		int 
)
LANGUAGE PLPGSQL AS $$
BEGIN
	if ((COALESCE(TRIM(_estado),'') = '')  OR (_precioTotal IS NULL)
	   OR (_usuarioId IS NULL)) then
		RAISE 'Error: Null parameter';
	ELSIF NOT EXISTS(SELECT * FROM Usuario WHERE id = _usuarioId ) THEN
		RAISE 'Error: USER doesn''t exists..';
	else
		BEGIN
			INSERT INTO Pedido VALUES
			(_estado ,
			 True,
			 NOW(),
			_precioTotal,
			_usuarioId
			);
			COMMIT;
		END;
	END IF;
END;$$
         
CREATE or replace PROCEDURE sp_selectPedido()
LANGUAGE PLPGSQL AS $$
BEGIN
	SELECT id,
	estado,
	fecha ,
	precioTotal,
	usuarioId FROM Pedido;
END;$$


CREATE FUNCTION getAllPedidos() 
RETURNS TABLE (
	id 				int ,
	estado 			varchar(50),
	fecha 			TIMESTAMP ,
	precioTotal		float,
	usuarioId		int,
	nombreUsuario varchar(50)
) AS $$
	SELECT pe.id,pe.estado,pe.fecha ,pe.precioTotal,pe.usuarioId, U.nombreUsuario FROM Pedido pe, Usuario U where U.id = pe.usuarioId;	
$$ LANGUAGE SQL;

CREATE FUNCTION getPedidoWhitId(_id int) 
RETURNS TABLE (
	id 				int ,
	estado 			varchar(50),
	fecha 			TIMESTAMP ,
	precioTotal		float,
	usuarioId		int,
	nombreUsuario varchar(50)
) AS $$
	SELECT pe.id,pe.estado,pe.fecha ,pe.precioTotal,pe.usuarioId, U.nombreUsuario FROM Pedido pe, Usuario U where U.id = pe.usuarioId and pe.id = _id;	
$$ LANGUAGE SQL;


CREATE FUNCTION getPedidoWhitUserId(_userId int) 
RETURNS TABLE (
	id 				int ,
	estado 			varchar(50),
	fecha 			TIMESTAMP ,
	precioTotal		float,
	usuarioId		int,
	nombreUsuario varchar(50)
) AS $$
	SELECT pe.id,pe.estado,pe.fecha ,pe.precioTotal,pe.usuarioId, U.nombreUsuario FROM Pedido pe, Usuario U where U.id = pe.usuarioId and pe.usuarioId =_userId;
$$ LANGUAGE SQL;

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
		
	ELSIF NOT EXISTS(SELECT * FROM Usuario WHERE id = _usuarioId) THEN
		RAISE 'Error: usuario doesn''t exists.';
	
	ELSIF NOT EXISTS(SELECT * FROM Pedido WHERE id = _id) THEN
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
	IF NOT EXISTS(SELECT * FROM Pedido WHERE id = _id) THEN
		RAISE 'Error: Articulo not exists.';
			
	ELSE
		BEGIN
			DELETE FROM Pedido WHERE id = _id;
			COMMIT;
		END;
	END IF;
END;$$
