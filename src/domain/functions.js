window.addEventListener("load", init);


let sis = new sistema();


function init() {
  /* eslint-disable max-len */
  document.getElementById("price").addEventListener("click", calculatePrice);
  document.getElementById("idReservation").addEventListener("click", reserve);
  document.getElementById("idPay").addEventListener("click", pagar);
  load();
  action();
}

function pagar() {
  if (document.getElementById("idTablePay").innerHTML !== "") {
      document.getElementById("idTablePay").innerHTML = "";
      document.getElementById("idMonto").innerHTML = "";

      // Crear el modal
      var modal = document.createElement("div");
      modal.className = "modal";
      modal.id = "modal";

      // Crear el contenido del modal
      var modalContent = document.createElement("div");
      modalContent.className = "modal-content";

      var heading = document.createElement("h2");
      heading.textContent = "Pago en progreso";

      var progressBar = document.createElement("div");
      progressBar.className = "progress-bar";
      var progress = document.createElement("div");
      progress.className = "progress";
      progressBar.appendChild(progress);

      var successMessage = document.createElement("div");
      successMessage.className = "success-message";
      successMessage.textContent = "Pago exitoso!";

      modalContent.appendChild(heading);
      modalContent.appendChild(progressBar);
      modalContent.appendChild(successMessage);

      // Agregar el contenido al modal
      modal.appendChild(modalContent);

      // Agregar el modal al documento
      document.body.appendChild(modal);

      // Mostrar el modal
      modal.style.display = "block";

      // Animación de entrada del modal
      modalContent.style.transform = "translateY(-50%) scale(0.8)";
      modalContent.style.opacity = 0;

      setTimeout(function() {
          modalContent.style.transform = "translateY(-50%) scale(1)";
          modalContent.style.opacity = 1;
      }, 100);

      // Cerrar el modal después de 2 segundos
      setTimeout(function() {
          successMessage.style.display = "block";
          progress.style.width = "100%";

          setTimeout(function() {
              modal.style.display = "none";
              document.body.removeChild(modal);
          }, 2000);
      }, 2000);
  }
}



function loadTable() {
  let tot = 0;
  let table = document.getElementById("idTablePay");
  table.innerHTML = "";
  let data = sis.getReserva();
  if (data.length != 0) {
    let cabezal = table.createTHead();
    let row = cabezal.insertRow();
    let cell1 = row.insertCell();
    cell1.innerHTML = "Fecha";
    let cell2 = row.insertCell();
    cell2.innerHTML = "Usuario";
    let cell3 = row.insertCell();
    cell3.innerHTML = "Precio";
    let cell4 = row.insertCell();
    cell4.innerHTML = "Descripción";

    for (elem of data) {
      let r = table.insertRow();
      let c1 = r.insertCell();
      c1.innerHTML = elem.toStringDate();
      let c2 = r.insertCell();
      c2.innerHTML = elem.toStringUser();
      let c3 = r.insertCell();
      c3.innerHTML = "$" + elem.toStringPrice();
      let c4 = r.insertCell();
      c4.innerHTML = elem.toStringDesc();
	    tot += elem.toStringPrice();
    }
	
  }
  document.getElementById("idMonto").innerHTML = tot;
}

function reserve() {
  if (document.getElementById("idPrice").innerHTML != 0) {
    const fecha = new Date();
    let desc = "";
    let total = parseInt(document.getElementById("idPrice").innerHTML);
    if (document.getElementById("idOption1").checked) {
      desc += document.getElementById("idMain").innerHTML + ", ";
    }
    if (document.getElementById("idOption2").checked) {
      desc += document.getElementById("idSecondary").innerHTML + ", ";
    }
    if (document.getElementById("idOption3").checked) {
      desc += document.getElementById("idDessert").innerHTML;
    }
    sis.addReserva(
      new Reserva(fecha.toLocaleString(), "Felipe Gonzalez", total, desc)
    );
    loadTable();
    clear();
  }
}

function action() {
  for (let i = 1; i <= 30; i++) {
    document.getElementById("idDay" + i)?.addEventListener("click", function () {
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
      let id = "idDay" + i;
      document.getElementById(id).addEventListener("click", function () {
        menu(id);
      });
    }
  }
}

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
  document.getElementById("idOption1").checked = false;
  document.getElementById("idOption2").checked = false;
  document.getElementById("idOption3").checked = false;
  document.getElementById("idPrice").innerHTML = 0;
  document.getElementById("idAmount").value = 0;
}

function menu(id) {
  let dayButton = document.getElementById(id);
  let day = parseInt(dayButton.innerHTML);
  for (let elem of sis.getMenu()) {
    let d = parseInt(elem.Day);
    if (day === d) {
      document.getElementById("idMain").innerHTML = elem.toStringPrDish();
      document.getElementById("idSecondary").innerHTML = elem.toStringAltDish();
      document.getElementById("idDessert").innerHTML = elem.toStringDess();
    }
  }
}

function calculatePrice() {
  let total = 0;
  let precio = 0;
  let box1 = document.getElementById("idOption1");
  let box2 = document.getElementById("idOption2");
  let box3 = document.getElementById("idOption3");
  let cant = document.getElementById("idAmount").value;
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
  document.getElementById("idPrice").innerHTML = total;
}

function loadMenu2() {
  let prDish = "Milanesa de Carne";
  let altDish = "Ensalada de pollo";
  let dess = "Ensalada de Frutas";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(2, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu3() {
  let prDish = "Espaguetti";
  let altDish = "Tarta de puerro";
  let dess = "Brownie";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(3, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu4() {
  let prDish = "Nuggets de Pollo";
  let altDish = "Sopa de verduras";
  let dess = "Fruta picada";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(4, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu5() {
  let prDish = "Pescado";
  let altDish = "Arroz con verduras";
  let dess = "helado";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(5, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu6() {
  let prDish = "Ravioles de Ricotta";
  let altDish = "Bocatta de jamón y queso";
  let dess = "alfajor";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(6, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu9() {
  let prDish = "Lasagna";
  let altDish = "croquetas de jamón y queso";
  let dess = "gelatina";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(9, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu10() {
  let prDish = "Empanadas de carne";
  let altDish = "Tarta Capresse";
  let dess = "crema de vainilla";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(10, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu11() {
  let prDish = "Hamburguesa";
  let altDish = "Milanesa de Pescado";
  let dess = "gelatina";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(11, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu12() {
  let prDish = "Pollo a la parrilla";
  let altDish = "Macarrones con queso";
  let dess = "galletas de chocolate";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(12, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu13() {
  let prDish = "Nuggets de Pollo";
  let altDish = "Pastel de carne";
  let dess = "fruta picada";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(13, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu16() {
  let prDish = "Pollo empanizado con papas";
  let altDish = "Quesadillas de jamón y queso";
  let dess = "Gelatina de frutas";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(16, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu17() {
  let prDish = "Pasta con salsa de tomate";
  let altDish = "Tacos de pollo";
  let dess = "Pudín de chocolate";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(17, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu18() {
  let prDish = "Mini hamburguesas con queso";
  let altDish = "Ensalada de pollo";
  let dess = "Yogurt de frutas";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(18, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu19() {
  let prDish = "Pizza de jamón y queso";
  let altDish = "Empanadas de pollo";
  let dess = "Helado de vainilla";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(19, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu20() {
  let prDish = "Hot dogs con papas fritas";
  let altDish = "Sándwich de atún";
  let dess = "Arroz con leche";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(20, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu23() {
  let prDish = "Lasaña de verduras";
  let altDish = "Empanadas de queso";
  let dess = "Galletas de avena y pasas";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(23, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu24() {
  let prDish = "Pasta con albóndigas";
  let altDish = "Tarta de jamón y queso";
  let dess = "Paleta de hielo de frutas";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(24, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu25() {
  let prDish = "Hamburguesas de pollo con papas";
  let altDish = "Ensalada de tomate y mozzarella";
  let dess = "Muffins de plátano y chocolate";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(25, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu26() {
  let prDish = "Pollo al horno con arroz";
  let altDish = "Sopa de fideos con pollo";
  let dess = "Yogurt con trozos de fruta";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(26, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu27() {
  let prDish = "Tacos de pollo";
  let altDish = "Puré de calabaza";
  let dess = "Gelatina de colores";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(27, prDish, altDish, dess, $pri, $alt, $dess));
}

function loadMenu30() {
  let prDish = "Panqueques de manzana";
  let altDish = "Sopa de pollo con fideos";
  let dess = "Pudín de vainilla";
  let $pri = 200;
  let $alt = 200;
  let $dess = 100;
  sis.addMenu(new Menu(30, prDish, altDish, dess, $pri, $alt, $dess));
}