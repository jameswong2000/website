var horizontalTimelineEvents;
var verticalTimelineEvents;
var descriptionModal;
var descriptionModalArr = [];
var currentShowProjectId;

window.addEventListener("load", function (){   
    horizontalTimelineEvents = document.querySelectorAll(".horizontalTimeline ol li div");
    verticalTimelineEvents = document.querySelectorAll(".verticalTimeline .container .content");  
    descriptionModal = document.querySelectorAll(".modal");
    
    for(var i = 0;i<horizontalTimelineEvents.length;i++){
        horizontalTimelineEvents[i].parentElement.style.width = Math.floor(100/horizontalTimelineEvents.length) + "%";
        descriptionModalArr.push(descriptionModal[i].id);

        /*add onclick function to the timeline text*/
        horizontalTimelineEvents[i].addEventListener("click", function(){
            showContent(this.id);
        });
        verticalTimelineEvents[i].addEventListener("click", function(){
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