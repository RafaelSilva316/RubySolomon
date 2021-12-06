let menuButton = document.querySelector(".menu-icon");
let headerEl = document.querySelector("header");
let menuList = document.createElement("ul");
// add about me resources 518-555-5555 and email us
let about = document.createElement("li");
let aboutA = document.createElement("a");
aboutA.innerHTML = "about me";
aboutA.setAttribute("href", "./about.html");
about.appendChild(aboutA);

let resources = document.createElement("li");
let resourcesA = document.createElement("a");
resourcesA.innerHTML = "resources";
resourcesA.setAttribute("href", "./resources.html");
resources.appendChild(resourcesA);

let phone = document.createElement("li");
let phoneA = document.createElement("a");
phoneA.innerHTML = "518-555-5555";
phoneA.setAttribute("href", "tel:518-555-5555");
phone.appendChild(phoneA);

let email = document.createElement("li");
let emailA = document.createElement("a");
emailA.innerHTML = "email me";
emailA.setAttribute("href", "mailto:rafaelsilva316@gmail.com");
email.appendChild(emailA);

menuList.append(about, resources, phone, email);
let hiddenNavList = menuList.childNodes;

hiddenNavList.forEach(function (li) {
  li.querySelector("a").classList.add("cta-list-link");
});

let hiddenMenu = document.querySelector(".hidden-menu");

menuButton.addEventListener("click", () => {
  // console.log("clicked menu button");

  hiddenMenu.appendChild(menuList);
  hiddenMenu.classList.toggle("show-menu");
  hiddenMenu.classList.toggle("hide");
  // console.log("added?");
});
