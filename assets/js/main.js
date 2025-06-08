document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".accordion-btn");
  const panels = document.querySelectorAll(".accordion-panel");
  const toggleAllBtn = document.getElementById("toggle-all-button");
  
  function updateToggleAllLabel() {
    const allOpen = Array.from(panels).every(panel => panel.style.maxHeight);
    toggleAllBtn.textContent = allOpen ? "COLLAPSE ALL" : "EXPAND ALL";
  }

  // Individual toggle
  buttons.forEach((btn) => {
    btn.classList.remove("open"); // make sure it's reset
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const panel = btn.closest(".post").querySelector(".accordion-panel");
      const isOpen = panel.style.maxHeight;

      if (isOpen) {
        panel.style.maxHeight = null;
        btn.classList.remove("open");
        updateToggleAllLabel();
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        btn.classList.add("open");
        updateToggleAllLabel();
      }
    });
  });

  // Expand/collapse all
  let expanded = false;
  toggleAllBtn.addEventListener("click", () => {
    expanded = !Array.from(panels).every(panel => panel.style.maxHeight);
    panels.forEach((panel, i) => {
      const btn = buttons[i];
      if (expanded) {
        panel.style.maxHeight = panel.scrollHeight + "px";
        btn.classList.add("open");
      } else {
        panel.style.maxHeight = null;
        btn.classList.remove("open");
      }
    });
    toggleAllBtn.textContent = expanded ? "COLLAPSE ALL" : "EXPAND ALL";
  });
});
