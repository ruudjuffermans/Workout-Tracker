const { Client } = require('pg');

const dbConfig = {
    user: 'ruud',
    host: 'db',
    database: 'store',
    password: 'password',
    port: 5432,
};

class DB {
    constructor() {
        this.client = new Client(dbConfig);
    }

    async connect() {
        try {
            await this.client.connect();
            console.log('Connected to the database.');
        } catch (err) {
            console.error('Error connecting to the database:', err);
        }
    }

    async disconnect() {
        try {
            await this.client.end();
            console.log('Disconnected from the database.');
        } catch (err) {
            console.error('Error disconnecting from the database:', err);
        }
    }
}

module.exports = DB;
