import express, { Request, Response } from 'express';
import notFoundMiddleware from './midlleware'; 

const app = express();

app.get('/ping', (req: Request, res: Response) => {
    res.json(req.headers);
});

app.use(notFoundMiddleware); 

export default app;
