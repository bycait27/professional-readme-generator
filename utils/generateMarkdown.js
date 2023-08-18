// variable that contains the current year
const currentYear = new Date().getFullYear();

// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'None':
      return '';
      break;
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
      break;
    case 'GNU General Public License v3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
      break;
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      break;
    case 'BSD 2-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]';
      break;
    case 'BSD 3-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
      break;
    case 'Boost Software License':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]';
      break;
    case 'Creative Commons Zero v1.0 Universal':
      return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]';
      break;
    case 'Eclipse Public License 2.0':
      // find license badge
      return '';
      break;
    case 'GNU Afferal General Public License v3.0':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]';
      break;
    case 'GNU General Public License v2.0':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]';
      break;
    case 'GNU Lesser General Public License v2.1':
       // find license badge
      return '';
      break;
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
      break;
    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';
      break;

  }
};

// a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'None':
      return '';
      break;
    case 'Apache License 2.0':
      return '';
      break;
    case 'GNU General Public License v3.0':
      return '';
      break;
    case 'MIT License':
      return '';
      break;
    case 'BSD 2-Clause License':
      return '';
      break;
    case 'BSD 3-Clause License':
      return '';
      break;
    case 'Boost Software License':
      return '';
      break;
    case 'Creative Commons Zero v1.0 Universal':
      return '';
      break;
    case 'Eclipse Public License 2.0':
      // find license link
      return '';
      break;
    case 'GNU Afferal General Public License v3.0':
      return '';
      break;
    case 'GNU General Public License v2.0':
      return '';
      break;
    case 'GNU Lesser General Public License v2.1':
       // find license link
      return '';
      break;
    case 'Mozilla Public License 2.0':
      return '';
      break;
    case 'The Unlicense':
      return '';
      break;

  }

};

// a function that returns the license section of README
// If there is no license, return an empty string
// NOT USING THIS FUNCTION
// function renderLicenseSection(license) {
//   switch(license) {
//     case 'None':
//       return '';
//       break;
//     case 'Apache License 2.0':
//       return `
//       Copyright (c) ${currentYear} ${data.name}
//       Notice: This project is covered under the Apache License 2.0.`;
//       break;
//     case 'GNU General Public License v3.0':
//       return `
//       Copyright (c) ${currentYear} ${data.name}
//       Notice: This project is covered under the GNU General Public License v3.0.`;
//       break;
//     case 'MIT License':
//       return `
//       Copyright (c) ${currentYear} ${data.name}
//       Notice: This project is covered under the MIT License.`;
//       break;
//     case 'BSD 2-Clause License':
//       return `
//       Copyright (c) ${currentYear} ${data.name}
//       Notice: This project is covered under the BSD 2-Clause License.`;
//       break;
//     case 'BSD 3-Clause License':
//       return `
//       Copyright (c) ${currentYear} ${data.name}
//       Notice: This project is covered under the BSD 3-Clause License.`;
//       break;
//     case 'Boost Software License':
//       return `
//       Copyright (c) ${currentYear} ${data.name}
//       Notice: This project is covered under the Boost Software License.`;
//       break;
//     case 'Creative Commons Zero v1.0 Universal':
//       return `
//       Copyright (c) ${currentYear} ${data.name}
//       Notice: This project is covered under the Creative Commons Zero v1.0 Universal License.`;
//       break;
//     case 'Eclipse Public License 2.0':
//       // find license section
//       return `
//       Copyright (c) ${currentYear} ${data.name}
//       Notice: This project is covered under the Eclipse Public License 2.0.`;
//       break;
//     case 'GNU Afferal General Public License v3.0':
//       return `
//       Copyright (c) ${currentYear} ${data.name}
//       Notice: This project is covered under the GNU Afferal General Public License v3.0.`;
//       break;
//     case 'GNU General Public License v2.0':
//       return `
//       Copyright (c) ${currentYear} ${data.name}
//       Notice: This project is covered under the GNU General Public License v2.0.`;
//       break;
//     case 'GNU Lesser General Public License v2.1':
//        // find license section
//       return `
//       Copyright (c) ${currentYear} ${data.name}
//       Notice: This project is covered under the GNU Lesser General Public License v2.1.`;
//       break;
//     case 'Mozilla Public License 2.0':
//       return `
//       Copyright (c) ${currentYear} ${data.name}
//       Notice: This project is covered under the Mozilla Public License 2.0.`;
//       break;
//     case 'The Unlicense':
//       return `
//       Copyright (c) ${currentYear} ${data.name}
//       Notice: This project is covered under the Unlicense.`;
//       break;

//   }

// };

// a function to generate markdown for README with user input from prompts
function generateMarkdown(data) {
  let output = `
  ${renderLicenseBadge(data.license)}
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  [website link](${data.link})

  ## Credits
  ${data.credits}

  ## License
  ${data.license}
  ${renderLicenseLink(data.license)}
  Copyright (c) ${currentYear} ${data.name}
  Notice: This project is covered under the ${data.license}.

  ## How to Contribute
  
  [Contributor Covenant](https://www.contributor-covenant.org/)

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, please contact me at my GitHub account or email address below:
  ${data.github}
  ${data.email}
`;
return output;
};

// exports the generateMarkdown function
module.exports = generateMarkdown;
