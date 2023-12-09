chrome.action.onClicked.addListener(handleActionClick);

function handleActionClick(tab) {
  chrome.tabs.create(
    {
      url: chrome.runtime.getURL("jdd/index.html"),
    },
    function (tab) {
      // TODO: tab opened
    }
  );
}
