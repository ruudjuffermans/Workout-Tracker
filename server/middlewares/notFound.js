async function notFound(err, req, res, next) {
    res.status(200).json({ error: "Route not found" });
}

module.exports = notFound;