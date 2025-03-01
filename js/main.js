const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    if (scroller.dataset.animated) return;
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", "true");
      duplicatedItem.setAttribute("role", "presentation");
      scrollerInner.appendChild(duplicatedItem);
    });

    // **Pause scrolling on hover**
    scrollerInner.addEventListener("mouseenter", () => {
      scrollerInner.style.animationPlayState = "paused"; // Pause scrolling
    });

    scrollerInner.addEventListener("mouseleave", () => {
      scrollerInner.style.animationPlayState = "running"; // Resume scrolling
    });
  });
}
