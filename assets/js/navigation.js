(() => {
    const toggle = document.querySelector(".nav-toggle");
    const navigation = document.querySelector("#primary-navigation");
    if (!toggle || !navigation) return;

    const mobileViewport = window.matchMedia("(max-width: 48rem)");

    const closeMenu = () => {
        navigation.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
    };

    const syncViewport = () => {
        toggle.hidden = !mobileViewport.matches;
        closeMenu();
    };

    toggle.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    navigation.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navigation.classList.contains("is-open")) {
            closeMenu();
            toggle.focus();
        }
    });

    mobileViewport.addEventListener("change", syncViewport);
    syncViewport();
})();
