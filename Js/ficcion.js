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
    //vaiable tipo sring
    //console.log("a construir con " + JSON.stringify(datos))
    destino.innerHTML = '';

    for (let libro of libros){
        console.log(libro);
        destino.innerHTML += '<h3> Titulo </h3> <p>' + libro.titulo + '</p> <br>'
        destino.innerHTML += '<h3> Género </h3> <p>' + libro.genero + '</p> <br>'
        destino.innerHTML += '<h3> Descripcion </h3> <p>' + libro.descripccion + '</p> <br>'
        destino.innerHTML += '<h3> Precio </h3> <p>' + libro.precio + ' ARS</p> <br>';
    }

    /*
    
        destino.innerHTML += '<h3> Titulo </h3> <p>' + libroActual.titulo + '</p> <br>'
        destino.innerHTML += '<h3> Género </h3> <p>' + libroActual.genero + '</p> <br>'
        destino.innerHTML += '<h3> Descripcion </h3> <p>' + libroActual.descripccion + '</p> <br>'
        destino.innerHTML += '<h3> Precio </h3> <p>' + libroActual.precio + ' ARS</p> <br>'
    /*
    for (var libroActual of libros) {

        destino.innerHTML += '<h3> Titulo </h3> <p>' + libroActual.titulo + '</p> <br>'
        destino.innerHTML += '<h3> Género </h3> <p>' + libroActual.genero + '</p> <br>'
        destino.innerHTML += '<h3> Descripcion </h3> <p>' + libroActual.descripccion + '</p> <br>'
        destino.innerHTML += '<h3> Precio </h3> <p>' + libroActual.precio + ' ARS</p> <br>'
    }
    */

    

    
}