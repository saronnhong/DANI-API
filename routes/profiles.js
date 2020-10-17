const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');


router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.json(profiles);
    } catch (err) {
        res.json({ message: err })
    }
});

router.get('/:profileId', async (req, res) => {
    try {
        const profile = await Profile.findOne({userId: req.params.profileId});
        res.json(profile);
    } catch (err) {
        res.json({ message: err });
    }
})

router.post('/', async (req, res) => {
    const profile = new Profile({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        imageUrl: req.body.imageUrl,
        coverImageUrl: req.body.coverImageUrl,
        userId: req.body.userId
    })

    try {
        const savedProfile = await profile.save();
        res.status(200).json(savedProfile);
    } catch (err) {
        res.json({ message: err });
    }
})

router.delete('/:profileId', async (req, res) => {
    try {
        const removedProfile = await Profile.deleteOne({ userId: req.params.profileId })
        res.json(removedProfile);
    } catch (err) {
        res.json({ message: err });
    }
})

router.patch('/:profileId', async (req, res) => {
    try {
        const updatedProfile = await Profile.updateOne(
            { userId: req.params.profileId },
            {
                $set: {
                    name: req.body.name,
                    email: req.body.email,
                    age: req.body.age,
                    imageUrl: req.body.imageUrl,
                    coverImageUrl: req.body.coverImageUrl
                }
            }
        );
        res.json(updatedProfile);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;