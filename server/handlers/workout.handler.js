async function getAllWorkouts(db) {
  const result = await db.query("SELECT * FROM workout;");
  return result.rows;
}

async function createWorkout(db, name, description) {
  const queryText =
    "INSERT INTO workout (name, description) VALUES ($1, $2) RETURNING *;";
  const result = await db.query(queryText, [name, description]);
  return result.rows;
}

async function getWorkoutById(db, id) {
  const queryText = "SELECT * FROM workout WHERE id = $1;";
  const result = await db.query(queryText, [id]);
  return result.rows;
}

async function updateWorkout(db, id, name, description) {
    const queryText = 'UPDATE exercise SET name = $2, description = $2 WHERE id = $1 RETURNING *';
    const result = await db.query(queryText, [id, name, description]);
    return result.rows;
}


module.exports = { getAllWorkouts, createWorkout, getWorkoutById, updateWorkout };
