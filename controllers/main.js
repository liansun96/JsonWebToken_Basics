const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  if (!username || !password) {
    throw new CustomAPIError("Plaese Provide email & password", 400);
  }
  const id = new Date().getTime();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.json({ msg: "user created", token });
  // res.send('Fake Login/Register Route')
};

const dashboard = async (req, res) => {
  console.log(req.user);
  const luckyNumber = Math.ceil(Math.random() * 100);
  console.log(luckyNumber);
  res.status(200).json({
    msg: `Hello , ${req.user.username}`,
    secret: `Here is your authorized data , your luck number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
