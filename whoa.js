// whoa.js - foreground script
console.log('whoa.js');
var hostname = location.hostname;
if (!localStorage.getItem(hostname)){
  var div = document.createElement('div');
  var message = document.createTextNode('You came here from another application. The name of this site is '+hostname);
  div.appendChild(message);
  document.body.appendChild(div);
  div.style="position: fixed; top: 0px; font-size: 24px; color: white; background-color:red; height: 50px; z-index: 10000; width: 100%;"
  localStorage.setItem(hostname,JSON.stringify(true));
}
