# 2 Anos de Nós 🌷

Site de comemoração — um arquivo só, sem dependências. É só abrir o `index.html` no navegador.

## Colocar a foto

Salve a foto de vocês nesta mesma pasta com o nome **`nos.jpg`**.
Enquanto o arquivo não existir, aparece um espaço reservado indicando onde ela vai entrar.

- Formato ideal: retrato (proporção 4:5), tipo 800×1000px.
- Outro nome/extensão? Troque o `src` na linha do `<img id="foto" ...>` do `index.html`.

## Ajustar a data

No `<script>`, perto do fim do `index.html`:

```js
const INICIO = new Date(2024, 8, 13, 0, 0, 0);
```

O mês começa em **0** (janeiro = 0), então `8` = setembro.
Se souberem a hora exata em que começou, é só trocar o `0, 0, 0` por `hora, minuto, segundo`.

## Trocar os textos

- Título e datas: bloco `<header>`.
- Legenda embaixo da foto: `<figcaption class="legenda">`.
- Recadinho: seção `<section class="carta">`.

## Mexer nas cores

As cores principais estão nas variáveis no topo do CSS (`:root`).
As cores das tulipas ficam no array `paletaFlor` do script — dá pra adicionar
ou tirar trios de tons. A quantidade de tulipas está em `const QTD = 34;`.
