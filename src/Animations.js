import gsap from "gsap";

// Closes menu BG
export const closeMenuBG = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.07,
    },
  });
};

// Waits a second before hiding the menu
export const closeMenu = (node) => {
  gsap.to(node, {
    duration: 1,
    css: { display: "none" },
  });
};

// Opens menu immediately
export const openMenu = (node) => {
  gsap.to(node, {
    duration: 0,
    css: { display: "block" },
  });
};

// Opens menu BG
export const openMenuBG = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0,
    opacity: 1,
    height: "100%",
  });
};

export const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1,
    },
  });
};

// Links animate up one by one
export const staggerText = (node1, node2, node3) => {
  gsap.from([node1, node2, node3], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
    },
  });
};

// Animate info node to fade in up
export const fadeInUp = (node) => {
  gsap.from(node, {
    y: 60,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: "power3.inOut",
  });
};

// Gets called when mouse hover over city
export const handleCity = (node, cityImage) => {
  gsap.to(node, {
    duration: 0,
    background: `url(${cityImage}) center center`,
  });
  gsap.to(node, {
    duration: 0.4,
    opacity: 1,
    ease: "power3.inOut",
  });
  gsap.from(node, {
    duration: 0.4,
    skewY: 2,
    transformOrigin: "right top",
  });
};

// Gets called when mouse no longer hovering over a city
export const handleCityReturn = (node) => {
  gsap.to(node, {
    duration: 0.4,
    opacity: 0,
  });
};

// Gets called when hovering over page links
export const handleHover = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: "power3.inOut",
  });
};

// Gets called when no longer hovering over page links
export const handleHoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: "power3.inOut",
  });
};
