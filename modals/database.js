const { Sequelize } = require('sequelize');

async function connect(){
    const sequelize = new Sequelize('postgres', 'postgres', 'root123', {
        host: 'localhost',
        dialect: 'postgres'
     });

     try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}


module.exports = connect;