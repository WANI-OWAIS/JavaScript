// 🧪 Practice Zone

// 1. Write a BMI calculator function
// function bmi(weight,height){
//     return weight / (height*height);
// }
// console.log(bmi(55,1.7).toFixed(2));


// 2. Create a greet function with default name
// function greet(name="Owais"){
//     console.log("Hello " + name);
// }
// greet();


// 3. Sum all numbers using rest parameter
// function sumNos(...nums){
//     let total = 0;
//   nums.forEach((val) => {
//     total+= val;
//   })
//    return total;
// }
// console.log(sumNos(1,2,3,4,5));


// 4. Create a closure counter function
// function counter() {
//     let count = 0;

//     return function() {
//         count++;
//         return count;
//     };
// }
// let c = counter();
// console.log(c()); 


// 5. Write a function that returns another function
// function outer(){
//     return function inner(){
//         console.log("Hey");
//     };
// }
// let fn = outer();
// fn();


// 6. Use a function to log even numbers in array
// function findEven(...nums){
//    nums.forEach((val) =>{
//      if(val%2 === 0){
//         console.log(val);
//      }
//    })
// }
// findEven(1,2,3,4,5,6,7,8,9);


// 7. Create a pure function to add tax
// function addTax(price,taxRate){
//     return price+(price*taxRate);
// }
// console.log(addTax(100,0.1));


// 8. Use IIFE to show welcome message
// (function print(){
//     console.log("Welcome");
// })();


// 9. Write a discount calculator (HOF style)
// function disCal(price,disPer){
//     let discount = price * (disPer/100);
//     return function FinalPrice(){
//         return price - discount;
//     }
// }
// let result = disCal(100,10);
// console.log(result());


// 10. Make a toUpperCase transformer using HOF
// function transform(string){
//    return function toUpper(){
//       return string.toUpperCase();
//    }
// }
// let res = transform("owais");
// console.log(res());