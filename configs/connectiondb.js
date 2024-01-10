import mongoose from 'mongoose';
import mongoURI from './index.js';
/*
const options = {
  'user':'',
  'pass':'',
  'dbName':'',
  'authSource':''
};
*/
const options ={}
// Connect to MongoDB
const connectiondb= async() =>{
     await mongoose.connect(mongoURI.mongoURI, options)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
});
}
export default connectiondb;
