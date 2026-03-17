localStorage.setItem("Students", JSON.stringify(["Joy", "Roy", "Toy"]));
let stu = JSON.parse(localStorage.getItem("Students"));
console.log(stu);