const { Router } = require('express');
const seedList = require('../models/seedlist');

const router = Router();

router.get('/', (req, res, next) => {
  const seed = seedList.list();
  console.log("Get seed List");
  res.json(seed);
});

router.get('/:index', (req, res, next) => {
  const index = req.params.index;

  try {
    const seed = seedList.getname(index);
    res.json(seed);
    console.log("Get seed name attempt");
  } catch (e) {
    console.log("Get seed name FAILED");
    next(e);
  }
  console.log("Get seed name SUCCESS");
});


module.exports = router;