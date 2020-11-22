/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const all_sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 *
 */


/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
let ul_fraggment = document.createDocumentFragment()
all_sections.forEach((section) => {
    let value = section.getAttribute("data-nav");
    let new_Li = document.createElement("li");
    new_Li.classList.add("menu__link");
    let new_a = document.createElement("a");
    new_a.addEventListener('click', function () {
        section.scrollIntoView({behavior: 'smooth'});
    });
    let value_node = document.createTextNode(value);
    new_a.appendChild(value_node);
    new_Li.appendChild(new_a);
    ul_fraggment.appendChild(new_Li);
});
document.getElementById("navbar__list").appendChild(ul_fraggment);
//
//
//
//
//
//

function active_link(active_section) {
    let links = document.querySelectorAll('a');
    let sec_nav = active_section.getAttribute('data-nav');
    links.forEach((link) => {
        link.parentNode.classList.remove('active_link')
        link.classList.remove('active_link')

        if (link.textContent == sec_nav) {
            link.parentNode.classList.add('active_link')
            link.classList.add('active_link')
        }
    })

}

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', function () {
    all_sections.forEach((section) => {
        section.classList.remove('your-active-class');
        let sec_view = section.getBoundingClientRect();
        if (sec_view.top >= 0 && sec_view.top < 100) {
            section.classList.add('your-active-class');
            active_link(section);

        }
    })


    //


})


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu 

// Scroll to section on link click

// Set sections as active


