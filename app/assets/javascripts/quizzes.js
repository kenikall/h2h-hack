$(document).ready(function() {
  // meetingLinkGrabber();
  // videoLinkGrabber();
  var meetingURL = "";
  var meetingId = "";
  meetingLinkGrabber();
  console.log(meetingURL);
});

var meetingFrame = function(){
  $('#user4-rbutton').click(function () {
    event.preventDefault();
    console.log('clicked the video listener');

    document.getElementById('q-show-content').innerHTML='<object class="video" style="height:800px; width:1000px;" type="text/html" data=' + meetingURL + '></object>';
  });
};

// Grabs meeting URL and meeting ID
var meetingLinkGrabber = function() {
  var request = $.ajax({
    url: "https://sandbox.liveh2h.com/tutormeetweb/rest/v1/meetings/createInstantMeeting",
    method: "POST",
    headers: {"Content-Type": "application/json"},
    data: JSON.stringify({
      "customLayouts":[
        {"component": "string",
        "width": 12,
        "height": 12
      }
    ],
    "applicationId": "FD9BCBE6-B191-45A4-92BC-736525D700D0",
    "name": "mannah",
    "templateId": "69A4600E-DECC-43E0-89B5-97CEFCBA1723"
  })
});

request.done(function(response) {
  // console.log('response', response.data);
  meetingURL = response.data.meetingURL;
  console.log('meetingURL', meetingURL);
  meetingId = response.data.meetingId;
  console.log('meetingId', meetingId);
  meetingFrame();
});

request.fail(function(response) {
  alert("An error occured.");
});
};

var videoLinkGrabber = function(meetingId) {
  $.ajax({
  url: "https://meetstage-us.liveh2h.com/h2h-record/record/listings?meetingId=272869444&origin=TME",
  type: 'GET',
  success: function(response) {
      console.log('response', response);
  },  
  error: function (e) {
  }
});
};
