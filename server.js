require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    
    pass: process.env.EMAIL_PASS,
    
  },
});

app.get('/api/projects', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projects');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/send-message', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Message from ${name} - ${email}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    // Insert the message into the messages table
    const insertMessageQuery = `
      INSERT INTO messages (name, email, message) VALUES ($1, $2, $3)
    `;
    const insertResult = await pool.query(insertMessageQuery, [name, email, message]);
    console.log('Insert result:', insertResult);

    res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Error in /send-message:', error);
    res.status(500).json({ message: 'Error sending email.', error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});