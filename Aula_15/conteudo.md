# 📚 Aula 15 --- API ViaCEP e Preenchimento Automático

**Professor:** Ygor Silva\
**Curso:** Linguagem Web

## 🎯 Objetivo

Integrar uma **API pública** ao formulário de cadastro para consultar um
CEP e preencher automaticamente os campos de endereço.

## 🚀 Funcionalidade

Ao informar um CEP, o sistema consulta o **ViaCEP** e preenche:

-   Logradouro;
-   Bairro;
-   Cidade;
-   UF.

A aula mantém os recursos desenvolvidos anteriormente, como modal,
máscaras de campos e scripts.

## 🔌 O que é uma API?

Uma API permite que uma aplicação se comunique com outro serviço por
meio de requisições.

``` text
Navegador → ViaCEP → Resposta JSON → JavaScript → Formulário
```

## 🌐 Endpoint

``` text
https://viacep.com.br/ws/01001-000/json/
```

## 📡 `fetch()` e Promises

``` javascript
fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(dados){
    // utilização dos dados
  })
  .catch(function(){
    // tratamento de falha
  });
```

## ⌨️ Evento `keyup`

A consulta é disparada quando o CEP atinge o formato completo:

``` javascript
inputCep.addEventListener('keyup', () => {
  let cepDigitado = inputCep.value;

  if (cepDigitado.length == 9) {
    // consulta à API
  }
});
```

## 🧠 Tratamento da resposta

``` javascript
if(!dados.erro){
  document.querySelector('#logradouro').value = dados.logradouro;
  document.querySelector('#bairro').value = dados.bairro;
  document.querySelector('#cidade').value = dados.localidade;
  document.querySelector('#estado').value = dados.uf;
} else {
  alert('Cep não encontrado');
}
```

## 🎭 Manipulação do DOM

Os dados retornados pela API são inseridos nos campos:

``` text
#logradouro
#bairro
#cidade
#estado
```

## 🎯 Máscaras de entrada

O projeto utiliza jQuery e jQuery Mask para:

-   CEP;
-   CPF;
-   Data;
-   WhatsApp.

## 📁 Estrutura dos arquivos

-   `index.html` --- formulário, modal e máscaras;
-   `cadastro.js` --- consulta ao ViaCEP e preenchimento;
-   `login.js` --- mostrar/ocultar senha;
-   `lgpd.js` --- controle do aviso LGPD;
-   Bootstrap e bibliotecas auxiliares.

## 🔄 Fluxo da aplicação

1.  Usuário digita o CEP.
2.  A máscara organiza o formato.
3.  Ao completar o CEP, o JavaScript monta o endpoint.
4.  `fetch()` realiza a requisição.
5.  A resposta é convertida para JSON.
6.  O sistema verifica `dados.erro`.
7.  Os dados são inseridos no formulário.
8.  Em caso de falha, uma mensagem é apresentada.

## 🛡️ Melhorias sugeridas

-   Validar o CEP antes do `fetch`;
-   Exibir indicador de carregamento;
-   Utilizar mensagens de erro integradas ao formulário;
-   Permitir preenchimento manual caso a API esteja indisponível;
-   Melhorar acessibilidade das mensagens.

## ✅ Conclusão

Nesta aula foi realizada a integração entre **HTML, CSS, JavaScript,
Bootstrap, máscaras de entrada e uma API externa**, criando uma
experiência de preenchimento automático de endereço.

> Documentação elaborada para fins de estudo e portfólio.
