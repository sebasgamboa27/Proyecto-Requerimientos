create table Categoria
(
    ID     int identity
        constraint Categoria_pk
            primary key nonclustered,
    Nombre nvarchar(50)
)
go

create unique index Categoria_ID_uindex
    on Categoria (ID)
go

create table Sucursal
(
    ID     int identity
        constraint Sucursal_pk
            primary key nonclustered,
    Nombre nvarchar(50) not null
)
go

create table Articulo
(
    ID          int identity
        constraint Articulo_pk
            primary key nonclustered,
    Nombre      nvarchar(50),
    Descripcion nvarchar(50),
    Precio      float,
    Cantidad    int,
    CategoriaID int not null
        constraint Articulo_Categoria_ID_fk
            references Categoria,
    SucursalID  int not null
        constraint Articulo_Sucursal_ID_fk
            references Sucursal
)
go

create unique index Articulo_ID_uindex
    on Articulo (ID)
go

create unique index Sucursal_ID_uindex
    on Sucursal (ID)
go

create table TipoUsuario
(
    ID     int identity
        constraint TipoUsuario_pk
            primary key nonclustered,
    Nombre nvarchar(50) not null
)
go

create unique index TipoUsuario_ID_uindex
    on TipoUsuario (ID)
go

create table Usuario
(
    ID              int identity
        constraint Usuario_pk
            primary key nonclustered,
    Nombre          nvarchar(50),
    Apellido        nvarchar(50),
    Contraseña      nvarchar(50),
    Correo          nvarchar(50),
    DireccionFisica nvarchar(max),
    NombreDeUsuario nvarchar(50),
    Cedula          int,
    Tipo            int not null
        constraint Usuario_TipoUsuario_ID_fk
            references TipoUsuario
)
go

create table Pedido
(
    ID          int identity
        constraint Pedido_pk
            primary key nonclustered,
    Estado      nvarchar(50) default 'En Proceso',
    Fecha       date         default getdate(),
    PrecioTotal float,
    UsuarioID   int not null
        constraint Pedido_Usuario_ID_fk
            references Usuario
)
go

create table ArticuloxPedido
(
    ArticuloID int not null
        constraint ArticuloxPedido_Articulo_ID_fk
            references Articulo,
    PedidoID   int not null
        constraint ArticuloxPedido_pk
            primary key nonclustered
        constraint ArticuloxPedido_Pedido_ID_fk
            references Pedido
)
go

create unique index Pedido_ID_uindex
    on Pedido (ID)
go

create unique index Usuario_ID_uindex
    on Usuario (ID)
go

