$(document).ready(function() {
  var meetingURL = "";
  var meetingId = "";
  // meetingLinkGrabber();
  joinYoMeeting();

});

var meetingFrame = function(){
  $('#user4').click(function () {
    event.preventDefault();
    console.log('clicked the video listener');

    document.getElementById('master-of-API').innerHTML='<object class="video" style="margin: 80px 0px 0px 0px; height: 85vh; width: 100%;" type="text/html" data=' + meetingURL + '></object>';
  });
};
// For the best meetings, hit up slack
// To Join a Meeting that is fleeting
var joinYoMeeting = function(){
  $.ajax(
  {
    url: "https://sandbox.liveh2h.com/tutormeetweb/rest/v1/meetings/join",
    type: "POST",
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(
    {
      "email":"hello@yomama.com",
      "meetingId": "011351636",
      "name":"Matt"
    }),
    success: function(resp, status, xhr){
      meetingURL = resp.data.meetingURL
      meetingFrame();
    },
    error: function () {
      //Error message or call back function
    }
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
