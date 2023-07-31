interface Car {
    manufacturer: string;
    model: string;
    [key: string]: string;
  }
  
  function createCar(manufacturer: string, model: string, ...args: [string, string][]): Car {
    const car: Car = {
      manufacturer,
      model
    };
  
    for (const [key, value] of args) {
      car[key] = value;
    }
  
    return car;
  }
  
 
  const carr = createCar("Toyota", "Camry", ["color", "blue"], ["optionalFeature", "sunroof"]);
  
   console.log(carr);