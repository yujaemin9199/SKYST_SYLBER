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
    const usr = userList.getpw(id);
    res.json(usr);
    console.log("Get password attempt");
  } catch (e) {
    console.log("Get password FAILED");
    next(e);
  }
  console.log("Get password SUCCESS");
});

router.post('/', (req, res, next) => {
  try {
    const {id, pw} = req.body;
    const usr = userList.register(id, pw);
    res.json(usr);
    console.log("User registered");
  } catch(e){
    console.log("Register Failed");
    next(e);
  }
});

module.exports = router;