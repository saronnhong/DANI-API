const express = require('express');
const router = express.Router();
const Settings = require('../models/Settings');


router.get('/', async (req, res) => {
    try {
        const settings = await Settings.find();
        res.json(settings);
    } catch (err) {
        res.json({ message: err })
    }
});

router.get('/:userId', async (req, res) => {
    try {
        const settings = await Settings.findOne({userId: req.params.userId});
        res.json(settings);
    } catch (err) {
        res.json({ message: err });
    }
})

router.post('/', async (req, res) => {
    const settings = new Settings({
        cardSize: req.body.cardSize,
        voice: req.body.voice,
        pitch: req.body.pitch,
        rate: req.body.rate,
        silentMode: req.body.silentMode
    })

    try {
        const savedSettings = await settings.save();
        res.status(200).json(savedSettings);
    } catch (err) {
        res.json({ message: err });
    }
})

router.delete('/:userId', async (req, res) => {
    try {
        const removedSettings = await Settings.deleteOne({ userId: req.params.userId })
        res.json(removedSettings);
    } catch (err) {
        res.json({ message: err });
    }
})

router.patch('/:userId', async (req, res) => {
    try {
        const updatedSettings = await Settings.updateOne(
            { userId: req.params.userId },
            {
                $set: {
                    cardSize: req.body.cardSize,
                    voice: req.body.voice,
                    pitch: req.body.pitch,
                    rate: req.body.rate,
                    silentMode: req.body.silentMode
                }
            }
        );
        res.json(updatedSettings);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;