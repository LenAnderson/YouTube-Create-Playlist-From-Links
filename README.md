# YouTube - Create Playlist From Links

## Installation

You need to install this using tampermonkey or greasemonkey.  
Firefox: [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)  
Chrome: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)  
  
Once you have installed the extension, Click [here](https://github.com/LenAnderson/YouTube-Create-Playlist-From-Links/raw/master/YouTube-Create-Playlist-From-Links.user.js) to install the script.

## How does it work?

1. Get a list of links to YouTube videos. If you have your videos bookmarked, you can (at least in Chrome) open the bookmark manager (right click on the bookmark bar -> bookmark manager), select your bookmarks there (hold ctrl or shift to select multiple) and press ctrl+c to copy the links.
2. Go to https://www.youtube.com
3. In the menu of your userscript extension (e.g. in Chrome, click on the Tampermonkey icon next to the address bar) you'll find an entry **YouTube - Create Playlist From Link**. Click on that and a popup window should open (you may have to allow YouTube to show popups).
4. Paste the list of links into the big textarea in that popup.
5. Click the **Create Playlist** button
6. The popup will load a couple of pages and end up on the playlist management page for an **Untitled Playlist**.
7. If this script has not already successfully done so, click on the three vertical dots in the top right corner to open the menu and then click **Add all to...**
8. Choose the playlist you want to add your videos to or create a new one.
9. Done!
