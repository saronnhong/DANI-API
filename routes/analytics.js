const express = require('express');
const router = express.Router();
const Analytic = require('../models/Analytic');


router.get('/', async (req, res) => {
    try {
        const analytics = await Analytic.find();
        res.json(analytics);
    } catch (err) {
        res.json({ message: err })
    }
});

router.get('/:analyticId', async (req, res) => {
    try {
        const analytic = await Analytic.findOne({ userId: req.params.analyticId });
        res.json(analytic);
    } catch (err) {
        res.json({ message: err });
    }
})

router.post('/', async (req, res) => {
    const analytic = new Analytic({
        word: req.body.word,
        sentence: req.body.sentence,
        userId: req.body.userId
    })

    try {
        const savedAnalytic = await analytic.save();
        res.status(200).json(savedAnalytic);
    } catch (err) {
        res.json({ message: err });
    }
})

router.delete('/:analyticId', async (req, res) => {
    try {
        const removedAnalytic = await Analytic.deleteOne({ userId: req.params.analyticId })
        res.json(removedAnalytic);
    } catch (err) {
        res.json({ message: err });
    }
})

router.patch('/:analyticId', async (req, res) => {
    try {
        const updatedAnalytic = await Analytic.updateOne(
            { userId: req.params.analyticId },
            {
                $set: {
                    word: req.body.word,
                    sentence: req.body.sentence,
                }
            }
        );
        res.json(updatedAnalytic);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;