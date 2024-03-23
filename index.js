const express = require('express');
const userRouter = require('./routes/users');
const flowerRouter = require('./routes/flowers');
const seedRouter = require('./routes/seeds');

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/flower', flowerRouter);
//app.use('/seed', seedRouter);

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

const getUserApi = async (username) => {
  try {
    const { data } = axios.get(`${baseUrl}/user`);
    return data;
  } catch (error) {
    throw error;
  }
};

app.listen(3000);
