-Servidor WEB
--hola


para levantar servicio instalar axios, express, hbs, lodash
para desinstalar npm unistall axios

////127.0.0 ip localhost async convierte funcion en promesa

para el index, otro metodo para conseguir datos
const { findAll } = require('./service/pacienteService')  

findAll().then((datos) => {
    console.log(datos);
    
})
 
algo para el index
 const { update } = require("lodash");
const { findById, insert, deleteById } = require("./service/pacienteService");

findById().then((datos) => {
    console.log(datos);
    });

insert().then((datos) => {
    console.log(datos);
    }); 
        
update().then((datos) => {
    console.log(datos);
    });

deleteById().then((datos) => {
    console.log(datos);
    });

el router llamara al controlador, mantener abierto el controller para que router reconozca a este y permite definir la ruta

luego de las rutas definidas

levantar el servidor(se puede hacer directamente del index), configurarlo y establecer html o hbs
se crea capa models - server.js

listen=escucha cambia nombre
