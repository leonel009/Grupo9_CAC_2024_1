/******** Declaracion de variables de modulos */
const express = require(`express`);
const override = require('method-override');
const rutas = require('./src/routes/mainRoutes.js');

const app = express()


app.use(express.static(__dirname+`/public`))
app.use(express.urlencoded({extended: true}))
app.use(override('_metodo'))

app.use('/', rutas)

app.use((req, res, next) =>{
	res.status(404).send(`<h1 style="color: red">Recurso no encontrado!</h1>`)
})