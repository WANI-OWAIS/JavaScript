// 🧪 Practice Zone
// 1. Predict:
// console.log("10" + 1);
// console.log("10" - 1);
// console.log(true + false);
// console.log(!!"Sheryians");

// 2. Convert using unary +
// let str = "42";
// let num = +str;
// console.log(num);

// 3. Use ternary:
// let age = 17;
// let msg = age >= 18 ? "Adult" : "Minor";
// console.log(msg);


// 4. Build a calculator:
let ans;
function calc(a, b, operator) {
    switch (operator) {
        case "+":
            ans = a + b;
            break;
        case "-":
            ans = a - b;
            break;
        case "*":
            ans = a * b;
            break;
        case "/":
            ans = a / b;
            break;
        default:    
    }
    return ans;
}

let res = calc(2, 3,"+");
console.log(res);

// 5. Score logic:
// let marks = 82;
// let res = marks >= 80 ? "Excellent" : marks >= 60 ? "Good" : marks >= 40 ? "Average" : "Fail";
// console.log(res);
