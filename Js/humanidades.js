window.onload = function (){
    
    const destino = document.querySelector('#destino')
    
    const libros = []

    var humanidades = 'humanidades'

    obtenerLibrosHum();
    

}

function obtenerLibrosHum(){
    fetch('../../libros/psicologia.json')
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
        //console.log(libro);
        //destino.innerHTML += '<h3> Titulo </h3> <p>' + libro.titulo + '</p>'
        //destino.innerHTML += '<img src=' + libro.poster + ' alt="" class="imagen">'
        //destino.innerHTML += '<h3> Género </h3> <p>' + libro.genero + '</p>'
        //destino.innerHTML += '<h3> Descripcion </h3> <p>' + libro.descripccion + '</p>'
        //destino.innerHTML += '<h3> Precio </h3> <p>' + libro.precio + ' ARS</p>';
        
        /*destino.innerHTML += '<div class="tarjeta">'
        destino.innerHTML +='<div class="titulo">' + libro.titulo + '</div>'
        destino.innerHTML +='<ul class="datos">'
        destino.innerHTML +='<li><img src=' + libro.poster + ' alt="" class="imagen"></li>'
        destino.innerHTML +='<li><span>Genero:</span> ' + libro.genero + '</li>'
        destino.innerHTML +='<li><span>Descripcion:</span> ' + libro.descripccion + '</li>'
        destino.innerHTML +='<li><span>Precio:</span> ' + libro.precio + '</li>'
        destino.innerHTML +='</ul>'
        destino.innerHTML +='</div>'*/

        destino.innerHTML +='<div class="tarjeta">'
        destino.innerHTML +='<div class="imagen">'
        destino.innerHTML +='<img src=' + libro.poster + ' alt="" class="imagen">'
        destino.innerHTML +='</div>'
        destino.innerHTML +='<div class="contenido">'
        destino.innerHTML +='<div class="titulo">' + libro.titulo + '</div>'
        destino.innerHTML +='<ul class="datos">'
        destino.innerHTML +='<li><span>Genero:</span> ' + libro.genero + '</li>'
        destino.innerHTML +='<li><span>Descripcion:</span> ' + libro.descripccion + '</li>'
        destino.innerHTML +='<li><span>Precio:</span> ' + libro.precio + '</li>'
        destino.innerHTML +='</ul>'
        destino.innerHTML +='</div>'
        destino.innerHTML +='</div>'
    }

}