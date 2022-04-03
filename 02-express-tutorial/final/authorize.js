const authorize = (req, res, next)=>{
    const { user } = req.query
    if (user === 'akhil'){
        req.user = {name: 'Akhil', id: 123}
        next()
    }
    else {
    res.status(401).send('Unauthorize')
    }
}

module.exports = authorize