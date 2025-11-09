import { Router } from "express";
import { createNotes, deleteNote, getAllNote, getNoteById, testError, updateNote } from "../controllers/notesController.js";

const router = Router();


router.get("/notes", getAllNote);


router.get('/notes/:noteId', getNoteById);


router.post("/notes", createNotes);


router.delete("/notes/:noteId", deleteNote);


router.patch("/notes/:noteId", updateNote);


export default router;