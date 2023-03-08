const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const {Routes} = require('./routes/envelopes');

const app = express();

dotenv.config({path: "./config/config.env"});


app.use(morgan('tiny'));
app.use('/envelopes',Routes);
const PORT = process.env.PORT;
app.listen(PORT,()=>{
   console.log(`Server is running on ${PORT} port!!!`);
});
