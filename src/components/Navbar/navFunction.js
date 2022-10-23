$( "#nav-icon" ).click(function() {
    $( "#container" ).fadeOut("slow", function() {
        $( "#small-screen-nav" ).fadeIn( "slow")
        $( "#small-ul" ).fadeIn("slow");
    });
  });
  
  $( "#close" ).click(function() {
    $( "#small-screen-nav" ).fadeOut( "slow", function() {
        $( "#small-screen-nav" ).fadeOut( "slow", function() {
           $( "#container" ).fadeIn("slow");
        });
    });
  });