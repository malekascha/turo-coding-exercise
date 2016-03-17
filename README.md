# turo-coding-exercise
This is a solution to the Server (Full-Stack) coding exercise from Turo.
#How to use
First, [download the latest version of NodeJS.](https://nodejs.org/en/download/)
Then, clone the repository to your machine. Navigate to the root directory using the command line. 
To open the command line interface, use the following command:
```
node app.js
```
If you wish to give a text file to the interface containing a list of commands, use the following format, where PATHTOFILE is the relative path to the text file:
```
node app.js < PATHTOFILE
```
All commands must be separated by a newline character.
#Comments

Please note: If you are on Windows, and are using a command line runner such as cygwin or git bash, you may be unable to give text files containing commands to the program.

The database only exists for as long as the program is running. As soon as an END command is received, the program terminates and all data is lost.

The database was implemented as a Javascript object. This allowed most operations to be done at O(1) time complexity.

Database transactions were implemented using the prototypal inheritance properties of Javascript. 
Every new transaction creates an object whose prototype is the database object.
This allows for minimal memory use when utilizing a transaction, because none of the database is copied.
