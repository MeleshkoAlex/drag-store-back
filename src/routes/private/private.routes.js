const express = require('express');
const router = express.Router();

router.get('/private', (req, res) => {
    res.send('private');
});


module.exports = router;