const  numberss:number[]=[1,2,3,4,5,6,7,8,9];
for(let i=0;i<numberss.length;i++){
    let numbers=numberss[i];
        if(numbers===1){
        console.log(+numbers+"st");
    }
    else if(numbers===2){
        console.log(+numbers+"nd");
    }
    else if(numbers===3){
        console.log(+numbers+"rd");
    }
    else{
        console.log(+numbers+"th");
    }
}