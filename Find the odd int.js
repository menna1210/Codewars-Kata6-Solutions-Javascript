//Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function getOdd(arr){
  return arr.reduce((result,num)=>result^num,0)
}
let arr = [1,2,2,3,3,3,4,3,3,3,2,2,1];
console.log(getOdd(arr))