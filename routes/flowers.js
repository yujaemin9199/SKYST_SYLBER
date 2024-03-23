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
    console.log("Get flower name attempt");
  } catch (e) {
    console.log("Get flower name FAILED");
    next(e);
  }
  console.log("Get flower name SUCCESS");
});

router.get('/:index/growth', (req, res, next) => {
  const index = req.params.index;

  try {
    const flower = flowerList.getgrowth(index);
    res.json(flower);
    console.log("Get flower growth attempt");
  } catch (e) {
    console.log("Get flower growth FAILED");
    next(e);
  }
  console.log("Get flower growth SUCCESS");
});


module.exports = router;
