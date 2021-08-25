const inquirer = require("inquirer");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }

  async consoleInput() {
    const questions = [
      {
        name: "name",
        type: "input",
        message: "Enter employee name",
        default: this.name,
      },
      {
        name: "id",
        type: "input",
        message: "Enter employee ID",
        default: this.id,
      },
      {
        name: "email",
        type: "input",
        message: "Enter employee email",
        default: this.email,
      },
    ];

    console.log(`\nAdding ${this.getRole()}\n-----------------------`);
    const answers = await inquirer.prompt(questions);
    this.id = answers.id;
    this.name = answers.name;
    this.email = answers.email;
  }
}

module.exports = Employee;
