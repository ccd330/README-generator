// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const propmtQuestions = () => {
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
    // ADD TESTS //
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
      name: "question",
      message:
        "Provide a description of how viewers can reach you with questions about your project, including your email address (Required)",
      validate: (questionInput) => {
        if (questionInput) {
          return true;
        } else {
          console.log("You need to enter contact information!");
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
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

propmtQuestions();
