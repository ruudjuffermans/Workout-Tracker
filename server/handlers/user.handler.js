
async function getAllUsers(db) {
    const result = await db.query("SELECT * FROM users;")
    return result.rows
}

async function createUser(db) {
    const result = await db.query("SELECT * FROM users")
    return result.rows
}

async function getUserById(db) {
    const result = await db.query(`SELECT * FROM users WHERE id=${id}`)
    return result.rows
}

module.exports = {getAllUsers, getUserById, createUser}