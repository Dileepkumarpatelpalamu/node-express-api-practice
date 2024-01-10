import { Router } from "express";
import {templateController} from "../controllers/templateController.js";
const router = Router();
router.get('/home',templateController.home);
router.get('/about',templateController.about);
router.get('/contact',templateController.contact);
router.get('/services',templateController.services);
router.get('/login',templateController.login);
router.get('/signup',templateController.signup);
export default router;

