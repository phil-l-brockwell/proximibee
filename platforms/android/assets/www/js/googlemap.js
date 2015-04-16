navigator.geolocation.getCurrentPosition(success);

function success(position) {
     var lat = position.coords.latitude;
     var long = position.coords.longitude;
}

