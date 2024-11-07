import mongoose from 'mongoose';

const connectMongoDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected:', connect.connection.host);
    } catch (error) {
        console.error('Error while connecting with database', error.message);
        process.exit(1);
    }
};

export default connectMongoDB;
