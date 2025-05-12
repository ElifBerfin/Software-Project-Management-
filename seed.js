const User = require('./models/User');
const Exam = require('./models/Exam');
const sequelize = require('./config/database');

// Drop and recreate tables
sequelize.sync({ force: true }).then(async () => {
  const users = [
    { email: 'student@sw.edu.tr', password: '123456', role: 'student', name: 'Student One' },
    { email: 'instructor@sw.edu.tr', password: '123456', role: 'instructor', name: 'Dr. Angela Merton' },
    { email: 'secretary@sw.edu.tr', password: '123456', role: 'secretary', name: 'Sarah Johnson' },
    { email: 'seyfullah@sw.edu.tr', password: '123456', role: 'instructor', name: 'Professor Seyfullah Tumbili' },
    { email: 'eugene@sw.edu.tr', password: '123456', role: 'instructor', name: 'Dr. Eugene Harvard' },
    { email: 'francois@sw.edu.tr', password: '123456', role: 'instructor', name: 'Dr. François Ingelmann' },
  ];

  await User.bulkCreate(users, { individualHooks: true });

  const instructor = await User.findOne({ where: { email: 'instructor@sw.edu.tr' } });

  const exams = [
    {
      courseName: 'Cognitive Psychology & Human Behaviour',
      examType: 'Final Exam',
      examDate: '2025-06-10',
      examTime: '12:00:00',
      instructorId: instructor.id,
    },
    {
      courseName: 'Psychology',
      examType: 'Resit Exam',
      examDate: '2025-06-14',
      examTime: '14:00:00',
      instructorId: instructor.id,
    },
    {
      courseName: 'Psychology',
      examType: 'Resit Exam',
      examDate: '2025-07-22',
      examTime: '10:00:00',
      instructorId: instructor.id,
    },
  ];

  await Exam.bulkCreate(exams);

  console.log('✅ Test users and exams created');
  process.exit();
}).catch(console.error);