const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

const questions = [
    {type: "input", name: "name", message:"What is your Name?"},
    {type: "input", name: "github", message:"What is your GitHub username?"},
    {type: "input", name: "blog", message: "What is your blog address?"}
];
let answers = [];

async function getInfo(){
    try{ 
        answers = await (inquirer.prompt(questions))
    }
    catch(err){
        console.log(err);    
    };
    try{
        const gitUrl = "https://github.com/" + answers.github;
        axios.get(gitUrl).then(function(reply){
            console.log(reply);
            
            const repoNames = reply.data//.repos;
        });
    }
    catch(err){
        console.log(err);
        
    };
    // (console.log(answers.name));getting answers from prompt works
};

function writeToFile(fileName, data) {
 
}
getInfo();
// function init() {

// init();
