// //ex middleware:
const auth = (req, res, next)=>{
    const user = req.query.user;
    if(user==='admin'){
        req.query = {user: 'admin', id: 1};
        next();
    }
    else{
        res.status(401).send('Unauthorized user'); //can send errors in middleware if not working
    }
};

module.exports = auth;