

window.onload = function (){
    
    const destino = document.querySelector('#destino')

    obtenerLibrosInf();
    

}

function construirLibros(libros){

    destino.innerHTML = ''; // limpiar campo
    
    for (let libro of libros){ // For que va insertando codigo
        destino.innerHTML +='<div class="tarjeta">'
        destino.innerHTML +='<div class="imagen">'
        destino.innerHTML +='<img src=' + libro.poster + ' alt="" class="imagen">'
        destino.innerHTML +='</div>'
        destino.innerHTML +='<div class="contenido">'   
        destino.innerHTML +='<ul class="datos">'
        destino.innerHTML +='<li><span class="titulo"> ' + libro.titulo + '</span><li>'
        destino.innerHTML +='<li>Genero: <span>' + libro.genero + '</span></li>'
        destino.innerHTML +='<li><span>Descripcion:</span> ' + libro.descripcion + '</li>'
        destino.innerHTML +='<li>Precio: <span>' + libro.precio + ' ARS </span></li>'
        destino.innerHTML +='</ul>'
        destino.innerHTML +='</div>'
        destino.innerHTML +='</div>'
        console.log("hecho")
    }
}

function obtenerLibrosInf(){
    fetch('../../libros/infantil.json')
    .then(res => res.json()) // el método .json() analiza la respuesta JSON en un objeto literal JS
    .then(datos => {
        console.log(datos)
        construirLibros(datos)
    })
    //libros = JSON.parse(JSON.stringify(data))
}
