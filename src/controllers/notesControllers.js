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
  const noteId = req.params.noteId;
  console.log("ID", noteId);
  
  const note = await Note.findByIdAndDelete(noteId);
  if(!note){
    throw createHttpError(404, 'Note not found! :(');
  };
  res.status(200).json(note);
}

export const updateNote = async (req, res)=>{
  const noteId = req.params.noteId;
  const updatedNote = await Note.findByIdAndUpdate(noteId, req.body, {new: true});
  if(!updatedNote){
    throw createHttpError(404, 'Note not found! :(');
  };
  res.status(200).json(updatedNote)
}

// export const updateProduct = async (req, res) => {
//     const { productId } = req.params;
//     const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });

//     if (!updatedProduct) {
//     throw createHttpError(404, 'Product not found');
//     }

//     res.status(200).json(updatedProduct);
// }