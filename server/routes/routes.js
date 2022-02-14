const express = require('express');
const {} = require('../model/model');

router.get('/cats', getCats);
router.delete('/cats/catId', deleteCat);
router.post('/cats', addCat);

module.exports = router;