const express = require('express');
const router = express.Router();
const Exam = require('../models/Exam');
const User = require('../models/User');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'application/pdf') {
      return cb(new Error('Only PDF files are allowed'));
    }
    cb(null, true);
  },
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

// Mapping of instructor names to emails (temporary solution)
const instructorNameToEmail = {
  'Dr. Angela Merton': 'instructor@sw.edu.tr',
  'Professor Seyfullah Tumbili': 'seyfullah@sw.edu.tr',
  'Dr. Eugene Harvard': 'eugene@sw.edu.tr',
  'Dr. François Ingelmann': 'francois@sw.edu.tr',
};

router.get('/exams', async (req, res) => {
  try {
    const exams = await Exam.findAll({
      include: [{ model: User, attributes: ['email', 'name'] }],
    });
    res.status(200).json(exams);
  } catch (error) {
    console.error('Error fetching exams:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/exams/add', upload.single('examFile'), async (req, res) => {
  const { courseName, instructorName, examType, examDate, examTime } = req.body;

  try {
    // Map instructorName to instructorEmail
    const instructorEmail = instructorNameToEmail[instructorName];
    if (!instructorEmail) {
      return res.status(404).json({ success: false, message: 'Instructor email not found for the given name' });
    }

    const instructor = await User.findOne({ where: { email: instructorEmail } });
    if (!instructor) {
      return res.status(404).json({ success: false, message: 'Instructor not found in the database' });
    }

    const exam = await Exam.create({
      courseName,
      examType,
      examDate,
      examTime,
      instructorId: instructor.id,
      examFile: req.file ? req.file.path : null,
    });

    res.status(201).json({ success: true, message: 'Exam scheduled successfully', exam });
  } catch (error) {
    console.error('Error adding exam:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

router.delete('/exams/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const exam = await Exam.findByPk(id);
    if (!exam) {
      return res.status(404).json({ success: false, message: 'Exam not found' });
    }

    if (exam.examFile) {
      fs.unlink(exam.examFile, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }

    await exam.destroy();
    res.status(200).json({ success: true, message: 'Exam deleted successfully' });
  } catch (error) {
    console.error('Error deleting exam:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;