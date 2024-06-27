function construirLibros(libros){

    destino.innerHTML = ''; // limpiar campo
    
    for (let libro of libros){ // For que va insertando codigo
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
        console.log("hecho")
    }
}

