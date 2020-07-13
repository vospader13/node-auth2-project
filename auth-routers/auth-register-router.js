const express = require("express")
const bycript = require("bcryptjs")

const db = require("../data model/data-model")

const router = express.Router()

router.post("/register", async (req, res, next) => {
    try {
        const { username } = req.body


        const user = await db.findBy({ username }).first()
        if (user) {
            return res.status(409).json({ message: "username is already taken"})
        }

        const passHashing = bycript.hashSync(req.body.password, 16)

        res.status(201).json(await db.add({...req.body, password: passHashing}))

    } catch(err) {
        next(err)
    }
})


module.exports = router