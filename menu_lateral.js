const app = document.getElementById('app');
const lateral = document.getElementById('lateral');
const principal = document.getElementById('principal');
const code_box =document.querySelector('.code-box');



const CLICKEAR = (variable) => {
  code_box.style.display = 'none';
  const evento = variable.target;
  switch (evento.id) {
    case 'titulo':
      lateral.classList.remove('show');
      break;
    case 'concepto':
      lateral.classList.remove('show');
      break;
    case 'ejemplo':
      lateral.classList.remove('show');
      break;
    case 'h3':
      lateral.classList.remove('show');
      //  variable.stopPropagation();
      break;
    case 'span_titulo':
      lateral.classList.remove('show');
      break;
    case 'span_concepto':
      lateral.classList.remove('show');
      break;
    case 'span_ejemplo':
      lateral.classList.remove('show');
      //  variable.stopPropagation();
      break;
    case 'botones':
      lateral.classList.remove('show');
      break;
    case 'pantalla':
      lateral.classList.remove('show');
      break;
    case 'button_left':
      moverEnMenu(-1, botones);
      // recorrer al anterior boton de mi allbotones
      break;
    case 'button_right':
      moverEnMenu(1, botones);
      // recorrer al siguiente boton de mi allbotones
      break;
    default:
      if (evento.id) {
        console.log('El Evento dispara Id: ' + evento.id)
      }
      else if (evento.className) {
        console.log('El Evento dispara Clase: ' + evento.className)
      }
      else if (evento.tagName) {
        console.log('El Evento dispara TagName: ' + evento.tagName)
        
      }
      else {
        console.log('otra accion')
      }
      
      // console.log('clickeado en '+evento.tagName)
  }
}
principal.addEventListener('click', (e) => CLICKEAR(e));



app.addEventListener('click', () => {
  lateral.classList.toggle('show');
});