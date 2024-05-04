window.onload = function (){

    fetch('../../libros/ficcion.json')
    .then(res => res.json()) // el método .json() analiza la respuesta JSON en un objeto literal JS
    .then(data => console.log(data));

    //cargar libros
    //buildLibros();
}


function buildLibros(){
/*    //vaiable tipo sring
    let htmlString = "<h3>Libros: <h3>";

    htmlString += "";

    

        htmlString += '<h3> Titulo </h3> <p>' + libroActual.titulo + '</p> <br>'
        htmlString += '<h3> Género </h3> <p>' + libroActual.genero + '</p> <br>'
        htmlString += '<h3> Descripcion </h3> <p>' + libroActual.descripccion + '</p> <br>'
        htmlString += '<h3> Precio </h3> <p>' + libroActual.precio + ' ARS</p> <br>'
    }
*/
    for (let i = 0; i < Libros[i]; i ++){

        let libroActual = Libro[i];

        const element = array[i];
        console.log("Titulo: " + libroActual.titulo);
        console.log("Género: " + libroActual.genero);
        console.log("Descripcion: " + libroActual.descripcion);
        console.log("Precio: " + libroActual.precio + " ARS");
    }
}