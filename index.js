//required modules
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';


// Created array of questions for README included questions and validation
const questions = [

    {
        //Name
        type: 'input',
        name: 'name',
        message: 'What is your projects name?',
        //validation for project name input
        validate: (checkname) => {
            if(checkname)
                return true;
            else {
                console.log("Projects name is required!")
                return false;
            }
        }
    },

    {
        //description
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project, What does it do?',
        //validation for description input
        validate: (checkdescription) => {
            if(checkdescription)
                return true;
            else {
                console.log("Description for your project is required!")
                return false;
            }
        }
    },

    {
        //installation
        //Ask user if they would like to input installment information
        type: 'confirm',
        name: 'confirminstallation',
        message: "Would you like to enter information on how to install your project?",
        default: false,
    },
    {
        //if 'yes' to the question prior it will run the following code asking for installation instructions
        type: 'input',
        name: 'installation',
        message: "How can you install the project?",
        when: ({confirminstallation}) => {
            if(confirminstallation) {
                return true;
            } else {
                return false;
            }
        },
        //validate responde to checkinstallation
        validate: checkinstallation => {
            if(checkinstallation)
                return true;
            else {
                console.log("Enter Installation instructions!")
                return false;
            }
        }
    },

    {
        //use
        type: 'input',
        name: 'use',
        massage: "How would you use this projects?",
        //validate the use input
        validate: checkuse => {
            if(checkuse)
                return true;
            else {
                console.log("Enter the usage of your project!")
            }
        }
    },

    {
        //contributions
        //asks user if they would like to add contributions
        type: 'confirm',
        name: 'confirmcontributions',
        message: "Do you want to add contributors?",
        default: false,
    },
    {
        //if 'yes' to the question above user will be prompted the following
        type: 'input',
        name: 'contribution',
        message: "How would someone contribute to this project?",
        when: ({confirmcontribution}) => {
            if(confirmcontribution)
                return true;
            else
                return false;
        },
        //validates the input for contributions
        validate: checkcontribution => {
            if(checkcontribution)
                return true;
            else {
                console.log("Enter possible contributions!")
                return false;
            }
        }
    },

    {
        //testing
        type: 'input',
        name: 'testing',
        message: "How can we test your project?",
        //validate testing input
        validate: checktesting => {
            if(checktesting)
                return true;
            else {
                console.log("Enter testing details!")
                return false;
        }
        }
    },

    {
        //Github
        type: 'input',
        name: 'github',
        message: "Enter your github username",
        //validate github input
        validate: checkgithub => {
            if(checkgithub)
                return true;
            else {
                console.log("Your github name is required!")
                return false;
            }
        }
    },

    {
        //Email
        type: 'input',
        name: 'email',
        message: "Enter your email address",
        //validation of email address
        validate: checkemail => {
            if(checkemail)
                return true;
            else {
                console.log("Email is required!")
                return false;
            }
        }
    },

    {
        //liscense
        type: 'checkbox',
        name: 'license',
        message: "Select the license for this project",
        choices: ['MIT', 'Apache', 'GNU', 'No license']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,error => {
        if(error)
        throw "Unable to generate README because" + error;
        else
        console.log("Your README has been generated!")
    })
}

// TODO: Create a function to initialize app
//use function to create the README file
function init() {
    try{
        inquirer.prompt(questions)
        .then(userinput => 
            writeToFile("Readme.md",generateMarkdown(userinput))
        )}
        catch(err)
        {
            console.log(err);
        }
}

// Function call to initialize app
init();