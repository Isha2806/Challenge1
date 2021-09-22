//A program to read input from your user. Output this name. Use readlineSync() for this.

// console.log("Isha")  //First_Challenge
var readlineSync = require('readline-sync')
var score ;
score = 0;
//Process
var myName = readlineSync.question('Namaste! MAy I know Your name Please. ');
console.log('Welcome ' + myName + '!');


  //  console.log("==============Now we will learn to write functions=================="); 

  //  function Add(num1 , num2)
  //  {
  //    var sum = num1+num2 ;
  //    return sum ;
  //  }
  // var result=  Add(23,89);
 
  //  console.log( "Answer of Addition  :" + result) ;

  // function Multiply(num1,num2)
  // {
  //   var into = num1*num2;
  //   return into;
  // }
  //   var multi = Multiply(23,89);
  //   console.log( "Answer of Multiplication:" + multi );

    // //Print ISha 5 times
    
    // for(i = 0; i<5; i++)
    // {
    //   console.log( i + " . "+ 'Isha')
    // }

  //Printing stars nboth straight and inverted 

  var star = readlineSync.question("Please Enter a number: ")

  for(i =0 ; i< star ; i++)

    {
       console.log("* ".repeat(i));
    
    }
    //Inverted printing the star
    for(j=star;j>0; j--)
    {
      console.log("* ".repeat(j));
    }
//Grocery Array
var grocery = ["Strawberries","beetroot","potato","Corn","Oil" ,"Beans"]
console.log( myName +" have  " +grocery.length +" things to buy in  list.");
for(i=0;i<grocery.length; i++)
{
console.log(grocery[i])
}

console.log("But You don't have money.\n Lets Play Kyu BANEGA CROREPAT.. \n ")
  
  var hot = readlineSync.question(". Type Anything  when you are ready.")
  //Learning object key:value pair using play function
  var score = 0;

function quiz (question,answer){
  var userAnswer =readlineSync.question(question);
  if(userAnswer===answer){
    console.log("Right Answer")
    score++;
  }else{
    console.log("Ooopsiee! WRONG")
  }
  
}
//array of objects
var questions= [{
  question: "What is Isha's birthdate?",
  answer: "28"},
  {
  question: "What's her birthday month?",
  answer: "June"},
  {
  question: "What's Birth year?",
  answer: "2001"},
  {
  question : "According to your calculation,How young is isha?",
  answer : "20"},
  {
  question: "What is her fav fooditem?",
  answer : "Khasta chaat"},
{
  question: "What is her lucky colour?",
  answer: "red"


}];
//Add loop
for(var i =0;i<questions.length;i++)
{
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer)

}

console.log("Your score is: " +score);
var reward = score*1000;

console.log("You get " +reward +" as reward! ")

var leapYear = readlineSync.question("Enter your birth year");

if(leapYear%2==0)
{
  console.log("Your birthyear is a prime number. You are so so LUCKY!!!")
}
if(leapYear%400==0||leapYear%100!=0&&leapYear%4==0){
  console.log("Your Entered number " +leapYear +" is a leap year! Hurray you get an Extra reward too!")

}else{
  console.log("its not a leap year!")
}