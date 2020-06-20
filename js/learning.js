/*var Name = "Yersson";
var LastName = "Chipana";
document.getElementById("title").innerHTML = Name + " " + LastName;*/

/*function sum(number){
    return number + number;
}

document.getElementById("title").innerHTML = sum(5);*/

/*function Change(){
    document.getElementById("title").innerHTML = "Hola Mundo";
    document.getElementById("title").classList.add ("bt");
}*/

/*function animation(){
    document.getElementById("title").classList.add ("bt");
    
}

document.getElementById("button").onclick = function(){
    animation();
}*/

/*var fullName = ["yersson", "angel", "chipana", "mollo"];
fullName.push('carlos');
fullName.pop();
fullName.unshift('carlos');
fullName.shift();

var posName = fullName.indexOf('angel');
var posLastname = fullName.indexOf('mollo');

var pos1 = 0;
var pos2 = 2;

var name = fullName.slice(pos1, posName);
var lastname = fullName.slice(pos2,posLastname);

console.log(name);*/
/*document.getElementById("button").onclick = function (){
    var color = document.getElementById("color").value;

    if(color=="azul"){
        document.getElementById("title").classList.add("bt");
    }
}*/

/*var colors = ["red","orange","green"];

for (let color of colors){
    document.getElementById("title").innerHTML = color;
}*/

/*var headers = document.querySelectorAll("h1");

for (let header of headers){
    header.classList.add("bt");
}*/
/*document.getElementById("button").onclick = function (){
   
        var number = document.getElementById("data").value;
         var iter=0;
        
        while (iter <= number){
            document.getElementById("result").innerHTML += "hola" + " " + iter + "</br>";
            iter++;
        }
 
}*/

/*function get (){
    function People(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    var nameGet= document.getElementById("name").value;
    var yearsGet = document.getElementById("years").value;

    newUser = new People(nameGet, yearsGet);
    add();
}

var dataBase = [];

function add(){
    dataBase.push(newUser);
    document.getElementById("tab").innerHTML += '<tbody><td>' + newUser.nombre + '</td><td>' + newUser.edad + '</td></td></tbody>';
}*/

/*let click = document.getElementById("button");

click.addEventListener('mouseover', function (){
    document.getElementById("msg").innerHTML = "You're over the mouse";
})

click.addEventListener('mouseout', function(){
    document.getElementById('msg').innerHTML = "You're out the mouse";
})*/

/*let nombre = "yersson";
let years = 15;



let user = (nombre, years) => {
    let greeting = document.getElementById("title");
    return greeting.innerHTML = nombre + ' ' + years;
}

user(nombre,years);*/

/*let numbers = [1 , 5 , 8];
let doubles = numbers.map(number => number * 2);

console.log(numbers);
console.log(doubles);*/

/*var message = document.querySelector("#mensaje")

function get(){
    fetch('text/texto.txt')
    .then(resp => resp.text())
    .then(asd => {
        console.log(asd)
    })
}*/


/*let resultado = (sum1, sum2) => sum1 + sum2;

console.log(resultado(1, 5));*/

// const saludar = nombre => alert('Hola' + ' ' + nombre);

// const saludar2 = new Promise((resolve, reject) => {
//     let nombre = prompt("Ingrese su nombre");
//     resolve(nombre);
// })

// saludar2
//     .then(nombre => alert('Hola' + ' ' + nombre));

// class Pokemon{
//     constructor(name, type, attack){
//         this.name = name;
//         this.type = type;
//         this.attack = attack;
//     }

//     movement(){
//         return `${this.name} is using ${this.attack}`;
//     }
// }

// class Digimon extends Pokemon{
//     constructor(name, type, attack, tamer){
//         super(name, type, attack);
//         this.tamer = tamer;
//     }
// }

// const pikachu = new Pokemon("pikachu", "electric", "spark");
// console.log(pikachu.movement());

// class Calculadora{
//     constructor(num1, num2){
//         this.num1 = num1;
//         this.num2 = num2;
//     }

//     suma(num1, num2){
//         let resultado = num1 + num2;
//         return resultado;
//     }

//     resta(num1, num2){
//         let resultado2 = num1 - num2;
//         return resultado2;
//     }
//     mostrar(num3){
//         console.log(this.num3);
//     }
// }

// let num1 = 10;
// let num2 = 5;
// let num3 = 60;
// const test = new Calculadora(num1, num2);

// console.log(test.mostrar(num3));

// const pokemon = document.querySelector('#pkm')
// function renderPkm(imagen){
//     pokemon.setAttribute('src', imagen)
// }

// fetch('https://pokeapi.co/api/v2/pokemon/25')
// .then(resp => resp.json())
// .then(data => renderPkm(data.sprites.front_default))

// (function (name){
//     console.log(`Hola ${name}`)
// })('angel');

// let nombre = localStorage.setItem('name','yersson');

// let contenedor = document.querySelector("#palette");
// let color;

// botonRojo = document.querySelector("#red");
// botonRojo.addEventListener('click',() => { 
//     localStorage.setItem('rojo','r');
//     return color = "r";
// });
// botonAzul = document.querySelector("#blue");
// botonAzul.addEventListener('click',() => { 
//     localStorage.setItem('blue','b');
//     return color = "b";
// });
// botonVerde = document.querySelector("#green");
// botonVerde.addEventListener('click',() => { 
//     localStorage.setItem('green','g');
//     return color = "g";
// });

// switch (color){
//     case 'r':
        
//         contenedor.classList.add("btnred");
//         break;
//     case 'b': 
//         contenedor.classList.add("btnblue");
//         break;
//     case 'v':
//         contenedor.classList.add("btngreen");
//         break;
//     default:
//         break;
// }

// const botones = document.querySelector("#botones");
// const mostrarBtn = document.querySelector("#mosbtn");
// const body = document.querySelector('body');

// (() => {
//     botones.addEventListener('click', (e) => {
//         e.preventDefault();
//         mostrarBtn.innerHTML = `
//         <button id="red" class="btn btn-danger" >Boton rojo</button>
//         <button id="blue" class="btn btn-primary">Boton azul</button>
//         <button id="green" class="btn btn-success">Boton verde</button>`;
//     });

//     mostrarBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         let color = e.target.classList[1];
//         switch(color){
//             case 'btn-danger':
//                 body.className = 'btn-danger';
//                 localStorage.setItem('color', 'btn-danger');
//                 break;
//             case 'btn-primary':
//                 body.className = 'btn-primary';
//                 localStorage.setItem('color', 'btn-primary');
//                 break;
//             case 'btn-success':
//                 body.className = 'btn-success';
//                 localStorage.setItem('color', 'btn-success');
//                 break;
//     }
//     })

//     const colour = localStorage.getItem('color');
//     if(colour !== null){
//         body.className = colour;
//     }

// })();

const form = document.querySelector('#formulario');
const listActivitys = document.querySelector('#listActivity');

let arrayActivity = [];

const createItem = (activity) => {
    let item = {
        activity: activity,
        state: false
    }
    arrayActivity.push(item);
    return item;
}

const saveLS = () => {
    localStorage.setItem('routine', JSON.stringify(arrayActivity));
    showLS();
}

const showLS = () => {
    listActivitys.innerHTML = '';
    arrayActivity = JSON.parse(localStorage.getItem('routine'));
    if(arrayActivity === null){
        arrayActivity = [];
    }else{
        arrayActivity.forEach(element => {
            if(element.state){
                listActivitys.innerHTML += `<div class="alert alert-success" role="alert"><i class="material-icons float-left mr-2">accessibility</i><b>${ element.activity }</b> - ${ element.state }<span class="float-right"><span class="material-icons">done</span><span class="material-icons">delete</span></span></div>`

            }else{
                listActivitys.innerHTML += `<div class="alert alert-danger" role="alert"><i class="material-icons float-left mr-2">accessibility</i><b>${ element.activity }</b> - ${ element.state }<span class="float-right"><span class="material-icons">done</span><span class="material-icons">delete</span></span></div>`

            }
        });
    }
}

const deleteLs = (activity) => {
    let indexArray;
    arrayActivity.forEach((element, index) => {
        if(element.activity === activity){
            indexArray = index;
        }
    });
    arrayActivity.splice(indexArray, 1);
    saveLS();
}

const editLs = (activity) => {
    let indexArray = arrayActivity.findIndex((element) => element.activity === activity);
    console.log(indexArray);
    arrayActivity[indexArray].state = true;
    saveLS();
    
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let activityUi = document.querySelector('#activity').value;
    createItem(activityUi);
    saveLS();
    form.reset();
});

document.addEventListener('DOMContentLoaded', showLS);

listActivitys.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.innerHTML === 'done' || 'delete'){
        let text = e.path[2].childNodes[1].innerHTML;
        if(e.target.innerHTML === 'delete'){
            deleteLs(text);
        }
        if(e.target.innerHTML === 'done'){
            editLs(text);
        }
    }
})