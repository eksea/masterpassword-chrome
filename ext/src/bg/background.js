var session_store = {
    'username':null,
    'masterkey':null
}
console.log('background loaded');
chrome.storage.sync.get('username', function(itms) {
    if (itms.username!=undefined)
        session_store.username = itms.username;
});


function store_update(d) {
    session_store = d;
    chrome.storage.sync.set({'username':d.username});
}



//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });