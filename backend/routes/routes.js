const express = require("express");
const router = express.Router();
var todoModel = require('../src/todo');

//inserting data into database.....
router.post('/todo/create', async(req, res)=>{
    try{
        const todo = new todoModel(req.body);
        await todo.save();

        res.status(201).send({
            status : true,
            message : "Data inserted successfully"
        });
    } catch (error){
        res.status(400).send(error);
    }
});

//reading data from....
router.get('/todoDetails/', async(req,res)=>{
    try {
        const todos = await todoModel.find({});
        res.send(todos);
    } catch (error) {
        res.status(400).send(error);
    }
});


module.exports = router;