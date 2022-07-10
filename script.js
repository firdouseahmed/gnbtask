console.log('Hello!');
var wrapper = document.getElementById('wrapper');
var masonary = document.getElementById('masonarySection');


document.addEventListener('click', function (event) {
  if (!event.target.matches('.list')) return;

  // List view
  event.preventDefault();
  wrapper.classList.add('list');
  masonary.classList.add('list');

});

document.addEventListener('click', function (event) {
  if (!event.target.matches('.grid')) return;

  // List view
  event.preventDefault();
  wrapper.classList.remove('list');
  masonary.classList.remove('list');
});

// map section 
function loadMap() {
			
    var mapOptions = {
       center:new google.maps.LatLng(17.609993, 83.221436), 
       zoom:12, 
       mapTypeId:google.maps.MapTypeId.ROADMAP
    };
        
    var map = new google.maps.Map(document.getElementById("googleMap"),mapOptions);
 }
    
 google.maps.event.addDomListener(window, 'load', loadMap);