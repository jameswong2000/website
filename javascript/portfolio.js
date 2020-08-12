var timelineEvents;
var description;

window.addEventListener("load", function () {   
    timelineEvents = document.querySelectorAll('.timeline ol li div');
    description = document.querySelectorAll('.descriptionContainer div');
    console.log(timelineEvents);
    console.log(description);
	
});

function showContent(element_id){
    console.log(element_id);
    for(var i = 0;i<description.length;i++){
        timelineEvents[i].parentElement.className = timelineEvents[i].className.replace(" active", "");
        description[i].className = description[i].className.replace(" descriptionActive", "");
        description[i].style.display = "none";
    }

    for(var i = 0;i<description.length;i++){
        if(description[i].id == element_id){
            timelineEvents[i].parentElement.className += " active";
            description[i].className += " descriptionActive";
            description[i].style.display = "block";
            break;
        }
    }
}