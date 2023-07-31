const user_name=["Admin","Ali","Hassan","Uzair","Mujtaba","Ahmed"];
for(let i=0;i<user_name.length;i++){
    let name=user_name[i];
    if(name==="Admin"){
        console.log("Hello "+name+" would you like to see a status report?" );

    }
    else{
        console.log("Hello "+name+" thankyou for logging in again!");
    }

}