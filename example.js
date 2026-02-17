// example.js – simplu, totul generat aici

// Main
const main = document.createElement("div");
main.id = "main";
document.body.appendChild(main);

// Header
const header = document.createElement("div");
header.id = "header";
main.appendChild(header);

// Logo
const logo = document.createElement("div");
logo.id = "logo";
header.appendChild(logo);

const logoText = document.createElement("div");
logoText.id = "logo_text";
logo.appendChild(logoText);

const h1 = document.createElement("h1");
const a = document.createElement("a");
a.href = "index.html";
a.textContent = "Casa";
const span = document.createElement("span");
span.className = "logo_colour";
span.textContent = "Ta";
a.appendChild(span);
h1.appendChild(a);
logoText.appendChild(h1);

const h2 = document.createElement("h2");
h2.textContent = "Agentie imobiliara";
logoText.appendChild(h2);

// Menubar
const menubar = document.createElement("div");
menubar.id = "menubar";
header.appendChild(menubar);

const menu = document.createElement("ul");
menu.id = "menu";
menubar.appendChild(menu);

const menuItems = ["Acasa", "Proprietati", "Despre noi", "Servicii", "Contact"];
const menuLinks = ["index.html","examples.html","page.html","another_page.html","contact.html"];
menuItems.forEach((text, i) => {
    const li = document.createElement("li");
    if(text === "Proprietati") li.className = "selected"; // setare selected
    const link = document.createElement("a");
    link.href = menuLinks[i];
    link.textContent = text;
    li.appendChild(link);
    menu.appendChild(li);
});

// Site content
const siteContent = document.createElement("div");
siteContent.id = "site_content";
main.appendChild(siteContent);

// Content
const content = document.createElement("div");
content.id = "content";
siteContent.appendChild(content);

const h1Content = document.createElement("h1");
h1Content.textContent = "Proprietati disponibile";
content.appendChild(h1Content);

const p = document.createElement("p");
p.textContent = "Descopera oferta noastra de apartamente si case.";
content.appendChild(p);

// Apartamente
const h2A = document.createElement("h2");
h2A.textContent = "Apartamente";
content.appendChild(h2A);

const ulA = document.createElement("ul");
["Apartament 1 camera $ 45.000 $", "Apartament 2 camere $ 75.000 $", "Apartament 3 camere $ 98.000 $"].forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ulA.appendChild(li);
});
content.appendChild(ulA);

// Case
const h2C = document.createElement("h2");
h2C.textContent = "Case";
content.appendChild(h2C);

const ulC = document.createElement("ul");
["Casa duplex $ 110.000 $", "Casa individuala $ 120.000 $", "Vila moderna $ 180.000 $"].forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ulC.appendChild(li);
});
content.appendChild(ulC);

// Footer
const footer = document.createElement("div");
footer.id = "footer";
footer.textContent = "Copyright $ CasaTa";
main.appendChild(footer);
