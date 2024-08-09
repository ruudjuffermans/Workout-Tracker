
async function getAllWorkouts(db) {
    const result = await db.query("SELECT * FROM workout;")
    return result.rows
}

async function createWorkout(db) {
    const result = await db.query("SELECT * FROM users")
    return result.rows
}

async function getWorkoutById(db) {
    const result = await db.query(`SELECT * FROM users WHERE id=${id}`)
    return result.rows
}


module.exports = {getAllWorkouts, getWorkoutById, createWorkout}