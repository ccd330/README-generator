const licenseArr = ["Apache", "MIT", "GNU", "BSD", "ISC"];
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === licenseArr[0]) {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === licenseArr[1]) {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === licenseArr[2]) {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === licenseArr[3]) {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === licenseArr[4]) {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseArr[0]) {
    return `[${licenseArr[0]}](https://www.apache.org/licenses/LICENSE-2.0)`;
  } else if (license === licenseArr[1]) {
    return `[${licenseArr[1]}](https://opensource.org/licenses/MIT)`;
  } else if (license === licenseArr[2]) {
    return `[${licenseArr[2]}](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
  } else if (license === licenseArr[3]) {
    return `[${licenseArr[3]}](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === licenseArr[4]) {
    return `[${licenseArr[4]}](https://opensource.org/licenses/ISC)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === licenseArr[0]) {
    return `Read more about ${licenseArr[0]} here:`;
  } else if (license === licenseArr[1]) {
    return `Read more about ${licenseArr[1]} here:`;
  } else if (license === licenseArr[2]) {
    return `Read more about ${licenseArr[2]} here:`;
  } else if (license === licenseArr[3]) {
    return `Read more about ${licenseArr[3]} here:`;
  } else if (license === licenseArr[4]) {
    return `Read more about ${licenseArr[4]} here:`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, license) {
  return `# ${data.title}

  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description] (#description)
  * [Installation Instructions] (#installation-instructions)
  * [Usage] (#usage)
  * [License] (#license)
  * [Contributions] (#contributions)
  * [Test Instructions] (#test-instructions)
  * [Questions] (#questions)

  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

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
