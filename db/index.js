const Sequelize = require('sequelize');
//INIT DB
require("dotenv").config()
const sequelize = new Sequelize(process.env.DATABASE_URL);
//INIT MODEL
var db = {}
db.user = sequelize.define('user', {
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING }
});
//CONNECT DB
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
module.exports = db
