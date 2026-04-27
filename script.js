function setupMobileMenu() {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (!menuButton || !nav) return;

  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

function setupNavigation() {
  const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
  const nav = document.querySelector(".site-nav");
  const menuButton = document.querySelector(".menu-toggle");
  if (!navLinks.length) return;

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId) return;

      const targetSection = document.querySelector(targetId);
      if (!targetSection) return;

      event.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth" });

      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");

      if (nav && nav.classList.contains("open")) {
        nav.classList.remove("open");
        if (menuButton) menuButton.setAttribute("aria-expanded", "false");
      }
    });
  });
}

function setupProjectsFilter() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");
  if (!buttons.length || !cards.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      if (!filter) return;

      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      cards.forEach((card) => {
        const category = card.dataset.category;
        const shouldShow = filter === "all" || category === filter;
        card.style.display = shouldShow ? "" : "none";
      });
    });
  });
}

function setupContactFormValidation() {
  const contactSection = document.querySelector("#contact");
  const form = contactSection ? contactSection.querySelector("form") : null;
  if (!form) return;

  const requiredFields = [
    { id: "nom", message: "Le nom est requis." },
    { id: "email", message: "L'email est requis." },
    { id: "message", message: "Le message est requis." },
  ];

  function clearErrors() {
    form.querySelectorAll(".form-error").forEach((error) => error.remove());
  }

  function showError(field, message) {
    const existingError = field.parentElement.querySelector(".form-error");
    if (existingError) existingError.remove();
    const error = document.createElement("p");
    error.className = "form-error";
    error.textContent = message;
    field.parentElement.appendChild(error);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();

    let isValid = true;

    requiredFields.forEach(({ id, message }) => {
      const field = form.querySelector(`#${id}`);
      if (!field) return;
      if (field.value.trim() === "") {
        isValid = false;
        showError(field, message);
      }
    });

    const emailField = form.querySelector("#email");
    if (emailField && emailField.value.trim() && !isValidEmail(emailField.value.trim())) {
      isValid = false;
      showError(emailField, "L'adresse email n'est pas valide.");
    }

    if (isValid) {
      const successDiv = document.createElement("div");
      successDiv.className = "form-success";
      successDiv.innerHTML = `
        <p><strong>Message envoyé ✓</strong></p>
        <p>Merci pour votre message. Nous vous répondrons rapidement.</p>
      `;
      contactSection.innerHTML = "";
      contactSection.appendChild(successDiv);
    }
  });
}

function init() {
  setupMobileMenu();
  setupNavigation();
  setupProjectsFilter();
  setupContactFormValidation();
}

document.addEventListener("DOMContentLoaded", init);
