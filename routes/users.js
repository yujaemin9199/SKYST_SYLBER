const { Router } = require('express');
const userList = require('../models/userlist');

const router = Router();

router.get('/', (req, res, next) => {
  const usr = userList.list();
  res.json(usr);
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  try {
    const usr = userList.getpw(id);
    res.json(usr);
  } catch (e) {
    next(e);
  }
});

router.post('/user', (req, res, next) => {
  const {id, pw} = req.body;
  const note = Note.register(id, pw);
  res.json(note);
});

module.exports = router;