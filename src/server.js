
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import helmet from "helmet";
import { connectMongoDB } from './db/connectMongoDB.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import { loggerHttp } from './middleware/logger.js';
import noteRouter from './routes/notesRoutes.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRouter.js';
import { errors} from 'celebrate';
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT ?? 3000;






// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(loggerHttp);

app.use(authRouter);
app.use(noteRouter);
app.use(userRouter);


app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);


await connectMongoDB();


app.listen(PORT, () => {
  console.log(`Worked PORT: ${PORT}`); 
});