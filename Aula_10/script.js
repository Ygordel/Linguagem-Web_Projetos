//alert('JS Carregado');
//console.log('Teste de console');

//Seleção de DOM (Document Object Model)
//No JS tudo é objeto 
//Objeto tem acesso à métodos e propriedades
//console.log(document);

var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

var fundo = document.querySelector('.fundo');
var btnPopup = document.querySelector('.popup span');

//Função anônima
btnPopup.addEventListener('click', function(){
    fundo.classList.add('esconder-popup');
});

//console.log(btnMenu);
//console.log(menu);

//toggleMenu

//Função -> Rotina que deverá ser acionada
function manipularMenu(){
    //alert('Função acionada');
    menu.classList.toggle('show');
    btnMenu.classList.toggle('x');
}

function fecharMenu(){
    menu.classList.remove('show');
    btnMenu.classList.remove('x');
}

//Eventos -> Gatilhos/Ação do usuário
btnMenu.addEventListener('click',manipularMenu);
menu.addEventListener('click',fecharMenu);