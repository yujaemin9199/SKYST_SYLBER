const express = require('express');
const userRouter = require('./routes/users');

const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.use((req, res, next) => {
  res.status(404);
  res.send({ 
    result: 'fail', 
    error: `Page not found ${req.path}`
  });
});

app.use((err, req, res, next) => {
  res.status(500);

  res.json({
    result: 'fail',
    error: err.message,
  });
});

app.listen(3000);
