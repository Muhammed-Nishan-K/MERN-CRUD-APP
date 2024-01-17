import express from "express";
import UserDb from "../modal/userSchema.js";


const route = express.Router();

route.post('/userdata', async (req, res) => {
    try { 
        
        const email=req.body.email;
        const pass=req.body.password;
        const users = await UserDb.find({email:email,pass:pass});
        if (users.length!=0){
            req.session.email=email;
        }
        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error"); 
    } 
});
route.post('/registeruser', async (req, res) => {
    try {
        const users = new UserDb({
            email:req.body.email,
            pass:req.body.password
        })
        console.log(users);
        users.save().then((data)=>{
            res.send({status:true});
        }).catch((err)=>{
            res.send({status:false});
        })

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    } 
});

route.get('/user',async(req,res)=>{
    console.log(req.session.email+'nnnnnn');
    const userData=await UserDb.find({email:req.session.email})
    res.send(userData);
})



export default route;
 