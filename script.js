// creating a magic 8 ball with javascript.

// creating a user that will take will hold the name of the user.
var userName = 'Ezra';

/* this is a short hand method for an if else statement, im basicly saying 
if my userName equals what\'s in the string do console this else console that
 */
var userName = 'Ezra';
userName === 'Ezra' ? console.log(`Hello Ezra!`) :
console.log('wrong');

// the question i have for the 8 ball.
var userQuestion = 'will i get a job as a software developer?';

// this will log the the question.
console.log(`the user asked ${userQuestion}`);

// create something that generates a random number between 0 and 7

var randomNumber = Math.floor(Math.random() * 8 );

var eightBall = randomNumber;

switch (eightBall) {
 case 0 :
  console.log('It\'s certain')
  break;

 case 1:
  console.log('It\'s decidedly so')
  break;

  case 2:
   console.log('reply hazy try again')
   break;

   case 3:
    console.log('Cannot predict now')
    break;

   case 4:
    console.log('Do not count on it')
    break;
   
   case 5:
    console.log('My sources say no')
    break;

    case 6:
     console.log('Outlook not so good')
     break;

    case 7:
     console.log('Signs point to yes')
     break;
}
// this is here to see what case it chooses.
console.log(eightBall);

