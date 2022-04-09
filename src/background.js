// Updates the pageAction each time a tab is updated
browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
  if (tab.url.startsWith("https://music.youtube.com/")) {
    browser.pageAction.setTitle({ tabId: tab.id, title: "Open in Youtube" });
    browser.pageAction.show(tab.id);
  } else if (tab.url.startsWith("https://www.youtube.com/watch")) {
    browser.pageAction.setTitle({ tabId: tab.id, title: "Open in YTMusic" });
    browser.pageAction.show(tab.id);
  } else {
    browser.pageAction.hide(tab.id);
  }

  console.log(id);
});

browser.pageAction.onClicked.addListener((tab, { modifiers, button }) => {
  let v = getVideoFromUrl(tab.url) || getVideoFromPlayMenu();
  if (v == null) return;
  const youtubeLink = `https://www.youtube.com/watch?v=${v}`;

  if (modifiers.length > 0 || button == 1) {
    browser.tabs.create({ url: youtubeLink });
  } else {
    browser.tabs.update({ url: youtubeLink });
  }
});

/**
 * looks in the url for the video id
 * @param {string} url the url of the yt-music tab
 * @returns
 */
function getVideoFromUrl(url) {
  let u = new URL(url);
  if (!u.searchParams) return null;
  return u.searchParams.get("v") ?? null;
}

/**
 * looks in the playback menu (bottom bar) for the video id
 * @returns the video id from youtube
 */
function getVideoFromPlayMenu() {
  const el = document.querySelector("a.ytp-title-link.yt-uix-sessionlink");
  const link = el.getAttribute("href");
  if (link == null) return link;
  const u = new URL(link);
  if (!u.searchParams) return null;
  return u.searchParams.get("v") ?? null;
}
