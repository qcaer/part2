const url = 'http://localhost:3000/api/articulos'
const contenedor = document.querySelector('tbody')
let resultados = ''

const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'))
const formArticulo = document.querySelector('form')
const descripción = document.getElementById('descripción')
const precio = document.getElementById('precio')
const stock = document.getElementById('stock')
let opcion = ''

btnCrear.addEventListener('click', ()=>{
    descripción.value = ''
    precio.value = ''
    stock.value = ''
    modalArticulo.show()
    opcion = 'crear'
})

//function para mostrar los resultados
const mostrar = (articulos) => {
    articulos.forEach(articulo => {

    
    resultados += ` <tr>
                                <td>${articulo.id}</td>
                                <td>${articulo.descripción}</td>
                                <td>${articulo.precio}</td>
                                <td>${articulo.stock}</td>
                                <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-primary">Borrar</a></td>

                            </tr>
                      `
    })
    contenedor.innerHTML = resultados

}



//procedimiento mostrar
fetch(url)
    .then( response => response.json() )
    .then( data => mostrar(data) )
    .catch( error => console.log(error))

