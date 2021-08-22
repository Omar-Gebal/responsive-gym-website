//hides buttons by default
var buttons = document.querySelectorAll(".admin-btn");
function hidebuttons(){
    for(let i = 0; i < buttons.length; i++)
    {
        buttons[i].classList.add('hide');   
    }
}

hidebuttons();

//Buttons
function changetext1() {
    var x = document.getElementById("course-1");
        x.innerHTML = "Yoga";
}
function changeimage1() {
      document.getElementById('image-1').src='/imgs/yoga.jpg';
}
function changetext2() {
    var x = document.getElementById("course-2");
        x.innerHTML = "Kettle";
}
function changeimage2() {
      document.getElementById('image-2').src='/imgs/kettle.png';
}
function changetext3() {
    var x = document.getElementById("course-3");
        x.innerHTML = "New sport";
}
function changeimage3() {
      document.getElementById('image-3').src='/imgs/kick.jpg';
}

