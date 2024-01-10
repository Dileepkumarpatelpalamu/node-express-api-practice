import { Router } from "express";
import student from "../controllers/studentController.js";
import errorHandler from "../middilewares/errorHandler.js";
const route = Router();
route.get('/allStudent',student.allStudent);
route.get('/getStudent/:ID',student.getStudent);
route.post('/createStudent',student.createStudent);
route.put('/completeUpdateStudent/:ID',student.completeUpdateStudent)
route.patch('/updateStudent/:ID',student.updateStudent)
route.delete('/deleteStudent/:ID',student.deleteStudent)
export default route;