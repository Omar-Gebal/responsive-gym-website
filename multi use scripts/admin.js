//hides buttons by default
var buttons = document.querySelectorAll(".admin-btn");
function hidebuttons(){
    for(let i = 0; i < buttons.length; i++)
    {
        buttons[i].classList.add('hide');   
    }
}
function showbuttons(){
    for(let i = 0; i < buttons.length; i++)
    {
        buttons[i].classList.remove('hide');   
        buttons[i].classList.add('show');   
    }
}

hidebuttons();

//Buttons
function changetext1() {
    var x = document.getElementById("course-1");
    var course = prompt("Please enter new course name");
    x.innerHTML = course;
}
function changeimage1() {
    var image = prompt("yoga.jpg / kettle.png / kick.jpg");
    document.getElementById('image-1').src='/imgs/' + image;
}
function changetext2() {
    var x = document.getElementById("course-2");
    var course = prompt("Please enter new course name");
    x.innerHTML = course;
}
function changeimage2() {
    var image = prompt("yoga.jpg / kettle.png / kick.jpg");
    document.getElementById('image-2').src='/imgs/' + image;
}
function changetext3() {
    var x = document.getElementById("course-3");
    var course = prompt("Please enter new course name");
    x.innerHTML = course;
}
function changeimage3() {
    var image = prompt("yoga.jpg / kettle.png / kick.jpg");
    document.getElementById('image-3').src='/imgs/' + image;
}

//password
function password(){
    var password = prompt("Please enter admin password");
    if(password == "123"){
        showbuttons();
    }
}
