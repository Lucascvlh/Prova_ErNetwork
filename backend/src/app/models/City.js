module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City',{
    /*id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV1,
      primaryKey:true,
    },*/
    name: DataTypes.STRING,
    uf: DataTypes.STRING,
  })
  return City;
}