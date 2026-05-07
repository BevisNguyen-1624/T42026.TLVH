import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connection string with provided credentials and database name
const uri = "mongodb+srv://dbuser:eueKkIvKo0YiWNM2@cluster0.dmu7njj.mongodb.net/mydb?appName=Cluster0";

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// Define Schema mapped to 'binh' collection
const resultSchema = new mongoose.Schema({
  userId: String,
  score: Number,
  timestamp: { type: Date, default: Date.now }
}, { collection: 'binh', versionKey: false });

const Result = mongoose.model('Result', resultSchema);

app.post('/api/save-result', async (req, res) => {
  try {
    const { userId, score } = req.body;
    
    if (!userId) {
      return res.status(400).json({ error: 'Missing userId' });
    }

    const newResult = new Result({ userId, score });
    await newResult.save();
    
    console.log(`Saved result for user ${userId} with score ${score}`);
    res.status(200).json({ message: 'Result saved successfully', data: newResult });
  } catch (error) {
    console.error('Save error:', error);
    res.status(500).json({ error: 'Failed to save result' });
  }
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
