const users = require("../models/user.model");
const path = require('path')
exports.getUser = (req,res)=>{
    res.sendFile(path.join(__dirname + "/../views/index.html"));
};
exports.saveUser=(req,res)=>{
    const name=req.body.name;
    const age = Number(req.body.age);
    const user={
        name:name,
        age: age
    }

    users.push(user);
    res.status(201).json({
        success:true,
        users
    })
    console.log(users);

}