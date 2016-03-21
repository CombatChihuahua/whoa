console.log("whoa-bg.js");

var requestFilter = { urls: [ "<all_urls>" ] };
var handler = function(details){
  if (details.frameId == 0){
    console.log(details);
    if (details.transitionType == "start_page") {
      chrome.tabs.executeScript(details.tabId, { file: "whoa.js" });
    }
  }
};
var extraInfoSpec = ['blocking'];

chrome.webNavigation.onCommitted.addListener(handler);

chrome.pageAction.onClicked.addListener(function(tab) { // show the popup when the user clicks on the page action.
  chrome.pageAction.show(tab.id);
});
