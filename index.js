document.addEventListener("DOMContentLoaded", () => {
  let homeBtn = document.getElementById("about-me")
  // All of these click handlers for the nav links are nearly identical!
  // Could you refactor so that you use a single click listener for each of these nav buttons?
  // Hint: use the event object that is passed to an event listener to figure out which nav button was clicked!
  homeBtn.addEventListener("click", () => {
    let homeIcon = document.getElementById("scroll")
    homeIcon.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline:"center",
    });
  })

  let prjBtn = document.getElementById("projects")
  prjBtn.addEventListener("click", () => {
    let prjIcon = document.getElementById("scrolls")
    prjIcon.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline:"center",
    });
  })

  let contactBtn = document.getElementById("contact")
  contactBtn.addEventListener("click", () => {
    let contactIcon = document.getElementById("scrolled")
    contactIcon.scrollIntoView({
      behavior:"smooth",
      block: "center",
      inline:"center"
    })
  })

  let skillsBtn = document.getElementById("skills")
  skillsBtn.addEventListener("click", () => {
    let skillsIcon = document.getElementById("coursel")
    skillsIcon.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline:"center",
    });
  })
})

// Could you choose a function name that tells me what this does?
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// same here
function laFunction() {
  var y = document.getElementById("laDIV");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}

// and here
function miFunction() {
  var z = document.getElementById("miDIV");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}
