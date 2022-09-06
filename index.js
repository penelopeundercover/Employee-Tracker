require("dotenv").config();
const chalk = require("chalk");
const inquirer = require("inquirer");
const dbConfig = require("./config/dbConfig");
const BaseEntity = require("./models/BaseEntity");

async function main() {
  const dbConnection = await dbConfig();
  console.info(chalk.blue("=".repeat(30)));
  console.info(chalk.blue("Connecting to database..."));
  console.info(chalk.blue("=".repeat(30)));
  console.info(chalk.blue("=".repeat(30)));
  console.info(chalk.blue("Connected to database!"));
  console.info(chalk.blue("=".repeat(30)));

  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          {
            name: "View all departments",
            value: "viewDepartments",
          },
          {
            name: "View all roles",
            value: "viewRoles",
          },
          {
            name: "View all employees",
            value: "viewEmployees",
          },
          {
            name: "Add a department",
            value: "addDepartment",
          },
          {
            name: "Add a role",
            value: "addRole",
          },
          {
            name: "Add an employee",
            value: "addEmployee",
          },
          {
            name: "Update an employee role",
            value: "updateRole",
          },
        ],
      },
    ])
    .then(function (value) {
      switch (value.choice) {
        case "viewDepartments":
          viewDepartments();
          break;
        case "viewRoles":
          viewRoles();
          break;
        case "viewEmployees":
          viewEmployees();
          break;
        case "addDepartment":
          addDepartment();
          break;
        case "addRole":
          addRole();
          break;
        case "addEmployee":
          addEmployee();
          break;
        case "updateRole":
          updateRole();
          break;
      }
    });

  function viewDepartments() {
    //Start with view(), then go into adding employees, departments, etc.
    //Pull in method findAll() with connection, which will send SELECT * FROM department.
    //Console.table on the data that comes back from that, and it will show the data in a nice format.
  }
}

main();
