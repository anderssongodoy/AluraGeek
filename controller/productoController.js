import { productServices } from "../services/productService.js";

const d = document;
const seccionStarwars = d.getElementById('starwars');
const seccionConsolas = d.getElementById('consolas');
const seccionDiversos = d.getElementById('diversos');

const crearNuevoProducto = (img, name, price, description, id) => {
  const tarjeta = d.createElement("div");
  const contenido = `
  <div class="border-2 mx-2 h-full">
    <div class="flex justify-center">
        <div class="flex justify-center m-5">
            <img src="${img}" alt="${description}" class="h-64 object-contain">
        </div>
    </div>
    <div class="mx-4 ">
        <div class="font-semibold text-sm">${name}</div>
        <div class="font-bold text-xl">S/. ${price}</div>
        <div class="font-semibold my-5"><a href="#">Ver Producto</a></div>
    </div>
  </div>`;
  tarjeta.innerHTML = contenido;
  return tarjeta;
};

function mostrarProductosEnSeccion(seccion, fetchData) {
  productServices[fetchData]().then((data) => {
    data.forEach(({ img, name, price, description, id }) => {
      const nuevaTarjeta = crearNuevoProducto(img, name, price, description, id);
      seccion.appendChild(nuevaTarjeta);
    });
  }).catch((err) => alert('Ocurrió un error'));
}

mostrarProductosEnSeccion(seccionStarwars, "starwars");
mostrarProductosEnSeccion(seccionConsolas, "consolas");
mostrarProductosEnSeccion(seccionDiversos, "diversos");
