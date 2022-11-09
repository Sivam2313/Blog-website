const express = require('express');
const { createBlog, fetchBlog, fetchUserBlogs, fetchABlog } = require('../controllers/blogControllers');

const router = express.Router();

router.get('/fetch',fetchBlog);
router.post('/create',createBlog);
router.post('/fetchUser',fetchUserBlogs);
router.post('/fetchablog',fetchABlog);

module.exports = router;