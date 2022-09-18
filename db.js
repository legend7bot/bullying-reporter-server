import mongoose from 'mongoose';

const connectDB = async () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    await mongoose.connect(process.env.MONGO_URI, connectionParams);
    console.log('Connected to database successfully');
  } catch (error) {
    console.log(error);
    console.log('Error connecting to database');
  }
};

export default connectDB;
