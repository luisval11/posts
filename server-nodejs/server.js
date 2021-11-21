const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//CORS
app.use(cors({
  origin: "http://localhost:3000"
}));

app.use(morgan('dev'));

//routes
app.use('/api', require('./routes/home'));
app.use('/post/api', require('./routes/viewPost'));
app.use('/', require('./routes/editPost'));

app.listen(5000, () => {
  console.log('API Node is running on port 5000');
});
