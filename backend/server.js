import { v2 as cloudinary } from 'cloudinary';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';

import authRoutes from './routes/auth.route.js';
import notificationRoutes from './routes/notification.route.js';
import postRoutes from './routes/post.route.js';
import userRoutes from './routes/user.route.js';

import connectMongoDB from './db/connect-mongodb.js';

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '5mb' })); // to parse req.body
// limit shouldn't be to high to prevent DOS

app.use(express.urlencoded({ extended: true })); // to parse form data(urlencoded)

app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/notifications', notificationRoutes);

app.listen(PORT, () => {
    connectMongoDB();
    console.log('Server is running at http://localhost:' + PORT);
});
