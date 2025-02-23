
  const titulo = document.getElementById('titulo');
const concepto = document.getElementById('concepto');
const ejemplo = document.getElementById('ejemplo');
const allbotones = document.getElementById('allbotones');
const codeBox = document.getElementById('code-box'); // Asegúrate de tener este elemento en tu HTML

// Define la URL de tu archivo de texto estático
const ruta = '/datos.json';

function inicializarWindows() {
  document.getElementById('titulo').innerText = 'Funciones Especiales en JavaScript';
  document.getElementById('concepto').innerText = 'Exploración de algunas funciones útiles en JavaScript';

  const ejemplos = ['Ejemplo'];

  const listaEjemplo = document.getElementById('ejemplo');
  listaEjemplo.innerHTML = '';
  ejemplos.forEach(ejemplo => {
    const p = document.createElement('p');
    p.textContent = ejemplo;
    listaEjemplo.appendChild(p);
  });

  animarCodigo();
}

function animarCodigo() {
  codeBox.innerHTML = '';
  const codigo = `function saludo() {
    console.log("¡Hola, mundo!");
    let nombre = 'Gonzalo';
    let apellidos = 'Camero Ordoñez';

    async function ejecutarProceso() {
        console.log("Iniciando...");
        await esperar(1000); // Espera 1 segundo
        console.log("Proceso completado");
    }

    async function efectoMaquinaDeEscribir(texto, elemento, velocidad) {
        for (let i = 0; i < texto.length; i++) {
            elemento.textContent += texto.charAt(i);
            await esperar(velocidad);
        }
    }

    function esperar(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Selecciona el elemento del DOM donde se mostrará el texto
    const elementoSaludo = document.getElementById('saludo');

    // Texto que se mostrará con el efecto de máquina de escribir
    const textoSaludo = "¡Hola, mundo! Mi nombre es " + nombre + " " + apellidos + ".";

    // Inicia la animación de máquina de escribir
    efectoMaquinaDeEscribir(textoSaludo, elementoSaludo, 100);
}

saludo();`;

  let index = 0;

  async function escribirCaracter() {
    if (index < codigo.length) {
      const caracter = codigo[index];
      const caracterResaltado = resaltarCaracteres(caracter); // Aplica el resaltado de sintaxis
      codeBox.innerHTML += caracterResaltado;
      index++;
      setTimeout(escribirCaracter, 10); // Velocidad de escritura (10ms por carácter)
    }
  }

  escribirCaracter();
}

inicializarWindows();
/*
fetch('datos.json')
  .then(response => response.json())
  .then(data => {
    const titulos = data.funciones.map(funcion => funcion.titulo);

    titulos.forEach((item, index) => {
      //console.log(item);
      const boton = document.createElement('button');
      boton.innerHTML = `${index} ${item}`;
      document.getElementById('allbotones').appendChild(boton);
      boton.setAttribute('id', 'botones');

      // Agregar evento de clic para cada botón
      boton.addEventListener('click', function () {
        // Buscar la función correspondiente al título clicado
        const funcionSeleccionada = data.funciones.find(funcion => funcion.titulo === item);

        // Mostrar el título, concepto y ejemplo en los espacios correspondientes
        document.getElementById('titulo').innerHTML = `Tipo de función <span id='span_titulo'>${funcionSeleccionada.titulo}</span>`;
        document.getElementById('concepto').innerHTML = `Concepto: <span id='span_concepto'>${funcionSeleccionada.concepto}</span>`;
        document.getElementById('ejemplo').innerHTML = `Ejemplo:<br><span id='span_ejemplo'>${resaltarCaracteres(funcionSeleccionada.ejemplo)}</span>`;
      });
    });
  })
  .catch(error => console.error('Error al cargar la base de datos:', error));
*/



// Función para mostrar los detalles de la función
function mostrarDetalles(funcionSeleccionada) {
  document.getElementById('titulo').innerHTML = `Tipo de función: <span id='span_titulo'>${funcionSeleccionada.titulo}</span>`;
  document.getElementById('concepto').innerHTML = `Concepto: <span id='span_concepto'>${funcionSeleccionada.concepto}</span>`;
  document.getElementById('ejemplo').innerHTML = `Ejemplo:<br><span id='span_ejemplo'>${resaltarCaracteres(funcionSeleccionada.ejemplo)}</span>`;
}

// Función para filtrar y mostrar los detalles mientras escribes
function filtrarFunciones(filtro, funciones) {
  const filtroLower = filtro.toLowerCase();
  // Buscar la función cuyo título coincida con el filtro
  const funcionSeleccionada = funciones.find(funcion => funcion.titulo.toLowerCase().includes(filtroLower));

  // Si encontramos la función, mostrar sus detalles, sino limpiar la sección
  if (funcionSeleccionada) {
    mostrarDetalles(funcionSeleccionada);
  } else {
    // Limpiar los detalles si no se encuentra la función
    document.getElementById('titulo').innerHTML = 'Tipo de función: ';
    document.getElementById('concepto').innerHTML = 'Concepto: ';
    document.getElementById('ejemplo').innerHTML = 'Ejemplo: ';
  }
}

fetch('datos.json')
  .then(response => response.json())
  .then(data => {
    const titulos = data.funciones.map(funcion => funcion.titulo);

    // Mostrar los botones de búsqueda manual
    titulos.forEach((item, index) => {
      const boton = document.createElement('button');
      boton.innerHTML = `${index} ${item}`;
      document.getElementById('allbotones').appendChild(boton);
      boton.setAttribute('id', 'botones');

      // Agregar evento de clic para cada botón
      boton.addEventListener('click', function () {
        const funcionSeleccionada = data.funciones.find(funcion => funcion.titulo === item);

        // Mostrar el título, concepto y ejemplo en los espacios correspondientes
        document.getElementById('titulo').innerHTML = `Tipo de función: <span id='span_titulo'>${funcionSeleccionada.titulo}</span>`;
        document.getElementById('concepto').innerHTML = `Concepto: <span id='span_concepto'>${funcionSeleccionada.concepto}</span>`;
        document.getElementById('ejemplo').innerHTML = `Ejemplo:<br><span id='span_ejemplo'>${resaltarCaracteres(funcionSeleccionada.ejemplo)}</span>`;
      });
    });

    // Evento para el filtro de búsqueda (se ejecuta mientras escribes)
    document.getElementById('filtro').addEventListener('input', function() {
      filtrarFunciones(this.value, data.funciones); // Llamamos a la función de filtrado con los datos cargados
    });
  })
  .catch(error => console.error('Error al cargar la base de datos:', error));

let indiceSeleccionado = 0; // Guarda el índice del botón seleccionado

function moverEnMenu(direccion) {
  const botones = Array.from(document.getElementById('allbotones').children);

  if (botones.length === 0) return; // Evita errores si no hay botones

  // Ajustar índice dentro de los límites
  indiceSeleccionado = (indiceSeleccionado + direccion + botones.length) % botones.length;

  // Simula clic en el nuevo botón
  botones[indiceSeleccionado].focus();
  botones[indiceSeleccionado].click();
}
