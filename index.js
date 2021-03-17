document.addEventListener("DOMContentLoaded", () => {
  let homeBtn = document.getElementById("about-me")
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

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function laFunction() {
  var y = document.getElementById("laDIV");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}

function miFunction() {
  var z = document.getElementById("miDIV");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}
