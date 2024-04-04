const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) return res.status(401).send({ error: "No Token Provided" })

  const parts = authHeader.split(" ")

  if (!(parts.length === 2))
    return res.status(401).send({ error: "Token Error" })

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: "Token Malformatted" })
    
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).send({ error: "Token Invalid" })

    req.userId = decoded.id

    return next()
  })
}
