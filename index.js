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