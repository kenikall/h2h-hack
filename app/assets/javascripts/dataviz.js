$(document).ready(function(){

  $('#user1').ready(function(){

    setTimeout(function(){ $('#user1-rbutton').hide(); $('#user1-gbutton').show() }, Math.random()*3000);
    setTimeout(function(){ $('#user2-rbutton').hide(); $('#user2-gbutton').show() }, Math.random()*3000);
    setTimeout(function(){ $('#user3-rbutton').hide(); $('#user3-gbutton').show() }, Math.random()*3000);
  })

  $('#user4-rbutton').click(function(){ $('#user4-rbutton').hide(); $('#user4-gbutton').show() })
})
