
const PessoaModel = (sequelize, DataTypes) => {
  const Pessoa = sequelize.define('Pessoa', {
    nome: DataTypes.STRING,
    nascimento: DataTypes.DATE
  })

  return Pessoa
}

module.exports = PessoaModel