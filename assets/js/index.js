// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
// import generateMarkdown function
const generateMarkdown = require('utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your first and last name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'projectName',
        },
        {
            type: 'input',
            message: 'Provide a short description explaining what, why, and how of your project.',
            name: 'description',
        },
        {
            type: 'input',
            // figure out how to do screenshots part
            message: 'Provide instructions and examples for use. Include screenshots as needed.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'List any collaborators or references you used to make your project.',
            name: 'credits',
        },
        {
            type: 'list',
            message: 'What license does your project use?',
            name: 'license',
            choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause License', 'BSD 3-Clause License', 'Boost Software License', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Afferal General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
        },
    ])


// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('README.md', data, err =>  {
            err ? console.error(err) : console.log('README file successfully generated!');
        })
}
)};


// .then(response => {
//     fs.writeFile('README.md', data, err =>  {
//         err ? console.error(err) : console.log('README file successfully generated!');
//     })
// })

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();