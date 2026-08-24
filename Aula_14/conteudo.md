# 📚 Aula 14 --- Login, Mostrar/Ocultar Senha, LGPD e Modal

**Professor:** Ygor Silva\
**Curso:** Linguagem Web

## 🎯 Objetivo

Evoluir a interface de login adicionando recursos de **interatividade,
usabilidade e componentes Bootstrap**.

## 🚀 Recursos desenvolvidos

-   Mostrar/ocultar senha;
-   Ícone de senha;
-   Controle de visibilidade do ícone;
-   Aviso de LGPD persistente;
-   `localStorage`;
-   Modal de cadastro;
-   Imagem responsiva com `<picture>`;
-   Manipulação do DOM;
-   Eventos `click` e `keyup`.

## 👁️ Mostrar e ocultar senha

``` javascript
const olho = document.querySelector('.olho');
const inputSenha = document.querySelector('#senha');

let tipo = inputSenha.getAttribute('type');

if (tipo == 'password') {
  inputSenha.setAttribute('type', 'text');
} else {
  inputSenha.setAttribute('type', 'password');
}
```

## ⌨️ Evento `keyup`

O ícone é exibido somente quando a senha possui mais de dois caracteres:

``` javascript
inputSenha.addEventListener('keyup', function () {
  if (inputSenha.value.length > 2) {
    olho.style.display = 'block';
  } else {
    olho.style.display = 'none';
  }
});
```

## 🛡️ LGPD com `localStorage`

Ao clicar em **Estou Ciente**, a preferência é armazenada no navegador:

``` javascript
localStorage.setItem('fechouLGPD', 'sim');
```

## 🎨 Posicionamento do ícone

``` css
.input {
  position: relative;
}

.olho {
  position: absolute;
  right: 10px;
  bottom: 5px;
  cursor: pointer;
}
```

## 🪟 Modal de cadastro

O Bootstrap permite abrir o modal utilizando:

``` html
data-bs-toggle="modal"
data-bs-target="#exampleModal"
```

## 🖼️ Imagem responsiva

O elemento `<picture>` permite trabalhar com diferentes imagens conforme
o breakpoint.

## 📁 Estrutura dos arquivos

-   `index.html` --- login, modal, imagem e aviso LGPD;
-   `style.css` --- estilos e posicionamento;
-   `login.js` --- mostrar/ocultar senha;
-   `lgpd.js` --- persistência do aviso LGPD;
-   Bootstrap --- componentes e Grid.

## ✅ Conclusão

A aula integrou JavaScript, DOM, eventos, atributos HTML,
`localStorage`, Bootstrap e recursos de UX em uma interface de login
mais completa.

> Documentação elaborada para fins de estudo e portfólio.
