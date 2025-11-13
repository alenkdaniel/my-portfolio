const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
const closeIcon = document.getElementById("close-icon");

// Toggle visibility
const toggleMenu = (show) => {
  mobileMenu.classList.toggle("hidden", !show);
  menuIcon.classList.toggle("hidden", show);
};

menuIcon.addEventListener("click", () => toggleMenu(true));
closeIcon.addEventListener("click", () => toggleMenu(false));

// Auto-close on link click
mobileMenu.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => toggleMenu(false))
);

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceId = "service_8rxccba";
  const templateId = "template_ucvcttr";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your Message send Successfully");
    })
    .catch((err) => console.log(err));
}
