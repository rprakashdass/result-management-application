const express = require('express');
const router = express.Router();

const Sub = require('../../models/Subjects')

router.get('/test', (req, res) => {
    res.send("Subjects route testing!")
})

router.get('/', (req, res) => {
    Sub.find()
        .then(subs => res.json(subs))
        .catch(err => res.status(404).json({ noSubsFound : 'No Subjects Found'}));
});

router.post('/', (req, res) => {
    Sub.create(req.body)
        .then(sub => res.json({msg: 'Book added Succesfully'}))
        .catch(err => res.status(400).json({error: 'Unable to add this Subject'}))
})

module.exports = router;