const { Sequelize, DataTypes } = require('sequelize')
const fs = require('fs')
const path = require('path')
const Pessoa = require('./pessoa')

const sequelize = new Sequelize('cadastro-orm', 'root', '', {
  dialect: 'mysql',
  host: '127.0.0.1'
})

const models = {}
fs
  .readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes)
    models[model.name] = model
  })

// const pessoa = Pessoa(sequelize, DataTypes)

module.exports = {
  sequelize,
  models
}


