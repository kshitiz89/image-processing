'use strict';

const router = require('express').Router({
  mergeParams: true
});

router.use('/imageprocessing', require('./imageprocessing'));

module.exports = router;