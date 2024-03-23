const { Router } = require('express');
const seedList = require('../models/seedlist');

const router = Router();

router.get('/', (req, res, next) => {
  const seed = seedList.list();
  res.json(seed);
});

router.get('/:index', (req, res, next) => {
  const index = req.params.index;

  try {
    const seed = seedList.getname(index);
    res.json(seed);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
