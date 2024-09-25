function splitIntoMulitpleSubArrays(arr) {
  const mainArray = [];
  let subArray = [];

  arr.forEach((item) => {
    if (item === null) {
      if (subArray.length > 0) {
        mainArray.push(subArray);
        subArray = [];
      }
    } else {
      subArray.push(item);
    }
  });
  if (subArray.length > 0) {
    mainArray.push(subArray);
  }
  return mainArray;
}
const myArray = [1, 2, null, 3, null, null, 5];
