const express = require("express")

const db = require("../data model/data-model")
const restrict = require("../middlewares/restrict")

const router = express.Router()

router.get("/", restrict(), async (req, res, next) => {
    try {
        res.json(await db.find())
    } catch(err) {
        next(err)
    }
})

module.exports = router