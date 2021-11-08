const {Pool} = require('pg')
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    database: 'prueba1',
    port: '5432'
})

export default pool;