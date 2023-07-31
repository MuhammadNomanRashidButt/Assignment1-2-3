function calculateCredit(balance, minBalance, maxBalance) {
    var totalBalance = balance + minBalance + maxBalance;
    if (totalBalance >= 250 && totalBalance <= 300) {
        return 'A+';
    }
    else if (totalBalance >= 220 && totalBalance <= 250) {
        return 'B';
    }
    else if (totalBalance >= 180 && totalBalance <= 220) {
        return 'C';
    }
    else if (totalBalance >= 150 && totalBalance <= 180) {
        return 'D';
    }
    else {
        return 'Low';
    }
}
var promptSyncc = require('prompt-sync')();
var balance = parseInt(promptSyncc("Enter your balance:"));
var minBalance = parseInt(promptSyncc("Enter your minimum balance:"));
var maxBalance = parseInt(promptSyncc("Enter your maximum balance:"));
var creditStore = calculateCredit(balance, minBalance, maxBalance);
console.log("Your Credit score is: ", creditStore);
