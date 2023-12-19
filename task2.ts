    //String Reversal
 function reverseString(s:string):string
 {
  return s.split('').reverse().join('')
 }
console.log (reverseString("i love programming"))

    //Check even or odd
function checkEvenOdd(num:number):string
{
 if(num%2==0)
 {
   return "Number is even"
 }
 else
 {
  return "Number is odd" 
 }
}
console.log(checkEvenOdd(192))

    // Add number
function add(n1:number,n2:number):number
{
   return n1+n2
}
console.log(add(56,47))

    //Calculate Area
function calculatArea(length:number,width:number)
{
    return length*width
}
console.log(calculatArea(12,15))

    //Temperature Conversion
function convertCelsiusFahrenheit(tem:number):number
{
    return (tem*9/5)+32
}
console.log(convertCelsiusFahrenheit(105))