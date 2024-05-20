#! /usr/bin/env node

import { log } from "console";
import inquirer from "inquirer"
import Choices from "inquirer/lib/objects/choices.js";
let myBalance = 0;
let isContinue = true;
const pinCode = 1234;

const message = "Welcome to ATM!";
console.log(message);
let pin_ans = await inquirer.prompt({
    type: "number",
    name: "ans",
    message: "Please enter pin code: "
})
if(pin_ans.ans === 1234){
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "list",
            message: "select any option: ",
            choices: ["Deposite","Withdraw","Fast cash","balance check"]
        })
        //----------------Deposite------------------------------------------------

        if(ans.list === "Deposite"){
            let ans = await inquirer.prompt({
                type: "number",
                name: "Deposite_amount",
                message:"Please Enter your amount: "
            })
            if(ans.Deposite_amount > 0){
                myBalance = myBalance + ans.Deposite_amount
                console.log(myBalance);
            }
        }
        //---------------------------Withdraw----------------------------------

        else if(ans.list === "Withdraw"){
            let ans = await inquirer.prompt({
                type: "number",
                name: "withdraw_amount",
                message:"Please Enter amount: "
            })
            if(ans.withdraw_amount <= myBalance){
                myBalance = myBalance - ans.withdraw_amount
                console.log(myBalance);
            }else{
                console.log("Not enough money");
            }
        }
        //-----------------------Fast cash----------------------------

        else if(ans.list === "Fast cash"){
        let ans = await inquirer.prompt({
            type:"list",
            name: "Fast_cash",
            message:"Please select one",
            choices: ["500","1000","2000"]
        })
        if(ans.Fast_cash <= myBalance){
            if(ans.Fast_cash === "500"){
                myBalance -= ans.Fast_cash
                console.log(myBalance);
            }else if(ans.Fast_cash === "1000"){
                myBalance -= ans.Fast_cash
                console.log(myBalance);
            }else if(ans.Fast_cash === "2000"){
                myBalance -= ans.Fast_cash
                console.log(myBalance);
            }
        }
        }
        //-------------------------------------balance check--------------------

        else if(ans.list === "balance check"){
            console.log(`your balance is: ${myBalance}`);
        }
        //---------------------------while condition----------------------------

        let while_ans = await inquirer.prompt({
            type: "confirm",
            name: "condition",
            message: "Do you wnat to continue: "
        })
        if(while_ans.condition === false){
            isContinue = false
        }
    } while (isContinue);
}
else{
    console.log("Invalid pin code")
}
