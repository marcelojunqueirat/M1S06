export default function multiplicaArray(array){
  let total = 1;
  array.forEach(element => {
    total *= element;
  });
  return total;
}