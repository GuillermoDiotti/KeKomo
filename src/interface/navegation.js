window.addEventListener('load', inicio);


function inicio() {
  const btnHome = document.getElementById('idBtnPay');
  const btnInfo = document.getElementById('idBtnMenu');
  const btnMenu = document.getElementById('idBtnInfo');
  const btnPay = document.getElementById('idBtnHome');
  const btnData = document.getElementById('idBtnData');
  const btnVerMenu = document.getElementById('idBtnVerMenu');
  const btnPayment = document.getElementById('idBtnPayment');


  const botones = [];
  botones.push(btnPayment);
  botones.push(btnVerMenu);
  botones.push(btnHome);
  botones.push(btnData);
  botones.push(btnInfo);
  botones.push(btnMenu);
  botones.push(btnPay);
  botones.forEach((btn) => btn.addEventListener('click',
      () => mostrarInterfaz(btn.id)));
}

// navegacion entre las distintas secciones de la pagina
function mostrarInterfaz(id) {
  const home = document.getElementById('idHomeSection');
  const info = document.getElementById('idAboutUsSection');
  const menu = document.getElementById('idMenuSection');
  const pay = document.getElementById('idPaySection');

  switch (id) {
    case 'idBtnHome':
      home.style.display = 'block';
      info.style.display = 'none';
      menu.style.display = 'none';
      pay.style.display = 'none';
      break;
    case 'idBtnInfo':
      home.style.display = 'none';
      info.style.display = 'block';
      menu.style.display = 'none';
      pay.style.display = 'none';
      break;
    case 'idBtnMenu':
      home.style.display = 'none';
      info.style.display = 'none';
      menu.style.display = 'block';
      pay.style.display = 'none';
      break;
    case 'idBtnData':
      home.style.display = 'none';
      info.style.display = 'block';
      menu.style.display = 'none';
      pay.style.display = 'none';
      break;
    case 'idBtnVerMenu':
      home.style.display = 'none';
      info.style.display = 'none';
      menu.style.display = 'block';
      pay.style.display = 'none';
      break;
    case 'idBtnPayment':
      home.style.display = 'none';
      info.style.display = 'none';
      menu.style.display = 'none';
      pay.style.display = 'block';
      break;
    default:
      home.style.display = 'none';
      info.style.display = 'none';
      menu.style.display = 'none';
      pay.style.display = 'block';
      break;
  }
}
