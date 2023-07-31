type car={
    brand: string;
    model: string;
    year : number;
}
type person={
    name: string;
    age : number;
  gender: string; 
}
const Car:car={
    brand:"Honda",
    model:"Civic",
    year :2021,
}
const Person:person={
    name:"Ali",
    age :21,
    gender:"Male",
}
console.log("Car brand is : "+Car.brand);
console.log("Car model is : "+Car.model);
console.log("Car year of manufacturing is : "+Car.year);
console.log("\n");
console.log("Owner name is : "+Person.name);
console.log("Owner age is : "+Person.age);
console.log("Person gender is : "+Person.gender);