### Conversão de uma API originalmente provida com MySQL, para a abstração permitida por uma ORM, neste programa, Sequelize

### Como instalar:
```
  -> git  clone https://github.com/alxv-oliveira/treino-node-sequelize01
  -> cd treino-node-sequelize
  -> npm install
  -> npm start
```
**Agora mude as configurações para o seu banco de dados em config/database.js**

**Crie o banco de dados *treino_02_04* **

**Inicialize as migrations com o comando**

```
yarn sequelize db:migrate
```
Teste a rota http://localhost:3333/attendances , se retornar vazio, o programa esa configurado corretamente.
