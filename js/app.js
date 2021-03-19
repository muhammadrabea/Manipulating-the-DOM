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
 *creating the nav bar with the nav list and the section
 */
 let sections = document.querySelectorAll('section');
 let myList = document.querySelector('#navbar__list');
 const fragment = document.createDocumentFragment();
 
 
 sections.forEach(section => {
     const nodeList = document.createElement('li');
     const dataNav = section.getAttribute('data-nav');
     const secLink = document.createElement('a');
     const innerText = document.createTextNode(dataNav); /* adding the event listener to the links and the action it should apply */
     secLink.addEventListener('click', () => {
         section.scrollIntoView({
             behavior: 'smooth'
         }); /* applying scroll into view on applying mouse clicks on the links */
     });
     secLink.appendChild(innerText); /* naming the links */
     secLink.classList.add('menu__link'); /* giving them the hover attribute */
     nodeList.appendChild(secLink); /* adding the links to the list */
     fragment.appendChild(nodeList); /* adding the list elements in a fragment for performance */
 });
 
 myList.appendChild(fragment); /* adding the fragments to the ul list */
 
 window.addEventListener('scroll', () => { /* adding an event to append 'active' attribute to sections */
     sections.forEach((item) => {
         const getRect = item.getBoundingClientRect();
         if (getRect.top >= -50 && getRect.top <= 200) { /* detecting the viewport dimensions of the section on the screen */
             sections.forEach((item) => {
                 if (item.classList.contains('active')) { /* check to see if the section is active to remove it */
                     item.classList.remove('active');
                 }
             });
             item.classList.add('active'); /* adding active to the section in case it doesn't have it */
 
             const AllLinks = document.querySelectorAll('a'); /* getting all the links in the list in a const */
             AllLinks.forEach((link) => { /* loopig through the links to add the 'active__link' attribute */
                 link.classList.remove('active__link');
                 if (link.textContent == item.getAttribute('data-nav')) { /*the required condition to add the 'active__link' attribute */
                     link.classList.add('active__link');
                 }
 
             });
 
         }
     });
 });