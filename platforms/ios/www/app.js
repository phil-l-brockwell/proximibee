var app = (function()
{
	// Application object.
	var app = {};
	// Dictionary of beacons.
	var beacons = {};
	// Timer that displays list of beacons.
	var updateTimer = null;

	app.initialize = function()
	{
		document.addEventListener('deviceready', onDeviceReady, false);
	};

	function onDeviceReady()
	{
		startScan();
		updateTimer = setInterval(displayBeaconList, 100);
	}

	function startScan()
	{
		function onBeaconsRanged(beaconInfo)
		{
			for (var i in beaconInfo.beacons)
			{
				var beacon = beaconInfo.beacons[i];
				if (beacon.rssi < 0)
				{
					beacon.timeStamp = Date.now();
					var key = beacon.uuid + ':' + beacon.major + ':' + beacon.minor;
					beacons[key] = beacon;
				}
			}
		}

		function onError(errorMessage)
		{
			console.log('Ranging beacons did fail: ' + errorMessage);
		}

		estimote.beacons.requestAlwaysAuthorization();
		estimote.beacons.startRangingBeaconsInRegion({}, onBeaconsRanged, onError);
	}

function displayBeaconList()
    {
        $.each(beacons, function(key, beacon) {

            if(beacon.distance < 0.05) {

            // Beacon 1 Shop Entrance
            //===============
                    if(beacon.major == 23124 && beacon.minor == 41840) {
                            var beacon1 = document.getElementById("beacon1");
                            beacon1.style.display = "block";
                            var beacon2 = document.getElementById("beacon2");
                            beacon2.style.display = "none";
                    }

            // Beacon 2 Shop Exit
            //===============
                     else {
                            var beacon1 = document.getElementById("beacon1");
                            beacon1.style.display = "none";
                            var beacon2 = document.getElementById("beacon2");
                            beacon2.style.display = "block";
                    }
            };
        });
    }

	return app;
})();

app.initialize();
