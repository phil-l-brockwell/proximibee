$(document).ready(function() {

  var scanner = new Scanner;
  var closestBeacon; var previousBeacon; var beacons;

  document.addEventListener('deviceready', apiCall, false);

  function apiCall() {
    $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: 'https://arcane-citadel-3693.herokuapp.com/shows/2.json',
    success: function(data) {
      beacons = data.beacons;
      onDeviceReady();
      setInterval(postData, 60000);
      }
    });
  };

  function onDeviceReady() {
    initialiseBeacons();
    estimote.beacons.requestAlwaysAuthorization();
    estimote.beacons.startRangingBeaconsInRegion({}, onSuccess, onError);
  };

  function initialiseBeacons() {
    $.each(beacons, function(index, beacon) {
      scanner.addBeacon(beacon);
      $('#variable').append($('<div>', { id: 'beacon' + beacon.id }));
      var html = getProductHtml(beacon);
      $('#beacon' + beacon.id).html(html);
      initSlider(beacon);
    });
  };

  function getProductHtml(beacon) {
    var html = '';
    $.each(beacon.products, function(index, product) {
      html += "<center><div class='item'><img src='" + product.url + "' style='width:100%;'><div class='simpleCart_shelfItem'><h2 class='item_name'>"
      html += product.name + "</h2><div class='text'><h3 class='item_price'>£" + product.price
      html += "</h3><a href='javascript:;' id='basketbtn' class='item_add nightly-button' style='margin-top:0px'><b>Add to Cart</b></a></div></div></div></center>";
    });
    return html += '</div>';
  };

  function onSuccess(beaconInfo) {
    previousBeacon = closestBeacon;
    scanner.getNewBeacons(beaconInfo.beacons);
    scanner.filterBeacons();
    if (closestBeacon = scanner.findClosestBeacon()) updateView();
    else defaultView();
  };

  function onError(message) {
    defaultView();
  };

  function updateView() {
    if (updateNeeded()) {
      if (previousBeacon) $('#beacon' + previousBeacon.id).hide();
      $('#default').hide();
      $('#beacon' + closestBeacon.id).show(10000);
    };
  };

  function defaultView() {
    if (closestBeacon) $('#beacon' + closestBeacon.id).hide();
    if (previousBeacon) $('#beacon' + previousBeacon.id).hide();
    $('#default').show(2000);
    closestBeacon = null;
  };

  function updateNeeded() {
    if (!previousBeacon || closestBeacon.id != previousBeacon.id) return true;
  };

  function postData() {
    var beacon;
    if (beacon = scanner.findClosestBeacon()) {
      $.post('https://arcane-citadel-3693.herokuapp.com/visits', {
        visit: { beacon_id: beacon.id }
      });
    }
  };

});