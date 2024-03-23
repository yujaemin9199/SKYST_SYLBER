const { Router } = require('express');
const userList = require('../models/userlist');

const router = Router();

router.get('/', (req, res, next) => {
  const usr = userList.list();
  console.log("Get User Log");
  res.json(usr);
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  try {
    const usr = userList.getinfo(id);
    res.json(usr);
    console.log("Get User Info attempt");
  } catch (e) {
    console.log("Get User Info FAILED");
    next(e);
  }
  console.log("Get User Info SUCCESS");
});

router.post('/', (req, res, next) => {
  try {
    const {id, pw} = req.body;
    const usr = userList.register(id, pw);
    res.json(usr);
    console.log("User register attempt");
  } catch(e){
    console.log("Register Failed");
    next(e);
  }

  console.log("Register SUCCESS");
});


router.get('/:id/FA', (req, res, next) => {
  const id = req.params.id;

  try{
    console.log(`Flower adding to ${id}...`);
    userList.addFlower(id);
    const usr = userList.getinfo(id);
    res.json(usr);
  }catch(e){
    console.log(e);
    next(e);
  }
});

router.get('/:id/FD/:index', (req, res, next) => {
  const id = req.params.id;
  //const {index} = req.body;
  let index = req.params.index;
  index = Number(index);
  try{
    console.log(`Flower Deleting ${id}'s index:${index}...`);
    const flower = userList.removeFlower(id, index);
    const usr = userList.getinfo(id);
    res.json(flower);
  }catch(e){
    console.log(e);
    next(e);
  }
});


router.get('/:id/SA', (req, res, next) => {
  const id = req.params.id;

  try{
    console.log(`Seed adding to ${id}...`);
    userList.addSeed(id);
    const usr = userList.getinfo(id);
    res.json(usr);
  }catch(e){
    console.log(e);
    next(e);
  }
});

router.get('/:id/SD/:index', (req, res, next) => {
  const id = req.params.id;
  //const {index} = req.body;
  let index = req.params.index;
  index = Number(index);
  try{
    console.log(`Seed Deleting ${id}'s index:${index}...`);
    const seed = userList.removeSeed(id, index);
    const usr = userList.getinfo(id);
    res.json(seed);
  }catch(e){
    console.log(e);
    next(e);
  }
});

module.exports = router;