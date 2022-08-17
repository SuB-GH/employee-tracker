const inquirer = require('inquirer');
const db = require('./db/connection'); //this will console.log "Connected to the employeedb database."
const cTable = require('console.table');

require("dotenv").config()
const dotenv = require("dotenv")
dotenv.config()

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
  .then(res => {
    switch (res.navigation) {

      //this works!
      case "View all departments":
        console.log("This will show a formatted table showing department names and department ids");

        db.query(`SELECT * FROM department`, (err, rows) => {
          console.table(rows);
        })
        break;

      //this works!
      case "View all roles":
        console.log("this will show job title, role id, the department that role belongs to, and the salary for that role");
        db.query(`SELECT * FROM roles`, (err, rows) => {
          console.table(rows);
        })
        break;

      //this works!
      case "View all employees":
        console.log("this will show formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to");
        db.query(`SELECT * FROM employee`, (err, rows) => {
          console.table(rows);
        })
        break;

      //this works!
      // case "Add a department":
      // console.log("this will prompt me to enter the name of the department and that department is added to the database");
      // db.query(`SELECT * FROM employee`, (err, rows) => {
      //   console.table(rows);
      // })
      // break;

      
      case "Add a department":
        //console.log("this will prompt me to enter the name of the department and that department is added to the database");
        inquirer.prompt(
          {
            type: 'input',
            name: 'newDept',
            message: 'What is the name of the department?',
            value: "", 
          
          },
        )
        
        db.connect(function(err) {
          if (err) throw err;
          var sql = "INSERT INTO department (dept_name, dept_id) VALUES ('Engineering', '02')";
        db.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        })
      });
        break;

      case "Add a role":
        console.log("this will prompt me to enter the name, salary, and department for the role and that role is added to the database");
        db.query(`SELECT * FROM employee`, (err, rows) => {
          console.table(rows);
        })
        break;

      case "Add an employee":
        console.log("this will prompt me to enter the employee’s first name, last name, role, and manager, and that employee is added to the database");
        db.query(`SELECT * FROM employee`, (err, rows) => {
          console.table(rows);
        })
        break;

      case "Update an employee role":
        console.log("this will prompt me to select an employee to update and their new role and this information is updated in the database");
        db.query(`SELECT * FROM employee`, (err, rows) => {
          console.table(rows);
        })
        break;

      default:
        console.log("default null");
        break;
    }
    //this works!
    // .then((answer) => {
    //   //  db.query(`SELECT * FROM employee`, (err, rows) => {
    //   //   console.table(rows);
    //     db.query(`SELECT * FROM department`, (err, rows) => {
    //       console.table(rows);

    //   });
    // console.log(answer.navigation);
    // db.query(`SELECT * FROM role`, (err, rows) => {
    //   console.table(rows);
    // });
    //this works!
    // db.query(`SELECT * FROM employee`, (err, rows) => {
    //   console.table(rows);
    // });

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
