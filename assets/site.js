(() => {
  "use strict";

  const config = window.BOTD_SITE_CONFIG || {};
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  if (navToggle && nav) {
    const closeNav = () => {
      navToggle.setAttribute("aria-expanded", "false");
      nav.removeAttribute("data-open");
      navToggle.setAttribute("aria-label", "Open navigation");
    };

    navToggle.addEventListener("click", () => {
      const open = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!open));
      if (open) {
        nav.removeAttribute("data-open");
        navToggle.setAttribute("aria-label", "Open navigation");
      } else {
        nav.setAttribute("data-open", "");
        navToggle.setAttribute("aria-label", "Close navigation");
      }
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeNav();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeNav();
    });
  }

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll("[data-support-email]").forEach((node) => {
    const email = config.supportEmail || "support@botdhockey.com";
    node.textContent = email;
    if (node.tagName === "A") node.href = `mailto:${email}`;
  });

  document.querySelectorAll("[data-app-link]").forEach((node) => {
    if (config.appUrl) node.href = config.appUrl;
  });

  document.querySelectorAll("[data-checkout-link]").forEach((node) => {
    if (config.checkoutUrl) node.href = config.checkoutUrl;
  });

  const checkoutMode = config.checkoutMode === "live" ? "live" : "sandbox";
  document.documentElement.dataset.checkoutEnvironment = checkoutMode;
  document.querySelectorAll("[data-checkout-mode]").forEach((node) => {
    node.textContent = checkoutMode === "live" ? "Secure live checkout" : "Stripe sandbox checkout";
  });
  document.querySelectorAll("[data-sandbox-only]").forEach((node) => {
    node.hidden = checkoutMode === "live";
  });
  document.querySelectorAll("[data-live-only]").forEach((node) => {
    node.hidden = checkoutMode !== "live";
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealNodes = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
    revealNodes.forEach((node) => observer.observe(node));
  }

  const header = document.querySelector(".site-header");
  if (header) {
    const syncHeader = () => header.toggleAttribute("data-scrolled", window.scrollY > 16);
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
  }

  document.querySelectorAll("[data-copy-email]").forEach((button) => {
    button.addEventListener("click", async () => {
      const email = config.supportEmail || "support@botdhockey.com";
      try {
        await navigator.clipboard.writeText(email);
        const original = button.textContent;
        button.textContent = "Copied";
        setTimeout(() => { button.textContent = original; }, 1400);
      } catch {
        window.location.href = `mailto:${email}`;
      }
    });
  });
})();
