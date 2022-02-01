const express = require('express');
const router = express.Router();

const { getIndex, getExists, create } = require('../controllers');

router.get('/', getIndex);
router.get('/exists', getExists);

router.post('/create', create);

module.exports = router;