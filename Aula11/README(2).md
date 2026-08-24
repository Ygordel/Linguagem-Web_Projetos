# 📚 Aula 11 --- Introdução ao Bootstrap 5

**Professor:** Ygor Silva\
**Curso:** Linguagem Web

## 🎯 Objetivo

Introdução ao **Bootstrap 5**, compreendendo o conceito de biblioteca
Front-End, instalação via CDN, classes utilitárias e sistema de Grid
responsivo.

## 🧠 Conteúdos

-   O que é uma biblioteca Front-End;
-   Vantagens do Bootstrap;
-   Instalação via CDN;
-   Estrutura HTML com Bootstrap;
-   Classes utilitárias;
-   Tipografia, cores e espaçamentos;
-   Botões;
-   Sistema de Grid com 12 colunas;
-   Responsividade;
-   Personalização com CSS próprio.

## 🚀 Instalação via CDN

``` html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

## 🧱 Sistema de Grid

O Bootstrap utiliza um sistema baseado em **12 colunas**, organizado com
`container`, `row` e `col`.

``` html
<div class="container">
  <div class="row">
    <div class="col">Coluna 1</div>
    <div class="col">Coluna 2</div>
    <div class="col">Coluna 3</div>
  </div>
</div>
```

Também podemos definir tamanhos conforme o dispositivo:

``` html
<div class="col-md-6 col-lg-4">Conteúdo</div>
```

## 🎨 Classes utilitárias

``` html
<h1 class="text-center mt-5 text-danger">Bem-vindo ao Bootstrap</h1>

<button class="btn btn-primary">Clique Aqui</button>
<button class="btn btn-danger">Cancelar</button>
```

## 🖌️ Personalização com CSS

``` css
.btn-pink {
  background-color: pink;
}

.btn-pink:hover {
  background-color: purple;
  color: pink;
}
```

## 📁 Arquivos da prática

-   `introducao.html` --- primeiros testes com Bootstrap;
-   `grid.html` --- aplicação do sistema de Grid;
-   `style.css` --- personalizações próprias.

## ✅ Conclusão

Foram consolidados os conceitos de bibliotecas Front-End, Bootstrap,
Grid, responsividade, classes utilitárias e integração com CSS próprio.

> Documentação elaborada para fins de estudo e portfólio.
