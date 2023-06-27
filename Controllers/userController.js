const jwt = require("jsonwebtoken");
const UserSchema = require("../DB/UserSchema");

const register = async (req, res) => {
  const newUser = await UserSchema.create(req.body);
  res.status(200).send(newUser);
};

const login = async (req, res) => {
  userInfo = req.body;
  loginInfo = await UserSchema.find({
    email: userInfo.email,
    password: userInfo.password,
  });
  try {
    if (loginInfo[0].email == userInfo.email) {
      const payload = { subject: loginInfo };
      const token = jwt.sign(payload, process.env.SECRETKEY, {
        expiresIn: "10m",
      });
      res.status(200).send(token);
    }
  } catch (error) {
    res.status(404).send(error);
  }
};
const orders = async (req, res) => {
  user = req.params.email;

  const order = await UserSchema.findOneAndUpdate(
    { email: user },
    { orders: req.body },
    {
      new: true,
      upsert: true 
    }
  );
  console.log(order.orders);
  res.send(order.orders);
};

const getOrders = async (req, res) => {
  const userman=req.params.email;
  const a= await UserSchema.find({email:userman});
  const b = a[0].orders;
  
  res.status(200).send(b);
};
module.exports = { register, login, orders, getOrders };
