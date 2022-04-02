// TODO for cross browser: show pageAction manually, chromium does not support show_matches

browser.pageAction.onClicked.addListener((tab) => {
  browser.pageAction.hide(tab.id);
  browser.tabs.update({ url: getYoutubeLink(tab.url) });
});

function getYoutubeLink(url) {
  let u = new URL(url);
  const v = u.searchParams.get("v");
  return `https://www.youtube.com/watch?v=${v}`;
}
