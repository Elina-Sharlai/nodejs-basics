import express from 'express';

const app = express();

function checkAuth(req, res, next) {
  console.log('Middelware 1');

  if (req.query['api-key'] !== '123456789') {
    return res.send('Please provide a valid api-key');
  }

  next();
}
app.use(checkAuth);

app.use((req, res, next) => {
  console.log('Middelware 2');

  next();
});

app.get('/', (req, res) => {
  res.send('Hello, Elina!');
});

app.listen(8080, (error) => {
  if (error) {
    throw error;
  }

  console.log('Server successfully started on port 8080');
});
