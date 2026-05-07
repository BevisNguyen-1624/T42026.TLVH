import mongoose from 'mongoose';

const uri = "mongodb+srv://dbuser:eueKkIvKo0YiWNM2@cluster0.dmu7njj.mongodb.net/mydb?appName=Cluster0";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(uri, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

const resultSchema = new mongoose.Schema({
  userId: String,
  score: Number,
  timestamp: { type: Date, default: Date.now }
}, { collection: 'binh', versionKey: false });

const Result = mongoose.models.Result || mongoose.model('Result', resultSchema);

export default async function handler(req, res) {
  // CORS configuration (often needed if deployed under different domains on Vercel)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      await connectToDatabase();
      const { userId, score } = req.body;
      
      if (!userId) {
        return res.status(400).json({ error: 'Missing userId' });
      }

      const newResult = new Result({ userId, score });
      await newResult.save();
      
      return res.status(200).json({ message: 'Result saved successfully', data: newResult });
    } catch (error) {
      console.error('Save error:', error);
      return res.status(500).json({ error: 'Failed to save result' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
