const express = require('express');
const router = express.Router();
const path = require('path');
const User = require('../model/user');

router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '../public/index.html'));
  
    User.find({}, (err, user) => {
        res.render('index', {
            userNames: user
        })
    })
});

router.post('/', (req, res) => {
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    });

    newUser.save();
    res.redirect('/');
     
});

router.post('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect('/');
        }
        else{
            res.redirect('/');
        }

    })
});

router.post('/user/:id', (req, res) => {
    // User.findByIdAndUpdate({ _id: req.params.id}, {$set: {
    //     firstname: req.body.firstnamee,
    //     //lastname: req.body.lastname,
        
    //   }}, function(err, result){
    //     if (err) {
    //       console.log(err);
    //     } else {
    //      console.log("Post Updated successfully");
    //      res.redirect('/');
    //  }
    // });
    // User.findByIdAndUpdate(req.params.id, {firstName: req.body.firstNamee}, {
    //     new: true });
        
        
    //     res.redirect('/');

    const updatedUser = {
        firstName: req.body.firstNamee,
        lastName: req.body.lastNamee
    }
    if(updatedUser.firstName === '' || updatedUser.lastName === ''){
        res.redirect('/')
    }else{
        User.findByIdAndUpdate(req.params.id, updatedUser, function(err){
            if(err){
                res.redirect('/');
            }else{
                res.redirect('/');
            }
        })

    }
        
            
    
})




module.exports = router;