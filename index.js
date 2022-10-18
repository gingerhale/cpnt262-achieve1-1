function mathSequence(arr) {
  let arith = new Set();
  let geo = new Set();

for(let i = 1;i<arr.length;i++){
  let arithmetic = arr[i] - arr[i-1];
  arith.add(arithmetic);
  let geometric = arr[i] / arr[i-1];
  geo.add(geometric);
}

if(arith.size === 1){
  return "Arithmetic"
}
if(geo.size === 1){
  return "Geometric"
}
return - 1;

}
/* I didn't really change anything about the code, other than swapping out different 
number sequences to test the functionality */ 
// Arithmetic
console.log(mathSequence([50, 100, 150, 200]));
// Geometric
console.log(mathSequence([4, 16, 64, 256]));
// -1
console.log(mathSequence([2, 8, 11, 998]));
