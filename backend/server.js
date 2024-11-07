import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready!');
});

const PORT = process.env.PORT || 3000;

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log('Server is running at http://localhost:' + PORT);
});
