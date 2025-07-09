import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import router from './app/routes';
// import notFound from './app/middlewares/notFound';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      'https://book-shop-theta-bay.vercel.app',
      'http://localhost:5173',
      'https://ts-book-store.vercel.app/',
    ],
    credentials: true,
  })
);

app.use('/api', router);

app.use(globalErrorHandler);

//Not Found
// app.use(notFound);

app.get('/', (req: Request, res: Response) => {
  res.send('server is ongoing 🏃‍♂️‍➡️☄️');
});

export default app;
