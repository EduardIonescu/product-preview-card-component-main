const body = document.body;
const main = document.createElement("main");

const aside = document.createElement("aside");

const imageMobile = document.createElement("img");
imageMobile.classList.add("image-mobile");
imageMobile.src = "./images/image-product-mobile.jpg";
imageMobile.alt = "parfume image";

const imageDesktop = document.createElement("img");
imageDesktop.classList.add("image-desktop");
imageDesktop.src = "./images/image-product-desktop.jpg";
imageDesktop.alt = "parfume image";

aside.append(imageMobile, imageDesktop);

const section = document.createElement("section");

const perfume = document.createElement("p");
perfume.classList.add("perfume");
perfume.innerText = "PERFUME";

const h1 = document.createElement("h1");
h1.classList.add("title");
h1.innerText = "Gabrielle Essence Eau De Parfum";

const p1 = document.createElement("p");
p1.classList.add("description");
const p1Text = document.createTextNode(
	"A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
);
p1.appendChild(p1Text);

const p2 = document.createElement("p");
p2.classList.add("price");

const spanBig = document.createElement("span");
spanBig.classList.add("big-price");
const spanBigText = document.createTextNode("$149.99");
spanBig.appendChild(spanBigText);

const spanSmall = document.createElement("span");
spanSmall.classList.add("small-price");
const spanSmallText = document.createTextNode("$169.99");
spanSmall.appendChild(spanSmallText);

p2.append(spanBig, spanSmall);

const button = document.createElement("button");
const imageCart = document.createElement("img");
imageCart.src = "./images/icon-cart.svg";
imageCart.alt = "";
imageCart.ariaHidden = "true";

const buttonText = document.createTextNode("Add to Cart");

button.append(imageCart, buttonText);

section.append(perfume, h1, p1, p2, button);

main.appendChild(aside);
main.append(section);

body.appendChild(main);
