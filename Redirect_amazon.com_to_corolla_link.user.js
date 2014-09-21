// ==UserScript==
// @name        Redirect amazon.com to corolla link
// @namespace   jg5050
// @description On any web page it will check if the clicked links goes to userscripts.org. If so, the link will be rewritten to point to userscripts-mirror.org
// @include     http://*.*
// @include     https://*.*
// @exclude     http://www.amazon.com/*
// @exclude     https://www.amazon.com/*
// @version     2.0
// @grant       none
// ==/UserScript==

// ----------TEST------------This is a slightly brute force solution, but there is no other way to do it using only a userscript. A full-fledged addon may be created soon.

document.body.addEventListener('click', function(e){
    var targ = e.target || e.srcElement;
    if ( targ && targ.href && targ.href.match('https?:\/\/amazon.com') ) {
        targ.href = targ.href.replace('://amazon.com', '://amazon.com//ref=as_sl_pd_tf_lc?&tag=adamcarolla09-20&camp=15345&creative=331665&linkCode=ur1&adid=08J5N62MYPDM106CXGNH&&ref-refURL=http%3A%2F%2Fadamcarolla.com%2Fsponsors%2F');
    }
});
