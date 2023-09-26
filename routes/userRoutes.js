const express = require("express");
const {
  registerUser,
  currentUser,
  loginUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
 

const router = express.Router();

 router.post("/register", registerUser);

 router.post("/login", loginUser);

 router.get("/current", validateToken, currentUser);









// router.post("/register", (req,res) => {
//     res.json ({message :"register user"})
// } );


// router.post("/login", (req,res) => {
//     res.json ({message :"login user"})
// } );



// router.get("/current", (req,res) => {
//     res.json ({message :"current user infromation "})
// } );


module.exports = router;