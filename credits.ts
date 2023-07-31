function calculateCredit(balance: number, minBalance: number,maxBalance: number){
    const totalBalance=balance+minBalance+maxBalance;

    if(totalBalance>=250 && totalBalance<=300){
        return 'A+';

    }
    else if(totalBalance>=220 && totalBalance<=250){
        return 'B';
    }
    else if(totalBalance>=180 && totalBalance<=220){
        return 'C';
    }
    else if(totalBalance>=150 && totalBalance<=180){
        return 'D';
    }
    else{
        return 'Low';
    }

}

const promptSyncc= require('prompt-sync')();
let balance=parseInt(promptSyncc("Enter your balance:"));
let minBalance=parseInt(promptSyncc("Enter your minimum balance:"));
let maxBalance=parseInt(promptSyncc("Enter your maximum balance:"));


const creditStore=calculateCredit(balance,minBalance,maxBalance);
console.log("Your Credit score is: ",creditStore);