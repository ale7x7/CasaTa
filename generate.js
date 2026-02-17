// Creeaza elementele de baza
const page = {};

// Main
page.main = document.createElement("div");
page.main.id = "main";
document.body.appendChild(page.main);

// Header
page.header = {};
page.header.container = document.createElement("div");
page.header.container.id = "header";
page.main.appendChild(page.header.container);

// Logo
page.header.logo = {};
page.header.logo.container = document.createElement("div");
page.header.logo.container.id = "logo";
page.header.container.appendChild(page.header.logo.container);

page.header.logo.text = document.createElement("div");
page.header.logo.text.id = "logo_text";
page.header.logo.container.appendChild(page.header.logo.text);

page.header.logo.h1 = document.createElement("h1");
page.header.logo.link = document.createElement("a");
page.header.logo.link.href = "index.html";
page.header.logo.link.textContent = "Casa";

page.header.logo.span = document.createElement("span");
page.header.logo.span.className = "logo_colour";
page.header.logo.span.textContent = "Ta";

page.header.logo.link.appendChild(page.header.logo.span);
page.header.logo.h1.appendChild(page.header.logo.link);
page.header.logo.text.appendChild(page.header.logo.h1);

page.header.logo.h2 = document.createElement("h2");
page.header.logo.h2.textContent = "Agentie imobiliara $ case si apartamente";
page.header.logo.text.appendChild(page.header.logo.h2);

// Menubar
page.header.menubar = {};
page.header.menubar.container = document.createElement("div");
page.header.menubar.container.id = "menubar";
page.header.container.appendChild(page.header.menubar.container);

page.header.menubar.menu = document.createElement("ul");
page.header.menubar.menu.id = "menu";
page.header.menubar.container.appendChild(page.header.menubar.menu);

const menuItems = [
    { text: "Acasa", href: "index.html", selected: true },
    { text: "Proprietati", href: "examples.html" },
    { text: "Despre noi", href: "page.html" },
    { text: "Servicii", href: "another_page.html" },
    { text: "Contact", href: "contact.html" }
];

page.header.menubar.items = [];
menuItems.forEach(item => {
    const li = document.createElement("li");
    if(item.selected) li.className = "selected";
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    page.header.menubar.menu.appendChild(li);
    page.header.menubar.items.push(li);
});

// Site content
page.site_content = {};
page.site_content.container = document.createElement("div");
page.site_content.container.id = "site_content";
page.main.appendChild(page.site_content.container);

// Sidebar
page.site_content.sidebar = {};
page.site_content.sidebar.container = document.createElement("div");
page.site_content.sidebar.container.className = "sidebar";
page.site_content.container.appendChild(page.site_content.sidebar.container);

// Recent announcements
page.site_content.sidebar.recentAnnouncements = {};
page.site_content.sidebar.recentAnnouncements.h3 = document.createElement("h3");
page.site_content.sidebar.recentAnnouncements.h3.textContent = "Anunturi recente";
page.site_content.sidebar.container.appendChild(page.site_content.sidebar.recentAnnouncements.h3);

const announcements = [
    { title: "Apartament 2 camere", location: "Zona Centru", price: "75.000 $" },
    { title: "Casa individuala", location: "Zona suburbana", price: "120.000 $" }
];

page.site_content.sidebar.recentAnnouncements.items = [];

announcements.forEach(a => {
    const h4 = document.createElement("h4"); h4.textContent = a.title;
    const h5 = document.createElement("h5"); h5.textContent = a.location;
    const p = document.createElement("p");
    p.innerHTML = `Pret: ${a.price} <br/><a href="#">Vezi detalii</a>`;
    page.site_content.sidebar.container.appendChild(h4);
    page.site_content.sidebar.container.appendChild(h5);
    page.site_content.sidebar.container.appendChild(p);
    page.site_content.sidebar.recentAnnouncements.items.push({h4, h5, p});
});

// Quick links
page.site_content.sidebar.quickLinks = {};
page.site_content.sidebar.quickLinks.h3 = document.createElement("h3");
page.site_content.sidebar.quickLinks.h3.textContent = "Linkuri rapide";
page.site_content.sidebar.container.appendChild(page.site_content.sidebar.quickLinks.h3);

page.site_content.sidebar.quickLinks.links = [];
const ulLinks = document.createElement("ul");
["Proprietati", "Despre noi", "Servicii", "Contact"].forEach((text, i) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = menuItems[i+1].href;
    a.textContent = text;
    li.appendChild(a);
    ulLinks.appendChild(li);
    page.site_content.sidebar.quickLinks.links.push(a);
});
page.site_content.sidebar.container.appendChild(ulLinks);

// Search form
page.site_content.sidebar.searchForm = {};
page.site_content.sidebar.searchForm.h3 = document.createElement("h3");
page.site_content.sidebar.searchForm.h3.textContent = "Cautare proprietati";
page.site_content.sidebar.container.appendChild(page.site_content.sidebar.searchForm.h3);

page.site_content.sidebar.searchForm.form = document.createElement("form");
page.site_content.sidebar.searchForm.form.method = "post";
page.site_content.sidebar.searchForm.form.action = "#";
page.site_content.sidebar.container.appendChild(page.site_content.sidebar.searchForm.form);

page.site_content.sidebar.searchForm.input = document.createElement("input");
page.site_content.sidebar.searchForm.input.className = "search";
page.site_content.sidebar.searchForm.input.type = "text";
page.site_content.sidebar.searchForm.input.value = "Introdu zona sau tipul";
page.site_content.sidebar.searchForm.form.appendChild(page.site_content.sidebar.searchForm.input);

// Content
page.site_content.content = {};
page.site_content.content.container = document.createElement("div");
page.site_content.content.container.id = "content";
page.site_content.container.appendChild(page.site_content.content.container);

page.site_content.content.h1 = document.createElement("h1");
page.site_content.content.h1.textContent = "Bine ai venit la CasaTa";
page.site_content.content.container.appendChild(page.site_content.content.h1);

page.site_content.content.paragraphs = [];
[
    "CasaTa este o agentie imobiliara care te ajuta sa gasesti locuinta potrivita nevoilor tale.",
    "Oferim apartamente si case de vanzare sau inchiriere, verificate si actualizate constant.",
    "Profesionalism, siguranta si transparenta in fiecare tranzactie."
].forEach(text => {
    const p = document.createElement("p");
    p.textContent = text;
    page.site_content.content.container.appendChild(p);
    page.site_content.content.paragraphs.push(p);
});

// Footer
page.footer = document.createElement("div");
page.footer.id = "footer";
page.footer.textContent = "Copyright © CasaTa";
page.main.appendChild(page.footer);

