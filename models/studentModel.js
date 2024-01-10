// models/student.js
import mongoose from 'mongoose';

// Define the student schema
const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  mobile_no: {
    type: Number,
    required: true,
    unique:true
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  marks: {
    type: Number,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  }
});

// Create the student model
const Student = mongoose.model('Student', studentSchema,'students');

export default Student;
