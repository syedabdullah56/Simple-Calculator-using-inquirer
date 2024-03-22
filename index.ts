#! /usr/bin/env node
// shabang
//npm login
//npm publish
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },{
    message: "Enter Second Number", type: "number", name: "secondNumber"
  },
  { message: "Select any operator", type: "list", name: "operator",choices:["Add","Subtract","Multiplication","Division"] }
]);
console.log(answer);
if(answer.operator==="Add"){
    console.log(`Your value is ${answer.firstNumber+answer.secondNumber}`)
}
if(answer.operator==="Subtract"){
    console.log(`Your value is ${answer.firstNumber-answer.secondNumber}`)
}
if(answer.operator==="Multiplication"){
    console.log(`Your value is ${answer.firstNumber*answer.secondNumber}`)
}
if(answer.operator==="Division"){
    console.log(`Your value is ${answer.firstNumber/answer.secondNumber}`)
}else{
    console.log("Please select valid operator")
}