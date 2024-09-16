// Initialize and add the map
function initMap() {
  // The location of your store (24 Pitt St, Adelaide SA 5000)
  const storeLocation = { lat: -34.928042488761434, lng: 138.5973714523374 }; // Latitude and Longitude for 24 Pitt St, Adelaide SA 5000

  // The map, centered at the store location
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14, // Default zoom level
    center: storeLocation,
    mapTypeControl: true, // Enables map/satellite control
    streetViewControl: true, // Enables street view control
  });

  // Add a red marker at the store location
  const marker = new google.maps.Marker({
    position: storeLocation,
    map: map,
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" // Standard red marker icon
    }
  });

  // Add a link to Google Maps to "View Larger Map"
  const mapLink = document.createElement("div");
  mapLink.innerHTML = '<a href="https://www.google.com/maps?q=' + storeLocation.lat + ',' + storeLocation.lng + '&z=15" target="_blank">View Larger Map</a>';
  map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(mapLink);
}
