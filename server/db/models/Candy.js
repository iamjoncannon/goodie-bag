const Sequelize = require('sequelize');
const db = require('../database');

const Candy = db.define('candy', {
  // define your model here!
	name: {
	  type: Sequelize.STRING, 
	  allowNull: false
	},
	description: {
	  type: Sequelize.TEXT, 
	  allowNull: false
	},
	quantity: {
	  type: Sequelize.INTEGER, 
	  allowNull: false
	},
	imageUrl: {
	  type: Sequelize.STRING, 
	  allowNull: false
	}
});

module.exports = { db, Candy };
