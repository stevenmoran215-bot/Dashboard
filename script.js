// Controla el menú lateral: se puede achicar en escritorio
// y en pantallas chicas se abre/cierra como panel superpuesto.

const app = document.querySelector('.app');
const btnContraer = document.getElementById('btnContraer');
const btnMenu = document.getElementById('btnMenu');
const fondoOscuro = document.getElementById('fondoOscuro');

function esMovil() {
  return window.matchMedia('(max-width: 680px)').matches;
}

btnContraer.addEventListener('click', function () {
  if (esMovil()) {
    cerrarMenuMovil();
    return;
  }
  const estaMini = app.dataset.sidebar === 'mini';
  app.dataset.sidebar = estaMini ? 'abierto' : 'mini';
  btnContraer.setAttribute('aria-expanded', String(estaMini));
});

btnMenu.addEventListener('click', function () {
  const abriendo = app.dataset.sidebar !== 'abierto';
  app.dataset.sidebar = abriendo ? 'abierto' : 'mini';
  btnMenu.setAttribute('aria-expanded', String(abriendo));
});

fondoOscuro.addEventListener('click', cerrarMenuMovil);

document.addEventListener('keydown', function (evento) {
  if (evento.key === 'Escape' && esMovil() && app.dataset.sidebar === 'abierto') {
    cerrarMenuMovil();
  }
});

function cerrarMenuMovil() {
  app.dataset.sidebar = 'mini';
  btnMenu.setAttribute('aria-expanded', 'false');
}

if (esMovil()) {
  app.dataset.sidebar = 'mini';
}

// Marcar tareas como completadas desde la tabla ------------------------
// Cada fila tiene un checkbox. Al marcarlo o desmarcarlo, le agregamos
// (o quitamos) la clase "fila-completada" a la fila (<tr>) para que
// se vea tachada y atenuada. Es puro CSS + un cambio de clase con JS.
const checks = document.querySelectorAll('.check input[type="checkbox"]');

checks.forEach(function (casilla) {
  const fila = casilla.closest('tr');

  // Si la tarea del HTML ya viene marcada como completada, arrancamos
  // la fila con el estilo correspondiente.
  if (casilla.checked) {
    fila.classList.add('fila-completada');
  }

  casilla.addEventListener('change', function () {
    fila.classList.toggle('fila-completada', casilla.checked);
  });
});
