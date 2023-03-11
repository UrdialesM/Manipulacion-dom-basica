
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const boton = document.querySelector('#btnCalcular');
const info = document.querySelector('#resultado');
const form = document.querySelector('#formu');

form.addEventListener('submit', botonClick)

function botonClick(event) {
    // console.log({event})
    event.preventDefault();
 const resul = parseInt(input1.value) * parseInt(input2.value);
     info.append(resul);
    
    
}