async function getAllUsers(db) {
  const result = await db.query("SELECT * FROM users;");
  return result.rows;
}

async function createUser(db, first_name, last_name, email, password) {
  const queryText =
    "INSERT INTO users (name, email, password, email_verified) VALUES ($1, $2, $3, false) RETURNING *;";
  const result = await db.query(queryText, [first_name, last_name, email, password]);
  return result.rows;
}

async function getUserById(db, id) {
  const queryText = "SELECT * FROM users WHERE id = $1;";
  const result = await db.query(queryText, [id]);
  return result.rows;
}

async function updateUser(db, id, first_name, last_name, email, password) {
    const queryText = 'UPDATE users SET first_name = $2, last_name = $3, email = $4, password = $5 WHERE id = $1 RETURNING *';
    const result = await db.query(queryText, [id, first_name, last_name, email, password]);
    return result.rows;
}


module.exports = { getAllUsers, createUser, getUserById, updateUser };
