INSERT INTO Sucursal (nombre) VALUES
('San José'), ('Alajuela'), ('Heredia'), ('Limon'), ('Guanacaste'), ('Puntarenas'),('Cartago');

insert into Categoria (nombre)  values ('Alimentos'),('Bebidas'),('Frutas'),('Electrodomesticos'),('Higiene'),('Hogar');

Insert into Articulo (nombre,descripccion,precio,cantidad,categoriaId,sucursalId) values 
							('Atun','Rico Atun con vegetales',800,10,1,1),
							('Mesita','Mesita de sala',15000,3,6,2),
							('Aguacate','Delicioso Aguacate',600,15,1,2),
							('Labial','Labial Rojo',1500,3,5,2);
							
insert into TipoUsuario(nombre)values('Admin'), ('Empleado'),('Usuario')							

insert into Usuario (nombre,apellido ,contrasena,correo ,direccionFisica,nombreUsuario,cedula,tipoId)values
	('Juan','Perez','12345678','Juan@gmai.com','Alajuela','Juanito',204630985,3),
	('Felipe','Sanchez','12345678','Felo@gmai.com','Alajuela','Felo',205630785,3),
	('Ignacio','Barela','12345678','Igna@gmai.com','Alajuela','Igna',204530775,3),
	('Pedro','Juarez','12345678','Pedro@gmai.com','Alajuela','Pedrito',202130095,2),
	('Pablo','Vasquez','12345678','Palo@gmai.com','Alajuela','Pablito',206930825,1);

insert into pedido (estado ,fecha,precioTotal,usuarioId) values 
		(true,NOW(),12000,1),
		(true, NOW(),11300,1);
		
insert into ArticuloXPedido(pedidoId,ArticuloId) values
		(1,2),
		(2,4),
		(2,3);