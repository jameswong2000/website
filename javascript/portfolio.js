var timelineEvents;
var timelineEventsArr = [];
var descriptionModal;
var descriptionModalArr = [];
var currentShowProjectId;

window.addEventListener("load", function (){   
    timelineEvents = document.querySelectorAll(".timeline ol li div");    
    descriptionModal = document.querySelectorAll(".modal");
    
    for(var i = 0;i<timelineEvents.length;i++){
        timelineEvents[i].parentElement.style.width = Math.floor(100/timelineEvents.length) + "%";
        timelineEventsArr.push(timelineEvents[i].id);
        descriptionModalArr.push(descriptionModal[i].id);

        /*add onclick function to the timeline text*/
        timelineEvents[i].addEventListener("click", function(){
            showContent(this.id);
        });
        /*add onclick function to the timeline text*/
    }
});

function showContent(element_id){
    var index = descriptionModalArr.indexOf(element_id);
    descriptionModal[index].style.display = "block";
    currentShowProjectId = element_id;
    document.body.style.overflow = 'hidden';

    /*add close function to the button*/
    document.querySelectorAll(".close")[index].addEventListener("click", function(){
        var index = descriptionModalArr.indexOf(currentShowProjectId);
        descriptionModal[index].style.display = "none";
        document.body.style.overflow = 'auto';
    });
    /*add close function to the button*/
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event){
    var index = descriptionModalArr.indexOf(currentShowProjectId);
    if (event.target == descriptionModal[index]) {
        descriptionModal[index].style.display = "none";
        document.body.style.overflow = 'auto';
    }
}