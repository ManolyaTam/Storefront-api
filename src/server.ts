import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import usersRouter from './routes/users';
import productsRouter from './routes/products';
import ordersRouter from './routes/orders';
import { verifyToken } from './middleware/auth';

const app: express.Application = express();
const address: string = "0.0.0.0:3000";

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Routers
app.use('/users', verifyToken, usersRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

app.listen(3000, () => {
  console.log(`starting app on: ${address}`);
});
