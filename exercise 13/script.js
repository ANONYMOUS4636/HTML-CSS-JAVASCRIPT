function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  // Finish this function
  let cont = document.querySelector(".container");
  document.querySelector(".image").setAttribute("src", thumbnail);
  document.querySelector(".duration").textContent = duration;
}

createCard(
  "Introduction to Backend | Sigma Web Dev video #2",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
