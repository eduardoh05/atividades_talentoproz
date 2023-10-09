const titulo = document.getElementById("titulo");
titulo.innerText = "Título criado com o innerText";

const anchor = document.querySelector("a");
anchor.innerText =  "Link que leva ao site da proz";

const lista_desordenada = document.querySelector("ul");
lista_desordenada.innerHTML = `
<ul>
    <li>Item 1 ul</li>
    <li>Item 2 ul</li>
    <li>Item 3 ul</li>
</ul>
`

const lista_ordenada = document.getElementById("lista-ordenada");
lista_ordenada.innerHTML = `
<ol>
    <li><a href= "https://github.com/">Link do Github</a></li>
    <li><a href= "https://codepen.io/pen/">Link do Codepen</a></li>
    <li><a href= "https://talentocloud.joyclass.com/app/list">Link da JoyClass</a></li>
</ol>
`

