// Weather API. Ricardo Elias. 2012.


$(function(){

//all
var AttachtoAllDiv=document.getElementById("twitterfeed")
var FeedUrl="http://twitter.com/statuses/user_timeline/ChicagoBreaking.rss"
var LimitOfFeed=1
var rssoutput="<b>  Breaking News: </b>"




function rssfeedsetupAll(){
var feedpointer=new google.feeds.Feed(FeedUrl) //Google Feed API method
feedpointer.setNumEntries(LimitOfFeed) //Google Feed API method
feedpointer.load(DisplayFeed) //Google Feed API method
}


function DisplayFeed(result){

var AllTheFeeds=result.feed.entries
for (var i=0; i<AllTheFeeds.length; i++)
rssoutput+="<a href='" + AllTheFeeds[i].link + "'>" + AllTheFeeds[i].title + "</a>"  
AttachtoAllDiv.innerHTML=rssoutput

}


//
window.onload=function(){
rssfeedsetupAll();

}
}); 