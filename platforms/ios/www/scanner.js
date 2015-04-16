var Scanner = function() {
  this.beaconsInRange = {};
  this.ownedBeacons = [];
  this.DEFAULT_SCANNING_RANGE = 0.5;
  this.scanningRange = this.DEFAULT_SCANNING_RANGE;
};

Scanner.prototype.addBeacon = function(beacon) {
  this.ownedBeacons.push(beacon);
};

Scanner.prototype.getNewBeacons = function(beacons) {
  this.foundBeacons = beacons;
};

Scanner.prototype.checkOwned = function(foundBeacon, ownedBeacon) {
  if (foundBeacon.major == ownedBeacon.major && foundBeacon.minor == ownedBeacon.minor) return true;
};

Scanner.prototype.addId = function(foundBeacon, ownedBeacon) {
  foundBeacon.id = ownedBeacon.id;
};

Scanner.prototype.addName = function(foundBeacon, ownedBeacon) {
  foundBeacon.name = ownedBeacon.name;
};

Scanner.prototype.addTimeStamp = function(beacon) {
  beacon.timestamp = Date.now();
};

Scanner.prototype.addToBeaconsInRange = function(beacon) {
  this.beaconsInRange[beacon.id] = beacon
};

Scanner.prototype.checkRange = function(beacon) {
  if (beacon.distance <= this.scanningRange) return true;
};

Scanner.prototype.findClosestBeacon = function() {
  var closest;
  $.each(this.beaconsInRange, function(index, beacon) {
    closest = closest || beacon;
    if (beacon.distance < closest.distance) closest = beacon;
  });
  return closest;
};

Scanner.prototype.filterBeacons = function() {
  this.beaconsInRange = {};
  for (var i = 0; i < this.foundBeacons.length; i++) {
    for (var j = 0; j < this.ownedBeacons.length; j++) {
      if (this.checkOwned(this.foundBeacons[i], this.ownedBeacons[j]) && this.checkRange(this.foundBeacons[i])) {
        this.addId(this.foundBeacons[i], this.ownedBeacons[j]);
        this.addName(this.foundBeacons[i], this.ownedBeacons[j])
        this.addTimeStamp(this.foundBeacons[i]);
        this.addToBeaconsInRange(this.foundBeacons[i]);
      };
    }; 
  };
};
