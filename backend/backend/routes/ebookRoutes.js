const express = require('express');
const { getEbooks, getEbookById } = require('../controllers/ebookController');
const router = express.Router();

router.get('/', getEbooks);
router.get('/:id', getEbookById);

module.exports = router;
