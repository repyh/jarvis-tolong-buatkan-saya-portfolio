(() => {
    const yearSpan = document.querySelector("[data-current-year]");
    if (yearSpan) {
        yearSpan.textContent = String(new Date().getFullYear());
    }

    const reviews = [
        {
            quote: "Belajar game dev aja lah ti, biar aku ga ada saingan di web",
            name: "B. Simamora",
            role: "Partisipan Gemastik CTF 2025",
            avatar: "B"
        }
    ];

    let currentReviewIndex = 0;
    const quoteEl = document.getElementById("review-quote-text");
    const nameEl = document.getElementById("review-author-name");
    const roleEl = document.getElementById("review-author-role");
    const avatarEl = document.getElementById("review-avatar-text");
    const prevBtn = document.getElementById("review-prev-btn");
    const nextBtn = document.getElementById("review-next-btn");
    const carouselNav = document.querySelector(".carousel-nav");

    const renderReview = (index) => {
        if (!quoteEl || !nameEl || !roleEl || !avatarEl) return;
        const review = reviews[index];
        quoteEl.innerHTML = `&ldquo;${review.quote}&rdquo;`;
        nameEl.textContent = review.name;
        roleEl.textContent = review.role;
        avatarEl.textContent = review.avatar;
    };

    if (reviews.length <= 1) {
        if (carouselNav) {
            carouselNav.style.display = "none";
        }
    } else if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => {
            currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
            renderReview(currentReviewIndex);
        });

        nextBtn.addEventListener("click", () => {
            currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
            renderReview(currentReviewIndex);
        });
    }
})();
