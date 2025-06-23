window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + 150; // Adjusted offset for better detection

  let currentSectionId = null;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      currentSectionId = id;
    }
  });

  // Special case: if scrolled to bottom of page, force last section active (like Contact)
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    currentSectionId = sections[sections.length - 1].getAttribute("id");
  }

  if (currentSectionId) {
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.classList.remove("active");
    });
    const activeLink = document.querySelector(
      `.nav-links a[href*="${currentSectionId}"]`
    );
    if (activeLink) activeLink.classList.add("active");
  }
});
