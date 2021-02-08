# Workforce Directory

## Links
- Deployed: (https://jdmarty.github.io/workforceDirectory/)[https://jdmarty.github.io/workforceDirectory/]
- Repository: (https://github.com/jdmarty/workforceDirectory)[https://github.com/jdmarty/workforceDirectory]

![Deployed Screenshot](https://github.com/jdmarty/workforceDirectory/blob/main/public/deployedScreen.PNG)

## Description
This conceptual app demonstrates how React can be used to create sortable data tables that respond instantly to user input. By submitting search terms and restraints in the search form, a user can filter the table of user accounts to fit their needs, or sort those users by age or registration date.

## Use Instructions
When this app loads, it will generate a table of 100 users that can be sorted using a number of criteria

### Filtering
- Name: Type text into the name search field to find a name containing a matching string
- Username: Type text into the username search field to find a username containing a matching string
- Country: Select a country to see only users from that country
- City: Select a city to see only users from that city

### Sorting
Click the dash/arrow next to the age or registered column to change sort direction of that column

### Reset
Click the reset button to remove all sorting and filter modifiers from the table

### Generate Users
- Set the value in the Generate Users button to a number of users that you would like to generate for a new table
- Click the Generate Users button to create a new table of the input number of users (up to 1000)

## License
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

This project uses the ISC license

---------------------------------------------

# Unit 19 React Homework: Employee Directory

## Overview

For this assignment, you'll create a employee directory with React. This assignment will require you to break up your application's UI into components, manage component state, and respond to user events.

## User Story

* As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.

## Business Context

An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

## Acceptance Criteria

Given a table of random users generated from the [Random User API](https://randomuser.me/), when the user loads the page, a table of employees should render. 

The user should be able to:

  * Sort the table by at least one category

  * Filter the users by at least one property.

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

1. Your commit history is a signal to employers that you are actively working on projects and learning new skills

2. Your commit history allows you to revert your code base in the event that you need to return to a previous state

Follow these guidelines for committing:

* Make single purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history

* Don't commit half done work, for the sake of your collaborators (and your future self!)

* Test your application before you commit to ensure functionality at every step in the development process

* We would like you to have well over 200 commits by graduation, so commit early and often!

* Deploy this site to GitHub Pages using the [Create React App docs for deployment.](https://create-react-app.dev/docs/deployment/#github-pages)

* **Important**: Be sure to push your codebase to GitHub and **NOT** your built and deployed code. Ensure this happens by following the above instructions and using the `gh-pages` branch to host the deployed application's code.

## Submission on BCS

You are required to submit the following:

* the URL to the deployed application

* the URL to the Github repository
