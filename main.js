/* main.js – shared across all Eagle Advocates pages */

// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks  = document.querySelector(".nav-links");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => navLinks.classList.toggle("active"));
  // close on link click (mobile)
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("active"));
  });
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("active");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// WhatsApp floating button
(function () {
  const phone = "91XXXXXXXXXX"; // ← replace with real number
  const btn = document.createElement("a");
  btn.href = `https://wa.me/${phone}?text=Hello%2C%20I%20need%20legal%20consultation.`;
  btn.target = "_blank";
  btn.rel = "noopener noreferrer";
  btn.setAttribute("aria-label", "Chat on WhatsApp");
  btn.style.cssText = `
    position:fixed; bottom:24px; right:24px; z-index:9999;
    width:56px; height:56px; border-radius:50%;
    background:#25d366; display:flex; align-items:center;
    justify-content:center; box-shadow:0 4px 16px rgba(0,0,0,0.25);
    transition:transform .2s ease;
  `;
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M20.52 3.48A11.93 11.93 0 0012.01 0C5.38 0 .01 5.37.01 12a11.9 11.9 0 001.6 6L0 24l6.3-1.65A11.94 11.94 0 0012.01 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.49-8.52zM12.01 22a9.93 9.93 0 01-5.06-1.38l-.36-.22-3.74.98 1-3.64-.23-.38A9.93 9.93 0 012.01 12c0-5.51 4.48-10 10-10s10 4.49 10 10-4.49 10-10 10zm5.45-7.6c-.3-.15-1.76-.87-2.03-.97s-.47-.15-.67.15-.77.97-.94 1.16-.35.22-.65.07a8.14 8.14 0 01-2.4-1.48 9.07 9.07 0 01-1.66-2.07c-.17-.3 0-.46.13-.6s.3-.35.45-.52.2-.3.3-.5.05-.37-.02-.52-.67-1.61-.91-2.2c-.24-.58-.49-.5-.67-.51H7.6c-.2 0-.52.07-.79.37s-1.03 1.01-1.03 2.46 1.06 2.85 1.2 3.05 2.07 3.17 5.02 4.44c.7.3 1.25.48 1.67.62.7.22 1.34.19 1.84.11.56-.08 1.73-.71 1.97-1.39s.24-1.27.17-1.39-.27-.22-.57-.37z"/></svg>`;
  btn.onmouseover = () => (btn.style.transform = "scale(1.1)");
  btn.onmouseout  = () => (btn.style.transform = "scale(1)");
  document.body.appendChild(btn);
})();
