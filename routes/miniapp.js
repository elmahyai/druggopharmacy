const express = require('express');
const router = express.Router();



router.get((req, res, next) => {
    throw new error('something got wrong!')
    console.log(req.params)
    res.status(200).send('Helloooominitaaaab')
    next()
})

