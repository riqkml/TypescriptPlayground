//tipe data pada balikan function

function getName(): string {
  return "hallo riqki kamal";
}

console.log(getName());

//argument type
function multiplyCircle(radius: number): number {
  return radius * 2 * Math.PI;
}

const result = multiplyCircle(14);
console.log("luas lingkaran " + result);

//function as type

type Tambah = (val1: number, val2: number) => number;

const plus: Tambah = (val1: number, val2: number): number => {
  return val1 + val2;
};

//default parameter
const fullName = (first: string, last: string = "Kamal"): string => {
  return first + " " + last;
};

console.log(fullName("riqki"));

//optional params
const getAge = (val1: string, val2?: string): string => {
  return val1 + " " + val2;
};

console.log(getAge("awe"));
