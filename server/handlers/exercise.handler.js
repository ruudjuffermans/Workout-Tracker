async function getAllExercises(db) {
    const result = await db.query("SELECT * FROM exercise");
    return result.rows;
}

async function getExerciseById(db, id) {
    const queryText = 'SELECT * FROM exercise WHERE id = $1';
    const result = await db.query(queryText, [id]);
    return result.rows;
}

async function createExercise(db, name, type, description) {
    const queryText = 'INSERT INTO exercise(name, type, description) VALUES ($1, $2) RETURNING *';
    const result = await db.query(queryText, [name, type, description]);
    return result.rows;
}

async function updateExercise(db, id, name, type, description) {
    const queryText = 'UPDATE exercise SET name = $2, type = $3, description = $4 WHERE id = $1 RETURNING *';
    const result = await db.query(queryText, [id, name, type, description]);
    return result.rows;
}

module.exports = { 
    createExercise,
    getExerciseById,
    getAllExercises,
    updateExercise
};
