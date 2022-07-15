// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license!=='None')
  {
    return `[![license](https://img.shields.io/badge/license-${license}-blue)](https://shields.io)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license!=='None')
  {
    return `* [License](##license) `
  }
    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    This application is covered under the ${license} license.`;
  }
    return '';
}

//check if user wants to enter some
const checkContribute=data=>{
  if(data)
  {
    return data;
  }
  return "No one is allowed to contribute in this project."
}
const checkInstallation=data=>{
  if(data)
  {
    return data;
  }
  else{
  return "Installation details are not avaliable."}
}

// TODO: Create a function to generate markdown for README
//Format of generated README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  ## Description
  🔍${data.description}

  ## Table of Content
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  ${renderLicenseLink(data.license)}
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation 
  💾${checkInstallation(data.install)}

  ## Usage
  💻${data.usage}

  ## Contribution
  👪${checkContribute(data.Contribution)}

  ✋${renderLicenseSection(data.license)} 

  ## Tests
  ✏️${data.test}
  
  ## Questions
  If you have any queries feel free to contact me at ✉️ ${data.email}.
  You can also reach me out through my Github profile at  👋[${data.github}](https://github.com/${data.github}/).
  `
}

//export generateMarkdown to index.js file
export default generateMarkdown;
