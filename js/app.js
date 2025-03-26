const listaCursos = document.querySelector("#lista-cursos");
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");

cargarEvenlistener();

let carritoDeCursos = [];

function cargarEvenlistener() {
  listaCursos.addEventListener("click", agregarCurso);
}

function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

function leerDatosCurso(curso) {
  const infoCurso = {
    img: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 0
  };
  
  carritoDeCursos = [...carritoDeCursos, infoCurso];
  cargarCarrito();
}

function cargarCarrito() {
  carritoDeCursos.forEach(curso => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
    <img src=${curso.img} />
    </td>
     <td>
        ${curso.titulo}
     </td>
     <td>
     ${curso.precio}
     </td>
     <td>
     ${curso.cantidad}
     </td>
     `;
    contenedorCarrito.appendChild(row);
  });
}
