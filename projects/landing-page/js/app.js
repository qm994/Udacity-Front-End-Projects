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

var allSectionElements = document.querySelectorAll('section');
var allNavbarLists = document.querySelector(".navbar__menu");

const sectionParaEle = document.querySelector(".landing__container").
    querySelector("p");
const sectionPara1 = sectionParaEle.textContent;
const sectionPara2 = sectionParaEle.nextElementSibling.textContent;

var sectionCount = document.getElementsByTagName("section").length;
//console.log(sectionCount);

var mainTag = document.getElementsByTagName("section");
/* spread operator will transform the HTML Collection as an array */
var transfer = [...mainTag];



/* 1. The number of <li> and <a> inside ul is decided by the number of sections */
//console.log([...allSectionElements]);

let sectionsArray = [...allSectionElements];
createNavBarUls = function (){
    let tempContainer = document.createDocumentFragment();
    for(let i = 0; i < sectionsArray.length; i++){
        let navId = sectionsArray[i].id;
        let newLi = document.createElement("li");
        let newA = document.createElement("a");
        newA.setAttribute("class", "scroll");
        newA.setAttribute("href", `#${navId}`);
        newA.textContent = `Scroll to ${navId}`;

        newLi.appendChild(newA);
        tempContainer.append(newLi); 
    }
    allNavbarLists.append(tempContainer);
 };
 createNavBarUls();

 /* 2. The scrollIntoVieww is not working now?? So I added the css to the scroill-behavior */

 let allLinks = document.querySelectorAll("a");
 for(let link of allLinks){
     link.classList = "menu__link";
     let selectedSec = document.querySelector(`${link.hash}`);
     selectedSec.scrollIntoView(false);
        // {
        //  behavior: "smooth",
        //  block: "center"
        // });
 }

// createSections = function(){
//     let tempContainer = document.createDocumentFragment();
//     let newSection = document.createElement("section");
//     let newSectionDiv = document.createElement("div");
    
//     newSection.setAttribute("id", `section${sectionCount}`);
//     newSection.setAttribute("data-nav", `Section ${sectionCount}`);

//     newSectionDiv.setAttribute("class", "landing__container");
//     newSectionDiv.insertAdjacentHTML("afterbegin", 
//         `<h2>Section ${sectionCount}</h2>
//          <p>${sectionPara1}</p>
//          <p>${sectionPara2}</p>`);
//     newSection.appendChild(newSectionDiv);
//     tempContainer.appendChild(newSection);
//     //transfer.append(tempContainer);
//     document.querySelector("main").appendChild(tempContainer);
//  };

// //createSections();

// document.getElementById("addSections").addEventListener('click', function(){
//     sectionCount += 1;
//     createSections();
// });


/* 3. add active class: highLight & style when the nav link jumps to the URL */
for(let link of allLinks){
    link.addEventListener("click",
    function(){
        document.querySelector(`${link.hash}`).classList = "highLight";
    });
}

/* 4. Add style when mouse hover it */ 


allSectionElements.forEach(
    function(section){
        section.addEventListener("mouseover",
        function(){
            section.setAttribute("style", "font-style:italic; border: 2px solid red");
        });

        section.addEventListener("mouseleave",
        function(){
            section.setAttribute("style", "font-style:normal;");
        });
    }
);