import mongoose from 'mongoose';
require('dotenv').config();

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('MongoDB connected successfully');
    });

    connection.on('error', (err: any) => {
      console.log(
        process.env.MONGO_URI + "HERE IT GOES" +
        'MongoDB connection error. Please make sure MongoDB is running. ' + err
      );
      process.exit();
    });
  } catch (error) {
    console.log('Something goes wrong!');
    console.log(error);
  }
}