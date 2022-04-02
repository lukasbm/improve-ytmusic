browser.pageAction.onClicked.addListener((tab, { modifiers, button }) => {
  const youtubeLink = getYoutubeLink(tab.url);
  
  if (modifiers.length > 0 || button == 1) {
    browser.tabs.create({ url: youtubeLink });
  } else {
    browser.tabs.update({ url: youtubeLink });
  }
});

function getYoutubeLink(url) {
  let u = new URL(url);
  const v = u.searchParams.get("v");
  return `https://www.youtube.com/watch?v=${v}`;
}
