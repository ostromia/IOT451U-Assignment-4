import express from 'express';
import sqlite3 from 'sqlite3';

// Creates an Express application.
sqlite3.verbose();
const app = express();
const port = 8080;
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
