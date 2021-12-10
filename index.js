var inquirer = require("inquirer");

var questions = [
  {
    type: "input",
    name: "projectName",
    message: "What's your React Project's Name?",
  },
  {
    type: "checkbox",
    name: "projectModules",
    message: "Which modules do yo want to add?",
    pageSize: 10,
    choices: [
      "Authenticacion",
      "Default Layout",
      "Styles in CSX",
      "Dinamyc Routing",
      "Performance Profiler",
      "Cache Management",
      "Testing",
      "I am not sure which modules to add (Will create a default project)",
    ],
  },
];

var styles = {
  // technique afrom
  // https://github.com/istanbuljs/istanbuljs/blob/0f328fd0896417ccb2085f4b7888dd8e167ba3fa/packages/istanbul-lib-report/lib/file-writer.js#L84-L96
  success: { open: "\u001b[32;1m", close: "\u001b[0m" },
  danger: { open: "\u001b[31;1m", close: "\u001b[0m" },
  info: { open: "\u001b[36;1m", close: "\u001b[0m" },
  subtitle: { open: "\u001b[2;1m", close: "\u001b[0m" },
};

function color(modifier, string) {
  return styles[modifier].open + string + styles[modifier].close;
}

console.log(color("info", "    ▶️  Starting..."));

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log("✅ Project Created");
    // for (var key in answers) {
    //   console.log(color("subtitle", key), color("info", answers[key]));
    // }
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Your console environment is not supported! ");
    } else {
      console.log(error);
    }
  });
