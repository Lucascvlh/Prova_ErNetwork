1)Todos os registros
SELECT *
FROM cities;

SELECT *
FROM users;

2)Apenas o primeiro registro
SELECT *
FROM cities
LIMIT 1;

SELECT *
FROM users
LIMIT 1;

3)Clientes que iniciam com a letra A
SELECT *
FROM users
WHERE nome LIKE 'A%';

4)Cliente que terminam com o sobrenome Silva
SELECT *
FROM users
WHERE nome LIKE '%Silva';

5)Selecionar o maior salário
SELECT MAX(salario)
FROM users;

6)Media salario por sexo 
SELECT
  AVG(salario)
FROM
  users
WHERE
  sexo = 'Feminino'
 
SELECT
  AVG(salario)
FROM
  users
WHERE
  sexo = 'Masculino'

7)Maior salário por cidade
SELECT
  MAX(salario)
FROM
  users
WHERE
  id_cidade = 3;

8)Todos os clientes com a cidade
SELECT nome, sexo, cpf, rg, data_nascimento, name, uf
FROM users, cities
WHERE users.id_cidade = cities.id;
