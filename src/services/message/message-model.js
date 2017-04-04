'use strict';

// message-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const message = sequelize.define('messages', {
    text: {
      type: Sequelize.STRING,
      allowNull: false
    },
    sentById: {
      type: Sequelize.STRING,
      allowNull: true
    },
    sentByName: {
      type: Sequelize.STRING,
      allowNull: true
    }
  }, {
    freezeTableName: true
  });

  message.sync();

  return message;
};
