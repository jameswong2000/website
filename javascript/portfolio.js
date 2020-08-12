var timelineEvents;
var timelineEventsArr = [];
var description;
var descriptionArr = [];
var currentShowProjectId;

window.addEventListener("load", function () {   
    timelineEvents = document.querySelectorAll(".timeline ol li div");    
    description = document.querySelectorAll(".descriptionContainer div");
    
    for(var i = 0;i<timelineEvents.length;i++){
        timelineEvents[i].parentElement.style.width = Math.floor(100/timelineEvents.length) + "%";
        timelineEventsArr.push(timelineEvents[i].id);
        descriptionArr.push(description[i].id);
    }
});

function showContent(element_id){
    var index = descriptionArr.indexOf(element_id);

    if(currentShowProjectId == element_id && description[index].className == " descriptionActive"){
        timelineEvents[index].parentElement.className = timelineEvents[index].className.replace(" active", "");
        description[index].className = description[index].className.replace(" descriptionActive", "");
        description[index].style.maxHeight = "0px";
        return;
    }

    for(var i = 0;i<description.length;i++){
        timelineEvents[i].parentElement.className = timelineEvents[i].className.replace(" active", "");
        description[i].className = description[i].className.replace(" descriptionActive", "");
        description[i].style.maxHeight = "0px";
    }

    timelineEvents[index].parentElement.className += " active";
    description[index].className += " descriptionActive";
    description[index].style.maxHeight = "100vw";
    currentShowProjectId = element_id;
}