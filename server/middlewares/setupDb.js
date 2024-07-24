const DB = require('../config/database');
const db = new DB();

async function setupDb(req, res, next) {
    if (!db.client._connected) {
        try {
            await db.connect();
        } catch (err) {
            return res.status(500).json({ error: 'Failed to connect to database' });
        }
    }
    req.db = db.client;
    next();
}

module.exports = setupDb;