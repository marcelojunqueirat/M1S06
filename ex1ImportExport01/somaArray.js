export default function somaArray(array){
  let total = 0;
  array.forEach(element => {
    total += element;
  });
  return total;
}