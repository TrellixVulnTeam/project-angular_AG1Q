const express = require('express');
const { isAuthenticatedUser } = require('../Middlewares/auth');
const router = express.Router();
const workouts = require('../models/data')
const advancedQuery = require('../Middlewares/advanced-query');


// protected route on back-end
router.get('/',async (req, res) => {
    // db and fetch all courses
    const workout = await workouts.find()
    // let data = await workouts.find();
    res.json(workout);

})

router.get('/:id',async (req, res) => {
    // db and fetch all courses
    console.log(req.params.id)
    console.log("jeffa")

    let data = await workouts.findById(req.params.id);
    res.json(data);
    console.log(data);
})



    
router.post('/', async (req, res) => { 
    // db and insert one course  
    console.log("i am ready",req.body)  
    let data = await workouts.create(req.body);
    res.status(201).json(data);
    console.log("i am in route")
})

// router.delete('/:id', async (req, res) => {
//     // db and insert one course    
//     console.log(req.params.id);
//     let result = await Employee.findByIdAndDelete(req.params.id);
//     console.log(result);
//     res.json(result);
// })

// router.patch('/:id', async (req, res) => {
//     // db and insert one course    
//     console.log(req.params.id);
//     let updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body);
//     res.json(updatedEmployee)
// })

module.exports = router