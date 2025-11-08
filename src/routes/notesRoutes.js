import { Router } from "express";
import { createNote, deleteNote, getAllNote, getNoteById, testError } from "../controllers/notesControllers.js";

const router = Router();


router.get("/notes", getAllNote);


router.get('/notes/:noteId', getNoteById);


router.post("/notes", createNote);


router.delete("/notes", deleteNote)


router.get('/test-error', testError);


export default router;