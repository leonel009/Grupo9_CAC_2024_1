/******** Declaracion de variables de modulos*//*
const express = require('express');
/*const override = require('method-override');*//*
const rutas = require('../src/routes/mainRoutes.js');

const app = express()
const port = ""

app.set('view engine', 'ejs')
app.set('views', (__dirname + '/src/views'))

app.use(express.static(__dirname+`/public`))
app.use(express.urlencoded({extended: true}))
app.use(override('_metodo'))

app.use('/', rutas)
app.use(express.json())

app.use((req, res, next) =>{
	res.status(404).send(`<h1 style="color: red">Recurso no encontrado!</h1>`)
})
*/

const http = require('http')

const server = http.createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type' : 'txt/plain'
	})
	res.end('Hola desde un server HTTP nativo (con Node.js)')
})

server.listen(8080, () => {console.log('estoy arriba en el puerto 8080')})