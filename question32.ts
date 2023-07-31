const current_users:string[]=["Uzair","hammad","Hassan","Hussain","Noman"];
const new_users: string[]=["Salar","hammad","Obaid","Salar","Uzam"];
for(let i=0;i<new_users.length;i++){
    let new_username=new_users[i].toLowerCase();
    if(current_users.includes(new_username)){
        console.log("Sorry the user name "+new_username+" is already taken! Please enter different user name");
    }
    else{
        console.log("Congratulations! "+new_username+" is availabale");
    }

}