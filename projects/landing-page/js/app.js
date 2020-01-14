nsoo/**
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

const allSectionElements = document.querySelectorAll('section');
// console.log(allSectionElements);

const allNavbarLists = document.querySelector(".navbar__menu");
// console.log(allNavbarLists);

const sectionParaEle = document.querySelector(".landing__container").
    querySelector("p");
const sectionPara1 = sectionParaEle.textContent;
const sectionPara2 = sectionParaEle.nextElementSibling.textContent;

/** 
 * total added number is (num-4) + 1 
 * So minmum num is 4
 * */

let tempContainer = document.createDocumentFragment();
addList = function (num){
    for(let i = 4; i <= num; i++){

        const paraElement = document.createElement("p")
        
        const newSection = document.createElement('section').
            setAttribute("id", `section${i}`);
        newSection.appendChild(paraElement).textContent(sectionPara1);
        newSection.appendChild(paraElement).textContent(sectionPara2);
        tempContainer.appendChild(newSection);
    }
    return(tempContainer);
};

// allSectionElements.appendChild.addList(4);
console.log(addList(4));


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


// createListInNavBar = function(className){
//     let navElement = document.querySelector(className);
// };

// console.log(
//     createListInNavBar("navbar_menu")
// );


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


