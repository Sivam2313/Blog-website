const express = require('express');
const { addComment, fetchComment } = require('../controllers/commentControllers');

const router = express.Router();

router.post('/add',addComment);
router.post('/fetch',fetchComment);

module.exports = router;