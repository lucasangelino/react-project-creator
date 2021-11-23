var inquirer = require("inquirer");
console.log("React Project Creator 🚀");
inquirer
  .prompt(["Project Name?"])
  .then((answers) => {
    console.log("your proyect name is: ", answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });
