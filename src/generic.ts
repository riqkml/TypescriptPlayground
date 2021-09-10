function getData(value: any) {
  return value;
}

function genericGetData<T>(value: T) {
  return value;
}
console.log(getData(123).length);
console.log(genericGetData(123).toFixed);

//khusus arror func
const arrowFunc = <T>(value: T) => {
  return value;
};
