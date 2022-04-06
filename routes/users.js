
const express = require('express');
const router = express.Router();
const path = require('path');
const User = require('../model/user');
const mongoose = require('mongoose');

router.post('/', async (req, res) => {
    
    const count = await User.count({}) + 1;;
    const foundUser = await User.findOne({ "firstName" : req.body.firstName, "lastName" : req.body.lastName});

    if(!foundUser){

        var data = new User({
                id: count,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age
            });
        
            data.save()
            .then(user => {
                console.log('user saved', user);
                res.status(201).json({
                    sucess: true,
                    user
                });
            })
            .catch(err =>{
                console.log(err);
            })
    }
    else{
        return res.status(409).send('This user already exists')
    }


    
});





router.get('/', (req, res) => {
    User.find({}, (err, userss) => {
        if(err){
            res.send();
            next();
        }
        res.json(userss);
       
        
    }).sort({firstName: 1});
});

router.get('/:id', async(req,res)=>{

    const foundUser = await User.findOne({ "_id" : req.params.id });

    if(!foundUser) 
    return res.status(404).send('The user with the given ID was not found.');

    res.send(foundUser);

     
});

router.put('/:id', async(req, res) => {
    
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {firstName: req.body.firstName, lastName: req.body.lastName}, {
        new: true });
    
    if(!updatedUser) 
    return res.status(404).send('The user with the given ID was not found.');

    res.send(updatedUser);

});

router.delete('/:id', async(req, res) => {
    const deleteUser = await User.findByIdAndRemove(req.params.id);

    if(!deleteUser) 
    return res.status(404).send('The user with the given ID was not found.');
    
    
    res.send(deleteUser);


})


module.exports = router;