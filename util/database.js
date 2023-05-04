const mysql = require('mysql2')

const pool = mysql.createPool({ // option obj
    host:'localhost', //server host or name
    user:'root', // our username 
    database:'node-complete', // db name => cuze our server have multi dbs 
    password:'mohamed12345%'
})

// then we will export out pool 

module.exports = pool.promise()  // this allows us to use promises when working with these  connection  to handle async data  instead of callbacks