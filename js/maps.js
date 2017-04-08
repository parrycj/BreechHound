var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.787252, lng: -41.011963},
        zoom: 3 // typical is usually 8 or 9
    });


    var marker = new google.maps.Marker({
        position: {lat: 38.433511, lng: -78.280334},
        map: map,
        icon: 'style/drawables/blueMapMarker.png'
    });
}