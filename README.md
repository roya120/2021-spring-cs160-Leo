# Bookey

## How to setup the environment

1. Install MongoDB Compass: https://www.mongodb.com/try/download/compass
2. Install Node.js: https://nodejs.org/en/download/
3. Clone this repo
4. Navigate in your system browser to "2021-spring-cs160-leo/server" and delete the folder "node_modules"
5. Open up the Node.js command prompt and cd to "2021-spring-cs160-leo/server"
6. While your terminal is CD'd into the server directory, run the command "npm install"
7. Wait for the installation to finish.
8. To run the server, cd to the server directory and run the command "npm start"
9. Then, after the server is running, open a new Node.js command prompt and cd to the client directory.
10. While your terminal is CD'd into the client directory, run the command "npm start."

## Branching guidelines

The master branch is left empty intentionally. Do not push anything into this branch. For now, the main branch is "bookey."
To add a new feature or make a bug fix, navigate to the "bookey" branch then create a new branch from it.
To push your feature or bug fix into "bookey," make a pull request and set it to compare "bookey" to your branch.
2 team members are required to perform code reviews and approve your pull request before it can be merged.

## TODO: For existing team members and new ones

* Fix the issue where the search result mode is an undefined object
* Display search results in the search page
* Make the checking out and returning backend dependent on email, not MongoDB ObjectIDs
* Frontend for checking out and returning
* Book club chat
* A custom book id implementation
* Make the front end prettier
