# 📚 Aula 12 --- Bootstrap: Tela de Login com Grid e Formulário

**Professor:** Ygor Silva\
**Curso:** Linguagem Web

## 🎯 Objetivo

Desenvolver uma **tela de login responsiva** utilizando Bootstrap 5,
aplicando Grid, formulário, classes utilitárias e o elemento
`<picture>`.

## 🧠 Conteúdos

-   Bootstrap 5;
-   Sistema de Grid;
-   Responsividade;
-   Flexbox;
-   Elemento `<picture>`;
-   Imagens responsivas;
-   Formulários;
-   Classes utilitárias;
-   Botões.

## 🧱 Estrutura principal

``` html
<body class="bg-success">
  <div class="container d-flex align-items-center min-vh-100">
    ...
  </div>
</body>
```

## 📐 Grid responsivo

``` html
<div class="row align-items-center bg-white">
  <div class="col-lg-6 p-0">...</div>
  <div class="col-lg-6 py-5 py-lg-0">...</div>
</div>
```

O breakpoint `lg` permite dividir a área em duas colunas de 6 unidades
em telas maiores.

## 🖼️ Elemento `<picture>`

``` html
<picture>
  <source srcset="img/mulher-1x1.webp" media="(min-width: 992px)">
  <img src="img/mulher-16x9.webp" alt="" class="img-fluid">
</picture>
```

O elemento permite utilizar imagens diferentes conforme o tamanho da
tela.

## 🔐 Formulário

``` html
<form action="#" autocomplete="off">
  <label for="login">Digite seu login</label>
  <input type="text" id="login" class="form-control mb-2">

  <label for="senha">Digite sua senha</label>
  <input type="password" id="senha" class="form-control mb-2">

  <button type="submit" class="btn btn-success w-100">
    Entrar no sistema
  </button>
</form>
```

## 📚 Conceitos reforçados

`form-control`, `mb-2`, `btn`, `btn-success`, `w-100`, `container`,
`row`, `col-lg-6` e `img-fluid`.

## ✅ Conclusão

A aula aplicou o Bootstrap em um cenário prático, construindo uma
interface de login responsiva e reforçando Grid, formulários e adaptação
de imagens.

> Documentação elaborada para fins de estudo e portfólio.
