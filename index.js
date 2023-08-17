// required to write a file
const fs = require('fs')
// inquirer package needed for this application
const inquirer = require('inquirer');
// import generateMarkdown function
const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'What is your first and last name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide installation instructions for the project.',
        name: 'installation',
        default: 'Type \"npm install\" into the terminal.',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide the link to your deployed application.',
        name: 'link',
    },
    {
        type: 'input',
        message: 'List any names of those contributing to this project.',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Provide instructions for testing.',
        name: 'tests',
        default: 'Type \"npm test\" into the terminal.',
    },
    {
        type: 'list',
        message: 'What license does your project use?',
        name: 'license',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause License', 'BSD 3-Clause License', 'Boost Software License', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Afferal General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
])
};

// a function to write the README file
const writeToFile = data => {
    return fs.writeFile('generatedREADME.md', data, err =>  {
            err ? console.error(err) : console.log('Your README was successfully generated!');
        })
};

// a function to initialize the app
function init() {
    questions().then((response) => generateMarkdown(response))
    .then((res) => {
        writeToFile(res);
    });
}

// function call to initialize app
init();