import mongoose from 'mongoose';
import 'dotenv/config'; // Cargar variables de entorno desde .env

const dbConnection = async () => {
  try {
    // Conectamos sin las opciones obsoletas
    await mongoose.connect(process.env.MONGO_CNN);
    console.log('Connected to Database');
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw new Error('Database connection failed');
  }
};

export default dbConnection;
