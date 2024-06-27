const jwt = require("jsonwebtoken");
const { BadrequestError } = require("../errors/bad-request");

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  const id = new Date().getDate();
  console.log(id);
  if (!username || !password) {
    throw new BadrequestError("Please provide email and password");
  }
  //   const token = jwt.sign({id , username} , process.env.JWT_SECRET , {expiresIn : '30d'})
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  console.log(token);
  res.status(200).json({ msg: "user created", token });
  // res.send('fake login')
};

const dashboard = async (req, res) => {
  res.send("Dashboard");
};

module.exports = { login, dashboard };
