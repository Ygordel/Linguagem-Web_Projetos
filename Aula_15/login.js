
//Seleção de DOM (Document Object Model)

const olho = document.querySelector('.olho');
//const olho = document.getElementsByClassName('olho');

const inputSenha = document.querySelector('#senha');
//const inputSenha = document.getElementById('senha');

//Evento acionando uma função anônima (sem nome)
olho.addEventListener('click', function(){
    //alert('ok');
    let tipoInput = inputSenha.getAttribute('type');
    //console.log(tipoInput);

    //Se o valor do input for IGUAL(==) a password
    if(tipoInput == 'password'){
        //Atribua o novo valor do type para text
        inputSenha.setAttribute('type','text');
        olho.setAttribute('src','img/open.svg');
    }

    //Se não (caso contrário do IF)
    else{
        //Atribua o novo valor do type para text
        inputSenha.setAttribute('type','password');
        olho.setAttribute('src','img/closed.svg');
    }

});

//Evento de soltar (keyup) uma tecla
inputSenha.addEventListener('keyup', function(){
    
    //length -> retorna a quantidade de caracteres
    //Se o valor do input for diferente(!=) de vazio ('')
        //if(inputSenha.value.length > 2)
    
    //Se a quantidade de caracteres for maior que 2
    if(inputSenha.value.length > 2){
        olho.style.display = 'block';
    }

    else{
        olho.style.display = 'none';
    }
    
});