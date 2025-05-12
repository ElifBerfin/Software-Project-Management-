const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Exam = sequelize.define('Exam', {
  courseName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  examType: {
    type: DataTypes.ENUM('Midterm Exam', 'Final Exam', 'Resit Exam', 'Practical Exam'), // Added Practical Exam
    allowNull: false,
  },
  examDate: {
    type: DataTypes.DATEONLY, // Changed to DATEONLY to store only the date (e.g., 2025-06-20)
    allowNull: false,
  },
  examTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  instructorId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  examFile: {
    type: DataTypes.STRING, // Added to store the path to the uploaded file
    allowNull: true,
  },
});

User.hasMany(Exam, { foreignKey: 'instructorId' });
Exam.belongsTo(User, { foreignKey: 'instructorId' });

module.exports = Exam;