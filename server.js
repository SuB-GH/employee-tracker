const inquirer = require('inquirer');
require("dotenv").config()
// const dotenv = require("dotenv")
// dotenv.config()

const db = require('./db/connection');


//inquirer prompts
inquirer.prompt([
  {
    type: 'list',
    name: 'navigation',
    message: 'What would you like to do?',
    choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
  }
])
  .then(({ navigation }) => {
    console.log(navigation);

    var name = "View all departments"
    switch (name) {
      case "View all departments":
        console.log("show table containing dept names and ids");
        

        // switch (name) {
        //   case "View all roles":
        //     console.log("show job title, role id, salary");

        // }
    }});


// Start server after DB connection
// db.connect(err => {
//   if (err) throw err;
//   console.log('Database connected.');
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// });

