# Object-Oriented-Programming-Team-Profile-Generator
Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 

 
## Decription
 
Building a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
 
 
## Table of Contents (Optional)
 
 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
 
## Installation
 
Because this Challenge will require the use of the `Inquirer` package, ensure that you install and use Inquirer version 8.2.4. To do so, use the following command in your project folder: `npm i inquirer@8.2.4`.
 
## Usage
 
Provide instructions and examples for use. Include screenshots as needed.
 
To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:
 
![alt text](assets/images/screenshot.png)
 
## Credits
 
List your collaborators, if any, with links to their GitHub profiles.
 
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
 
If you followed tutorials, include links to those here as well.
 
## License
 
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
 
---
 
🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
 
## Badges
 
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
 
Badges aren't necessary, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
 
## Features

- Uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).
- Uses the [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests.
 
## How to Contribute
 
If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
 
## Tests
 
Go the extra mile and write tests for your application. Then provide examples on how to run them here.
