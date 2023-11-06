// config/database.ts

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('F3A', 'dynamiccoders', 'dynamiccoders', {
  host: '35.192.205.195', // Replace with your database host
  dialect: 'mysql', // Replace with your database dialect (e.g., mysql, postgres, sqlite)
  logging: false, // Set to true to enable SQL query logging
});
// const sequelize = new Sequelize('SoccerGame', 'root', 'pranitha', {
//   host: 'localhost', // Replace with your database host
//   dialect: 'mysql', // Replace with your database dialect (e.g., mysql, postgres, sqlite)
//   logging: false, // Set to true to enable SQL query logging
// });
(async () => {
  try {
    // Test the database connection
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export default sequelize;
