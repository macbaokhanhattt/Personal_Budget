const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();

dotenv.config({path: "./config/config.env"});


app.use(morgan('tiny'));

const PORT = process.env.PORT;
app.listen(port,()=>{
   console.log(`Server is running on ${PORT} port!!!`);
});
