// GETS & QUERIES
// Header
const nameAndSlogan = document.querySelector('.nameAndSlogan');
const myName = document.querySelector('.name');
const mySlogan = document.querySelector('.slogan');

// Branching (Header -> Nav)
const headerBranchVertical = document.querySelector('.headerBranchVertical');
const headerBranchHorizontal = document.querySelector('.headerBranchHorizontal');
const nav = document.querySelector('nav');



// Pixels to viewports units converter
const pxToViewport = (px, direction) => {
    if (direction === 'height') {
        const heightVH = px * 0.0952;
        return heightVH
    } else if (direction === 'width') {
        const widthVW = px * 0.0595;
        return widthVW
    } else {
        console.log('Please enter a number for px, and width or height for direction')
    }
}



// Initial Animation
// Shrink and reposisions nameAndSlogan
// Draw nav branches
const openNavBranches = () => {
    nameAndSlogan.removeEventListener('click', openNavBranches);
    //nameAndSlogan new style
    nameAndSlogan.classList.add('headerClicked'); // Add the 'clicked' class
    myName.classList.add('myNameAnimated'); // Add the 'clicked' class
    mySlogan.classList.add('mySloganAnimated'); // Add the 'clicked' class

    //branching to navbar
    headerBranchVertical.classList.add('animateHeaderVerticalLine');
    headerBranchHorizontal.classList.add('animateHeaderHorizontalLine');
    
    //Adds the sub-branches
    document.querySelectorAll('.subBranch').forEach(branch => {
        branch.classList.add('animateSubBranch');
    });

    //Shows navbar elements 2.5 seconds after nameAndSlogan is clicked
    setTimeout(() => {
        nav.style.opacity = '1';
        nav.style.visibility = 'visible';
    }, 2500); // 2500 milliseconds
}

// Event Listener for first interaction
nameAndSlogan.addEventListener('click', openNavBranches);



// Creates nav to KeyPoints branches
// Creates KeyPoints borders
// Shows KeyPoints Content
const createBorderNavToText = (element, howTall) => {
    // Fixed Values
    const elementWidth = 12;
    const topBorderPosition = 35.5;
    const tenPxToVH = pxToViewport(10, 'height');

    // Branches and KeyPoints - Left Positions
    const aboutBranchPosition = 9.75;
    const aboutKeyPointsPosition = 3.75;
    const skillsBranchPosition = 25.75;
    const skillsKeyPointsPosition = 19.75;
    const projectsBranchPosition = 41.75;
    const projectsKeyPointsPosition = 35.75;
    const professionalExperienceBranchPosition = 57.75;
    const professionalExperienceKeyPointsPosition = 51.75;
    const educationBranchPosition = 73.75;
    const educationKeyPointsPosition = 67.75;
    const contactsBranchPosition = 89.75;
    const contactsKeyPointsPosition = 83.75;

    // Queries for branch and borders animations, plus showing KeyPoints
    const elementNav = document.getElementById(element);
    const elementBranch = document.querySelector(`.${element}Branch`);
    const elementBorderTop = document.querySelector(`.${element}BorderTop`);
    const elementBorderLeft = document.querySelector(`.${element}BorderLeft`);
    const elementBorderRight = document.querySelector(`.${element}BorderRight`);
    const elementBorderBottomLeft = document.querySelector(`.${element}BorderBottomLeft`);
    const elementBorderBottomRight = document.querySelector(`.${element}BorderBottomRight`);
    const elementContent = document.getElementById(`${element}KeyPoints`);

    // Function to draw branch and borders animations, plus showing KeyPoints
    const openElementContent = () => {
        // Changes nav elements to clicked styling in CSS
        elementNav.classList.add('navClicked');
        
        // Draws the animation in CSS
        elementBranch.classList.add(`${element}BranchAnimated`);
        elementBorderTop.classList.add(`${element}BorderTopAnimated`);
        elementBorderLeft.classList.add(`${element}BorderLeftAnimated`);
        elementBorderRight.classList.add(`${element}BorderRightAnimated`);
        elementBorderBottomLeft.classList.add(`${element}BorderBottomLeftAnimated`);
        elementBorderBottomRight.classList.add(`${element}BorderBottomRightAnimated`);

        // Sets branches and border positions for About Me
        if (element === 'about') {
            elementBranch.style.left = aboutBranchPosition.toString() + 'vw';
            elementBorderTop.style.left = aboutKeyPointsPosition.toString() + 'vw';
            elementBorderLeft.style.left = aboutKeyPointsPosition.toString() + 'vw';
            elementBorderLeft.style.height = howTall.toString() + 'vh';
            elementBorderRight.style.left = (aboutKeyPointsPosition + elementWidth).toString() + 'vw';
            elementBorderRight.style.height = howTall.toString() + 'vh';
            elementBorderBottomLeft.style.left = aboutKeyPointsPosition.toString() + 'vw';
            elementBorderBottomLeft.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementBorderBottomRight.style.left = (aboutKeyPointsPosition + (elementWidth / 2)).toString() + 'vw';
            elementBorderBottomRight.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementContent.style.left = aboutKeyPointsPosition.toString() + 'vw';
            elementContent.style.height = howTall.toString() + 'vh';
            ////////////////////////////////////////////////////////////////////////////////////////////////
            elementContent.style.paddingTop = '27.5px'
            elementContent.style.paddingLeft = '35px'
            elementContent.style.paddingRight = '15px'
            ////////////////////////////////////////////////////////////////////////////////////////////////
        } 

        // Sets branches and border positions for Skills
        else if (element === 'skills') {
            elementBranch.style.left = skillsBranchPosition.toString() + 'vw';
            elementBorderTop.style.left = skillsKeyPointsPosition.toString() + 'vw';
            elementBorderLeft.style.left = skillsKeyPointsPosition.toString() + 'vw';
            elementBorderLeft.style.height = howTall.toString() + 'vh';
            elementBorderRight.style.left = (skillsKeyPointsPosition + elementWidth).toString() + 'vw';
            elementBorderRight.style.height = howTall.toString() + 'vh';
            elementBorderBottomLeft.style.left = skillsKeyPointsPosition.toString() + 'vw';
            elementBorderBottomLeft.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementBorderBottomRight.style.left = (skillsKeyPointsPosition + (elementWidth / 2)).toString() + 'vw';
            elementBorderBottomRight.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementContent.style.left = skillsKeyPointsPosition.toString() + 'vw';
            elementContent.style.height = howTall.toString() + 'vh';
            ////////////////////////////////////////////////////////////////////////////////////////////////          
            elementContent.style.paddingTop = '27.5px'
            elementContent.style.paddingLeft = '35px'
            elementContent.style.paddingRight = '15px'
            ////////////////////////////////////////////////////////////////////////////////////////////////
        } 
        
        // Sets branches and border positions for Projects
        else if (element === 'projects') {
            elementBranch.style.left = projectsBranchPosition.toString() + 'vw';
            elementBorderTop.style.left = projectsKeyPointsPosition.toString() + 'vw';
            elementBorderLeft.style.left = projectsKeyPointsPosition.toString() + 'vw';
            elementBorderLeft.style.height = howTall.toString() + 'vh';
            elementBorderRight.style.left = (projectsKeyPointsPosition + elementWidth).toString() + 'vw';
            elementBorderRight.style.height = howTall.toString() + 'vh';
            elementBorderBottomLeft.style.left = projectsKeyPointsPosition.toString() + 'vw';
            elementBorderBottomLeft.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementBorderBottomRight.style.left = (projectsKeyPointsPosition + (elementWidth / 2)).toString() + 'vw';
            elementBorderBottomRight.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementContent.style.left = projectsKeyPointsPosition.toString() + 'vw';
            elementContent.style.height = howTall.toString() + 'vh';
            ////////////////////////////////////////////////////////////////////////////////////////////////        
            elementContent.style.paddingTop = '27.5px'
            elementContent.style.paddingLeft = '35px'
            elementContent.style.paddingRight = '15px'
            ////////////////////////////////////////////////////////////////////////////////////////////////
        }
        
        // Sets branches and border positions for Professional Experiences
        else if (element === 'professionalExperience') {
            elementBranch.style.left = professionalExperienceBranchPosition.toString() + 'vw';
            elementBorderTop.style.left = professionalExperienceKeyPointsPosition.toString() + 'vw';
            elementBorderLeft.style.left = professionalExperienceKeyPointsPosition.toString() + 'vw';
            elementBorderLeft.style.height = howTall.toString() + 'vh';
            elementBorderRight.style.left = (professionalExperienceKeyPointsPosition + elementWidth).toString() + 'vw';
            elementBorderRight.style.height = howTall.toString() + 'vh';
            elementBorderBottomLeft.style.left = professionalExperienceKeyPointsPosition.toString() + 'vw';
            elementBorderBottomLeft.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementBorderBottomRight.style.left = (professionalExperienceKeyPointsPosition + (elementWidth / 2)).toString() + 'vw';
            elementBorderBottomRight.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementContent.style.left = professionalExperienceKeyPointsPosition.toString() + 'vw';
            elementContent.style.height = howTall.toString() + 'vh';
            ////////////////////////////////////////////////////////////////////////////////////////////////        
            elementContent.style.paddingTop = '27.5px'
            elementContent.style.paddingLeft = '35px'
            elementContent.style.paddingRight = '15px'
            ////////////////////////////////////////////////////////////////////////////////////////////////
        }
        
        // Sets branches and border positions for Education
        else if (element === 'education') {
            elementBranch.style.left = educationBranchPosition .toString() + 'vw';
            elementBorderTop.style.left = educationKeyPointsPosition.toString() + 'vw';
            elementBorderLeft.style.left = educationKeyPointsPosition.toString() + 'vw';
            elementBorderLeft.style.height = howTall.toString() + 'vh';
            elementBorderRight.style.left = (educationKeyPointsPosition + elementWidth).toString() + 'vw';
            elementBorderRight.style.height = howTall.toString() + 'vh';
            elementBorderBottomLeft.style.left = educationKeyPointsPosition.toString() + 'vw';
            elementBorderBottomLeft.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementBorderBottomRight.style.left = (educationKeyPointsPosition + (elementWidth / 2)).toString() + 'vw';
            elementBorderBottomRight.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementContent.style.left = educationKeyPointsPosition.toString() + 'vw';
            elementContent.style.height = howTall.toString() + 'vh';
            ////////////////////////////////////////////////////////////////////////////////////////////////
            elementContent.style.paddingTop = '27.5px'
            elementContent.style.paddingLeft = '35px'
            elementContent.style.paddingRight = '15px'
            ////////////////////////////////////////////////////////////////////////////////////////////////
        } 
        
        // Sets branches and border positions for Contacts
        else if (element === 'contacts') {
            elementBranch.style.left = contactsBranchPosition.toString() + 'vw';
            elementBorderTop.style.left = contactsKeyPointsPosition.toString() + 'vw';
            elementBorderLeft.style.left = contactsKeyPointsPosition.toString() + 'vw';
            elementBorderLeft.style.height = howTall.toString() + 'vh';
            elementBorderRight.style.left = (contactsKeyPointsPosition + elementWidth).toString() + 'vw';
            elementBorderRight.style.height = howTall.toString() + 'vh';
            elementBorderBottomLeft.style.left = contactsKeyPointsPosition.toString() + 'vw';
            elementBorderBottomLeft.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementBorderBottomRight.style.left = (contactsKeyPointsPosition + (elementWidth / 2)).toString() + 'vw';
            elementBorderBottomRight.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementContent.style.left = contactsKeyPointsPosition.toString() + 'vw';
            elementContent.style.height = howTall.toString() + 'vh';
            ////////////////////////////////////////////////////////////////////////////////////////////////    
            elementContent.style.paddingTop = '27.5px'
            elementContent.style.paddingLeft = '35px'
            elementContent.style.paddingRight = '15px'
            ////////////////////////////////////////////////////////////////////////////////////////////////
        } 
        
        else {
            console.log('Not an item from nav')
        }
        
        // Delay between the nav element is clicked and the KeyPoint starts showing
        setTimeout(() => {
            elementContent.style.opacity = '1';
            elementContent.style.visibility = 'visible';
        }, 1200); // 1200 milliseconds

        elementNav.removeEventListener('click', openElementContent);
    };

    // Event Listener for nav elements
    elementNav.addEventListener('click', openElementContent);
}



////////////////////////////////////////////////////////////////////////////////////////////////

// Set border height for KeyPoints
createBorderNavToText('about', 42.5);
createBorderNavToText('skills', 47.5);
createBorderNavToText('projects', 10.5);
createBorderNavToText('professionalExperience', 55);
createBorderNavToText('education', 25);
createBorderNavToText('contacts', 27.5);

////////////////////////////////////////////////////////////////////////////////////////////////