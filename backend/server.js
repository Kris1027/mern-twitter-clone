import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log('Server is running at http://localhost:' + PORT);
});
