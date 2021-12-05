let today = document.getElementById("currentDay");
//moment().format("MMM Do YY"); make function that gets time
let date = moment().format("MMM Do YY"); 
// add date to html page
today.innerHTML = date;

let box9El = document.getElementById("box9");
let box10El = document.getElementById("box10");
let box11El = document.getElementById("box11");
let box12El = document.getElementById("box12");
let box1El = document.getElementById("box1");
let box2El = document.getElementById("box2");
let box3El = document.getElementById("box3");
let box4El = document.getElementById("box4");
let box5El = document.getElementById("box5");

let saveBtn9EL = document.getElementById("save-btn9");
let saveBtn10EL = document.getElementById("save-btn10");
let saveBtn11EL = document.getElementById("save-btn11");
let saveBtn12EL = document.getElementById("save-btn12");
let saveBtn1EL = document.getElementById("save-btn1");
let saveBtn2EL = document.getElementById("save-btn2");
let saveBtn3EL = document.getElementById("save-btn3");
let saveBtn4EL = document.getElementById("save-btn4");
let saveBtn5EL = document.getElementById("save-btn5");

//make an array
let listEl = [];

let save9 = function() {
    let listItem9 = box9El.value;
    listEl.push(listItem9);
    console.log(listEl);
    localStorage.setItem("listItem9", listEl);

};

let save10 = function() {
    let listItem10 = box10El.value;
    listEl.push(listItem10);
    console.log(listEl);
    localStorage.setItem("listItem10", listEl);
};

let save11 = function() {
    let listItem11 = box11El.value;
    listEl.push(listItem11);
    console.log(listEl);
    localStorage.setItem("listItem11", listEl);
};

let save12 = function() {
    let listItem12 = box12El.value;
    listEl.push(listItem12);
    console.log(listEl);
    localStorage.setItem("listItem12", listEl);
};

let save1 = function() {
    let listItem1 = box1El.value;
    listEl.push(listItem1);
    console.log(listEl);
    localStorage.setItem("listItem1", listEl);
};

let save2 = function() {
    let listItem2 = box2El.value;
    listEl.push(listItem2);
    console.log(listEl);
    localStorage.setItem("listItem2", listEl);
};

let save3 = function() {
    let listItem3 = box3El.value;
    listEl.push(listItem3);
    console.log(listEl);
    localStorage.setItem("listItem3", listEl);
};

let save4 = function() {
    let listItem4 = box4El.value;
    listEl.push(listItem4);
    console.log(listEl);
    localStorage.setItem("listItem4", listEl);
};

let save5 = function() {
    let listItem5 = box5El.value;
    listEl.push(listItem5);
    console.log(listEl);
    localStorage.setItem("listItem5", listEl);
};


saveBtn9EL.addEventListener("click", save9);
saveBtn10EL.addEventListener("click", save10);
saveBtn11EL.addEventListener("click", save11);
saveBtn12EL.addEventListener("click", save12);
saveBtn1EL.addEventListener("click", save1);
saveBtn2EL.addEventListener("click", save2);
saveBtn3EL.addEventListener("click", save3);
saveBtn4EL.addEventListener("click", save4);
saveBtn5EL.addEventListener("click", save5);



// $(document).ready(function() {
//     $("textarea").blur(function() {
//         let listItem = toDo.value;
//         if ()
//         listEl.push(listItem);
//         console.log(listEl);
//     });
// });

// $(document).on("click", ".saveBtn", function(event){
//     //console.log(toDo.value);
//     for (i = 0; i < 9; i++) {
//         if(toDo.value == "") {
//             alert("please enter something");
//         }
//         else{
//             localStorage.setItem("textbox", JSON.stringify(listEl));
//             console.log(listEL);
//         }
//     }
//     //alert(localStorage.getItem("textarea"))
// });

// add objects --need value of textarea elements..