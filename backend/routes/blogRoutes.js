const express = require('express');
const { createBlog, fetchBlog } = require('../controllers/blogControllers');

const router = express.Router();

router.get('/fetch',fetchBlog);
router.post('/create',createBlog)

module.exports = router;