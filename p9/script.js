//  Practice Zone –  DOM (Document Object Model) 

// 1. Create a <ul> dynamically and populate it using an array of strings. 

// let ul = document.createElement("ul");
// ul.textContent = "Fruits";
// let fruits = ["Apple", "Banana", "Cherry", "Mango"];

// fruits.forEach(function (item) {
//   let li = document.createElement("li");
//   li.textContent = item;
//   ul.appendChild(li);
// });
// document.body.appendChild(ul);


// 2. Add three <p> elements inside a <div> using JavaScript. 

// let div = document.querySelector("div");
// for(let i=1;i<=3;i++){
//     let para = document.createElement("p");
//     para.textContent = `This is paragraph ${i}`;
//     div.appendChild(para);
// }


// 3. Remove the last child element from a list using DOM methods.
// let ul = document.querySelector("ul");
// ul.removeChild(ul.lastElementChild);


// 4. Replace the text of an existing element using textContent. 
// let h1 = document.querySelector("h1");
// h1.textContent = "Document Object Model";


// 5. Add a CSS class to an element using classList.add(). 
// let p = document.querySelector("p");
// p.classList.add("highlight");


// 6. Remove an attribute from an image element using removeAttribute(). 
// let img = document.querySelector("img");
// img.removeAttribute("src");

// 7. Compare outputs of innerText, textContent, and innerHTML on the same element. 
// let ele = document.getElementById("demo");
// console.log("innerText", ele.innerText);
// console.log("textContent", ele.textContent);
// console.log("innerHTML", ele.innerHTML);


// 8. Select elements using: 
// ○ getElementById 
// ○ querySelectorAll 
// let h1 = document.getElementById("demmo");
// let p = document.querySelectorAll("p");

// 9. Create an element, set its attribute, and append it to the DOM.
// let newEle = document.createElement("p");
// newEle.setAttribute("id", "myPara");
// newEle.textContent = "This is a dynamically created paragraph.";

// let div = document.querySelector("div");
// div.appendChild(newEle);

// 10. Explain the difference between HTMLCollection and NodeList using code.
// HTMLCollection → live, auto-updates, from getElementsByClassName/getElementsByTagName.

// NodeList → usually static, can use forEach, from querySelectorAll.

// const htmlCol = document.getElementsByClassName('item'); // live
// const nodeList = document.querySelectorAll('.item');     // static
