x = 5;
y = 7;
z = x+y;
console.log(z);
A = "Hello ";
B = "world!";
C = A+B;
console.log(C);

function SumNPrint(x1, x2) {
    x3 = x1+x2;
    console.log(x3);
}

SumNPrint(x1=x, x2=y);
SumNPrint(x1=A, x2=B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

const L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
const L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(item) {
    if (item == "Banana") {
        alert("found the Banana");
    }
}

L1.forEach(findTheBanana);
L2.forEach(findTheBanana);


function greetingFunc() {
    d = new Date();
    h = d.getHours();
    E = document.getElementById("greeting");
    if (h < 12) {
        E.innerHTML= "Good morning, I am Anjali";
    } else if (12<=h && h<18) {
        E.innerHTML = "Good afternoon, I am Anjali";
    } else if (18<=h && h<20) {
        E.innerHTML = "Good evening, I am Anjali"; 
    } else if ((20<=h && h<24) || (0 < h && h<5)) {
        E.innerHTML= "Good night, I am Anjali";
    }
}

greetingFunc();