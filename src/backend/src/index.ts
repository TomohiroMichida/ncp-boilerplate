import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.BACKEND_PORT || 4000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from Backend API!' });
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
