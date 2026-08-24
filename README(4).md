# 📚 Aula 13 --- Interatividade com JavaScript e Política de LGPD

**Professor:** Ygor Silva\
**Curso:** Linguagem Web

## 🎯 Objetivo

Aprofundar o uso de **JavaScript** para adicionar interatividade à tela
de login e controlar a exibição de um aviso relacionado à LGPD.

## 🧠 Conteúdos

-   JavaScript;
-   Variáveis `var`, `let` e `const`;
-   `querySelector`;
-   Eventos;
-   Funções anônimas;
-   Manipulação de estilos;
-   `if` e `else`;
-   Operador lógico `||`;
-   Validação básica de formulário;
-   Controle do aviso de LGPD.

## 🔎 Selecionando elementos

``` javascript
const btnLgpd = document.querySelector('#btn-lgpd');
const conteudoLgpd = document.querySelector('#conteudo-lgpd');
```

## 🖱️ Evento `click`

``` javascript
btnLgpd.addEventListener('click', function() {
  conteudoLgpd.style.display = 'none';
});
```

## 🔐 Validação do login

``` javascript
if(usuario.value == '' || senha.value == ''){
  alert('Preencha todos os campos!');
} else {
  alert('Login realizado com sucesso!');
}
```

## 📁 Estrutura dos arquivos

-   `index.html` --- estrutura da tela;
-   `style.css` --- aparência da página;
-   `login.js` --- validação do login;
-   `lgpd.js` --- controle do aviso de LGPD.

## 🧩 Variáveis

  Palavra-chave   Escopo   Reatribuição
  --------------- -------- --------------
  `var`           Função   Sim
  `let`           Bloco    Sim
  `const`         Bloco    Não

## ✅ Conclusão

A aula consolidou eventos, seleção de elementos, validação de campos,
funções, condicionais e manipulação do DOM utilizando JavaScript.

> Documentação elaborada para fins de estudo e portfólio.
