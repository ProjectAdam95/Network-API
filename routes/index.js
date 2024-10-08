const router = require('express').Router();
const apiRoutes = require('./api');

// Use /api for all API routes
router.use('/api', apiRoutes);

// Fallback for invalid routes
router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
