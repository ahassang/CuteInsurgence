const Admin = require('../models/admin.model');

module.exports.login = login;
async function login(req, res) {
    try {
        const admin = await Admin.findOne({ name: req.body.name });
        if(admin === null) {
            return res.status(400).json({msg: "Invalid Login1"}) };
            const correctPassword =  await Admin.findOne({password : req.body.password});
                if(!correctPassword) {
                    return res.status(400).json({msg: "Invalid Login2"})
                }else {
                admin.json({ 
                    msg: "success!", 
                    adminLogged:{
                        adminName: `${admin.name} `, 
                        id: `${admin._id}`
                    }});
        }}
        catch(err){ res.status(400).json({msg: "Invalid Login3"})}
};

module.exports.register = register; 
function register(req, res) {
        const admin = new Admin(req.body);
        admin.save()
            .then (()=> {
                res.json({ msg: "success!", admin: admin });
            })
            .catch(err => res.status(400).json(err));
        };


module.exports.logout = logout;
function logout(req,res)  {
    Admin.remove() 
    res.remove("admin");
        res.json({msg: "usertoken cookie cleared"});
    };

module.exports.loggedIn = loggedIn;
function loggedIn(req, res) {
    const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true});
    User.findById(decodedJWT.payload._id)
    // User.findById({_id: req.params.id})
        .then(user=> res.json({msg: `${user.firstName} ${user.lastName} is logged in`}))
        .catch(err => res.json(err));
};


module.exports.getUser = getUser;
async function getUser(request, response) {
    try {    
        const decodedJWT = jwt.decode(request.cookies.usertoken, { complete: true});
        const user = await User.findById(decodedJWT.payload._id)    
                if(user === null) {
                    return response.status(400).json({msg: "user doesn't exist"}) 
                } else {return response.json(user)}}
            catch(err){ res.status(400).json({msg: "getUser not working"})}
            }

module.exports.getUserHabits = getUserHabits;
async function getUserHabits(request, response) {
    try {    
        const decodedJWT = jwt.decode(request.cookies.usertoken, { complete: true});
        const user = await User.findById(decodedJWT.payload._id)    
                if(user === null) {
                    return response.status(400).json({msg: "user doesn't exist"}) 
                } else {
                    user.populate("Habit").json(response.data)}}
            catch(err){ res.status(400).json({msg: "getUser not working"})}
            }
    // const decodedJWT = jwt.decode(request.cookies.usertoken, { complete: true});
    //     User.findById(decodedJWT.payload._id)
            // .then((oneUser) => {
            //     console.log(`${user.firstName}`)
            //     response.json(oneUser)})
            // .catch((err) =>{
            //     console.log("error in getUser", err)
            //     response.json(err)});

            // };





// module.exports.getAllHabits = getAllHabits;
// function getAllHabits(request , response) {
//     User.find({_id: request.params.id})
//         .populate("Habit")
//         .then((habit) => response.json(habit))
//         .catch(err => console.log("problem with getAllHabits", err))
        

// async function getAllHabits(req,res) {
//     try {let showHabits = await User.findById({_id: req.params.id}).populate("habit");
//         if(showHabits) {res.json(showHabits)}}
//         catch(err) {return console.log("problem with getAllHabits", err)}
// }
