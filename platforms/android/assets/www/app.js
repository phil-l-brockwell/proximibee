var advertisingDistance = 0.5;
var updateTimer;
var refreshInterval = 1000;
var foundBeacons = {};
var ownedBeacons = [ { name: 'beacon1', major: 8981,   minor: 49281 },
										 { name: 'beacon2', major: 33613,  minor: 1285  },
										 { name: 'beacon3', major: 56449,  minor: 6595  },
										 { name: 'beacon4', major: 4851,   minor: 360 	},
										 { name: 'beacon5', major: 23124,  minor: 41840 } ]

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	startScan();
	updateTimer = setInterval(displayBeaconList, refreshInterval);
}

function startScan() {
	estimote.beacons.requestAlwaysAuthorization();
	estimote.beacons.startRangingBeaconsInRegion({}, onBeaconsRanged, onError);
};

function onBeaconsRanged(beaconInfo) {
	rangedBeacons = beaconInfo.beacons;
	$.each(rangedBeacons, function(index, fBeacon) {
		$.each(ownedBeacons, function(index, oBeacon) {
			if (fBeacon.major == oBeacon.major && fBeacon.minor == oBeacon.minor) {
				fBeacon.name = oBeacon.name;
				fBeacon.timeStamp = Date.now();
				foundBeacons[fBeacon.name] = fBeacon;
			};
		});
	});
};

function onError(errorMessage) {
	console.log('Beacon ranging has failed: ' + errorMessage);
};

function findClosestBeaconIn(array) {
	var closest
	$.each(array, function(key, item) {
		closest = closest || item
		if (item.distance < closest.distance) closest = item;
	});
	return closest;
};

function displayBeaconList() {
	var closestBeacon = findClosestBeaconIn(foundBeacons);
	$.each(ownedBeacons, function(key, item) {
		$('#' + item.name).hide();
	});

	if(closestBeacon.distance < advertisingDistance) {
		$('#' + closestBeacon.name).show();
	};
};
