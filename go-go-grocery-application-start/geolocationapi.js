let locationButton = document.getElementById("mylocation");
let locationPara = document.getElementById("location");
let mapLink = document.getElementById("map-link");

mapLink.href = "";
mapLink.textContent = "";

function getLocation() {
    if(!navigator.geolocation) {
        locationPara.textContent = "Sorry! GeoLocation Not Available!";
    }
    else {
        locationPara.textContent = "Locating Position...";
        navigator.geolocation.getCurrentPosition(showPosition, errorMsg);
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    locationPara.textContent = "";
    mapLink.textContent = "Check Out The Map!";
    mapLink.href = `https://www.openstreetmap.org/#map=17"/${latitude}/${longitude}`;
}

function errorMsg() {
    para.textContent = "Sorry SomethingWent Wrong!";
}

locationButton.onclick = getLocation;