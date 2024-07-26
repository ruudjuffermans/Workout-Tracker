
async function createExercise(db) {
    const result = await db.query("SELECT * FROM users")
    return result.rows
}

async function readExercise(db) {
    const result = await db.query("SELECT * FROM users")
    return result.rows
}

async function readAllExercise(db) {
    const result = await db.query("SELECT * FROM users")
    return result.rows
}

module.exports = { 
    createExercise,
    readExercise,
    readAllExercise
}