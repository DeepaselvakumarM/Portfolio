const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/register', (req, res) => {
    const { name, email, password, about, projects, skills } = req.body;
    EmployeeModel.create({ name, email, password, about, projects, skills })
        .then(employee => res.json(employee))
        .catch(err => res.json(err));
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ status: "success", user: user });
                } else {
                    res.json({ status: "error", message: "Incorrect password" });
                }
            } else {
                res.json({ status: "error", message: "No record existed" });
            }
        })
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("server is running");
});
