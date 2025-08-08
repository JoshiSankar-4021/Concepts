import express from 'express';
import pool from './db.js';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors())

app.get('/api/hello', (req, res) => {
  res.json({ message: 'hello this is get api from express' });
});

app.post('/api/hello', (req, res) => {
  const data = req.body;
  res.json({ message: 'posted data', data });
});

app.get('/api1/hi',(req,res)=>{
    res.json({message:"this second api"})
})

app.post('/api/hi1', async (req, res) => {
  try {
    const { email, name } = req.body;
    const query = `INSERT INTO "user_registration" (name, email) VALUES ($1, $2)`;
    const values = [name, email];
    await pool.query(query, values);
    res.status(200).json({ message: "Posted user" });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ message: "Table doesn't exist or other error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
