/* ==========================================================
   Happy Birthday Tanu ❤️
   Main Script
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       PASSWORD PAGE
    ====================================================== */

    const passwordInput = document.getElementById("password");
    const unlockButton = document.getElementById("unlockBtn");
    const error = document.getElementById("error");

    if (unlockButton && passwordInput) {

        unlockButton.addEventListener("click", checkPassword);

        passwordInput.addEventListener("keydown", function (e) {

            if (e.key === "Enter") {

                checkPassword();

            }

        });

    }

    function checkPassword() {

        if (passwordInput.value.trim() === "HarshTripathi") {

            sessionStorage.setItem("birthdayUnlocked", "true");

            window.location.href = "home.html";

        } else {

            error.textContent = "Wrong password ❤️";

            passwordInput.value = "";

        }

    }

    /* ======================================================
       PAGE PROTECTION
    ====================================================== */

    const page = window.location.pathname.split("/").pop();

    if (
        page !== "index.html" &&
        page !== "" &&
        !sessionStorage.getItem("birthdayUnlocked")
    ) {

        window.location.href = "index.html";

    }

    /* ======================================================
       PAGE FADE
    ====================================================== */

    document.body.style.opacity = "0";

    document.body.style.transition = "opacity .8s ease";

    requestAnimationFrame(() => {

        document.body.style.opacity = "1";

    });

    /* ======================================================
       NAVIGATION FADE
    ====================================================== */

    document.querySelectorAll("a").forEach(link => {

        const href = link.getAttribute("href");

        if (!href) return;

        if (!href.endsWith(".html")) return;

        link.addEventListener("click", function (e) {

            e.preventDefault();

            document.body.style.opacity = "0";

            setTimeout(() => {

                window.location = href;

            }, 400);

        });

    });

    /* ======================================================
       SCROLL REVEAL
    ====================================================== */

    const revealItems = document.querySelectorAll(".timeline-item");

    if (revealItems.length) {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.15
        });

        revealItems.forEach(item => {

            item.style.opacity = "0";

            item.style.transform = "translateY(50px)";

            item.style.transition = ".8s ease";

            observer.observe(item);

        });

    }

    /* ======================================================
       GALLERY
    ====================================================== */

    const galleryImages = document.querySelectorAll(".gallery img");

    const lightbox = document.getElementById("lightbox");

    if (galleryImages.length && lightbox) {

        const lightboxImage = lightbox.querySelector("img");

        galleryImages.forEach(image => {

            image.addEventListener("click", () => {

                lightbox.classList.add("active");

                lightboxImage.src = image.src;

                document.body.style.overflow = "hidden";

            });

        });

        lightbox.addEventListener("click", () => {

            lightbox.classList.remove("active");

            document.body.style.overflow = "auto";

        });

        document.addEventListener("keydown", function (e) {

            if (e.key === "Escape") {

                lightbox.classList.remove("active");

                document.body.style.overflow = "auto";

            }

        });

    }

    /* ======================================================
       MUSIC
    ====================================================== */

    const music = document.getElementById("bgMusic");

    const musicButton = document.getElementById("playMusic");

    if (music && musicButton) {

        musicButton.addEventListener("click", () => {

            music.currentTime = 0;

            music.play();

            musicButton.innerHTML = "❤️ Playing...";

            musicButton.disabled = true;

        });

    }

});