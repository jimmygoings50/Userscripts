// ==UserScript==
// @name          	Inoreader - Highlights row light blue when mouse over in Article Pane
// @namespace 	  	https://openuserjs.org/scripts/jg5050/Inoreader_-_Highlights_row_light_blue_when_mouse_over_in_Article_Pane
// @description	  	Change background to light blue when hovering with the mouse over headers in the article pane 
// @downloadURL 	https://github.com/jimmygoings50/Userscripts/blob/master/Inoreader_-_Highlights_Row_Light_Blue_on_Mouseover.user.js
// @updateURL 		https://github.com/jimmygoings50/Userscripts/blob/master/Inoreader_-_Highlights_Row_Light_Blue_on_Mouseover.user.js
// @author        	jg5050
// @version        	1.0
// @domain       	www.inoreader.com 
// @domain       	inoreader.com
// @domain       	beta.inoreader.com 
// @match       	https://*.inoreader.com/* 
// @match       	https://inoreader.com/* 
// @match       	http://*.inoreader.com/* 
// @match       	http://inoreader.com/*
// @include       	https://*.inoreader.com/* 
// @include       	https://inoreader.com/* 
// @include       	http://*.inoreader.com/* 
// @include       	http://inoreader.com/*
// @grant		GM_addStyle
// ==/UserScript==
(function() {
var css = "@namespace url(http://www.w3.org/1999/xhtml); \div.article_subscribed:hover {background-color: rgb(173,216,230) !important; color: rgb(255,195,0) !important;} \div.article_header:hover {background-color: rgb(173,216,230) !important; color: rgb(255,195,0) !important;} \div.article_header:hover .article_feed_title {color: rgb(255,195,0) !important;} \div.article_header:hover .article_header_title {color: rgb(255,195,0) !important;} \div.article_header:hover .arrow_div {background-color: rgb(173,216,230) !important;}";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node); 
	}
}
})();
