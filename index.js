// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your README title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What is your installation?',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'What is your usage?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What are your credits?',
        name: 'credits',
      },
      {
        type: 'list',
        message: 'What is your license?',
        name: 'license',
        choices: ['Apache', 'Boost', 'BSD', 'Creative Commons', 'MIT' ]
      },
      {
        type: 'input',
        message: 'Who are your contributors?',
        name: 'contributors',
      },
      {
      type: 'input',
      message: 'Include any tests?',
      name: 'tests',
    },{
    type: 'input',
    message: 'What is your Github username?',
    name: 'github',
    },
    {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
  },


];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
inquirer.prompt(questions).then(data => {
    console.log(data)
    fs.writeFile('README.md', generateMarkdown(data),(err) => {})
})




// .then((response) => {
//     fs.writeFile('README.md', generateHTML(response), (err) =>
//     err ? console.error(err) : console.log('Success!')
//   )});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
