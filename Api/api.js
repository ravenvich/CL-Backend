const express = require("express");
const router = express.Router();
const { register, login ,orders,getOrders} = require("../Controllers/userController");

router.post("/users",register);
router.post("/users/login",login);
router.put("/users/orders/:email",orders);
router.get("/users/orders/:email",getOrders);
router.get("/",(req,res)=>{res.send("Hi")});
module.exports = router;
