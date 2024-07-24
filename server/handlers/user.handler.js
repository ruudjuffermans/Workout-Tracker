
async function readAllUsers(db) {
    const result = await db.query("SELECT * FROM users")
    return result.rows
}

module.exports = {readAllUsers}