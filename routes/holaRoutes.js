const express = require("express")

const router = express.Router()

const holaContollers=require("../controllers/holaController")

router.get("/",holaContollers.holaMundo)

module.exports = router
