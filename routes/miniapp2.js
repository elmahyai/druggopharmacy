const express = require('express');
const router = express.Router();


router.get((req, res, next) => {
    console.log(req.params)
    res.status(200).send('Hellooo22222o')
    next()
})

