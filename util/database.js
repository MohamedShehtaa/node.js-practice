const Sequelize = require('sequelize')


const sequelize = new Sequelize('node-complete', 'root','mohamed12345%',{
    dialect:'mysql',
    host:'localhost'
} )

module.exports = sequelize 