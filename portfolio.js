// JavaScript for toggling the navbar on mobile view
const menuIcon = document.getElementById('menu-icon');
const navbarLinks = document.querySelector('.navbar-links');

menuIcon.addEventListener('click', () => {
    navbarLinks.classList.toggle('open');
});

/**********search***********/
// JavaScript to handle search functionality
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission to refresh the page

    // Get the search term entered by the user
    var searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

    var pages = {
        "home": "home.html",
        "about": "about.html",
        "skills": "skills.html"
    };
    
    if (pages[searchTerm]) {
        window.location.href = pages[searchTerm];  // Redirect based on the search term
    } else {
        alert("Page not found!");
    }
    
    // Clear the search input after submission (optional)
    document.getElementById('searchInput').value = '';
});

// skill 
document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll('.skill-bar');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-skill-width');
                skillBar.style.width = width;  // Set the width to the target value
                skillBar.style.opacity = '1';  // Make the skill bar visible
                observer.unobserve(skillBar);  // Stop observing after animation
            }
        });
    }, { threshold: 0.5 });  // Trigger when 50% of the element is visible

    skillBars.forEach(skillBar => {
        observer.observe(skillBar);
    });
});

/********resume page ****/
    // Get the button and the resume container
    const showResumeBtn = document.getElementById('showResumeBtn');
    const resumeContainer = document.getElementById('resumeContainer');

    // Toggle visibility of the resume when the button is clicked
    showResumeBtn.addEventListener('click', function() {
        if (resumeContainer.style.display === 'none') {
            resumeContainer.style.display = 'block';
            showResumeBtn.textContent = 'Hide My Resume'; // Change button text
        } else {
            resumeContainer.style.display = 'none';
            showResumeBtn.textContent = 'Show My Resume'; // Revert button text
        }
    }); 

    /**************project page **************/ 
    AOS.init({
        duration: 1000,    // Animation duration (in ms)
        offset: 200,       // Animation starts when element is 200px away from the viewport
        easing: 'ease-in-out',  // Animation easing function
        once: true         // Ensures animations happen once (not repeated on scroll)
    });

    function project1()
    {
        alert('hello');
    }

    function project2()
    {
        alert('project2');
    }

    function project3()
    {
        alert('project3');
    }


    /********text sliding effect js *****/





