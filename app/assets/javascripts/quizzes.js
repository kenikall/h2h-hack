$(document).ready(function() {
  var meetingURL = ""
  var meetingId = ""
  meetingLinkGrabber();
  console.log(meetingURL)
})

var meetingFrame = function(){
  $('#user4').click(function () {
    event.preventDefault();
    console.log('clicked the video listener')

    document.getElementById('q-show-content').innerHTML='<object class="video" style="height:800px; width:1000px;" type="text/html" data=' + meetingURL + '></object>'
  })
}

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
    "applicationId": "9155BF89-2C10-4E43-88F3-73748AC158D0",
    "name": "mannah",
    "templateId": "DA22B2BF-19FE-4463-8FBC-508683D4A76D"
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
