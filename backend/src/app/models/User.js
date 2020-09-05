module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',{
    nome: DataTypes.STRING,
    sexo: DataTypes.STRING,
    rg: DataTypes.BIGINT,
    cpf: DataTypes.BIGINT,
    data_nascimento: DataTypes.STRING,
    salario: DataTypes.FLOAT,
    id_cidade: DataTypes.BIGINT,
  })
  return User;
}