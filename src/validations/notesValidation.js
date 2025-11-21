import { Joi, Segments } from "celebrate";
import { TAGS } from "../constants/tags.js";
import { isValidObjectId } from "mongoose";

export const getAllNotesSchema = {
    [Segments.QUERY]: Joi.object({
    page: Joi.number().min(1).default(1),
    perPage: Joi.number().min(5).max(20).default(10),
    tag: Joi.string().trim().valid(...TAGS),
    search: Joi.string().trim().allow(''),
})
}

const objectIdValidator =(value, helpers)=>{
    if(!isValidObjectId){
        return helpers.message("Invalid ObjectId")
    }
}


export const noteIdSchema = {
    [Segments.PARAMS]: Joi.object({
        noteId: Joi.custom(objectIdValidator).required(),
    })
}


export const createNoteSchema = {
    [Segments.BODY]: Joi.object({
        title: Joi.string().min(1).required(),
        content: Joi.string().allow(""),
        tag: Joi.string().valid(...TAGS)
    })
}


export const updateNoteSchema = {
    ...noteIdSchema,
    [Segments.BODY]: Joi.object({
        title: Joi.string().min(1),
        content: Joi.string().allow(""),
        tag: Joi.string().valid(...TAGS)
    }).min(1)

}