
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import helmet from "helmet";
import connectMongoDB from './db/connectMongoDB.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import { loggerHttp } from './middleware/logger.js';
import noteRouters from './routes/notesRoutes.js';
import { errors, isCelebrateError } from 'celebrate';


const app = express();
const PORT = process.env.PORT ?? 3000;




// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(loggerHttp);

//routes
app.use(noteRouters)




app.use(errors());


//error pages
app.use(notFoundHandler);



app.use(errorHandler);


await connectMongoDB();


app.listen(PORT, () => {
  console.log(`Worked PORT: ${PORT}`);
    
});