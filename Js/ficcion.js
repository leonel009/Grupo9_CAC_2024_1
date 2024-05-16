window.onload = function (){
    
    const destino = document.querySelector('#destino')
    
    const libros = []

    var ficcion = 'ficcion'

    obtenerLibrosFic();
    

}

function obtenerLibrosFic(){
    fetch('../../libros/ficcion.json')
    .then(res => res.json()) // el método .json() analiza la respuesta JSON en un objeto literal JS
    .then(datos => {
        console.log(datos)
        construirLibros(datos)
    })
    //libros = JSON.parse(JSON.stringify(data))
}

function construirLibros(libros){

    destino.innerHTML = ''; // limpiar campo
    
    for (let libro of libros){ // For que va insertando codigo
        console.log(libro);
        destino.innerHTML += '<div class="tarjeta">'
        destino.innerHTML += '<img src=' + libro.poster + ' alt="" class="imagen">'
        destino.innerHTML += '<div class="titulo"><p><h3> Titulo </h3> ' + libro.titulo + '</p></div>'
        destino.innerHTML += '<div class="genero"><p><h3> Género </h3> ' + libro.genero + '</p></div>'
        destino.innerHTML += '<div class="descripcion"><h3> Descripcion </h3> <p>' + libro.descripccion + '</p></div>'
        destino.innerHTML += '<div class"precio"><p><h3> Precio </h3> ' + libro.precio + ' ARS</p></div>';
        destino.innerHTML += '</div>'
        
    }

}