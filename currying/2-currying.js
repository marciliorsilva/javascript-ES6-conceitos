/*tecnica para transforma uma função com N parametros 
  em uma função com um paramentro e para cada
  paramentro é retorna outra função*/
function soma(a){
   return function(b){
       return a + b;
   }
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));