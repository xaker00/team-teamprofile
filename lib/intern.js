const Employee = require('./employee');
const inquirer = require("inquirer");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getRole(){
        return 'Intern';
    }

    getSchool(){
        return this.school;
    }

    async consoleInput() {
        await super.consoleInput();
    
        const questions = [
          {
            name: "school",
            type: "input",
            message: "Enter school name",
            default: this.school,
          },
        ];
        const answers = await inquirer.prompt(questions);
        this.school = answers.school;
      }
}

module.exports = Intern;