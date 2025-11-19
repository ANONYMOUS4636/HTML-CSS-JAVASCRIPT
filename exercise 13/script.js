
let img=document.querySelector(".thumbnail")
let duration1=document.querySelector(".duration")
let h1=document.querySelector(".title")
let channelname=document.querySelector(".cName")
let views1=document.querySelector(".views")
let old=document.querySelector(".monthOld")






function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  // Finish this function
  img.src=thumbnail
  duration1.innerHTML=duration
  h1.innerHTML=title
  channelname.innerHTML=cName
  views1.innerHTML=views
  old.innerHTML=monthsOld + " months ago"
}

// createCard(
//   "Introduction to Frontend | Sigma Web Dev video #2",
//   "CodeWithHarry",
//   560000,
//   7,
//   "31:22",
//   "/hqdefault.webp"
// );
