const animals: string[]=["Cat","Rabbit","Dog"];
console.log("Animals :");
for(let i=0;i<animals.length;i++){
    const pet_animals=animals[i];
    console.log(pet_animals);
}
console.log("\nWhich of these can be a great pet?");
for(let i=0;i<animals.length;i++){
    const pet_animals=animals[i];
    console.log(pet_animals+" can be a great pet");
}

console.log("\nAny of these animals would be a great pet");
