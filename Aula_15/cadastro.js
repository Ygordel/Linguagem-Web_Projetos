//Seleção do DOM (Selecionando os elementos do HTML que serão manipulados)
const inputCep = document.querySelector('#cep');
//console.log(inputCep);

//Evento blur (Ao sair do campo/ao perder o foco)
//Evento keyup (Ao soltar uma tecla)
//Arrow Function => Abreviar a escrita de uma função
//function(){} >>> () => {}

inputCep.addEventListener('keyup', () => {
    //alert('Saiu do campo');

    let cepDigitado = inputCep.value;
    //console.log(cepDigitado);
    //se a quantidade de caracteres da variável cepDigitado for igual a 9 (00000-000)
    if(cepDigitado.length == 9){

        //Fazer uma requisição à API
        //Endpoint: Endereço da API
        let url = 'https://viacep.com.br/ws/'+cepDigitado+'/json/';
        //console.log(url);

        fetch(url)
            //Tratando a resposta "bruta" da API e retornando para o fluxo essa resposta em formato JSON
            .then(function(response){
                //console.log(response);
                return response.json();
            })

            //Recebeu a resposta no formato JSON e está tratando os recebidos pela API
            .then(function(dados){
                console.log(dados);
                
                //Só preencha o formulário se não tiver dado erro
                //if(dados.erro != 'true')
                //! negação
                if(!dados.erro){
                    document.querySelector('#logradouro').value = dados.logradouro;
                    document.querySelector('#bairro').value = dados.bairro;
                    document.querySelector('#cidade').value = dados.localidade;
                    document.querySelector('#estado').value = dados.uf;
                    document.querySelector('#numero').focus();
                }

                else{
                    alert('Cep não encontrado');
                }

            })

            //Tratamento de erro ao acessar a API
            .catch(function(erro){
                alert('Não foi possível consultar seu CEP');
            })
        
        } //fim do if que verifica a quantidade de caracteres
});


