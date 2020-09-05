const { User, City} = require('./app/models')
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.urlencoded({ extended: false }));
//City
app.get('/city', async(req, res)=>{
  try{
    const citys = await City.findAll();
    return res.json(citys);
  } catch(err){
    return res.status(400).json({
      error:err.message
    })
  }
})

app.post('/create/city', async(req, res)=>{
  try{
    const{
      name,
      uf
      } = req.body;
    
    const city = await City.create({
      name, uf
    });
    return res.status(201).json(city)
  } catch(err){
    return res.status(400).json({
      error:err.message
    })
  }
})

app.delete('/city/:id', async(req, res)=>{
  try{
    const city = City.destroy({
      where: { id: req.params.id }
    })
    return res.status(200).json(city)
  } catch(err){
    return res.status(400).json({
      error:err.message
    })
  }
	
})

app.put('/city/:id', (req, res) => {
  try {
    const{
      name,
      uf
      } = req.body;
    City.update({name:name, uf:uf},{where:{id: req.params.id}})
    return res.status(200).json(req.body)
  } catch (err) {
    return res.status(400).json({
      error:err.message
    })
  }
});

//Users
app.get('/users', async(req, res)=>{
  try{
    const users = await User.findAll();
    return res.json(users);
  } catch(err){
    return res.status(400).json({
      error:err.message
    })
  }
})

app.post('/create/users', async(req, res)=>{
  try{
    const{
      nome,
      sexo,
      rg,
      cpf,
      data_nascimento,
      salario,
      id_cidade
      } = req.body;
      const users = await User.create({
        nome,
        sexo,
        rg,
        cpf,
        data_nascimento,
        salario,
        id_cidade
      });
      return res.status(201).json(users)
  } catch(err){
    return res.status(400).json({
      error:err.message
    })
  }
})

app.delete('/users/:id', async(req, res)=>{
  try{
    const users = User.destroy({
      where: { id:req.params.id }
    })
    return res.status(200).json(users)
  } catch(err){
    return res.status(400).json({
      error:err.message
    })
  }
})

app.put('/users/:id', (req, res) => {
  try {
    const{
      nome,
      sexo,
      rg,
      cpf,
      data_nascimento,
      salario,
      id_cidade
      } = req.body;
    User.update({
      nome:nome,
      sexo:sexo,
      rg:rg,
      cpf:cpf,
      data_nascimento:data_nascimento,
      salario:salario,
      id_cidade:id_cidade},
      {where:{id:req.params.id}})
    return res.status(200).json(req.body)
  } catch (err) {
    return res.status(400).json({
      error:err.message
    })
  }
});

app.listen(3000)