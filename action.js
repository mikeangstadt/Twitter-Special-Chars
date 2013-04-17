document.addEventListener('DOMContentLoaded', function () {

var specialLinks = document.getElementsByClassName('specialchar'); 

for(var i=0;i<specialLinks.length;i++) 
{
	specialLinks[i].onclick = function(i) { 
		chrome.tabs.executeScript(null, {code:"var twitBox = document.getElementById('tweet-box-mini-home-profile'); var twitBoxInner = twitBox.getElementsByTagName('div'); var newHTML; if(twitBoxInner[0].innerHTML == 'Compose new Tweet...') newHTML = '" + i.srcElement.getAttribute('alt') + "'; else newHTML = twitBoxInner[0].innerHTML + '" + i.srcElement.getAttribute('alt') + "'; twitBoxInner[0].innerHTML = newHTML;"});
	}; 
}
});