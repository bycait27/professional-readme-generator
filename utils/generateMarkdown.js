// TODO: Create a function that returns a license badge based on which license is passed in
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
}

// TODO: Create a function that returns the license link
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

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
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
      // return `Copyright (c) ${year} ${firstLastName}

      // Permission is hereby granted, free of charge, to any person obtaining a copy
      // of this software and associated documentation files (the "Software"), to deal
      // in the Software without restriction, including without limitation the rights
      // to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      // copies of the Software, and to permit persons to whom the Software is
      // furnished to do so, subject to the following conditions:
      
      // The above copyright notice and this permission notice shall be included in all
      // copies or substantial portions of the Software.
      
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      // OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      // SOFTWARE.`;
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
      // find license section
      return '';
      break;
    case 'GNU Afferal General Public License v3.0':
      return '';
      break;
    case 'GNU General Public License v2.0':
      return '';
      break;
    case 'GNU Lesser General Public License v2.1':
       // find license section
      return '';
      break;
    case 'Mozilla Public License 2.0':
      return '';
      break;
    case 'The Unlicense':
      return '';
      break;

  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
