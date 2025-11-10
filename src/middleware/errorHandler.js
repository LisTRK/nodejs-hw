import { HttpError } from "http-errors";

export const errorHandler =(err, req, res, next) => {
    const isProd = process.env.NODE_ENV === "production";
    
    if(err instanceof HttpError) return res.status(err.statusCode).json({
		message: err.message || err.name
	})


  res.status(500).json({
    message: isProd ? "Oops, something went wrong!": err.message
  })
  return;
}