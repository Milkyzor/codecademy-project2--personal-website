// GETS & QUERIES
// Header
const nameAndSlogan = document.querySelector('.nameAndSlogan');
const myName = document.querySelector('.name');
const mySlogan = document.querySelector('.slogan');

// Branching (Header -> Nav)
const headerBranchVertical = document.querySelector('.headerBranchVertical');
const headerBranchHorizontal = document.querySelector('.headerBranchHorizontal');
const nav = document.querySelector('nav');

// About Me
const aboutMeNav = document.getElementById('about');
const aboutBranch = document.querySelector('.aboutBranch');
const aboutBorderTop = document.querySelector('.aboutBorderTop');
const aboutBorderLeft = document.querySelector('.aboutBorderLeft');
const aboutBorderRight = document.querySelector('.aboutBorderRight');
const aboutBorderBottomLeft = document.querySelector('.aboutBorderBottomLeft');
const aboutBorderBottomRight = document.querySelector('.aboutBorderBottomRight');
const aboutKeyPoints = document.getElementById('aboutKeyPoints');



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

nameAndSlogan.addEventListener('click', openNavBranches);



// About Me animaion
// creates border and shows aboutKeyPoints
// const openAboutMeKeyPoints = () => {
//     aboutMeNav.classList.add('clickedAboutMe');

//     aboutBranch.classList.add('aboutBranchAnimated');
//     aboutBorderTop.classList.add('aboutBorderTopAnimated');
//     aboutBorderLeft.classList.add('aboutBorderLeftAnimated');
//     aboutBorderRight.classList.add('aboutBorderRightAnimated');
//     aboutBorderBottomLeft.classList.add('aboutBorderBottomLeftAnimated');
//     aboutBorderBottomRight.classList.add('aboutBorderBottomRightAnimated');
    
//     setTimeout(() => {
//         aboutKeyPoints.style.opacity = '1';
//         aboutKeyPoints.style.visibility = 'visible';
//     }, 1200); // 1200 milliseconds

//     aboutMeNav.removeEventListener('click', openAboutMeKeyPoints);
// }

// aboutMeNav.addEventListener('click', openAboutMeKeyPoints);

//////////////////////////////////////////////////////////////////////////////////////////////

const createBorderNavToText = (element, howTall) => {
    const elementWidth = 12;
    const topBorderPosition = 35.5;
    const tenPxToVH = pxToViewport(10, 'height');

    const aboutBranchPosition = 9.75;
    const aboutTextPosition = 3.75;
    const skillsBranchPosition = 25.75;
    const skillsTextPosition = 19.75;
    const projectsBranchPosition = 41.75;
    const projectsTextPosition = 35.75;
    const professionalExperienceBranchPosition = 57.75;
    const professionalExperienceTextPosition = 51.75;
    const educationBranchPosition = 73.75;
    const educationTextPosition = 67.75;
    const contactsBranchPosition = 89.75;
    const contactsTextPosition = 83.75;


    const elementNav = document.getElementById(element);
    const elementBranch = document.querySelector(`.${element}Branch`);
    const elementBorderTop = document.querySelector(`.${element}BorderTop`);
    const elementBorderLeft = document.querySelector(`.${element}BorderLeft`);
    const elementBorderRight = document.querySelector(`.${element}BorderRight`);
    const elementBorderBottomLeft = document.querySelector(`.${element}BorderBottomLeft`);
    const elementBorderBottomRight = document.querySelector(`.${element}BorderBottomRight`);
    const elementContent = document.getElementById(`${element}KeyPoints`);

    const openElementContent = () => {
        elementNav.classList.add('navClicked');

        elementBranch.classList.add(`${element}BranchAnimated`);
        elementBorderTop.classList.add(`${element}BorderTopAnimated`);
        elementBorderLeft.classList.add(`${element}BorderLeftAnimated`);
        elementBorderRight.classList.add(`${element}BorderRightAnimated`);
        elementBorderBottomLeft.classList.add(`${element}BorderBottomLeftAnimated`);
        elementBorderBottomRight.classList.add(`${element}BorderBottomRightAnimated`);

        if (element === 'about') {
            elementBranch.style.left = aboutBranchPosition.toString() + 'vw';
            elementBorderTop.style.left = aboutTextPosition.toString() + 'vw';
            elementBorderLeft.style.left = aboutTextPosition.toString() + 'vw';
            elementBorderLeft.style.height = howTall.toString() + 'vh';
            elementBorderRight.style.left = (aboutTextPosition + elementWidth).toString() + 'vw';
            elementBorderRight.style.height = howTall.toString() + 'vh';
            elementBorderBottomLeft.style.left = aboutTextPosition.toString() + 'vw';
            elementBorderBottomLeft.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementBorderBottomRight.style.left = (aboutTextPosition + (elementWidth / 2)).toString() + 'vw';
            elementBorderBottomRight.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementContent.style.left = aboutTextPosition.toString() + 'vw';
            elementContent.style.height = howTall.toString() + 'vh';
        } else if (element === 'skills') {
            elementBranch.style.left = skillsBranchPosition.toString() + 'vw';
            elementBorderTop.style.left = skillsTextPosition.toString() + 'vw';
            elementBorderLeft.style.left = skillsTextPosition.toString() + 'vw';
            elementBorderLeft.style.height = howTall.toString() + 'vh';
            elementBorderRight.style.left = (skillsTextPosition + elementWidth).toString() + 'vw';
            elementBorderRight.style.height = howTall.toString() + 'vh';
            elementBorderBottomLeft.style.left = skillsTextPosition.toString() + 'vw';
            elementBorderBottomLeft.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementBorderBottomRight.style.left = (skillsTextPosition + (elementWidth / 2)).toString() + 'vw';
            elementBorderBottomRight.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementContent.style.left = skillsTextPosition.toString() + 'vw';
            elementContent.style.height = howTall.toString() + 'vh';
        } else if (element === 'projects') {
            elementBranch.style.left = projectsBranchPosition.toString() + 'vw';
            elementBorderTop.style.left = projectsTextPosition.toString() + 'vw';
            elementBorderLeft.style.left = projectsTextPosition.toString() + 'vw';
            elementBorderLeft.style.height = howTall.toString() + 'vh';
            elementBorderRight.style.left = (projectsTextPosition + elementWidth).toString() + 'vw';
            elementBorderRight.style.height = howTall.toString() + 'vh';
            elementBorderBottomLeft.style.left = projectsTextPosition.toString() + 'vw';
            elementBorderBottomLeft.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementBorderBottomRight.style.left = (projectsTextPosition + (elementWidth / 2)).toString() + 'vw';
            elementBorderBottomRight.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementContent.style.left = projectsTextPosition.toString() + 'vw';
            elementContent.style.height = howTall.toString() + 'vh';
        } else if (element === 'professionalExperience') {
            elementBranch.style.left = professionalExperienceBranchPosition.toString() + 'vw';
            elementBorderTop.style.left = professionalExperienceTextPosition.toString() + 'vw';
            elementBorderLeft.style.left = professionalExperienceTextPosition.toString() + 'vw';
            elementBorderLeft.style.height = howTall.toString() + 'vh';
            elementBorderRight.style.left = (professionalExperienceTextPosition + elementWidth).toString() + 'vw';
            elementBorderRight.style.height = howTall.toString() + 'vh';
            elementBorderBottomLeft.style.left = professionalExperienceTextPosition.toString() + 'vw';
            elementBorderBottomLeft.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementBorderBottomRight.style.left = (professionalExperienceTextPosition + (elementWidth / 2)).toString() + 'vw';
            elementBorderBottomRight.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementContent.style.left = professionalExperienceTextPosition.toString() + 'vw';
            elementContent.style.height = howTall.toString() + 'vh';
        } else if (element === 'education') {
            elementBranch.style.left = educationBranchPosition .toString() + 'vw';
            elementBorderTop.style.left = educationTextPosition.toString() + 'vw';
            elementBorderLeft.style.left = educationTextPosition.toString() + 'vw';
            elementBorderLeft.style.height = howTall.toString() + 'vh';
            elementBorderRight.style.left = (educationTextPosition + elementWidth).toString() + 'vw';
            elementBorderRight.style.height = howTall.toString() + 'vh';
            elementBorderBottomLeft.style.left = educationTextPosition.toString() + 'vw';
            elementBorderBottomLeft.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementBorderBottomRight.style.left = (educationTextPosition + (elementWidth / 2)).toString() + 'vw';
            elementBorderBottomRight.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementContent.style.left = educationTextPosition.toString() + 'vw';
            elementContent.style.height = howTall.toString() + 'vh';
        } else if (element === 'contacts') {
            elementBranch.style.left = contactsBranchPosition.toString() + 'vw';
            elementBorderTop.style.left = contactsTextPosition.toString() + 'vw';
            elementBorderLeft.style.left = contactsTextPosition.toString() + 'vw';
            elementBorderLeft.style.height = howTall.toString() + 'vh';
            elementBorderRight.style.left = (contactsTextPosition + elementWidth).toString() + 'vw';
            elementBorderRight.style.height = howTall.toString() + 'vh';
            elementBorderBottomLeft.style.left = contactsTextPosition.toString() + 'vw';
            elementBorderBottomLeft.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementBorderBottomRight.style.left = (contactsTextPosition + (elementWidth / 2)).toString() + 'vw';
            elementBorderBottomRight.style.top = (howTall + topBorderPosition - tenPxToVH).toString() + 'vh';
            elementContent.style.left = contactsTextPosition.toString() + 'vw';
            elementContent.style.height = howTall.toString() + 'vh';
        } else {
            console.log('Not an item from nav')
        }

        setTimeout(() => {
            elementContent.style.opacity = '1';
            elementContent.style.visibility = 'visible';
        }, 1200); // 1200 milliseconds

        elementNav.removeEventListener('click', openElementContent);
    };

    elementNav.addEventListener('click', openElementContent);
}


createBorderNavToText('about', 30);
createBorderNavToText('skills', 30);
createBorderNavToText('projects', 10);
createBorderNavToText('professionalExperience', 50);
createBorderNavToText('education', 20);
createBorderNavToText('contacts', 25);