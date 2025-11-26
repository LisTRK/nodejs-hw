import { Router } from "express";
import { createUser, loginUser, logoutUser, refreshUserSession } from "../controllers/authController.js";
import { celebrate } from "celebrate";
import { liginUserSchema, registerUserSchema } from "../validations/authValidation.js";


const router = new Router();

router.post("/auth/register", celebrate(registerUserSchema), createUser);
router.post("/auth/login", celebrate(liginUserSchema), loginUser)
router.post("/auth/logout", logoutUser);
router.post('/auth/refresh', refreshUserSession);

export default router;