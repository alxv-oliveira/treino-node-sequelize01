const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Attendance = require('../models/Attendance');

const connection = new Sequelize(dbConfig);

Attendance.init(connection);

module.exports = connection;