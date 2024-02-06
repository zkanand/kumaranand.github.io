 // Function to force cache-free reload
 function forceCacheFreeReload() {
    const currentUrl = window.location.href;
    const timestamp = new Date().getTime();
    const cacheFreeUrl = currentUrl + (currentUrl.includes('?') ? '&' : '?') + '_=' + timestamp;
    window.location.href = cacheFreeUrl;
  }

  // Listen for the beforeunload event to trigger cache-free reload
  window.addEventListener('beforeunload', forceCacheFreeReload);

  // Listen for the popstate event (back button) to trigger cache-free reload
  window.addEventListener('popstate', function(event) {
    forceCacheFreeReload();
  });

// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
};

// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
};
//Typing Speeed
// Array of professions
let professions = ["Software Developer", "Backend Developer", "Frontend Developer", "Web Developer",];

// Prepend "A common" to each profession
let stringsWithCommon = professions.map(profession => "A "+"" + profession);

// Initialize Typed.js with the modified strings
let typed = new Typed(".text", {
    strings: stringsWithCommon,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
