// 🧪 Practice Zone

// 1. Student grade logic:
// Write a program that prints A, B, C, D, or F based on marks

// function grade(score){
//     if(score >= 80) return "A";
//     else if(score >= 70) return "B";
//     else if(score >= 60) return "C";
//     else if(score >= 40) return "D";
//     else return "Fail";
// }

// let res = grade(85);
// console.log(res);

// 2. Rock-paper-scissors:
// Given player1 and player2's choice, print winner or draw

// function rockPaperScs(User, Computer) {
//     if (User === Computer) {
//         return "Draw";
//     }
//     else if (User === "rock" && Computer === "scissor") {
//         return "User";
//     }
//     else if (User === "scissor" && Computer === "paper") {
//         return "User";
//     }
//     else if (User === "paper" && Computer === "rock") {
//         return "User";
//     }
//     else {
//         return "Computer";
//     }
// }

// let res = rockPaperScs("rock", "scissor");
// console.log(res);


// 3. Login message:
// let isLoggedIn = true;
// let isAdmin = false;
// Show different messages based on combination

// let isLoggedIn = true;
// let isAdmin = true;

// function msg() {
//     if (isLoggedIn && isAdmin) {
//         return "Admin logged in";
//     }
//     else if (isLoggedIn && !isAdmin) {
//         return "User logged in";
//     }
//     else {
//         return "Please log in";
//     }
// }

// console.log(msg());


// 4. Weather advice:
// let weather = "rainy";
// Use switch-case to print what to wear

// let wear;

// function checkWeather(weather) {
//     switch (weather) {
//         case "rainy":
//             wear = "Jacket";
//             break;
//         case "sunny":
//             wear = "T-shirt";
//             break;
//         default:
//             wear = "Normal clothes";
//     }
//     return wear;
// }

// let ans = checkWeather("rainy");
// console.log(ans);


// 5. Age checker:
// Return "Kid", "Teen", "Adult", or "Senior"

function ageChecker(age) {
    if (age < 13) {
        return "Kid";
    } 
    else if (age < 20) {
        return "Teen";
    } 
    else if (age < 60) {
        return "Adult";
    } 
    else {
        return "Senior";
    }
}

let result = ageChecker(25);
console.log(result);



