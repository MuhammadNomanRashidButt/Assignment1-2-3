function OrderSandwich(...items :string[]): void{
    console.log("Place your sandwich order !");
    if(items.length===0){
        console.log("No items specified____")
    }
    else{
        console.log("Items :");
        for(let i=0;i<items.length;i++){
            const it=items[i];
            console.log("-"+it);
        }
    }
    console.log("-----------");
}
OrderSandwich("Turkey","Cheese","Tomato");
OrderSandwich("Ham","Swiss");
OrderSandwich("Swiss");