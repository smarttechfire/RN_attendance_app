const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://sathish09117:sathish09117@mern.dqznxj5.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

app.listen(port, () => {
  console.log("Server is running on port 8000");
});

//end point to register a employee
app.post("/addEmp",async(req,res) =>{
    try {
        const {empName,empId,designation,joiningDate,dateOfBirth,salary,activeEmp,phoneNumber,address} = req.body;  

        //Create a new Employee
        const newEmployee = new Employee({
            empName,empId,designation,joiningDate,dateOfBirth,salary,activeEmp,phoneNumber,address
        });
        await newEmployee.save();
        res.status(201).json({message:"Employee saved successfully",employee:newEmployee})
    } catch (error) {
        console.log("Error creating employee",error);
        res.status(500).json({message: "Failed to add an employee"})
    }
});

//endpoint to fetch all the employees
app.get("/emp",async(req,res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({message:"Failed to retrive employees"})
        
    }
})