import {Sistema} from './sistema.js';
import {Menu} from './menu.js';
import {Reserva} from './reserva.js';

window.addEventListener('load', init);

// eslint-disable-next-line new-cap
const sis = new Sistema();

function init() {
  const box1 = document.getElementById('idOption1');
  const box2 = document.getElementById('idOption2');
  const box3 = document.getElementById('idOption3');
  const checkBoxes = [box1, box2, box3];

  document.getElementById('idAmount')
      .addEventListener('change', calculatePrice);
  checkBoxes.forEach( (c) => c.addEventListener('change', calculatePrice) );

  document.getElementById('idReservation').addEventListener('click', reserve);
  document.getElementById('idPay').addEventListener('click', pagar);
  load();
  action();
}

function pagar() {
  if (document.getElementById('idTablePay').innerHTML !== '') {
    // Crear el modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'modal';

    // Crear el contenido del modal
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const heading = document.createElement('h2');
    heading.textContent = 'Pago en progreso';

    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    const progress = document.createElement('div');
    progress.className = 'progress';
    progressBar.appendChild(progress);

    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Pago exitoso!';

    modalContent.appendChild(heading);
    modalContent.appendChild(progressBar);
    modalContent.appendChild(successMessage);

    // Agregar el contenido al modal
    modal.appendChild(modalContent);

    // Agregar el modal al documento
    document.body.appendChild(modal);

    // Mostrar el modal
    modal.style.display = 'block';

    // Animación de entrada del modal
    modalContent.style.transform = 'translateY(-50%) scale(0.8)';
    modalContent.style.opacity = 0;

    setTimeout(function() {
      modalContent.style.transform = 'translateY(-50%) scale(1)';
      modalContent.style.opacity = 1;
    }, 100);

    // Cerrar el modal después de 2 segundos
    setTimeout(function() {
      successMessage.style.display = 'block';
      progress.style.width = '100%';

      setTimeout(function() {
        modal.style.display = 'none';
        document.body.removeChild(modal);
      }, 2000);
    }, 2000);

    // Verificar si es una pantalla móvil y centrar el modal
    if (window.innerWidth <= 767) {
      modalContent.style.position = 'fixed';
      modalContent.style.top = '45%';
      modalContent.style.left = '25%';
      modalContent.style.transform = 'translate(-50%, -50%)';
    }


    document.getElementById('idTablePay').innerHTML = '';
    document.getElementById('idMonto').innerHTML = '';
  }
}


function loadTable() {
  let tot = 0;
  const table = document.getElementById('idTablePay');
  table.innerHTML = '';
  const data = sis.getReserva();
  if (data.length != 0) {
    const cabezal = table.createTHead();
    const row = cabezal.insertRow();
    const cell1 = row.insertCell();
    cell1.innerHTML = 'Fecha';
    const cell2 = row.insertCell();
    cell2.innerHTML = 'Usuario';
    const cell3 = row.insertCell();
    cell3.innerHTML = 'Precio';
    const cell4 = row.insertCell();
    cell4.innerHTML = 'Descripción';

    for (const elem of data) {
      const r = table.insertRow();
      const c1 = r.insertCell();
      c1.innerHTML = elem.toStringDate();
      const c2 = r.insertCell();
      c2.innerHTML = elem.toStringUser();
      const c3 = r.insertCell();
      c3.innerHTML = '$' + elem.toStringPrice();
      const c4 = r.insertCell();
      c4.innerHTML = elem.toStringDesc();
      tot += elem.toStringPrice();
    }
  }
  document.getElementById('idMonto').innerHTML = '$' +tot;
}

function reserve() {
  if (document.getElementById('idPrice').innerHTML != 0 &&
            document.getElementById('idMain').innerHTML != '') {
    const fecha = new Date();
    let desc = '';
    const total = parseInt(document.getElementById('idPrice')
        .innerHTML.substring(1));
    if (document.getElementById('idOption1').checked) {
      desc += document.getElementById('idMain').innerHTML + ', ';
    }
    if (document.getElementById('idOption2').checked) {
      desc += document.getElementById('idSecondary').innerHTML + ', ';
    }
    if (document.getElementById('idOption3').checked) {
      desc += document.getElementById('idDessert').innerHTML;
    }
    sis.addReserva(
        new Reserva(fecha.toLocaleString(), 'Felipe Gonzalez', total, desc),
    );
    loadTable();
    clear();
  }
}

function action() {
  for (let i = 1; i <= 30; i++) {
    document.getElementById('idDay' + i)?.addEventListener('click', function() {
      clear();
    });
    if (
      i !== 1 &&
      i !== 7 &&
      i !== 8 &&
      i !== 14 &&
      i !== 15 &&
      i !== 21 &&
      i !== 22 &&
      i !== 28 &&
      i !== 29
    ) {
      const id = 'idDay' + i;
      document.getElementById(id).addEventListener('click', function() {
        menu(id);
      });
    } else {
      clear();
    }
  }
}

// función que carga los menús para cada día del mes específico
function load() {
  loadMenu2();
  loadMenu3();
  loadMenu4();
  loadMenu5();
  loadMenu6();
  loadMenu9();
  loadMenu10();
  loadMenu11();
  loadMenu12();
  loadMenu13();
  loadMenu16();
  loadMenu17();
  loadMenu18();
  loadMenu19();
  loadMenu20();
  loadMenu23();
  loadMenu24();
  loadMenu25();
  loadMenu26();
  loadMenu27();
  loadMenu30();
}

function clear() {
  document.getElementById('idOption1').checked = false;
  document.getElementById('idOption2').checked = false;
  document.getElementById('idOption3').checked = false;
  document.getElementById('idPrice').innerHTML = 0;
  document.getElementById('idAmount').value = 0;
  document.getElementById('idMain').innerHTML = '';
  document.getElementById('idSecondary').innerHTML = '';
  document.getElementById('idDessert').innerHTML = '';
}

function menu(id) {
  const dayButton = document.getElementById(id);
  const day = parseInt(dayButton.innerHTML);
  for (const elem of sis.getMenu()) {
    const d = parseInt(elem.Day);
    if (day === d) {
      document.getElementById('idMain').innerHTML = elem.toStringPrDish();
      document.getElementById('idSecondary').innerHTML = elem.toStringAltDish();
      document.getElementById('idDessert').innerHTML = elem.toStringDess();
    }
  }
}

function calculatePrice() {
  let total = 0;
  let precio = 0;
  const box1 = document.getElementById('idOption1');
  const box2 = document.getElementById('idOption2');
  const box3 = document.getElementById('idOption3');
  const cant = document.getElementById('idAmount').value;

  if (!box1.checked && !box2.checked && !box3.checked) {
    document.getElementById('idPrice').innerHTML = 0;
  }

  if (box1.checked) {
    precio += 200;
  }
  if (box2.checked) {
    precio += 200;
  }
  if (box3.checked) {
    precio += 100;
  }
  total = precio * cant;
  document.getElementById('idPrice').innerHTML = '$'+ total;
}

function loadMenu2() {
  const prDish = 'Milanesa de Carne';
  const altDish = 'Ensalada de pollo';
  const dess = 'Ensalada de Frutas';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(2, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu3() {
  const prDish = 'Espaguetti';
  const altDish = 'Tarta de puerro';
  const dess = 'Brownie';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(3, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu4() {
  const prDish = 'Nuggets de Pollo';
  const altDish = 'Sopa de verduras';
  const dess = 'Fruta picada';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(4, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu5() {
  const prDish = 'Pescado';
  const altDish = 'Arroz con verduras';
  const dess = 'helado';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(5, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu6() {
  const prDish = 'Ravioles de Ricotta';
  const altDish = 'Bocatta de jamón y queso';
  const dess = 'alfajor';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(6, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu9() {
  const prDish = 'Lasagna';
  const altDish = 'croquetas de jamón y queso';
  const dess = 'gelatina';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(9, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu10() {
  const prDish = 'Empanadas de carne';
  const altDish = 'Tarta Capresse';
  const dess = 'crema de vainilla';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(10, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu11() {
  const prDish = 'Hamburguesa';
  const altDish = 'Milanesa de Pescado';
  const dess = 'gelatina';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(11, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu12() {
  const prDish = 'Pollo a la parrilla';
  const altDish = 'Macarrones con queso';
  const dess = 'galletas de chocolate';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(12, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu13() {
  const prDish = 'Nuggets de Pollo';
  const altDish = 'Pastel de carne';
  const dess = 'fruta picada';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(13, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu16() {
  const prDish = 'Pollo empanizado con papas';
  const altDish = 'Quesadillas de jamón y queso';
  const dess = 'Gelatina de frutas';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(16, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu17() {
  const prDish = 'Pasta con salsa de tomate';
  const altDish = 'Tacos de pollo';
  const dess = 'Pudín de chocolate';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(17, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu18() {
  const prDish = 'Mini hamburguesas con queso';
  const altDish = 'Ensalada de pollo';
  const dess = 'Yogurt de frutas';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(18, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu19() {
  const prDish = 'Pizza de jamón y queso';
  const altDish = 'Empanadas de pollo';
  const dess = 'Helado de vainilla';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(19, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu20() {
  const prDish = 'Hot dogs con papas fritas';
  const altDish = 'Sándwich de atún';
  const dess = 'Arroz con leche';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(20, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu23() {
  const prDish = 'Lasaña de verduras';
  const altDish = 'Empanadas de queso';
  const dess = 'Galletas de avena y pasas';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(23, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu24() {
  const prDish = 'Pasta con albóndigas';
  const altDish = 'Tarta de jamón y queso';
  const dess = 'Paleta de hielo de frutas';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(24, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu25() {
  const prDish = 'Hamburguesas de pollo con papas';
  const altDish = 'Ensalada de tomate y mozzarella';
  const dess = 'Muffins de plátano y chocolate';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(25, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu26() {
  const prDish = 'Pollo al horno con arroz';
  const altDish = 'Sopa de fideos con pollo';
  const dess = 'Yogurt con trozos de fruta';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(26, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu27() {
  const prDish = 'Tacos de pollo';
  const altDish = 'Puré de calabaza';
  const dess = 'Gelatina de colores';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(27, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu30() {
  const prDish = 'Panqueques de manzana';
  const altDish = 'Sopa de pollo con fideos';
  const dess = 'Pudín de vainilla';
  const $pri = 200;
  const $alt = 200;
  const $dess = 100;
  sis.addMenu(new Menu(30, prDish, altDish, dess, $pri, $alt, $dess));
}
