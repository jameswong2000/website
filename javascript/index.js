var slideIndex = 1;

window.addEventListener("load", function () {
    //call fullpage.js
    new fullpage("#main", {
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        anchors: ["greeting", "portfolio", "gallery"],
        menu: '#navLink'
    });

    document.querySelector(".loader").style.display= "none";
    document.querySelector("#main").style.visibility= "visible";
    showSlides(slideIndex);
    myTimer = setInterval(function () { plusSlides(1) }, 3000);
})

function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }
    if (n === -1) {
        myTimer = setInterval(function () { plusSlides(n + 2) }, 3000);
    } else {
        myTimer = setInterval(function () { plusSlides(n + 1) }, 3000);
    }
}

function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function () { plusSlides(n + 1) }, 3000);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".slides");
    var dots = document.querySelectorAll(".dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dotActive", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dotActive";
}

