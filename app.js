require('dotenv').config();
require('express-async-errors');
const helmet = require('helmet')
const express = require('express');
const app = express();
const sendEmail = require('./controllers/sendEmail')
const cors = require('cors')
// some security 
app.use(helmet())
app.use(cors())

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('<h1>Send Email</h1><a href="/send">send email</a>');
});
app.get('/send', sendEmail)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
