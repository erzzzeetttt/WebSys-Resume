const toggleBtn = document.getElementById("toggleMoreBtn");
const moreAbout = document.getElementById("moreAbout");

if (toggleBtn && moreAbout) {
  toggleBtn.addEventListener("click", function () {
    if (moreAbout.style.display === "block") {
      moreAbout.style.display = "none";
      this.textContent = "View More";
    } else {
      moreAbout.style.display = "block";
      this.textContent = "View Less";
    }
  });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("formFeedback");

    if (name === "" || email === "" || message === "") {
      feedback.textContent = "Please fill out all fields before sending.";
      feedback.style.color = "red";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      feedback.textContent = "Please enter a valid email address.";
      feedback.style.color = "red";
      return;
    }

    feedback.textContent = "Message sent successfully!";
    feedback.style.color = "green";
    this.reset();
  });
}

const skills = [
  "Basic Networking Concepts",
  "UI/UX Design Fundamentals",
  "Creativity and Attention to Detail",
  "Data Annotator"
];

const skillsList = document.getElementById("skillsList");

if (skillsList) {
  skillsList.innerHTML = "";

  skills.forEach(function (skill) {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });
}

// jquery 1
$(document).ready(function () {
  $("#themeToggle").on("click", function () {
    $("body").toggleClass("dark-mode");

    if ($("body").hasClass("dark-mode")) {
      $(this).text("Toggle Light Mode");
    } else {
      $(this).text("Toggle Dark Mode");
    }
  });
// jquery 2
  $(".project-item").on("click", function () {
    $(".project-item").removeClass("highlight");
    $(this).addClass("highlight");
  });
});