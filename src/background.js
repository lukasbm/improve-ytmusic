browser.pageAction.onClicked.addListener((tab, { modifiers, button }) => {
  let v = getVideoFromUrl(tab.url) || getVideoFromPlayMenu();

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
  return null;
}
