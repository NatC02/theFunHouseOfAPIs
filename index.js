btnShowLocation = document.getElementById("btnShowlocation");

  let btnLocation = document.getElementById("btnLocation");
  let latText = document.getElementById("latitude");
  let longText = document.getElementById("longitude");

  btnLocation.addEventListener("click", ()=> {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      latText.textContent = lat.toFixed(2);
      longText.textContent = long.toFixed(2);
    });
  });


let textUserlocation = document.getElementById("textUserlocation");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    textUserlocation.textContent = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let latlon = new google.maps.LatLng(lat, lon)
  let mapholder = document.getElementById('mapholder')
  mapholder.style.height = '700px';
  mapholder.style.width = '100%';

  let myOptions = {
    center:latlon,zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
  }
    
  let map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
  let marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      textUserLocation.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      textUserLocation.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      textUserLocation.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      textUserLocation.innerHTML = "An unknown error occurred."
      break;
  }
}

//The navigator Interface has alot of other uses and theyre really interesting, I'm going to implement some of those in an HTML sort of 
//play house to test each of them and understand how they work

btnVibrate = document.getElementById('btnVibrate');
confirmVibrate = document.getElementById('messageVibration')

//check for the different versions of the vibrate api (comes with HTML5)
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

if (navigator.vibrate) {
// checks if api is supported for browser
btnVibrate.addEventListener('click', function(ev) {
confirmVibrate.textContent = "The device has vibrated";
console.log('Vibration has worked!');
navigator.vibrate(1000);
    });
}

(function(ev) {
console.log("you can try making your own theme, also this api will drain your battery! Its too much power!")
})();

//Here I will attempt to grab user information about the network and their connection
//Mind you this is an experimental, so some of these 



//sThe slower the connection the worse the call quality in bit rate
//It will take your your network information and after youve recorded your voice using audio it will lower
//increase the bitrate depending on your network upload and download speed