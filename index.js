// Write your code in this file!

function getUKTime(){
  var UKtime = new Date().getHours() +8
  return UKtime
}


function discountTicket(x){
  var ticketPrice = x - (x * 0.20)
  return ticketPrice
}

function tweetReply(x){
  var edTweet = "Hey " + x + ", thanks so much for the support! I really appreciate it!"
  return edTweet
}