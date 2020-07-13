const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const db = require("../data model/data-model")

const router = express.Router()

router.post("/login", async (req, res, next) => {
    const authError = { message: "Invalid Credentials"}

    try {   
        const user  = await db.findBy({ username: req.body.username }).first()

        if(!user) {
            return res.status(401).json(authError)
        }

        const passwordValid = await bcrypt.compare(req.body.password, user.password)
        console.log(req.body.password, user.password)

        if(!passwordValid) {
            return res.status(401).json(authError)
        }

        const tokenPayload = {
            userId: user.id,
        }

        res.cookie("token", jwt.sign(tokenPayload, process.env.JWT_SECRET))
        //  res.cookie("token", jwt.sign(tokenPayload, "Keep it secret, keep it safe!"))


        res.json({ 
            message: `Welcome ${user.username}!`
        })

    } catch(err) {
        next(err)
    }
})


module.exports = router