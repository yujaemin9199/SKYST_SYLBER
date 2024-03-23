const { Router } = require('express');
const flowerList = require('../models/flowerlist');

const router = Router();

router.get('/', (req, res, next) => {
  const flower = flowerList.list();
  console.log("Get Flower List");
  res.json(flower);
});

router.get('/:index', (req, res, next) => {
  const index = req.params.index;

  try {
    const flower = flowerList.getname(index);
    res.json(flower);
  } catch (e) {
    next(e);
  }
  console.log("Get flower name");
});

module.exports = router;
