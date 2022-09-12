// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        message: 'Please enter your full name',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Please enter the title of your project',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter the description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please enter installation instructions for your project',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Please enter usage information for your project',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please enter contribution guidelines for your project',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Please enter test instuctions for your project',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Please choose a license',
        name: 'license',
        choices: ['Apache 2.0', 'BSD 3', 'GPL 3.0', 'MIT'],
        default: 0
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Please enter your email address',
        name: 'email'
    }
    
];

// TODO: Create a function to write README file
const writeToFile = (filename, data) => {
    fs.writeFile(`./output/${filename}`, data, error => {
        error ? console.error(error) : console.log('The file has been created');
    });
};

async function init() { 
    try {
        const answers = await inquirer.prompt(questions);
        
        writeToFile('README.md', generateMarkdown(answers));
    }
    catch (error) {
        console.error(error);    
    }
}

// Function call to initialize app
init();
