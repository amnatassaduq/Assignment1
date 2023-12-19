let ar:number[]=[1,2,3,4,5]
  //Modify Array
ar.push(7)      //Add new elements to the end of the array.
console.log(ar)

ar.pop()        //Remove the last element from the array.
console.log(ar)

ar.unshift(10)  //Add new elements to the beginning of the array.
console.log(ar)

ar.shift()      //Remove the first element from the array.
console.log(ar)

// Subarray Creation
// splice method(Creating a subarray by removing elements from the original array)
 //Example#1
 let ar1=[1,2,3,4]
 let deletedItems1=(ar1.splice(2,1))//not inerst any new element 
 console.log(ar1)
 console.log(deletedItems1)

  //Example#2
 let ar2=["a","b","c","d"]
 let deletedItems2=ar2.splice(1,0,"z")
 console.log(ar2)
 console.log(deletedItems2)
  
  //Example#3(start parameter is negative)
let ar3:string[]=["ali","ayesha","hira","fatima"]
let deletedItems3=ar3.splice(-2,2,"amna")
console.log(ar3)
console.log(deletedItems3)

//Slice method(Create a subarray without modifying the original array)

 //Example#1- Positive parameters
let ar4=[23,25,26,27]
let sliced1=ar4.slice(2,3)
console.log(sliced1)

 //Example#2-Negative parameters
let sliced2 = ar4.slice(-3, -1)
console.log(sliced2)

 //Example#3-start parameter is negative
let sliced3 = ar4.slice(-2, 5)
console.log(sliced3)

 //Example#4-Negative value for start parameter and no end value
let sliced4 = ar4.slice(-2)
console.log(sliced4)

