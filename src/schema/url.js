const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Url = sequelize.define('Url', {
  longUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true, // Ensure that the longUrl is not empty
    },
  },
  shortenedUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Url;
