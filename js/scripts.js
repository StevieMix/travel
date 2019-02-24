$(document).ready(function() {

  $("form#user-prefs").submit(function(event) {
    var userName = $("input#userName").val();
    $(".fillInName").text(userName);
  event.preventDefault();
    // $("#userName").show();
  });

  $("form#user-prefs").submit(function(event) {
    var userName = $("input#userName").val();
    var travelerDemo = $("select#travelerDemo").val();
    var destination = $("select#destination").val();
    var food = $("select#food").val();
    var risk = $("select#risk").val();
    var death = $("select#death").val();
    var positive = $("select#positive").val();

    if (travelerDemo === 'guilty' && destination === 'northKorea') {
          $("#syria").hide();
          $("#northKorea").hide();
          $("#venezuela").fadeIn();
          $("#congo").hide();
          $("#congo").hide();
        } else if (travelerDemo === 'divorce' && destination === 'positive') {
          $("#syria").hide();
          $("#northKorea").hide();
          $("#venezuela").hide();
          $("#congo").fadeIn();
          $("#ukraine").hide();
        } else if (travelerDemo === 'everything' && destination === 'monkey') {
          $("#syria").fadeIn();
          $("#northKorea").hide();
          $("#venezuela").hide();
          $("#congo").hide();
          $("#ukraine").hide();
        } else if (travelerDemo === 'guilty') {
          $("#syria").fadeIn();
          $("#northKorea").hide();
          $("#venezuela").hide();
          $("#congo").hide();
          $("#ukraine").hide();
        } else if (risk === 'sick') {
          $("#syria").hide();
          $("#northKorea").hide();
          $("#venezuela").hide();
          $("#congo").fadeIn();
          $("#ukraine").hide();
        } else if (destination === 'northKorea' && food === 'stinky') {
          $("#syria").hide();
          $("#northKorea").hide();
          $("#venezuela").fadeIn();
          $("#congo").hide();
          $("#ukraine").hide();
        } else if (destination === 'ukraine' && food === 'spicy') {
          $("#syria").fadeIn();
          $("#northKorea").hide();
          $("#venezuela").hide();
          $("#congo").hide();
          $("#ukraine").hide();
        } else if (death === 'explosive' || destination === 'beach' || food === 'stinky') {
          $("#syria").hide();
          $("#northKorea").hide();
          $("#venezuela").fadeIn();
          $("#congo").hide();
          $("#ukraine").hide();
        } else if (risk === 'sick' && food === 'spicy') {
          $("#syria").hide();
          $("#northKorea").hide();
          $("#venezuela").hide();
          $("#congo").fadeIn();
          $("#ukraine").hide();
        } else if (risk === 'cult' || death === 'torture') {
          $("#syria").hide();
          $("#northKorea").fadeIn();
          $("#venezuela").hide();
          $("#congo").hide();
          $("#ukraine").hide();
        } else if (risk === 'riots') {
          $("#syria").hide();
          $("#northKorea").hide();
          $("#venezuela").fadeIn();
          $("#congo").hide();
          $("#ukraine").hide();
        } else if (positive === 'majestic') {
          $("#syria").hide();
          $("#northKorea").fadeIn();
          $("#venezuela").hide();
          $("#congo").hide();
          $("#ukraine").hide();
        } else {
          $("#syria").hide();
          $("#northKorea").hide();
          $("#venezuela").fadeIn();
          $("#congo").hide();
          $("#ukraine").hide();
        }
    // console.log(travelerDemo);

        // event.preventDefault();
      });
    });
