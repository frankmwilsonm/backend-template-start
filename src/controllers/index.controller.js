//Para conectarnos a postgresql
const { Pool } = require('pg');

var fs = require('fs');

const pool = new Pool({
	host: 'localhost',
	user: 'postgres',
	password: 'admin',
	database: 'picapibet',
	port: '5432'
});

const getUsers = async (req, res) => { 
	const response = await pool.query('SELECT * FROM users');
	res.status(200).json(response.rows);
};


// req = solicitud
// res = respuesta

// Async = funcion asincrona (paralelismo)
// await = esperar 


function suma (){
    let a =1
    var b =2
    const c=3
}

const getUserById = async (req, res) => {

console.log('holaaaa ')

};



const createUser = async (req, res) => {
const { name, email } = req.body;

const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
console.log(response);
res.json({
	message: 'User added Succesfully',
	body: {
		user: {name, email}
	}
})


};


const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    const response =await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
        name,
        email,
        id
    ]);
    res.json('User Updated Successfully');
};


const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users where id = $1', [
        id
    ]);
    res.json(`User ${id} deleted Successfully`);
};



module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}


// Este contenido nos servirá para rellenar nuestro doc de peso
var extracode = `\n<br>codigo spam :B`

