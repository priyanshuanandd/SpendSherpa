const router = require('express').Router();

router.get('/', (req, res) => 
    res.send('expense get method working'));

module.exports = router;