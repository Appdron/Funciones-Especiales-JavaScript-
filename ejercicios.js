const array = [1, 2, 3]; 
array.unshift(0); // Añade 0 al inicio 
console.log(array);
const removedElement = array.unshift(); // Elimina el primer elemento (0) y lo devuelve
console.log(array);


const url='/ejercicio.txt';
const fun=function(){
fetch(url)
    .then(respuesta => respuesta.text())
    .then(texto=>{
      //  console.log(texto)
        const textoarray=texto.split(' ');
    //   console.log(textoarray) ;
       
     /*  textoarray.forEach(elemento=>    {
           console.log(elemento);
       });*/
    })
    .catch (error=> {
        // Tab to edit
        console.log('error',error)
    })
}   

fun();

//Ejemplo:
  const objeto1 = { a: 1 };
const objeto2 = { b: 2 };
const combinado = Object.assign({}, objeto1, objeto2);
console.log(combinado);



const farse='Concepto: El método `split()` divide una cadena en un array de subcadenas utilizando un separador especificado. Es útil para procesar y manipular partes específicas de una cadena.';
const palabras=farse.split(' ')
console.log(palabras)
palabras.forEach((item, index,array)=>console.log( index))