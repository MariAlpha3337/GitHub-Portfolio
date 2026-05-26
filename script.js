// =============================
// LOADER
// =============================

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 3000);

});

// =============================
// SMOOTH SCROLL
// =============================

function scrollToProjects() {

    document.getElementById("projects")
        .scrollIntoView({
            behavior: "smooth"
        });

}
function openCaseStudy() {

    document
        .getElementById("caseStudy")
        .classList.add("active");
}

function closeCaseStudy() {

    document
        .getElementById("caseStudy")
        .classList.remove("active");
}
// =============================
// SCROLL REVEAL
// =============================

const revealElements =
    document.querySelectorAll(
        ".fade"
    );

const revealObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

revealElements.forEach(el => {

    revealObserver.observe(el);

});

// =============================
// CURSOR
// =============================

const cursor =
    document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;

let posX = 0;
let posY = 0;

document.addEventListener(
    "mousemove",
    e => {

        mouseX = e.clientX;
        mouseY = e.clientY;

    }
);

function animateCursor() {

    posX += (mouseX - posX) * 0.15;
    posY += (mouseY - posY) * 0.15;

    cursor.style.transform =
        `translate3d(${posX}px, ${posY}px,0)`;

    requestAnimationFrame(
        animateCursor
    );

}

animateCursor();


// =============================
// CURSOR HOVER EFFECT
// =============================

const hoverElements =
    document.querySelectorAll(
        "a, button, .project-card, .skill-box"
    );

hoverElements.forEach(el => {

    el.addEventListener("mouseenter", () => {

        cursor.style.width = "50px";
        cursor.style.height = "50px";

        cursor.style.background =
            "rgba(0,209,255,0.15)";

    });

    el.addEventListener("mouseleave", () => {

        cursor.style.width = "20px";
        cursor.style.height = "20px";

        cursor.style.background = "transparent";

    });

});

const projectImages = [

    "Images/project1.png",
    "Images/project2.png",
    "Images/project3.png",
    "Images/project4.png",
    "Images/project4.png"

];

let currentSlide = 0;

const slideImage = document.getElementById("projectSlide");

document.querySelector(".next").addEventListener("click", () => {

    currentSlide++;

    if (currentSlide >= projectImages.length) {

        currentSlide = 0;
    }

    slideImage.src = projectImages[currentSlide];
});

document.querySelector(".prev").addEventListener("click", () => {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide = projectImages.length - 1;
    }

    slideImage.src = projectImages[currentSlide];
});
// =============================
// PARTICLES
// =============================

const canvas =
    document.createElement("canvas");

document.getElementById("particles")
    .appendChild(canvas);

const ctx =
    canvas.getContext("2d");

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);

let particles = [];

for (let i = 0; i < 100; i++) {

    particles.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,

        size: Math.random() * 2 + 1

    });

}

function drawParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(p => {

        p.x += p.vx;
        p.y += p.vy;

        if (
            p.x < 0 ||
            p.x > canvas.width
        ) p.vx *= -1;

        if (
            p.y < 0 ||
            p.y > canvas.height
        ) p.vy *= -1;

        const gradient =
            ctx.createRadialGradient(
                p.x,
                p.y,
                0,
                p.x,
                p.y,
                p.size * 4
            );

        gradient.addColorStop(0, "#00D1FF");
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI * 2
        );

        ctx.fill();

    });

    requestAnimationFrame(
        drawParticles
    );

}

drawParticles();

// =============================
// PARALLAX
// =============================

document.addEventListener(
    "mousemove",
    e => {

        const x =
            (e.clientX /
                window.innerWidth - 0.5) * 20;

        const y =
            (e.clientY /
                window.innerHeight - 0.5) * 20;

        document.querySelector(
            ".hero-content"
        ).style.transform =

            `translate(${x}px,${y}px)`;

        document.querySelector(
            ".hero-image img"
        ).style.transform =

            `translate(${-x}px,${-y}px)
        scale(1.02)`;

    }
);

// =============================
// NAVBAR SCROLL EFFECT
// =============================

const navbar =
    document.querySelector(".navbar");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(5,8,22,0.75)";

            navbar.style.backdropFilter =
                "blur(20px)";

            navbar.style.border =
                "1px solid rgba(255,255,255,0.08)";

        }

        else {

            navbar.style.background =
                "rgba(255,255,255,0.04)";
        }

    }
);