const express = require('express');
const router = express.Router();
const Word = require('../models/Word');


router.get('/', async (req, res) => {
    try {
        const words = await Word.find();
        res.json(words);
    } catch (err) {
        res.json({ message: err })
    }
});

router.get('/:wordId', async (req, res) => {
    try {
        const word = await Word.findOne({ id: req.params.wordId });
        res.json(word);
    } catch (err) {
        res.json({ message: err });
    }
})

router.post('/', async (req, res) => {
    const word = new Word({
        id: req.body.id,
        categoryId: req.body.categoryId,
        word: req.body.word,
        imageUrl: req.body.imageUrl,
        phonetic: req.body.phonetic,
        ownerId: req.body.ownerId
    })

    try {
        const savedWord = await word.save();
        res.status(200).json(savedWord);
    } catch (err) {
        res.json({ message: err });
    }
})

router.delete('/:wordId', async (req, res) => {
    try {
        const removedWord = await Word.deleteOne({ id: req.params.wordId })
        res.json(removedWord);
    } catch (err) {
        res.json({ message: err });
    }
})

router.patch('/:wordId', async (req, res) => {
    try {
        const updatedWord = await Word.updateOne(
            { id: req.params.wordId },
            {
                $set: {
                    id: req.body.id,
                    categoryId: req.body.categoryId,
                    word: req.body.word,
                    imageUrl: req.body.imageUrl,
                    phonetic: req.body.phonetic,
                    ownerId: req.body.ownerId
                }
            }
        );
        res.json(updatedWord);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;