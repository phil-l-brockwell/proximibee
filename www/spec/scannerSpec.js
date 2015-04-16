describe('Scanner', function() {

  var scanner = new Scanner;

  it('is initialised with a default scanning range', function() {
    expect(scanner.scanningRange).toBe(scanner.DEFAULT_SCANNING_RANGE);
  });

  it('can add a new beacon', function() {
    beacon = { name: 'beacon1', major: 8981, minor: 49281 };
    scanner.addBeacon(beacon);
    expect(scanner.ownedBeacons).toEqual([beacon]);
  });

  it('can add an array of new beacons', function() {
    beacons = [ { name: 'beacon1', major: 8981, minor: 49281 }, { name: 'beacon2', major: 33613, minor: 1285 }, { name: 'beacon3', major: 56449, minor: 6595 }, { name: 'beacon4', major: 4851, minor: 360 }, { name: 'beacon5', major: 23124, minor: 41840 } ];
    scanner.getNewBeacons(beacons);
    expect(scanner.foundBeacons).toEqual(beacons)
  });

  it('knows if a found beacon is owned', function() {
    foundBeacon = { major: 8981, minor: 49281 };
    ownedBeacon = { major: 8981, minor: 49281 };
    expect(scanner.checkOwned(foundBeacon, ownedBeacon)).toBe(true);
  });

  it('knows if a found beacon is not owned', function() {
    foundBeacon = { major: 1234, minor: 4321 };
    ownedBeacon = { major: 8981, minor: 49281 };
    expect(scanner.checkOwned(foundBeacon, ownedBeacon)).toBe(undefined)
  });

  it('can add the owned beacons id to a found beacon', function() {
    foundBeacon = { major: 8981, minor: 49281 };
    ownedBeacon = { id: '1', major: 8981, minor: 49281 };
    scanner.addId(foundBeacon, ownedBeacon);
    expect(foundBeacon).toEqual({ id: '1', major: 8981, minor: 49281 })
  });

  it('can add a timestamp to a found beacon', function() {
    foundBeacon = { major: 8981, minor: 49281 };
    scanner.addTimeStamp(foundBeacon);
    expect(foundBeacon.timestamp).toEqual(Date.now());
  });

  it('knows if a beacon is within the advertising range', function() {
    foundBeacon = { distance: 0.4 };
    expect(scanner.checkRange(foundBeacon)).toBe(true);
  });

  it('knows if a beacon is outside the advertising range', function() {
    foundBeacon = { distance: 0.6 };
    expect(scanner.checkRange(foundBeacon)).toBe(undefined);
  });

  it('can add a beacon to the beaconsInRange object', function() {
    beacon = { id: '1', major: 8981, minor: 49281 };
    scanner.addToBeaconsInRange(beacon)
    expect(scanner.beaconsInRange).toEqual({ '1': { id: '1', major: 8981, minor: 49281 } })
  });

  it('knows which of the beacons in range is closest', function() {
    scanner.beaconsInRange = { 'closest': { distance: 0.1 }, 'furthest': { distance: 0.3 }, 'middle': { distance: 0.2 } };
    expect(scanner.findClosestBeacon()).toEqual({ distance: 0.1 })
  });

});
