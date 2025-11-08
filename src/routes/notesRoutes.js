import { Router } from "express";
import { createNote, deleteNote, getAllNote, getNoteById, testError, updateNote } from "../controllers/notesController.js";

const router = Router();


router.get("/notes", getAllNote);


router.get('/notes/:noteId', getNoteById);


router.post("/notes", createNote);


router.delete("/notes/:noteId", deleteNote);


router.patch("/notes/:noteId", updateNote);


router.get('/test-error', testError);


export default router;