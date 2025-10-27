// UD3 · Nivel 2 (Starter)
// Objetivo: mostrar info de location/screen, gestionar history, alternar tema persistente y abrir ayuda con query string.
// RAs: RA2–RA3.

const info = document.getElementById("info");
const KEY_TEMA = "tema";

/**
 * TODO 1: Función pintarInfo() — crear dinámicamente una lista con:
 * - location.href
 * - location.pathname
 * - screen.width
 * - screen.height
 * Inserta la lista en #info (tip: innerHTML con una <ul>) -Preferí utilizar appendChild, por seguridad-
 */
function pintarInfo() {
  //Crear lista ul
  const ul = document.createElement("ul");
  //Crear elementos li
  const hrefLi = document.createElement("li");
  const pathLi = document.createElement("li");
  const widthLi = document.createElement("li");
  const heightLi = document.createElement("li");

  //Asignar valores
  hrefLi.textContent = "Href: " + document.location.href;
  pathLi.textContent = "Path: " + document.location.pathname;
  widthLi.textContent = "Ancho de pantalla: " + screen.width + " px";
  heightLi.textContent = "Alto de pantalla: " + screen.height + " px";

  //Añadir elemento li a lista
  ul.appendChild(hrefLi);
  ul.appendChild(pathLi);
  ul.appendChild(widthLi);
  ul.appendChild(heightLi);

  //Añadir lista a #info
  info.appendChild(ul);
}

/**
 * TODO 2: Gestión de tema
 * - leerTema(): devuelve 'light' o 'dark' (desde localStorage o por defecto 'light')
 * - aplicarTema(tema): aplica clase al <body>
 * - al pulsar bTema: alterna y persiste
 */
function leerTema() {
  //Recuperar color si existe en localStorage, si no, por defecto light
  let tema = localStorage.getItem("tema") ?? "light";
  return tema;
}
function aplicarTema(tema) {
  //Aplica directamente la clase que introduzcas
  document.body.className = tema;
}

// TODO 3: history.back() y history.forward()
document.getElementById("bAtras").addEventListener("click", () => {
  // TODO
  history.back();
});
document.getElementById("bAdelante").addEventListener("click", () => {
  // TODO
  history.forward();
});

// 4: Cambiar tema mediante el boton
document.getElementById("bTema").addEventListener("click", () => {
  //Recoger tema si lo hubiera
  let tema = leerTema();

  //Condicional para evaluar el tema anterior y asignar nuevo valor a tema
  if (tema === "light") {
    tema = "dark";
    aplicarTema(tema);
  } else if (tema === "dark") {
    tema = "light";
    aplicarTema(tema);
  }

  //Guardar nuevo tema en locastorage
  localStorage.setItem("tema", tema);
});

// TODO 5: Abrir ayuda con query ?autor=... (pedir con prompt y usar encodeURIComponent)
document.getElementById("bAyuda").addEventListener("click", () => {
  //Pide nombre de usuario
  let nombre = prompt("Introduce tu nombre:");
  //Crear url con query y usando encodeURI para evitar problemas con espacios o caracteres inesperados
  let url = "ayuda.html?usuario=" + encodeURIComponent(nombre);
  window.open(url);
});

// Inicialización
// TODO: aplicarTema(leerTema()); y pintarInfo()
aplicarTema(leerTema());
pintarInfo();
