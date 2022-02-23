const express = require('express');
const {getCats, deleteCat, addCat} = require('../model/model');

const router = express.Router();

router.get('/cats', getCats);
router.delete('/cats/:id', deleteCat);
router.post('/cats', addCat);

module.exports = router;