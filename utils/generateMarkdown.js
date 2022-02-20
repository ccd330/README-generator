// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (!data.license) {
    return "";
  }
  return `
  ## License
  ![licenseBadge](https://img.shields.io/badge/License-${data.license}-blue.svg)
  ${data.license}
  [See full license information](${data.licenseLink}).
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseSection(data)}

  ## Table of Contents
  * [Description](#description)
  * [Installation Instructions](#installation-instructions)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Test Instructions](#test-instructions)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contribution}

  ## Test Instructions
  ${data.tests}

  # Questions
  Have a question about this project? Feel free to reach me at ${
    data.email
  }, and see more of work my at https://github.com/${data.username}.
`;
}

module.exports = generateMarkdown;
