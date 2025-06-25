window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + 100; // adjust based on navbar height
  const docHeight = document.documentElement.scrollHeight;
  const winHeight = window.innerHeight;
  const bottomThreshold = 50;

  let contactHighlighted = false;

  if (window.scrollY + winHeight >= docHeight - bottomThreshold) {
    document
      .querySelectorAll(".nav-links a")
      .forEach((link) => link.classList.remove("active"));

    const contactLink = [...document.querySelectorAll(".nav-links a")].find(
      (link) => link.getAttribute("href").endsWith("#contact")
    );
    if (contactLink) contactLink.classList.add("active");
    contactHighlighted = true;
  }

  if (!contactHighlighted) {
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        document
          .querySelectorAll(".nav-links a")
          .forEach((link) => link.classList.remove("active"));

        const activeLink = document.querySelector(
          `.nav-links a[href$="#${id}"]`
        );
        if (activeLink) activeLink.classList.add("active");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});
