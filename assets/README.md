# note-taker

# Note Taker

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

The note taker application is a front end application that allows someone to easily add notes to their list, the notes can be day-to-day tasks or reminders of phone calls they need to make.

I learnt alot about express and building routes. 


---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)
- [Credits](#credits)

---

## Installation

You will need to clone the application from my GitHub account: https://github.com/RosemaryJF/team-profile-generator, to your local repository, and have Node.js installed on your code editor, if it isn't already.

Once cloned to the local repository the user will need to run `npm i` so that the necessary packages are installed on the application. From there you will be able to run the application in your intergrated terminal with the following command: `node index.js`.

Once the user has run `npm i`, they will have the required packages (inquirer and jest) available to run the application and the tests.

---

## Usage

Open index.js in the integrated terminal. 

To run the tests simpley enter `npm run test` in the console.

Once all test have passed you can run the application with the commane `node index.js`.

The console will then log the manager questions via inqurier. The user answers each question and then will choose what team member they would like add next. 
The next questions run will depend on what employee type the user has selected to add to the team. As the user finishes each round of questions their answers are stored as data.

Once the user has finished building their team through the console they can choose the following option: "I do not want to add anymore employees".

When this option is selected the application runs the `generateHTML` function which pulls on the `generateBaseHtml` function/data inside the `template.js` file. A index.html is generated dynamically and added to the dist folder. Each employee has a card generated in the HTML file which displays the information that has been entered.

The below link will take you through a walk through video of the application and it's functionality:

[Watch the walkthrough video by clicking this link](https://drive.google.com/file/d/1Ta3VUYG-VuuZVGUUX1N7mAtjrm6FrXwe/view)

---

## Features

My favourite feature (apart from the fact this whole application is kinda a feature...) is the small icon that generates beside each employee type role. This helps the user quickly identify who is what in their team without having to read.

---

## License

This application is licensed under an [MIT license](https://github.com/RosemaryJF/team-profile-generator/blob/main/dist/LICENSE).

---

## Credits

* https://jestjs.io/docs/asynchronous

* https://fontawesome.com/docs/web/style/basics

* https://www.thecodingwalrus.com/js/javascript-for-loop-alternatives-2/

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push