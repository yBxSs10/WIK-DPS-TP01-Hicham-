import express, { Request, Response } from 'express';
import os from 'os'; 

const app = express();

app.get('/ping', (req: Request, res: Response) => {
    const hostname = os.hostname();
    console.log(`Request received on ${req.url} from ${hostname}`);
    res.json(req.headers);
});

export default app;
