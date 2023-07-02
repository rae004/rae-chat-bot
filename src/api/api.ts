import express from 'express';

const app = express();

app.get('/api/hello', (_, res) => {
    res.json({ hello: 'world' });
});

export const handler = app;
