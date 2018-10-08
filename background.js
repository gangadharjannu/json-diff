chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({
        'url': chrome.extension.getURL('jdd/index.html'),
    }, function (tab) {
        // TODO: tab opened

    });
});