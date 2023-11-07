import app from './api';

const PORT = process.env.PING_LISTEN_PORT ?? 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
