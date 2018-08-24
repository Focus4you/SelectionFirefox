"use strict";

/*
setTimeout( function() {
    if (typeof document.onselectionchange !== 'undefined') {
    }
}, 0);/***/

setTimeout( function() {
    var scripts= document.getElementsByTagName('script');
    for( var script of scripts ) {
        if( script.src.endsWith('LinkToSelection.min.js') || script.src.endsWith('LinkToSelection.js') ) {
            return;
        }
    }
    browser.runtime.sendMessage( "inject LinkToSelection" );
}, 0);


window.addEventListener("hashchange", function(event) {
    console.log( 'Changed URL from ' +event.oldURL+ ' to ' +event.newURL ); // Good - it receives the hash, too
}, false);