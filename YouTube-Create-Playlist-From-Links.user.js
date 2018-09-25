// ==UserScript==
// @name         YouTube - Create Playlist From Links
// @namespace    https://github.com/LenAnderson
// @downloadURL  https://github.com/LenAnderson/YouTube-Create-Playlist-From-Links/raw/master/YouTube-Create-Playlist-From-Links.user.js
// @version      0.1
// @author       LenAnderson
// @match        https://www.youtube.com/
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';


    GM_registerMenuCommand('YouTube - Create Playlist From Links', showLinkListPrompt);


    let popup;


    function createPlaylist(linksText) {
        let links = linksText.split(/[\r\n]+/).map(url => url.replace(/^.*(?:\?|&)v=(.*)(?:&|$).*$/, '$1'));
        console.log('[YCPFL]', links);
        popup.location.href = `https://www.youtube.com/watch_videos?video_ids=${links.join(',')}`;
        let iv = setInterval(()=>{
            if (popup.location.href.search(/^https:\/\/www\.youtube\.com\/watch\?v=[^&]+&list=(.+)$/) == 0) {
                clearInterval(iv);
                let list = popup.location.href.replace(/^https:\/\/www\.youtube\.com\/watch\?v=[^&]+&list=(.+)$/, '$1');
                popup.location.href = `https://www.youtube.com/playlist?list=${list}&disable_polymer=true`;
                iv = setInterval(()=>{
                    let menuBtn = popup.document.querySelector('.playlist-menu > [aria-label="More"]');
                    if (menuBtn) {
                        clearInterval(iv);
                        iv = setInterval(()=>{
                            menuBtn.click();
                            let addBtn = popup.document.querySelector('.yt-ui-menu-content[aria-expanded="true"] > .yt-uix-menu > .addto-playlist-button');
                            if (addBtn) {
                                clearInterval(iv);
                                addBtn.click();
                            }
                        }, 1000);
                    }
                }, 100);
            }
        }, 100);
        popup.addEventListener('load', () => {
            console.log('[YCPFL]', 'LOADED!');
            console.log('[YCPFL]', popup.location.href);
        });
    }


    function showLinkListPrompt() {
        popup = open('about:blank', 'YouTube - Create Playlist From Links', 'resizable,innerHeight=600,innerWidth=1005,centerscreen,menubar=no,toolbar=no,location=no'); {
            let body = popup.document.body; {
                let title = document.createElement('h1'); {
                    title.textContent = 'Links:';
                    body.appendChild(title);
                }
                let ta = document.createElement('textarea'); {
                    ta.style.width = '100%';
                    ta.style.height = '500px';
                    body.appendChild(ta);
                }
                let btnContainer = document.createElement('div'); {
                    btnContainer.textAlign = 'right';
                    let ok = document.createElement('button'); {
                        ok.textContent = 'Create Playlist';
                        ok.addEventListener('click', () => {
                            createPlaylist(ta.value);
                        });
                        btnContainer.appendChild(ok);
                    }
                    let cancel = document.createElement('button'); {
                        cancel.textContent = 'Cancel';
                        cancel.addEventListener('click', () => popup.close());
                        btnContainer.appendChild(cancel);
                    }
                    body.appendChild(btnContainer);
                }
            }
        }
    };
})();
