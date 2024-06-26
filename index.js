const express = require('express');
const userRouter = require('./routes/users');

const app = express();

app.use(express.json());

// CORS 설정
const cors = require('cors');
const corsOptions = {
  origin: '*',
  credentials: false,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsOptions));

// Preflight 요청에 대한 응답 설정
app.options('*', cors(corsOptions));

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
  console.log("Request Failed");
  res.json({
    result: 'fail',
    error: err.message,
  });
});

app.listen(3000);
