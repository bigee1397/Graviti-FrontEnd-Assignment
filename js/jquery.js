//set map options

var anything = { lat:12.9716 , lng:77.5946 };
var mapOptions = {
    center: new google.maps.LatLng(anything),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

//creates map
var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);


var directionsService = new google.maps.DirectionService();

var directionsDisplay = new google.maps.DirectionsRenderer();

directionDisplay.setMap(map);

function calcRoute() {
    var req = {
        origin: document.getElementById('origin').value,
        destination: document.getElementById('destination').value,
        travelMode: google.maps.TravelMode.DRIVING, 
        unitSystem: google.maps.UnitSystem.METRIC
    }

directionsService.route(request,(result,status) => {
    if (status == google.maps.DirectionStatus.Ok) {
        const output1 = document.querySelector('#output');
        output1.innerHTML = '<div>The distance between <strong>" + document.getElementById("origin").value+ "</strong> and <strong> " + document.getElementById("destination").value + "</strong> is <strong> "+ result.routes[0].legs[0].distance.text + " </strong><strong> kms</strong></strong>.</div>';     
    
    
        directionDisplay.setDirections(result);
    }
    else{
        directionDisplay.setDirections({routes: []});

        map.setCenter(anything);
    }
})

}