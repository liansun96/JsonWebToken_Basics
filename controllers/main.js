const login = async(req, res) => {
    res.send('Fake login/register route')
}

const dashboard = async(req , res) => {
    res.send('Dashboard')
}

module.exports = {login , dashboard}