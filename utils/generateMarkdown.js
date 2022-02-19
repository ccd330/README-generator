// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `
    ##${license}
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, license) {
  return `# ${data.title}

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
  ${renderLicenseSection(license)}

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

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};
