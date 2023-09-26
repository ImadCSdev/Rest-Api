const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");



//RLGtppJAKXTPE1hr

const app = express();



 connectDb();
// const app = express();

const port = process.env.PORT || 5000;

 
// app.get("/api/contacts", (req,res)=>{
//   res.json( { message : "get all contacts" });
// } ); 
 


 app.use(express.json());
 app.use("/api/contacts", require("./routes/contactRoutes"));

 //register and login.
 app.use("/api/users", require("./routes/userRoutes"));
 
 app.use(errorHandler);






app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });