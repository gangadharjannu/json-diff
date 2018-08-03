// chrome.browserAction.onClicked.addListener(function (activeTab) {
//     chrome.tabs.create({
//         url: chrome.extension.getURL('index.html')
//     }, function (tab) {
//         // TODO: tab opened
//     });
// });
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({
        'url': chrome.extension.getURL('jdd/index.html'),
        // 'active': true
    });
});

// chrome.browserAction.onClicked.addListener(function (activeTab) {
//     var newURL = "http://stackoverflow.com/";
//     chrome.tabs.create({
//         url: newURL
//     });
// });