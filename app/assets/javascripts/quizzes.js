$(document).ready(function() {
  meetingLinkGrabber();

});

// Grabs meeting URL and meeting ID
var meetingLinkGrabber = function() {
  var request = $.ajax({
    url: "https://sandbox.liveh2h.com/tutormeetweb/rest/v1/meetings/createInstantMeeting",
    method: "POST",
    headers: {"Content-Type": "application/json"},
    data: JSON.stringify({
      "applicationId": "9155BF89-2C10-4E43-88F3-73748AC158D0",
      "name": "mannah",
      "templateId": "DA22B2BF-19FE-4463-8FBC-508683D4A76D"
        })    
  });

  request.done(function(response) {
    // console.log('response', response.data);
    var meetingURL = response.data.meetingURL;
    console.log('meetingURL', meetingURL);
    var meetingId = response.data.meetingId;
    console.log('meetingId', meetingId);

  });

  request.fail(function(response) {
    alert("An error occured.");
  });
};
