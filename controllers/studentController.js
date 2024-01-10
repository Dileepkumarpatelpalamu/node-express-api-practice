import {
  studentSchemaValidation,
  studentSchemaValidationPartial,
} from "../validators/studentSchemaValidation.js";
import { CustomErrorHandler } from "../services/customErrorHandler.js";
import sendResponse from "../services/responseUtil.js";
import Student from "../models/studentModel.js";
import connectiondb from "../configs/connectiondb.js";
const student = {
  allStudent: async (req, res, next) => {
    connectiondb();
    const resultData = await Student.find().select("-__v");
    return res.json({ data: resultData });
  },
  getStudent: async (req, res, next) => {
    const ID = req.params.ID;
    if (ID != undefined || ID != "") {
      connectiondb();
      try {
        const resultData = await Student.findById(ID).select("-__v");
        if (resultData != null) {
          sendResponse(res, resultData);
        } else {
          sendResponse(res, { message: "Invalid object id" }, 400);
        }
      } catch (err) {
        next(err);
      }
    } else {
      sendResponse(res, { message: "Parameters missing...!" }, 400);
    }
  },
  createStudent: async (req, res, next) => {
    const { error } = studentSchemaValidation.validate(req.body);
    if (error) {
      return next(error);
    }
    connectiondb();
    try {
      const exists =
        (await Student.exists({ email: req.body.email })) ||
        (await Student.exists({ mobile_no: req.body.mobile_no }));
      if (exists) {
        return next(
          CustomErrorHandler.alreadyExits(
            "Email or mobile number already exists"
          )
        );
      }
    } catch (err) {
      return next(err);
    }
    try {
      const createObject = new Student(req.body);
      const saveStatus = await createObject.save();
      if (saveStatus) {
        return res.status(201).json({ data: saveStatus });
      } else {
        return res.status(500).json("Interanl server error");
      }
    } catch (err) {
      return next(err);
    }
  },
  completeUpdateStudent: async (req, res, next) => {
    const ID = req.params.ID;
    const { error } = studentSchemaValidation.validate(req.body);
    if (error || ID === undefined) {
      return next(error);
    }
    connectiondb();
    let updateObj = req.body;
    const resultData = await Student.findOneAndUpdate({ _id: ID }, updateObj, {
      new: true,
    });
    if (resultData) {
      return res.status(200).json({ data: resultData });
    } else {
      return res.status(404).json({ error: "Invalid id to update" });
    }
  },
  updateStudent: async (req, res, next) => {
    const ID = req.params.ID;
    const { error } = studentSchemaValidationPartial.validate(req.body);
    if (error || ID === undefined) {
      return next(error);
    }
    connectiondb();
    try {
      let updateObj = { $set: req.body };
      const resultData = await Student.findOneAndUpdate(
        { _id: ID },
        updateObj,
        {
          new: true,
        }
      );
      if (resultData) {
        sendResponse(res, resultData);
      } else {
        sendResponse(res, { message: "Object updating error" }, 400);
      }
    } catch (err) {
      next(err);
    }
  },
  deleteStudent: async (req, res, next) => {
    const ID = req.params.ID;
    if (ID != undefined) {
      connectiondb();
      try{
        const resultData = await Student.deleteOne({ _id: ID }).select("-__v");
        if (resultData) {
          sendResponse(res,{ _id: ID, message: "Object deleted successfully" });
        } else {
          sendResponse(res,{data: "Invalid object _id given" },400);
        }
      }catch(err){
        next(err)
      }
      
    } else {
      res.status(400).json({ message: "Invalid Object _id" });
    }
  },
};

export default student;
