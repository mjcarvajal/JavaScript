"use strict";

// Fetch (ajax) y peticiones a servicios / apis rest
var divUsuarios = document.querySelector("#usuarios");
var divProfesor = document.querySelector("#profesor");
var divErvin = document.querySelector("#Ervin");

var usuarios = [];
getUsuarios()
    .then(data => data.json())
    .then(data => {
        listadoUsuarios(data);    
        return getInfo();
    })
    .then(data => {
        divProfesor.innerHTML = data;
        return getUserErvin();    
    })
    .then(data => data.json())
    .then(ervin => {
        mostrarErvin(ervin);
    })
    .catch(error => {
        console.log('Error en las peticiones ')
    });

function getUsuarios(){
   return  fetch('https://jsonplaceholder.typicode.com/users');
}

function getUserErvin(){
    return  fetch('https://jsonplaceholder.typicode.com/users/2');
}

function getInfo(){
    var profesor ={
        nombre: 'Pepito',
        apellidos: 'Perez',
        url: 'https://www.google.com/'
    };
    return new Promise((resolve, reject) =>{
        var profesorString = '';
        setTimeout(function(){
            profesorString = JSON.stringify(profesor);
            if (typeof profesorString != 'string' || profesorString == ''){
                return reject('Error');
            }
            return resolve(profesorString); 

        }, 300);       
    });
}

function listadoUsuarios (usuarios){
    usuarios.map((user,i) => {
        let nombre = document.createElement('h2');
        nombre.innerHTML = i+ '. ' + user.name;

        divUsuarios.append(nombre);

        document.querySelector(".loading").style.display = 'none';
    });
}
function mostrarErvin(user){
    let nombre = document.createElement('h2');
    nombre.innerHTML = '. ' + user.name;
    divErvin.append(nombre);
    document.querySelector("#Ervin .loading").style.display = 'none';
}


