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

function addYear() {
    d = new Date()
    currYear = d.getFullYear();
    E = document.getElementById("copyYear");
    E.textContent = currYear;
}

function showList() {
    list = document.querySelector('ul');
    button = document.querySelector('button');
    list.style.display = 'block';
    button.style.display = 'none';
}

$(document).ready(function() {
    $('#readMore').click(function() {
        $('#shortBio').hide();
        $('#longBio').show();
        $('#readMore').hide();
        $('#readLess').show();
    });

    $('#readLess').click(function() {
        $('#shortBio').show();
        $('#longBio').hide();
        $('#readMore').show();
        $('#readLess').hide();
    });
});

function validate() {
    formName = document.getElementById("name");
    email = document.getElementById("email");
    comment = document.getElementById("comment");
    validationMessage = document.getElementById("validationMessage");
    console.log("Form submission attempted");
    if (!formName.checkValidity()) {
        validationMessage.innerHTML= 'Please enter your name.';
        validationMessage.style.display = "block";
        console.log("Name valid:", formName.checkValidity());
    } else if (!email.checkValidity()) {
        validationMessage.innerHTML = 'Please enter a valid email address.';
        console.log("Email valid:", email.checkValidity());
    } else if (!comment.checkValidity()) {
        validationMessage.innerHTML = 'Please enter your message.';
        console.log("Message valid:", comment.checkValidity());
    }

}




