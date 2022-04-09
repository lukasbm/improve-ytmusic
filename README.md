# improve-ytmusic

This firefox extensionremoves oversized margins and other annoying things.

## Cross-Platform
Currently this extension is firefox only.
To enable cross platform a few things have to be done:
- grant the "tabs" permission
- do not use the "show_matches" selector in the manifest
- instead write code to activate the page actions like this: https://github.com/mdn/webextensions-examples/blob/master/apply-css/background.js
- install the "webextension-polyfill" npm package to allow chrome to use the Promise based browser API from firefox.

Also look here: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension


## Roadmap
- Support PageAction, when using minified Youtube player (i)
