import { Router } from "express";
import { getAllNote, getNoteById, testError } from "../controllers/notesControllers.js";

const router = Router();


router.get("/notes", getAllNote);


router.get('/notes/:noteId', getNoteById);


router.get('/test-error', testError);


export default router;