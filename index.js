// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer
    .prompt([
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
        message: "Does your project include a license?",
        default: true,
      },
      {
        type: "checkbox",
        name: "license",
        message: "What license did you create this project with? (Required)",
        choices: ["Apache", "MIT", "GNU", "BSD", "ISC"],
        when: ({ confirmLicense }) => {
          if (confirmLicense) {
            return true;
          } else {
            return false;
          }
        },
        validate: (licenseChoice) => {
          if (licenseChoice) {
            return true;
          } else {
            console.log("Please select a license!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "licenseLink",
        message: "Enter the link to your project license. (Required)",
        when: ({ confirmLicense }) => {
          if (confirmLicense) {
            return true;
          } else {
            return false;
          }
        },
        validate: (licenseLinkInput) => {
          if (licenseLinkInput) {
            return true;
          } else {
            console.log("Please enter a link to your project license!");
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
    ])
    .then(data => {
      return data;
    });
};

function writeToFile(readmeFile) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/ExampleREADME.md', readmeFile, err => {
            if (err) {
                reject(err)
                return;
            }
            resolve({
                ok: true, 
                message: 'Your README.md was successfully created!'
            });
        });
    });
};


// TODO: Create a function to initialize app
function init() {
  promptUser()
    .then(data => {
      return generateMarkdown(data);
    })
    .then((READMEFile) => {
      return writeToFile(READMEFile);
    })
    .then((writeToFileResponse) => {
      console.log(writeToFileResponse);
    })
    .catch((err) => {
      console.log(err);
    });
}
// Function call to initialize app
init();
