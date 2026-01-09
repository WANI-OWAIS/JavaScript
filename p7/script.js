// 🧪 Practice Zone

// 1. Create an array of student names and print each
// let student = ["Kim", "John", "Joy"];
// student.forEach(function(names){
//     console.log(names);
// })

// 2. Filter even numbers from an array
// let arr = [1,2,3,4,5,6,7,8,9];
// let evenNos = arr.filter(function(val){
//     return val%2 === 0;
// });
// console.log(evenNos);

// 3. Map prices to include GST (18%)
// let prices = [10,20,30,40,50];
// let res = prices.map(function(val){
//     return val + (val*0.18);
// });
// console.log(res);

// 4. Reduce salaries to calculate total payroll
// let salaries = [10000,20000,30000,40000];
// let total = salaries.reduce(function(acc,val){
//     return acc+val;
// },0);
// console.log(total);

// 5. Find the first student with grade A
// let grades = ["D", "B", "A", "C", "E", "A"];
// let stu = grades.find((val) => {
//     return val === "A"
// })
// console.log(stu);

// 6. Write a function to reverse an array
// function revArr(arr){
//     return arr.reverse();
// }
// console.log(revArr([1,2,3,4,5]));

// 7. Sort array of ages in ascending order
// let ages = [25,21,37,48,26,53];
// let res = ages.sort(function(a,b){
//    return a-b;
// });
// console.log(res);

// 8. Destructure first two elements of an array
// let arr = [1,2,3,4,5];
// let [first,second] = arr;

// 9. Use some() to check if any student failed
// let marks = [85,74,90,38,40];
// let res = marks.some(function(val){
//     return val < 40;
// });
// console.log(res);

// 10. Use spread to copy and add new item
let arr1 = [1,2,3,4,5];
let arr2 = [...arr1,6,7,8,9];
console.log(arr2);
