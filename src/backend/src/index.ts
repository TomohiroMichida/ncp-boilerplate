import express from 'express';
import cors from 'cors';
import exampleRoutes from './routes/example-routes';

const app = express();
const port = process.env.BACKEND_PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api', exampleRoutes);

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
