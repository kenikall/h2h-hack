$(document).ready(function(){
  // document.getElementById("user4").innerHTML='<object type="text/html" data="https://meet1.liveh2h.com/launcher.html?p=JTdCJTIydXNlcl9pZCUyMiUzQSUyMkJyc2dObDNSZUtjZnprZUpTMEhKbWV3NDBkbjUlMjIlMkMlMjJtZWV0aW5nX2lkJTIyJTNBJTIyMjk5MzA3NDQyJTIyJTJDJTIyb3JpZ2luJTIyJTNBJTIyVE1JJTIyJTJDJTIydXNlcl9kaXNwbGF5X25hbWUlMjIlM0ElMjJBbGV4JTIyJTdE&b=true"></object>';

  loadVideoListener();
});

//
//
var loadVideoListener = function () {
  $('#user4').click(function () {
    event.preventDefault();
    console.log('clicked the video listener')

    document.getElementById('q-show-content').innerHTML='<object type="text/html" data="https://meet1.liveh2h.com/launcher.html?p=JTdCJTIydXNlcl9pZCUyMiUzQSUyMkJyc2dObDNSZUtjZnprZUpTMEhKbWV3NDBkbjUlMjIlMkMlMjJtZWV0aW5nX2lkJTIyJTNBJTIyMjk5MzA3NDQyJTIyJTJDJTIyb3JpZ2luJTIyJTNBJTIyVE1JJTIyJTJDJTIydXNlcl9kaXNwbGF5X25hbWUlMjIlM0ElMjJBbGV4JTIyJTdE&b=true"></object>'
  })


  // document.getElementById("video").innerHTML='<object type="text/html" data="https://meet1.liveh2h.com/launcher.html?p=JTdCJTIydXNlcl9pZCUyMiUzQSUyMkJyc2dObDNSZUtjZnprZUpTMEhKbWV3NDBkbjUlMjIlMkMlMjJtZWV0aW5nX2lkJTIyJTNBJTIyMjk5MzA3NDQyJTIyJTJDJTIyb3JpZ2luJTIyJTNBJTIyVE1JJTIyJTJDJTIydXNlcl9kaXNwbGF5X25hbWUlMjIlM0ElMjJBbGV4JTIyJTdE&b=true"></object>';
}
