fetch('js_funciones.json')
  .then(response => response.json())
  .then(data => {
    // Verificar que los datos están siendo cargados correctamente
    console.log("Datos cargados:", data);

    const contenedorCategorias = document.getElementById('otros_funciones_categorizados');

    // Verificar si el contenedor existe
    if (!contenedorCategorias) {
      console.error('El contenedor no existe en el DOM');
      return;
    }

    // Agrupar funciones por categoría
    const categorias = data.funciones.reduce((acc, funcion) => {
      if (!acc[funcion.categoria]) {
        acc[funcion.categoria] = [];
      }
      acc[funcion.categoria].push(funcion);
      return acc;
    }, {});

    // Iterar sobre las categorías y crear los botones
    Object.keys(categorias).forEach(categoria => {
      // Crear un título para cada categoría
      const tituloCategoria = document.createElement('h3');
      tituloCategoria.innerHTML = categoria;
      contenedorCategorias.appendChild(tituloCategoria);

      // Crear los botones para cada función dentro de la categoría
      categorias[categoria].forEach((funcion, index) => {
        const boton = document.createElement('button');
        boton.innerHTML = `${index + 1} - ${funcion.titulo}`;
        boton.setAttribute('id', `boton_${categoria}_${index}`);
        contenedorCategorias.appendChild(boton);

        // Agregar el evento de clic para cada botón
        boton.addEventListener('click', function () {
          // Mostrar la información de la función correspondiente
          document.getElementById('titulo').innerHTML = `Tipo de función <span id='span_titulo'>${funcion.titulo}</span>`;
          document.getElementById('concepto').innerHTML = `Concepto: <span id='span_concepto'>${funcion.concepto}</span>`;
          document.getElementById('ejemplo').innerHTML = `Ejemplo:<br><span id='span_ejemplo'>${resaltarCaracteres(funcion.ejemplo)}</span>`;
        });
      });
    });
  })
  .catch(error => {
    console.error('Error al cargar los datos:', error);
  });




