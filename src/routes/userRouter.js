import { Router } from "express";
import { updateUserAvatar } from "../controllers/userController.js";
import { authenticate } from "../middleware/authenticate.js";


const router = Router();

router.post("/users/me/avatar", authenticate, updateUserAvatar);

export default router;