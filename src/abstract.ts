abstract class Vehicle {
  abstract wheels: number;

  start(): void {
    console.log("its Vehicle");
  }
}

class Car extends Vehicle {
  wheels: number = 4;
}

class Bike extends Vehicle {
  wheels: number = 2;
}

let car = new Car();
let bike = new Bike();

console.log(
  `jika mobil mempunyai ${car.wheels} ban, maka motor mempunyai ${bike.wheels}`
);
