import createHttpError from "http-errors";
import { Note } from "../models/note.js";



export const getAllNote = async (req, res) => {  
  const notes = await Note.find();
  res.status(200).json(notes);
}; 



export const getNoteById = async (req, res) => {

  const noteId  = req.params.noteId;
  const note = await Note.findById(noteId);
  if(!note) 
    return res.status(404).json({
      message: "Note not found!"
  })
  console.log("noteID take");
  
  res.status(200).json(note);
}




export const testError =  () => {
  throw new Error('Simulated server error');
}



export const createNote = async (req, res) => {
  const newNote = await Note.create(req.body);
  res.status(201).json(newNote);
}



export const deleteNote = async (req, res) => {
  const {noteId} = req.params;
  const delNote = await Note.findByIdAndDelete(noteId);
  if(!delNote) {
    throw createHttpError(404 , 'Note not found!!!');
  };
  res.status(200).json(delNote);
}