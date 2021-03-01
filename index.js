/* This was an initial test of understanding location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
  });
} else {
  console.log("geolocation not available");
}

*/

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

  let x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

btnShowLocation.onclick = showPosition ();

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let latlon = new google.maps.LatLng(lat, lon)
  let mapholder = document.getElementById('map')
  mapholder.style.height = '250px';
  mapholder.style.width = '500px';

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
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}



/*
function initMap() {

  // Map option

  let options = {
    center: {
      lat: latText.textContent,
      lng: longText.textContent,
    },
    zoom: 10,
  };

  //New Map
  map = new google.maps.Map(document.getElementById("map"), options);

  //listen for click on map location

  google.maps.event.addListener(map, "click", (event) => {
    //add Marker
    addMarker({ location: event.latLng });
  });

  //Add Markers to Array
  //

  let MarkerArray = [
    {
      location: { lat: 37.9922, lng: -1.1307 },
      imageIcon: "https://img.icons8.com/nolan/2x/marker.png",
      content: `<h2>Murcia City</h2>`,
    },

    { location: { lat: 39.4699, lng: -0.3763 } },

    {
      location: { lat: 38.5411, lng: -0.1225 },
      content: `<h2>Benidorm City</h2>`,
    },
  ];

  // loop through marker
  for (let i = 0; i < MarkerArray.length; i++) {
    addMarker(MarkerArray[i]);
  }

  // Add Marker

  function addMarker(property) {
    const marker = new google.maps.Marker({
      position: property.location,
      map: map,
      //icon: property.imageIcon
    });

    // Check for custom Icon

    if (property.imageIcon) {
      // set image icon
      marker.setIcon(property.imageIcon);
    }

    if (property.content) {
      const detailWindow = new google.maps.InfoWindow({
        content: property.content,
      });

      marker.addListener("mouseover", () => {
        detailWindow.open(map, marker);
      });
    }
  }
}

*/

/*

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
    console.log('Latitude: ' + position.coords.latitude);
    console.log('Longitude: ' + position.coords.longitude);
        });
    } else {
        console.log('geolocation not available');
    }

    btnShowLocation = document.getElementById('btnShowlocation');

    let textLocation = document.getElementById('textLocation');

    btnShowLocation.addEventListener('click', function() {
        textLocation.textContent = 'Your current location is ' + position.coords.latitude + ' and ' + position.coords.longitude;
    });

    document.getElementById('btnShowLocation').onclick = ()=> {
    map = new google.maps.Map(document.getElementById("map"), {
    center: {
        lat: -34.397, 
        lng: 150.644 
    },
    zoom: 8,
        });
    }

    let f = function () {
console.log("Hello There");
    }

f();

//the above function cannot be assigned another value, as in f cannot be assgined a number value and such
let message = function simpleConsoleMessage() {
console.log("just another message");
}

//The navigator Interface has alot of other uses and theyre really interesting, I'm going to implement some of those in an HTML sort of 
//play house to test each of them and understand how they work

vibrateBtn = document.createElement('button');
vibrateBtn.setAttribute("id", "btn");

//check for the different versions of the vibrate api (comes with HTML5)
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

if (navigator.vibrate) {
// checks if api is supported for browser
vibrateBtn.addEventListener('click', function(ev) {
console.log('Vibration has worked!');
navigator.vibrate(1000);
    });
}

(function(ev) {
console.log("you can try making your own theme, also this api will drain your battery! Its too much power!")
})();

*/
