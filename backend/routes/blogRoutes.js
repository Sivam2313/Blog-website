const express = require('express');

const router = express.Router();

router.get('/fetch',fetchBlogs);

module.exports = router;