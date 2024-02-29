//1 let num = document.querySelector("h1");
// document.querySelector(".plus").onclick = function(){
//     num.innerHTML++
// }
// document.querySelector(".minus").onclick = function(){
//     num.innerHTML--
// }


//2 let button = document.querySelector("button")



// function createBlock() {
//     let div = document.createElement('div');

// div.className = "block";
// div.style.backgroundColor = color()
// document.querySelector(".container").appendChild(div);
// div.addEventListener("click", function(){
//     div.remove()
// })
// }
// function color(){
//     let r = Math.floor(Math.random() * (256));
//     let g = Math.floor(Math.random() * (256));
//     let b = Math.floor(Math.random() * (256));
//     let result ='#' + r.toString(16) + g.toString(16) + b.toString(16);
//     return result; 
// }
// button.addEventListener("click", createBlock);

//3 let color = document.querySelectorAll(".color")
// let text = document.querySelector("p")
// color.forEach(function (item){
//     item.addEventListener("click", function(){
//         text.style.color = `${item.dataset.color}`
//      })
// })


let comments = [];
loadComents();
let btn = document.querySelector("button");
document.querySelector(".comText").addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        btnClick();
    }
});
btn.addEventListener("click", btnClick);

function btnClick() {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }


    let formattedDate = day + '.' + month + '.' + year + ' ' + hours + ':' + minutes;
    let commentName = document.querySelector(".comName");
    let commentBody = document.querySelector(".comText");

    let comment = {
        name: commentName.value,
        time: formattedDate,
        body: commentBody.value,
    }
    console.log(comment)
    commentName.value = "";
    commentBody.value = "";
    comments.push(comment);
    saveComents()
    showComments()
}

function saveComents() {
    localStorage.setItem(`comments`, JSON.stringify(comments))
}

function loadComents() {
    if (localStorage.getItem(`comments`)) comments = JSON.parse(localStorage.getItem(`comments`))
    showComments()
}

function showComments() {
    let commentField = document.getElementById("commentField");
    let out = ``;
    comments.forEach(function (item) {
        out += `<h3> ${item.name} </h3>`
        out += `<p> ${item.time}</p>`
        out += `<p> ${item.body}</p> <hr>`
    })
    commentField.innerHTML = out;
}

