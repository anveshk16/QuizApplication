const readLineSync = require('readline-sync');

console.log('Let\'s play a small quiz!');
const press = readLineSync.question('Press enter to continue...\n');

const questions = [
  {
    question : 'Who has scored the most goals in Soccer?',
    options : ['L Messi','C Ronaldo','Pele','G Muller'],
    answer : '2'
  },
  {
    question : 'Who has scored the most runs in International Cricket?',
    options : ['SR Tendulkar','B Lara','RT Ponting','V Kohli'],
    answer : '1'
  },
  {
    question : 'Which basketball player has the most baskets?',
    options : ['M Jordan','K Bryant', 'L James','KA Jabbar'],
    answer : '4'
  },
  {
    question : 'Who has won the most Wimbledon titles(Men)?',
    options : ['R Federer','R Nadal','N Djokovic','A Murray'],
    answer : '1'
  },
  {
    question : 'Who has scored the most goals in Hockey?',
    options : ['G Howe','W Gretzky','J Jagr','D Chand'],
    answer : '2'
  }
]; 
function play(questions){
  console.log(questions.question);
  for(let i=0; i<questions.options.length; i++){
    console.log((i+1)+". "+questions.options[i]);
  }
  const  selected_answer = readLineSync.question('Select your answer: ');
  if(selected_answer === questions.answer){
    console.log("Congrats! That's correct\n");
    score++;
  }else{
    console.log("Sorry! That's incorrect")
    console.log("Correct answer is "+questions.answer+"\n");
  }
}

let score = 0;
if(!press){
questions.forEach(play);
console.log(`Thank You, your score is ${score}/5`);
}