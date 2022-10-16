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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

//global navigation variable
const navList = document.getElementById("navbar__list")
//global sections variable
const sections = Array.from(document.getElementsByTagName("section"))


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// There is no helper functions 

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/   

// build the nav

const CreateNav = () => {
    let navItems='';
    //loop over sections and add every item to navItems
    sections.forEach(section => {
        navItems += `<li> <a class="menu__link" href="#${section.id}" data-nav="${section.id}">${section.dataset.nav}</a></li>`   
    });

    // append navItemlist to the navigation 
    navList.innerHTML = navItems

}

// Add class 'active' to section when near top of viewport
 const ActiveClass = () => {

    //loop through sections if a section is in the viewport it turns to active state
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        const sectionHeight = section.getBoundingClientRect().height
        if( sectionTop <= 250 && sectionTop >= (sectionHeight) * -1){
            section.classList.add("your-active-class")
        }
        else{
            section.classList.remove("your-active-class")
        }
    })


}



// Scroll to anchor ID using scrollTO event

const scrollToID = () => {
 // add click event to navList 
    navList.addEventListener('click' , (e) => {
       e.preventDefault()
        // when navItems clicked get its section coordinates and to scroll to it
        if(e.target.dataset.nav){
            
            const elementPostion = document.getElementById(`${e.target.dataset.nav}`).offsetTop
            console.log(elementPostion)
            const offestPostion = elementPostion - 180  
            window.scrollTo({top: offestPostion,
                             behavior: "smooth"})

        }
    })



 }


// /**
//  * End Main Functions
//  * Begin Events
//  * 
// */

// // Build menu 
 CreateNav()

// Scroll to section on link click
scrollToID()

// Set sections as active
document.addEventListener('scroll' , ActiveClass)

