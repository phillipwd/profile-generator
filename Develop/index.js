const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const gen = require("./generateHTML");
const convertFactory = require("electron-html-to");
const conversion = convertFactory({
    convertherPath: convertFactory.converters.PDF
});

const questions = [
    {type: "input", name: "github", message:"What is your GitHub username?"},
    {type: "list", name: "color", message:"What is your favorite color?", choices: ["green", "blue", "pink", "red"]},
];
let answers = [];

let profileRequirements = {};

async function getInfo(){
    try{ 
        answers = await (inquirer.prompt(questions))
    }
    catch(err){
        console.log(err);    
    };
    try{
        const gitProfileUrl = "https://api.github.com/users/" + answers.github
        const profileData = await axios.get(gitProfileUrl)
        profileRequirements.avatarUrl = profileData.data.avatar_url;
        profileRequirements.userName = profileData.data.login;
        profileRequirements.githubProfile = profileData.data.html_url;
        profileRequirements.blog = profileData.data.blog;
        profileRequirements.following = profileData.data.following;
        profileRequirements.followers = profileData.data.followers;
        profileRequirements.repos = profileData.data.public_repos;
        profileRequirements.bio = profileData.data.bio;
        // console.log(profileRequirements);
    }
    catch(err){
        console.log(err);
    }

    
};
    
function writeToFile(fileName, data) {
 
}
getInfo();
// function init() {

// init();
