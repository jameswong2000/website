var timelineEvents;
var timelineEventsArr = [];
var description;
var descriptionArr = [];
var currentShowProjectId;

window.addEventListener("load", function () {   
    timelineEvents = document.querySelectorAll(".timeline ol li div");    
    description = document.querySelectorAll(".modal");
    
    for(var i = 0;i<timelineEvents.length;i++){
        timelineEvents[i].parentElement.style.width = Math.floor(100/timelineEvents.length) + "%";
        timelineEventsArr.push(timelineEvents[i].id);
        descriptionArr.push(description[i].id);
    }

});

function showContent(element_id){
    var index = descriptionArr.indexOf(element_id);
    description[index].style.display = "block";
    currentShowProjectId = element_id;
    document.body.style.overflow = 'hidden';

    document.querySelectorAll(".close")[index].addEventListener("click", function(){
        var index = descriptionArr.indexOf(currentShowProjectId);
        description[index].style.display = "none";
        document.body.style.overflow = 'auto';
    });
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var index = descriptionArr.indexOf(currentShowProjectId);
    if (event.target == description[index]) {
        description[index].style.display = "none";
        document.body.style.overflow = 'auto';
    }
}