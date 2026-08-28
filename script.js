// hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});


// theme toggle
const themeToggle = document.querySelector('.theme-toggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('dark-mode');
}
else {
    document.body.classList.add('dark-mode');
    }

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

const copyBtn = document.querySelector('.copy-email');

copyBtn.addEventListener('click', function() {
    const email = copyBtn.dataset.email;

    navigator.clipboard.writeText(email).then(function() {
        copyBtn.classList.add('copied');

        setTimeout(function() {
            copyBtn.classList.remove('copied');
        }, 2000);
    });
});