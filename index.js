require("dotenv").config();
const chalk = require("chalk");
const inquirer = require("inquirer");
const dbConfig = require("./config/dbConfig");
const Departmentjs = require("./models/Department");
const Rolejs = require("./models/Role");
const Employeejs = require("./models/Employee");

async function init() {
  const dbConnection = await dbConfig();
  console.info(chalk.blue("=".repeat(30)));
  console.info(chalk.blue("Connecting to database..."));
  console.info(chalk.blue("=".repeat(30)));
  console.info(chalk.blue("=".repeat(30)));
  console.info(chalk.blue("Connected to database!"));
  console.info(chalk.blue("=".repeat(30)));

  const Department = new Departmentjs(dbConnection);
  const Role = new Rolejs(dbConnection);
  const Employee = new Employeejs(dbConnection);

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
          viewDepartments(Department);
          break;
        case "viewRoles":
          viewRoles(Role);
          break;
        case "viewEmployees":
          viewEmployees(Employee);
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
}

async function viewDepartments(model) {
  const results = await model.findAll();
  const [departmentList] = results;
  console.table(departmentList);
  init();
}

async function viewRoles(model) {
  const results = await model.findAll();
  const [roleList] = results;
  console.table(roleList);
  init();
}
async function viewEmployees(model) {
  const results = await model.findAll();
  const [employeesList] = results;
  console.table(employeesList);
  init();
}
function addDepartment() {}
function addRole() {}
function addEmployee() {}
function updateRole() {}

init();
