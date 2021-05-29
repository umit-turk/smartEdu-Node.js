const express = require("express");
const mongoose = require('mongoose')
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const Course = require("./models/Course");

const app = express();

//Connect db
await mongoose.connect('mongodb://localhost/smartedu-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  console.log('DB connected Successfuly')
});

//Template Engine 
app.set("view engine", "ejs");

//Middlewears
app.use(express.static("public"))//static dosyaları ğublic klosöründe olacak.

//Routes
app.use("/", pageRoute);// / ile ilgili istek geldiğinde bunu pageRote yönlendir.
app.use("/courses", courseRoute);



const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
