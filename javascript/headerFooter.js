window.addEventListener("load", function (){   
    document.querySelector("#mobileHeader #logo").addEventListener("click", function(){
        var links = document.querySelector("#mobileHeader #navLink");
        if(links.style.display == "none" || links.style.display == ""){
            links.style.display = "block";
        }
        else{
            links.style.display = "none";
        }
    });
});