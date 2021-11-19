var inquirer = require("inquirer");
console.log("Create Proyect App 🚀");
inquirer
  .prompt(["Project Name?"])
  .then((answers) => {
    console.log("your proyect name is: ", answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
