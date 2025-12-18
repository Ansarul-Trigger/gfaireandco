// Get current page path
const currentPath = window.location.pathname;

// Select all nav links
document.querySelectorAll('.nav ul li a').forEach(link => {
    if(link.getAttribute('href') === currentPath){
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Do the same for mobile menu
document.querySelectorAll('.mobile-nav ul li a').forEach(link => {
    if(link.getAttribute('href') === currentPath){
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});


// Desktop dropdown (hover only) - NO CLICK
if (window.innerWidth > 900) {
    document.querySelectorAll(".nav .dropdown > a").forEach((item) => {
        item.addEventListener("click", (e) => e.preventDefault());
    });
}

document.addEventListener("DOMContentLoaded", function () {

    // Desktop: allow Services link to work
    const serviceLink = document.querySelector(".nav .dropdown > a");

    serviceLink.addEventListener("click", function (e) {
        // Let normal navigation happen
        window.location.href = this.href;
    });

});


// Mobile menu button toggle
const mobileBtn = document.querySelector(".mobile-menu-btn");
const mobileNav = document.querySelector(".mobile-nav");

mobileBtn.addEventListener("click", () => {
    mobileNav.style.display =
        mobileNav.style.display === "flex" ? "none" : "flex";
});

// Mobile submenu toggle
function setupMobileSubmenus() {
    document.querySelectorAll(".mobile-nav .dropdown > a").forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;

            // Toggle submenu
            if (submenu.style.display === "block") {
                submenu.style.display = "none";
            } else {
                submenu.style.display = "block";
            }
        });
    });
}

// Only run if mobile
if (window.innerWidth <= 900) {
    setupMobileSubmenus();
}

// Optional: re-run on window resize to ensure mobile submenu always works
window.addEventListener("resize", () => {
    if (window.innerWidth <= 900) {
        setupMobileSubmenus();
    }
});

// hero section

window.addEventListener("load", () => {
    document.querySelector(".hero-content").style.opacity = 1;
});


/* ============================= */
/* STICKY HEADER ON SCROLL */
/* ============================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});







// testimonial section 

  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.querySelector('.dots');
  const prevBtn = document.querySelector('.arrow.left');
  const nextBtn = document.querySelector('.arrow.right');

  let index = 0;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('span');

  function showSlide(i) {
    slides[index].classList.remove('active');
    dots[index].classList.remove('active');
    index = (i + slides.length) % slides.length;
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }

  prevBtn.onclick = () => showSlide(index - 1);
  nextBtn.onclick = () => showSlide(index + 1);


// lightbox section
 Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: false,
    Toolbar: true,
  });


//   contact from


document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form submitted successfully!");
    this.reset();
});




