import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';

// Creates an Express application.
sqlite3.verbose();
const app = express();
const port = 8080;
app.use(express.json());

// Enable CORS for localhost
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || origin.startsWith('http://localhost')) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST'],
}));

// Open the database
const db = new sqlite3.Database(`${__dirname}/database.db`, (error) => {
    if (error) {
        console.error(error.message);
    }
});

app.get('/inventory', (request, response) => {
    const query = "SELECT * FROM inventory";
    db.all(query, [], (error, rows) => {
        if (error) {
            console.error(error.message);
            response.status(500).json({ error: error.message });
            return;
        }
        response.json(rows);
    });
});

app.post('/add-item', (request, response) => {
    const { name, url, image, price, category, brand } = request.body;

    if (!name || !url || !image || price == null || !category || !brand) {
        response.status(400).json({ error: "Missing required fields" });
        return;
    }

    const query = `
        INSERT INTO inventory (name, url, image, price, category, brand)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.run(query, [name, url, image, price, category, brand], function (error) {
        if (error) {
            console.error(error.message);
            response.status(500).json({ error: error.message });
            return;
        }

        response.status(201).json({ message: "Item added successfully", id: this.lastID });
    });
});

app.post('/remove-item', (request, response) => {
    const { id } = request.body;

    if (!id) {
        response.status(400).json({ error: "ID is required" });
        return;
    }

    const query = 'DELETE FROM inventory WHERE id = ?';

    db.run(query, [id], function (error) {
        if (error) {
            console.error(error.message);
            return response.status(500).json({ error: error.message });
        }

        if (this.changes === 0) {
            return response.status(404).json({ error: "Item not found" });
        }

        response.status(200).json({ message: "Item removed successfully" });
    });
});

app.post('/favourite', (request, response) => {
    const { id } = request.body;

    if (!id) {
        response.status(400).json({ error: "ID is required" });
        return;
    }

    const query = `UPDATE inventory SET favourite = CASE WHEN favourite = 1 THEN 0 ELSE 1 END WHERE id = ?`;

    db.run(query, [id], function (error) {
        if (error) {
            console.error(error.message);
            return response.status(500).json({ error: error.message });
        }

        if (this.changes === 0) {
            return response.status(404).json({ error: "Item not found" });
        }

        response.status(200).json({ message: "Favourite status toggled successfully" });
    });
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
