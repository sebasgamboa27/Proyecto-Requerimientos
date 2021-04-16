create table Sucursal (
	id      SERIAL PRIMARY KEY,
	nombre 	varchar(50)
);
CREATE TABLE Categoria (id      SERIAL PRIMARY KEY,
	nombre 	varchar(50)
);

CREATE TABLE Articulo(
	id      SERIAL PRIMARY KEY,
	nombre	varchar(50),
	descripccion	varchar(50),
	precio	float,
	cantidad	int,
	categoriaId	int references Categoria,
	sucursalId	int references Sucursal
);

CREATE TABLE TipoUsuario(
	id      SERIAL PRIMARY KEY,
	nombre varchar(50)
);

Create Table Usuario(
	id 					int primary key,
	nombre 				varchar(50),
	apellido 			varchar(50),
	contrasena 			varchar(50),
	correo 				varchar(50),
	direccionFisica 	varchar(50),
	nombreUsuario		varchar(50),
	cedula				int,
	tipoId				int references TipoUsuario	
	
);

CREATE TABLE Pedido(
	id 				serial primary key,
	estado 			varchar(50),
	fecha 			TIMESTAMP NOT NULL,
	precioTotal		float,
	usuarioId		int references Usuario	
);

CREATE TABLE ArticuloXPedido(
	pedidoId int references Pedido,
	ArticuloId int references Articulo
);
