const Employee = require("./employee");
const inquirer = require("inquirer");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  async consoleInput() {
    await super.consoleInput();

    const questions = [
      {
        name: "officeNumber",
        type: "input",
        message: "Enter office number",
        default: this.officeNumber,
      },
    ];
    const answers = await inquirer.prompt(questions);
    this.officeNumber = answers.officeNumber;
  }
}

module.exports = Manager;
