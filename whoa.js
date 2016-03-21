// whoa.js - foreground script
console.log('whoa.js');
var hostname = location.hostname;

if ( !JSON.parse(localStorage.getItem(hostname)) ){
  var div = document.createElement('div');
  div.innerHTML = 'This is your first visit to <b>'+hostname+'</b>. You came here from another application. The title of this site is <b>'+document.title+'</b>';
  //div.appendChild(message);
  document.body.appendChild(div);
  var hz = 2*findHighestZIndex('div');
  div.style='position: fixed; top: 0px; font-size: 24px; color: white; min-height: 50px; width: 100%; background-color: red; left: 0px; padding: 10px; z-index: '+hz+';';

  if (false){
    localStorage.setItem(hostname,JSON.stringify(true));
  }
}

function findHighestZIndex(elem){
  var highest = 0;
  var elems = document.getElementsByTagName(elem);
  for (var i = 0; i < elems.length; i++){
    var zindex = document.defaultView.getComputedStyle(elems[i],null).getPropertyValue("z-index");
    highest = ((zindex > highest) && (zindex != 'auto')) ? zindex : highest;
  }
  return highest;
}
