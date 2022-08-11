// for video content
var video = document.getElementById("myVideo");
var btn = document.getElementById("myButton");
function myFunction() {
if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
} else {
    video.pause();
    btn.innerHTML = "Play";
}
}

function myHome() {
    "use strict";
    window.location.href = "index.html";
}

// for the features page
function myFeatures() {
    "use strict";
    window.location.href = "features.html";
}
//for the about page
function myAbout() {
    "use strict";
    window.location.href = "about.html";
}
//for gallery
function myGallery() {
    "use strict";
    window.location.href = "gallery.html";
}
//for contact
function myContact() {
    "use strict";
    window.location.href = "ContactUs.html";
}
function backtohome() {
    "use strict";
    window.location.href = "index.html";
}

//for card 1
function card1() {
    "use strict";
    window.location.href = "louvre.html";
}

//for card 2
function card2() {
    "use strict";
    window.location.href = "BORG KHALEFA.html";
}

//for card 3
function card3() {
    "use strict";
    window.location.href = "colosseum.html";
}
//for card 4
function card4() {
    "use strict";
    window.location.href = "Philae Temple.html";
}
//for card 5
function card5() {
    "use strict";
    window.location.href = "Erciyes skiing.html";
}



// for form signup
function validate(){
    var name = document.getElementById("name").value;
    var Password = document.getElementById("Password").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
    }
    if(Password.length < 10){
    text = "Please Enter Correct Password";
    error_message.innerHTML = text;
    return false;
    }
    if(isNaN(phone) || phone.length != 11){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
    }
    if(message.length <= 20){
    text = "Please Enter More Than 20 Characters";
    error_message.innerHTML = text;
    return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}

//for form sign in

function validate2(){
    var name = document.getElementById("Name").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("Phone").value;
    var email = document.getElementById("Email").value;
    var error = document.getElementById("error");
    
    error.style.padding = "10px";
    
    var text;
    if(name.length < 5){
    text = "Please Enter valid Name";
    error.innerHTML = text;
    return false;
    }
    if(password.length < 10){
    text = "Please Enter Correct Password";
    error.innerHTML = text;
    return false;
    }
    if(isNaN(phone) || phone.length != 11){
    text = "Please Enter valid Phone Number";
    error.innerHTML = text;
    return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error.innerHTML = text;
    return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}


