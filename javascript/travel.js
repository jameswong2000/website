"use strict";

window.addEventListener("load", function (){   
    initMap();
});

function initMap() {
  const myLatLng = {
    lat: -25.363,
    lng: 131.044
  };
  const myLatLng2 = {
    lat: 22.302711,
    lng: 114.177216
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng2
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!"
  });
  var marker2 = new google.maps.Marker({
    position: myLatLng2,
    map,
    title: "Hong Kong"
  });
  marker.addListener('click', function() {
    map.setCenter(marker.getPosition());
    document.querySelector("#name").innerHTML = this.title;
  });
  marker2.addListener('click', function() {
    map.setCenter(marker2.getPosition());
    document.querySelector("#name").innerHTML = this.title;
  });
}