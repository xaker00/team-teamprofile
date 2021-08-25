const Employee = require("./employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }

  getGitHub(){
    return this.github;
  }

  async consoleInput() {
    await super.consoleInput();

    const questions = [
      {
        name: "github",
        type: "input",
        message: "Enter GitHub username",
        default: this.github,
      },
    ];
    const answers = await inquirer.prompt(questions);
    this.github = answers.github;
  }
}

module.exports = Engineer;
