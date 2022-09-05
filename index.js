require("dotenv").config();
const chalk = require("chalk");
const inquirer = require("inquirer");
const dbConfig = require("./config/dbConfig");

async function main() {
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
        name: "menuChoice",
        message:
          "What would you like to do? Select an option from the list below. ",
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
        ],
      },
    ])
    .then((answer) => async {
      console.log(answer);
      const dbConnection = await dbConfig();
      //Use an if/else or switch case to figure out which menu choice they picked, and call viewDepartment, viewRole, etc, accordingly.
      //Start with view(), then go into adding employees, departments, etc.
      //Pull in method findAll() with connection, which will send SELECT * FROM department.
      //Console.table on the data that comes back from that, and it will show the data in a nice format.
      //switch (choice) {
     // case "viewDepartment:
//viewDept();
//case "viewRole"

    });
}
main();
