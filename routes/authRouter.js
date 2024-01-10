import { Router } from "express";
import AuthController from "../controllers/authController.js";
const authRouter = Router();
authRouter.get('/',AuthController.home);
authRouter.get('/about',AuthController.about);
authRouter.get('/contact',AuthController.contact);
authRouter.get('/services',AuthController.services);
authRouter.get('/login',AuthController.login);
authRouter.get('/signup',AuthController.signup);
authRouter.post('/dosignup',AuthController.doSignup);
export default authRouter;

