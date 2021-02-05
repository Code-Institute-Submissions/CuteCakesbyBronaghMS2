function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 11,
                center: {
                    lat: 53.3767078,
                    lng: -6.4870433
                }
            });
            var labels = "ABC";
            var locations = [{
                lat: 53.3512766,
                lng: -6.548766
            }, {
                lat: 53.371625,
                lng: -6.5185476
            }, {
                lat: 53.3623246,
                lng: -6.5992629
            }];
            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });
            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }

/*----------Email Functionality----------*/

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_ht0rz4h';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Your e-mail has been sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});