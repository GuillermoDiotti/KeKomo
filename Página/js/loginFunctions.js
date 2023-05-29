window.addEventListener( 'load', inicio );

function inicio (){
    const btnChef = document.querySelector('.btn-chef');
    const btnResp = document.querySelector('.btn-responsable');
    const botones = [];
    botones.push(btnChef);
    botones.push(btnResp);

    botones.forEach( btn => btn.addEventListener( 'click', () => mostrarInterfaz(btn.id) ) );
}

function mostrarInterfaz(id) {
    const login = document.querySelector('.login-bg');
    const responsable = document.querySelector('.responsable');
    const chef = document.querySelector('.chef');

    switch (id){
        
        case 'chef':
            login.style.display = 'none';
            responsable.style.display = 'none';
            chef.style.display = 'block';
            break;
        default:
            login.style.display = 'none';
            responsable.style.display = 'block';
            chef.style.display = 'none';
    }

}