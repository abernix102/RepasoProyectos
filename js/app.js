const listaCursos = document.querySelector("#lista-cursos");
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");

cargarEvenlistener();

let carritoDeCursos = [];

function cargarEvenlistener() {
  listaCursos.addEventListener("click", agregarCurso);
  carrito.addEventListener("click", eliminarCurso);
  vaciarCarrito.addEventListener("click", () => {
    contenedorCarrito.innerHTML = "";
    
  })
}

function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}
function eliminarCurso(e) { 
  if(e.target.classList.contains("borrar-curso")){
    const cursoId = e.target.getAttribute('data-id');
    carritoDeCursos = carritoDeCursos.filter(curso =>  curso.id !== cursoId)
    cargarCarrito();
  }
}
function leerDatosCurso(curso) {
  const infoCurso = {
    img: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1
  };

  const existe = carritoDeCursos.some(curso => curso.id === infoCurso.id);
  if (existe) {
    const carritoNuevo = carritoDeCursos.map(curso => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });
    carritoDeCursos = [...carritoNuevo];
  } else {
    carritoDeCursos = [...carritoDeCursos, infoCurso];
  }
  cargarCarrito();
}

function cargarCarrito() {
  contenedorCarrito.innerHTML = "";

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
     <td>
       <button class="borrar-curso" data-id="${curso.id}">X</button>
     </td>
     `;
    contenedorCarrito.appendChild(row);
  });
}
