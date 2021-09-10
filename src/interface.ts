interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  name: string;
  isGaming: boolean;
  constructor(name: string, isGaming: boolean) {
    this.name = name;
    this.isGaming = isGaming;
  }
  on(): void {
    throw new Error("Method not implemented.");
  }
  off(): void {
    throw new Error("Method not implemented.");
  }
}

class Lenovo implements Laptop {
  name: string;
  isFlagship: boolean;
  constructor(name: string, isFlagship: boolean) {
    this.name = name;
    this.isFlagship = isFlagship;
  }
  on(): void {
    throw new Error("Method not implemented.");
  }
  off(): void {
    throw new Error("Method not implemented.");
  }
}

let lenovo = new Lenovo("Lenovo Legion 5i", true);
let asus = new Asus("Asus Predator 3", true);
console.log(
  `jika laptop ${lenovo.name} flagship ${lenovo.isFlagship} maka laptop ${asus.name} adalah gaming ${asus.isGaming}`
);
