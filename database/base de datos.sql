create database if not exists registro_familiar;

use registro_familiar;

create table familia (
    id int auto_increment unique,
    nombres varchar(50),
    apellidos varchar(50),
    edad tinyint,
    parentesco varchar (50),
    primary key (id)
);
