import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import connectMongoDB from './db/connect-mongodb.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // to parse req.body
app.use(express.urlencoded({ extended: true })); // to parse form data(urlencoded)

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    connectMongoDB();
    console.log('Server is running at http://localhost:' + PORT);
});
