const { Sequelize, DataTypes } = require('sequelize')
const Pessoa = require('./pessoa')

const sequelize = new Sequelize('cadastro-orm', 'root', '', {
  dialect: 'mysql',
  host: '127.0.0.1'
})

Pessoa(sequelize, DataTypes)


sequelize.sync().then(() => console.log('synced'))


