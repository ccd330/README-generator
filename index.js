// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const promptQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of the project (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("You need to enter a project description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "install",
      message:
        "If applicable, provide installation instructions for the project",
      default: false,
    },
    {
      type: "input",
      name: "usage",
      message:
        "Provide a description of the usage information for the project (Required)",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("You need to enter usage information!");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmLicense",
      message: "Would you like to add a license to your project?",
      default: true,
    },
    {
      type: "checkbox",
      name: "licenses",
      message: "What license did you create this project with?",
      choices: ["Apache", "MIT", "GNU", "BSD", "ISC"],
      when: ({ confirmLicense }) => confirmLicense,
    },
    {
      type: "input",
      name: "contribution",
      message:
        "Provide a description of the contributions to the project (i.e. who did what) (Required)",
      validate: (contributionInput) => {
        if (contributionInput) {
          return true;
        } else {
          console.log("You need to enter contribution information!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "tests",
      message:
        "Provide testing instructions for viewers to replicate on their local machine (Required)",
      validate: (testsInput) => {
        if (testsInput) {
          return true;
        } else {
          console.log("You need to enter testing instructions!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "username",
      message:
        "Provide your GitHub username (do not include the @ symbol) (Required)",
      validate: (usernameInput) => {
        if (usernameInput) {
          return true;
        } else {
          console.log("You need to enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message:
        "Provide your email so that viewers may contact you about your project(Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("You need to enter your email!");
          return false;
        }
      },
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./dist/ExampleREADME.md`, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Your README has been successfully created!");
    }
  });
}

// TODO: Create a function to initialize app
async function init() {
  const questions = await promptQuestions();
  writeToFile(questions.fileName, generateMarkdown(questions));
}

// Function call to initialize app
init();
