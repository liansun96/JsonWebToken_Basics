const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");


const login = async (req, res) => {
    const {username , password} = req.body
    console.log(req.body);
    if(!username || !password){
        throw new CustomAPIError("Plaese Provide email & password" , 400)
    }
    const id = new Date().getTime()
    const token = jwt.sign({id , username} , process.env.JWT_SECRET , {expiresIn :'30d'})
    res.json({msg : 'user created' , token})
    // res.send('Fake Login/Register Route')
}

const dashboard = async (req, res) => {
  res.send("Dashboard");
};

module.exports = { login, dashboard };
