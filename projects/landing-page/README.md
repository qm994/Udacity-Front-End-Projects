# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

### 1. How do I create the navigation menu?

The function is called：`createNavBarUrls`
The logic behind is: I alway query how many many section elements are in the page now. Then use the for loop to create the the navigation menu based on the length

### 2. Style the links and smooth scroll

For each a tag element I always use a for loop to add a class name called `menu__link`. Also for the smooth scroll I firstly tried the method  `scrollIntoView` but its wasnt working which I believe it wass becasue the chrome compatibility. Then I directly add the `scroll-behavior: smooth` in css file.

### 3. Set up the active class for a tags

Also used the for loop to loop over every a element and add a eventListener for each of them. So when the  `a` is  `clicked`, the a tag will add a new active class called `highLight`

#### 4. Highlight the section when scroll manually

Used the forEach method for all section elements add a eventListener `mouseover` and set up the style; Also remove the event listener when `mouseleave`.