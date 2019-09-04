"use strict";

const router = require('express').Router({ mergeParams: true });

router.post('/', require('./resizeimage').imagerequest);

module.exports = router;