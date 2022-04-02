// TODO for cross browser: show pageAction manually, chromium does not support show_matches

browser.pageAction.onClicked.addListener((tab) => {
  browser.pageAction.hide(tab.id);
  browser.tabs.update({ url: getYoutubeLink() });
});

function getYoutubeLink() {
  return "https://youtube.com";
}

browser.pageAction.onClicked.addListener(function () {});
