var readline = require('readline');
var database = require('./db.js');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('>');
rl.prompt();

var db = database();

rl.on('line', function(input) {
  var commands = input.split(' ');
  var cmd = commands[0].toUpperCase();
  if(cmd === 'SET'){
    db.set(commands[1], commands[2]);
    rl.prompt();
  } else if (cmd === 'GET') {
    var val = db.get(commands[1])
    output(db.get(commands[1]));
    rl.prompt();
  } else if(cmd === 'UNSET') {
    db.unset(commands[1]);
    rl.prompt();
  } else if(cmd === 'NUMEQUALTO') {
    var count = db.count(commands[1]).toString();
    output(count);
    rl.prompt();
  } else if(cmd === 'BEGIN'){
    db.createTransaction();
    rl.prompt();
  } else if(cmd === 'COMMIT'){
    var msg = db.commit();
    msg ? output(msg) : null;
    rl.prompt();
  } else if(cmd === 'ROLLBACK'){
    var msg = db.rollback();
    msg ? output(msg) : null;
    rl.prompt();
  } else if(cmd === 'END'){
    rl.close();
  }
});

function output(result){
  rl.write(result + '\n');
};