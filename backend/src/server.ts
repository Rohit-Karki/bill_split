import express from 'express';
import path from 'node:path';
import axios from 'axios';
import morgan from 'morgan';
import NodeCache from 'node-cache';
import { format } from 'date-fns';
import * as url from 'node:url';
import { ErrorHandler } from './errorhandling/index.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const appCache = new NodeCache();

const app = express();

const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  {
    stream: {
      write: (message) => console.log(message.trim()),
    },
  }
);

const errorHandler = new ErrorHandler()


app.use(morganMiddleware);

app.get('/ping', async (req, res, next) => {
  res.send("Pong");
});

// Error handling middleware, we delegate the handling to the centralized error handler
app.use(async (err: Error, req: Request, res: Response, next: NextFunction) => {
  await errorHandler.handleError(err, res);
});

process.on("uncaughtException", (error:Error) => {
  errorHandler.handleError(error);
});

process.on("unhandledRejection", (reason) => {
  errorHandler.handleError(reason);
});



const port = process.env.PORT || 3000;
const server = app.listen(port, async () => {
  console.log(`server started on port: ${port}`);
});
