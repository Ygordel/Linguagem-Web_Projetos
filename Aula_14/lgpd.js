const btnLgpd = document.querySelector('#btn-lgpd');
const conteudoLgpd = document.querySelector('#conteudo-lgpd');

// == comparação igualdade
// != comparação diferença

console.log(localStorage.getItem('fechouLGPD'));

//Se o usuário já fechou a informação de consentimento
if(localStorage.getItem('fechouLGPD') != null){
    conteudoLgpd.style.display = 'none'; //esconde a div
}

//Ao clicar no botão "Estou Ciente"
btnLgpd.addEventListener('click',function(){
    conteudoLgpd.style.display = 'none';
    //Registrar no navegador que o usuário já fechou a mensagem
    localStorage.setItem('fechouLGPD','sim');
});

