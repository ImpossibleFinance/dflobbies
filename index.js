

// Initialize Firebase
	var firebaseConfig = {
		 apiKey: "AIzaSyA5K_PnJm_7d6N-NUOBWG9EZ0NhKPbNhGI",
    authDomain: "impossibledflobby.firebaseapp.com",
    projectId: "impossibledflobby",
             databaseURL: "https://impossibledflobby-default-rtdb.firebaseio.com/",
    storageBucket: "impossibledflobby.appspot.com",
    messagingSenderId: "575311250876",
    appId: "1:575311250876:web:da185ed7a4ce9d63f497b9",
    measurementId: "G-98JMC1M8NG"
		};

firebase.initializeApp(firebaseConfig);

// New Firebase
var resourceDB = firebase.database().ref('GameLobbies');
var resourceRef = resourceDB.orderByChild('gameName');//limit to last

// Form as a JSON
$(document).ready(function() {
    var count = 0;

   // Check for change & list Items
resourceRef.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // Get the Key & Child Data
    var key = childSnapshot.key;
    var gamesArray = childSnapshot.val();
      var $container = $('#container');
      for (var prop in gamesArray){
        var str = '';
        var submitTimeAgo = moment.utc(gamesArray.submitTime).local().startOf('hour').fromNow();
          
              str += '<li style="padding-bottom: 16px"><a target="_blank" style=" display:block; text-decoration: none;" href=" ' + gamesArray.gameUrl + '"' +    '<div class="ui card"> <div class="content"> <div class="header" style="font-weight: bold; font-size: 1.28571429em; margin-top: -0.21Z425em; margin-bottom: 0.1em; line-height: 1.28571429em; color:#00DAFF  !important" >' +
      gamesArray.gameName + ' </div> <p style="font-size: 0.75em;color:#00DAFF;" class="ui basic label">' + gamesArray.adminName + '</p> <p style="font-size: 0.75em;color:#00DAFF;" class="ui  basic label">' + submitTimeAgo + '</p> <div class="meta"> <p class="description">' + 'Join Game' + '</p></div></div></a></div></li>';  
//    
//              str.attr('link': gamesArray.url, 'title': gamesArray.tip, 'category': gamesArray.url, 'description': gamesArray.description);
        }
    
      // Create the list in HTML
      $('.list').append(str);
        count = ++count;
    });
  });
//var codepenList = new List('test-list', { 
//  valueNames: ['name', 'attr']
//});
//    
   window.onload = function() {
      document.getElementById("demo").innerHTML=$list.length;
}  
      window.onload = function() {
      document.getElementById("count").innerHTML=count;
}  
});


var $search = $('#search');
$search.on('keyup', function () {
  var filter = $(this).val(); 
    var count = 0;
  if (filter) {
    var $matches = $($container).find('li:icon(' + filter + ')');   
    $('ul', $container).not($matches).hide();
    $matches.show();    
  }
  else {
    $('li', $container).show();
  }  
  
  return false;
});