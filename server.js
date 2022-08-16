const inquirer = require('inquirer');
const db = require('./db/connection'); //this will console.log "Connected to the employeedb database."
const cTable = require('console.table');

require("dotenv").config()
const dotenv = require("dotenv")
dotenv.config()

// console.table("data"); //this works!

// db.query(`SELECT * FROM employee`, (err, rows) => {
//   console.table(rows);
// });

// db.query(
//   'SELECT * FROM `table`',
//   function (results) {
//     console.log('table');
//   }
// );

// connection.query(
//   'SELECT * FROM `department` WHERE `name` = "Page" AND `age` > 45',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

//inquirer prompts
inquirer.prompt([
  {
    type: 'list',
    name: 'navigation',
    message: 'What would you like to do?',
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role"
    ],
  },
])
  .then((answer) => {
    console.log(answer.navigation);
    db.query(`SELECT * FROM employee`, (err, rows) => {
      console.table(rows);
    });

  });

//this prompt works (next 14 lines)
// inquirer.prompt(
//   {
//     type: 'list',
//     name: 'navigation',
//     message: 'What would you like to do?',
//     choices: [
//       "View all departments",
//       "View all roles",
//       "View all employees",
//       "Add a department",
//       "Add a role",
//       "Add an employee",
//       "Update an employee role"
//     ]})
    // .then((answer) => {
    //   console.log("Hello" + answer);
    // }),

    //     .then(data => {
    //   switch (data.start) {
    //     case "View all departments":
    //       viewDept()
    //       break;
    //     case "View all roles":
    //       viewRoles()
    //       break;
    //   }
    // }))
    // ]).then(({ navigation }) => {
    //     console.log(navigation);

    //     var name = "View all departments"
    //     switch (name) {
    //       case "View all departments":
    //         console.log("show table containing dept names and ids");


    //         // switch (name) {
    //         //   case "View all roles":
    //         //     console.log("show job title, role id, salary");

    //         // }
    //     }});



// Start server after DB connection
// db.connect(err => {
//   if (err) throw err;
//   console.log('Database connected.');
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// });

