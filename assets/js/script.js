let today = document.getElementById("currentDay");
//moment().format("MMM Do YY"); make function that gets time
let date = moment().format("MMM Do YY"); 
// add date to html page
today.innerHTML = date;
let hour = moment().hour()
console.log(hour);

let box9El = document.getElementById("9");
let box10El = document.getElementById("10");
let box11El = document.getElementById("11");
let box12El = document.getElementById("12");
let box1El = document.getElementById("1");
let box2El = document.getElementById("2");
let box3El = document.getElementById("3");
let box4El = document.getElementById("4");
let box5El = document.getElementById("5");

let saveBtn9EL = document.getElementById("save-btn9");
let saveBtn10EL = document.getElementById("save-btn10");
let saveBtn11EL = document.getElementById("save-btn11");
let saveBtn12EL = document.getElementById("save-btn12");
let saveBtn1EL = document.getElementById("save-btn1");
let saveBtn2EL = document.getElementById("save-btn2");
let saveBtn3EL = document.getElementById("save-btn3");
let saveBtn4EL = document.getElementById("save-btn4");
let saveBtn5EL = document.getElementById("save-btn5");

let save9 = function() {
    let listItem9 = box9El.value;
    localStorage.setItem("listItem9", JSON.stringify(listItem9));
};

let save10 = function() {
    let listItem10 = box10El.value;
    localStorage.setItem("listItem10", JSON.stringify(listItem10));
};

let save11 = function() {
    let listItem11 = box11El.value;
    localStorage.setItem("listItem11", JSON.stringify(listItem11));
};

let save12 = function() {
    let listItem12 = box12El.value;
    localStorage.setItem("listItem12", JSON.stringify(listItem12));
};

let save1 = function() {
    let listItem1 = box1El.value;
    localStorage.setItem("listItem1", JSON.stringify(listItem1));
};

let save2 = function() {
    let listItem2 = box2El.value;
    localStorage.setItem("listItem2", JSON.stringify(listItem2));
};

let save3 = function() {
    let listItem3 = box3El.value;
    localStorage.setItem("listItem3", JSON.stringify(listItem3));
};

let save4 = function() {
    let listItem4 = box4El.value;
    localStorage.setItem("listItem4", JSON.stringify(listItem4));
};

let save5 = function() {
    let listItem5 = box5El.value;
    localStorage.setItem("listItem5", JSON.stringify(listItem5));
};

let displayListEl = function() {
    var storageItem9 = JSON.parse(localStorage.getItem("listItem9"))
    box9El.innerHTML = storageItem9;
    var storageItem10 = JSON.parse(localStorage.getItem("listItem10"))
    box10El.innerHTML = storageItem10;
    var storageItem11 = JSON.parse(localStorage.getItem("listItem11"))
    box11El.innerHTML = storageItem11;
    var storageItem12 = JSON.parse(localStorage.getItem("listItem12"))
    box12El.innerHTML = storageItem12;
    var storageItem1 = JSON.parse(localStorage.getItem("listItem1"))
    box1El.innerHTML = storageItem1;
    var storageItem2 = JSON.parse(localStorage.getItem("listItem2"))
    box2El.innerHTML = storageItem2;
    var storageItem3 = JSON.parse(localStorage.getItem("listItem3"))
    box3El.innerHTML = storageItem3;
    var storageItem4 = JSON.parse(localStorage.getItem("listItem4"))
    box4El.innerHTML = storageItem4;
    var storageItem5 = JSON.parse(localStorage.getItem("listItem5"))
    box5El.innerHTML = storageItem5;
};

let colorChanger = function() {
    for (i = 0; i < 9; i++) {
        var checkTime = i+9;
        var textAreaId = ("#") + checkTime;
        console.log(checkTime, textAreaId, hour);
        
        if (checkTime < hour) {
            $(textAreaId).addClass("future");
            console.log("first if statement");
        }
        if (checkTime > hour) {
            $(textAreaId).addClass("past");
            console.log("second if statement")
        }
        else {
            $(textAreaId).addClass("present");
        }
    }
}

colorChanger();
saveBtn9EL.addEventListener("click", save9);
saveBtn10EL.addEventListener("click", save10);
saveBtn11EL.addEventListener("click", save11);
saveBtn12EL.addEventListener("click", save12);
saveBtn1EL.addEventListener("click", save1);
saveBtn2EL.addEventListener("click", save2);
saveBtn3EL.addEventListener("click", save3);
saveBtn4EL.addEventListener("click", save4);
saveBtn5EL.addEventListener("click", save5);

displayListEl();