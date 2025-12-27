// 🧪 Practice Zone

// 1. Print 1 to 10 using for
// for(let i=1;i<=10;i++){
//     console.log(i); 
// }


// 2. Print even numbers between 1 to 20
// for(let i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }


// 3. Reverse a string using loop
// let str = "Sheryians";
// let rev = "";
// for(let i=str.length-1;i>=0;i--){
//     rev = rev + str[i];
// }
// console.log(rev);


// 4. Sum of all numbers in an array
// let arr = [1,2,3,4,5];
// let sum = 0;
// for(let i=0;i<arr.length;i++){
//    sum += arr[i];
// }
// console.log(sum);

// 5. Print all characters of a name using for-of
// for(let char of "Sheryians"){
//     console.log(char);
// }


// 6. Print all object keys and values using for-in
// let student = {
//     name: "Owais",
//     age: 21,
//     course: "CSE"
// }
// for(let key in student){
//     console.log(key + " : " + student[key]);
// }


// 7. Use continue to skip a specific number
// for(let i=1;i<=30;i++){
//     if(i==7) continue;
//     console.log(i);
// }

// 8. Guess number game – use while to ask until correct
// let secretNo = 7;
// let guess = null;

// while(guess != secretNo){
//     guess = Number(prompt("Guess the Number:"));

//     if(guess < secretNo){
//         alert("Too low!");
//     }else if(guess > secretNo){
//         alert("Too high!");
//     }else{
//      alert("Correct!");
//     }
// }


// 9. Pattern: Print triangle using *
// for(let i=1;i<=5;i++){
//     let row = "";
//     for(j=1;j<=i;j++){
//         row += "*";
//     }

//     console.log(row);
// }


// 10. Sum of even numbers in an array using forEach
let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
arr.forEach((num) => {
    if(num%2 === 0){
       sum += num;
    }
});
console.log(sum);
