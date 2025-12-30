// 🧪 Practice Zone

// 1. Create an object for a book (title, author, price)
// let book = {
//     title: "The Kashmir",
//     author: "Owais",
//     price: 1000
// };
// console.log(book);


// 2. Access properties using both dot and bracket
// let student = {
//     name: "Wani",
//     usn: "CS116",
//     branch: "cse"
// };
// console.log(student.name);
// console.log(student["usn"]);


// 3. Write a nested object (user with address and location)
// let user = {
//     name: "Owais",
//     address: {
//         city: "Gulmarg",
//         pincode: 193404,
//     },
//     location:{
//        place: "Kashmir"
//     }
// };
// console.log(user.address.city);
// console.log(user.location.place);
 

// 4. Destructure name and age from a student object
// let student = {
//     name: "Owais",
//     age: 21,
//     usn: "cs116"
// };
// let {name,age} = student;


// 5. Loop through keys and values of an object
// let obj = {
//     name: "Harsh",
//     city: "Delhi",
//     pincode: 110001
// };
// for(let key in obj){
//   console.log(key+ " : "+ obj[key]);
// }


// 6. Convert object to array using Object.entries()
// let obj = {
//     name: "joy",
//     city: "NewYork",
//     pincode: 6735362
// };
// let newobj = Object.entries(obj);


// 7. Copy an object using spread operator
// let obj = {
//     name: "a",
//     city: "b"
// };
// let copy = {...obj};

// 9. Use optional chaining to safely access deep values
// let user = {
//      name: "Tom",
//      age: 22,
//      address: {
//        city: "xyz"
//      }
// };
// console.log(user?.address?.city);

// 10. Use a variable as a key using computed properties
let key = "role";

let obj = {
    name: "Bob",
    [key]: "Developer"
};
console.log(obj);