// Scroll to top functionality
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Show/hide scroll to top button based on scroll position
window.onscroll = function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.classList.add("visible");
    } else {
        scrollToTopBtn.classList.remove("visible");
    }
};

// Side navigation functionality
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.querySelector("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector("main").style.marginLeft = "0";
}

// Close sidenav when clicking outside of it
document.addEventListener('click', function(event) {
    const sidenav = document.getElementById('mySidenav');
    const openbtn = document.querySelector('.openbtn');
    
    if (sidenav.style.width === '250px' && 
        !sidenav.contains(event.target) && 
        !openbtn.contains(event.target)) {
        closeNav();
    }
});

// Close sidenav on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeNav();
    }
});
