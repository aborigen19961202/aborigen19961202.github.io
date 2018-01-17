script.
	function initMap() {
		var element = document.getElementById('map');

		var options = {
			zoom: 15,
			center: {lat: 49.827106, lng: 23.996679},
			//- disableDefaultUI: true
			zoomControl: true,
			zoomControlOptions: {
				position: google.maps.ControlPosition.BOTTOM_CENTER
			},
			mapTypeControl: false,
			streetViewControl: false,
			//- rotateControl: false,
			fullscreenControl: false
		};

		var myMap = new google.maps.Map(element, options);
		
		$.getJSON("../json/map-style/map-style_colored.json", function (data) {
			map.setOptions({styles: data});
		});
		
		var markers = [
			{
				coordinates: {lat: 49.827106, lng: 23.996679},
				info: '<h3>Lorem ipsum dolor sit amet</h3>'
			},
			{
				coordinates: {lat: 49.825181, lng: 24.002853},
				image: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
				info: '<h1>Hey from here?</h1>'
			},
		];

		for(var i = 0; i < markers.length; i++){
			addMarker(markers[i]);
		}

		function addMarker(properties) {
			var marker = new google.maps.Marker({
				position: properties.coordinates,
				map: myMap,
			});

			if(properties.image){
				marker.setIcon(properties.image);
			}

			if(properties.info){
				var InfoWindow = new google.maps.InfoWindow({
					content: properties.info
				});
				
				marker.addListener('click', function(){
					InfoWindow.open(myMap, marker);
				})
			}
		}
	}
script(async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAfpJ4fMBwd4QvU_XFnv6dyvXFGEoop9TU&callback=initMap")