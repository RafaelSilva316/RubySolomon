let menuButton = document.querySelector(".menu-icon");
let headerEl = document.querySelector("header");
let menuList = document.createElement("ul");
// add about me resources 518-555-5555 and email us
let about = document.createElement("li");
about.innerHTML = "about me";
let resources = document.createElement("li");
resources.innerHTML = "resources";
let phone = document.createElement("li");
phone.innerHTML = "518-555-5555";
let email = document.createElement("li");
email.innerHTML = "email me";

menuList.append(about, resources, phone, email);
let hiddenNavList = menuList.childNodes;

hiddenNavList.forEach(function (li) {
  li.classList.add("cta-list-link");
});

let hiddenMenu = document.querySelector(".hidden-menu");

menuButton.addEventListener("click", () => {
  // console.log("clicked menu button");

  hiddenMenu.appendChild(menuList);
  hiddenMenu.classList.toggle("show-menu");
  // console.log("added?");
});
