let titulo = document.createElement("h1");
titulo.id = "titulo-produto";
titulo.innerText = "Produto à venda";

let principal = document.querySelector("body");
principal.appendChild(titulo);

let info = document.createElement("div");
info.id = "informaçoes";
info.innerHTML = `
<h2>Bola de Futebol</h2>
<p>Lorem ipsum dolor sit amet. Qui exercitationem inventore et rerum consectetur quo doloremque illo a velit consequatur et placeat saepe aut impedit recusandae! A modi veritatis aut dolorem numquam ea harum repudiandae et alias amet et adipisci magni qui necessitatibus nobis. Qui iusto 
facere non nemo galisum aut unde nesciunt 33 illum molestiae?</p>
<h3>Preço: R$24.99</h3>
`

principal.appendChild(info);