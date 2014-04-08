function request (details) {
	if (details.url.match(/^https/i) != null) {
		var redirectUrl = details.url.replace(/^https/i,"http");
		return {"redirectUrl":redirectUrl};	
	}
return {};
}

chrome.webRequest.onBeforeRequest.addListener(request,{urls:["<all_urls>"]},["blocking"]);

