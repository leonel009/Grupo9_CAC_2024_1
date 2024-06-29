const { conn } = require('../db/dbconnect')

module.exports = {

	getLibros: async (req, res) => {
		try{
			const [ registros ] = await conn.query(`SELECT * FROM libreria`)
			res.json(registros)
		} catch (error) {
			throw error
		} finally{
			conn.releaseConnection()
		}
	},

	
}