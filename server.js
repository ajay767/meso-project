/* eslint-disable no-console */
// eslint-disable-next-line no-console
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('Database connected :)'));

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is up and running on port ${process.env.PORT}`);
});
