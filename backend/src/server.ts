import express from 'express';
import path from 'node:path';
import axios from 'axios';
import morgan from 'morgan';
import NodeCache from 'node-cache';
import { format } from 'date-fns';
import * as url from 'node:url';

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

app.use(morganMiddleware);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '..', 'views'));


app.get('/ping', async (req, res, next) => {
  res.send("Pong");
});

const port = process.env.PORT || 3000;
const server = app.listen(port, async () => {
  console.log(`server started on port: ${port}`);
});
