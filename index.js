document.addEventListener("DOMContentLoaded", () => {
  const aboutme = document.querySelector("#aboutme");
  const aboutinfo = document.querySelector("#scroll");
  const projects = document.querySelector("#projects");
  const projectinfo = document.querySelector("#scrolls");
  const skills = document.querySelector("#skills");
  const skillsinfo = document.querySelector("#coursel");
  const contact = document.querySelector("#contact");
  const contactinfo = document.querySelector("#scrolled");

  aboutme.addEventListener("click", (ev) => {
    aboutinfo.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });

  projects.addEventListener("click", () => {
    projectinfo.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });

  skills.addEventListener("click", () => {
    skillsinfo.scrollIntoView();
  });

  contact.addEventListener("click", () => {
    contactinfo.scrollIntoView();
  });
});


function expandAll() {
  var x = document.getElementById("proj");
   var y = document.getElementById("description");
   var z = document.getElementById("aboutMe");
  y.style.display == "none" ? y.style.display = "block" :  y.style.display = "none"
  z.style.display === "none" ? z.style.display = "block": z.style.display = "none";
  x.style.display === "none" ? x.style.display = "block" : x.style.display = "none"
}


