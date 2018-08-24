"use strict";

// We can only serve http(s), not other protocols. See https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter.
var patternsToRedirect= [ "*://focus4you.github.io/selection/*" ];
patternsToRedirect= [ "*://*/*" ];

/*
    It does receive #hash. However, #hash is not sent to webserver (see Firefox menu > Tools > Developer > Network).
*/
function redirect(requestDetails) {
  if( true ) {
    console.log("WebRequest for " + requestDetails.url);
    if( false)
    return {
      redirectUrl: "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif"
    };
  }
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:patternsToRedirect, types:["main_frame"]},
  ["blocking"]
);

browser.runtime.onMessage.addListener(
    (message, sender, sendResponse) => {
        if( message==="inject LinkToSelection" ) {
            browser.tabs.executeScript( sender.tab.id,
            {
                file: "/LinkToSelection/lib/LinkToSelection.js"  //@TODO .min.js
            });
        }
    }
);
/**/
browser.tabs.onUpdated.addListener(
   (tabId, changeInfo, tab) => {
        // This gets triggered even on #hash change. Good.
        // Accessing changeInfo.url requires 'tabs' permission
        console.log( 'tabs.onUpdated tabId ' +tabId+ ', changeInfo ' +JSON.stringify(changeInfo) );
        if( 'url' in changeInfo ) {// @TODOOOO - no url?!
            console.log( 'changeInfo.url ' +changeInfo.url );
            if(true) return;
            // TODO if( page doesn't load LinkToSelection already)
            browser.tabs.executeScript( tabId, {
                file: "/LinkToSelection/lib/LinkToSelection.min.js" 
            });
        }
   }
);/**/