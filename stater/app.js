import express, { json } from 'express';
import morgan from 'morgan';

import tourRouter from './routes/tourRoutes';
import userRouter from './routes/userRoutes';

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(json());
app.use(`${__dirname}/public`);

app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// 3) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

export default app;