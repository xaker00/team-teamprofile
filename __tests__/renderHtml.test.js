const fs = require("fs");

const renderHtml = require("../src/renderHtml");
const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

describe("renderHtml", () => {
  it("renders html content", () => {
    const team = [
      new Manager("John Smith", "01", "manager@example.com", "53"),
      new Engineer("Jane Doe", "10", "jane@example.com", "jane"),
      new Engineer("Rob Johnson", "12", "rob@example.com", "rob"),
      new Engineer("Judy Kramer", "13", "judy@example.com", "judy"),
      new Engineer("Alex Brown", "15", "alex@example.com", "alex"),
      new Intern("Mike Miller", "23", "mike@example.com", "The Cool School"),
    ];

    const html = renderHtml(team);
    fs.writeFile("./dist/team-test.html", html, function (err) {
      if (err) throw err;
    });
  });
});
