const listaCursos = document.querySelector("#lista-cursos")
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#ista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito')


cargarEvenlistener()

let carritoDeCursos = [];

function cargarEvenlistener() {
     listaCursos.addEventListener('click', agregarCurso)
}


function agregarCurso(e) {
     e.preventDefault();
     if(e.target.classList.contains('agregar-carrito')){
          const cursoSeleccionado = e.target.parentElement.parentElement;
          leerDatosCurso(cursoSeleccionado)
     }
}

function leerDatosCurso(curso){
     // console.log(curso)
     infoCurso = {
          img: curso.querySelector("img").src
     }
     console.log(infoCurso.img)
}