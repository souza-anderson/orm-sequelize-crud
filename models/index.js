const { Sequelize, DataTypes } = require('sequelize')
const fs = require('fs')
const path = require('path')

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

  Object.keys(models).forEach(modelName => {   
    if ('associate' in models[modelName]) {      
      models[modelName].associate(models)
    }
  })

// const pessoa = Pessoa(sequelize, DataTypes)

module.exports = {
  sequelize,
  models
}


