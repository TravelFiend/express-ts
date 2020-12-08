import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/auth', require('./routes/loginRoutes'));

app.listen(4343, () => {
  console.log('Listening on port 4343');
});
