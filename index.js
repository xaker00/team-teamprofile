const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Choice = require("inquirer/lib/objects/choice");

const employee = new Employee();
const engineer = new Engineer();

const start = async () => {
  // start with empty team
  const team = [];

  // create the manager
  const manager = new Manager();

  //get manager details
  await manager.consoleInput();
  team.push(manager);

  let addMoreMembers = true;

  do {
    let answer = await inquirer.prompt([
      {
        name: "choice",
        type: "list",
        choices: ["Add Engineer", "Add Intern", "Done"],
      },
    ]);
    switch (answer.choice) {
      case "Add Engineer":
        const e = new Engineer();
        await e.consoleInput();
        team.push(e);
        break;
      case "Add Intern":
        const i = new Intern();
        await i.consoleInput();
        team.push(i);
        break;
      case "Done":
        addMoreMembers = false;
        break;
      default:
        addMoreMembers = false;
    }
  } while (addMoreMembers);

  console.log(team);

  return;
  await engineer.consoleInput();

  console.log(engineer);
};

start();
