// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 8,
//     center: { lat: 40.731, lng: -73.997 }
//   });

//   var infowindow = new google.maps.InfoWindow;

//   document.getElementById('submit').addEventListener('click', function () {
//     geocodeLatLng(geocoder, map, infowindow);
//   });
// }

export function geocodeLatLng(input, callback) {
  var geocoder = new google.maps.Geocoder;
  // var input = document.getElementById('latlng').value;
  //var input = '40.714224,-73.961452';
  let geoLocation;
  var latlngStr = input.split(',', 2);
  var latlng = { lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1]) };
  geocoder.geocode({ 'location': latlng }, function (results, status) {
    if (status === 'OK') {
      if (results[1]) {
        geoLocation = results[1].formatted_address;
        return callback(geoLocation);
      } else {
        window.alert('No results found');
      }
    }
  });
}