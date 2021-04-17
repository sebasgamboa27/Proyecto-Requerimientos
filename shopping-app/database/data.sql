INSERT INTO Sucursal (nombre) VALUES
('San José'), ('Alajuela'), ('Heredia'), ('Limon'), ('Guanacaste'), ('Puntarenas'),('Cartago');

insert into Categoria (nombre)  values ('Alimentos'),('Bebidas'),('Frutas'),('Electrodomesticos'),('Higiene'),('Hogar'),('Verduras'),('Salud');

Insert into Articulo (nombre,descripccion,precio,cantidad,categoriaId,sucursalId,foto) values 
							('Atun','Rico Atun con vegetales',800,10,1,1,'https://www.google.com/search?q=atun+con+vegetales&rlz=1C1CHBD_esCR844CR844&sxsrf=ALeKk02l4RQ2vghznqwD1QrdwIG-3RYXyQ:1618676997878&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiJqtvb2YXwAhVgRTABHQNlBPYQ_AUoAXoECAEQAw&biw=1422&bih=684#imgrc=3cLTBBef3nbGLM'),
							('Mesita','Mesita de sala',15000,3,6,2,'https://www.google.com/search?q=mesa+para+sala+de+estar&tbm=isch&ved=2ahUKEwimysng2oXwAhU9azABHccvAv8Q2-cCegQIABAA&oq=mesa+para+sala+de+es&gs_lcp=CgNpbWcQARgAMgIIADICCAAyBggAEAgQHjIECAAQHjIECAAQHjIECAAQHjIECAAQHjIECAAQHjIGCAAQCBAeMgYIABAIEB46BAgjECc6BggAEAUQHlDNPljNWGDXXWgBcAB4AIABmAGIAb4OkgEEMC4xNpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=HA57YKbMHr3WwbkPx9-I-A8&bih=684&biw=1422&rlz=1C1CHBD_esCR844CR844#imgrc=SdXCa65hZ5lDRM'),
							('Aguacate','Delicioso Aguacate',600,15,2,2,'https://www.google.com/search?q=aguacate&rlz=1C1CHBD_esCR844CR844&sxsrf=ALeKk02H79ZHDoyhZ-nT33leEiSpJBge4A:1618677325519&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiX9_j32oXwAhV4VTABHa-wBx4Q_AUoAXoECAEQAw&biw=1422&bih=684#imgrc=NQa1l9Qy-DytnM'),
							('Labial','Labial Rojo',1500,3,5,2,'https://www.google.com/search?q=labial&rlz=1C1CHBD_esCR844CR844&sxsrf=ALeKk01SSPsywdLqlw-D6EmjcCyzKnImfg:1618677349184&tbm=isch&source=iu&ictx=1&fir=AYwXkP73hw1u5M%252C6y2sEgX3yL6LdM%252C_&vet=1&usg=AI4_-kQhplNCtlNd2cTI-x5o234rMxsX1Q&sa=X&ved=2ahUKEwiys52D24XwAhVPTjABHZrFBPsQ9QF6BAgJEAE&biw=1422&bih=684#imgrc=AYwXkP73hw1u5M');
							
insert into TipoUsuario(nombre)values('Admin'), ('Empleado'),('Usuario')							

insert into Usuario (nombre,apellido ,contrasena,correo ,direccionFisica,nombreUsuario,cedula,tipoId)values
	('Juan','Perez','12345678','Juan@gmai.com','Alajuela','Juanito',204630985,3),
	('Felipe','Sanchez','12345678','Felo@gmai.com','Alajuela','Felo',205630785,3),
	('Ignacio','Barela','12345678','Igna@gmai.com','Alajuela','Igna',204530775,3),
	('Pedro','Juarez','12345678','Pedro@gmai.com','Alajuela','Pedrito',202130095,2),
	('Pablo','Vasquez','12345678','Palo@gmai.com','Alajuela','Pablito',206930825,1);

insert into pedido (estado ,fecha,precioTotal,usuarioId) values 
		(true,NOW(),15000,1),
		(true, NOW(),2100,2),
		(true, NOW(),2700,3);
		
insert into ArticuloXPedido(pedidoId,ArticuloId) values
		(1,2),
		(2,4),
		(2,3),
		(3,3),
		(3,3),
		(3,4);
