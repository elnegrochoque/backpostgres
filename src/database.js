const {Pool} = require('pg')
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'elnegrochoque',
    database: 'prueba1',
    port: '5432'
})

export default pool;