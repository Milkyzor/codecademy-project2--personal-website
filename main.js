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
const aboutMeNav = document.getElementById('bio');
const aboutBranch = document.querySelector('.aboutBranch');
const aboutBorderTop = document.querySelector('.aboutBorderTop');
const aboutBorderLeft = document.querySelector('.aboutBorderLeft');
const aboutBorderRight = document.querySelector('.aboutBorderRight');
const aboutBorderBottomLeft = document.querySelector('.aboutBorderBottomLeft');
const aboutBorderBottomRight = document.querySelector('.aboutBorderBottomRight');
const bioKeyPoints = document.getElementById('bioKeyPoints');



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
// creates border and shows bioKeyPoints
const openAboutMeKeyPoints = () => {
    aboutMeNav.classList.add('clickedAboutMe');

    aboutBranch.classList.add('aboutBranchAnimated');
    aboutBorderTop.classList.add('aboutBorderTopAnimated');
    aboutBorderLeft.classList.add('aboutBorderLeftAnimated');
    aboutBorderRight.classList.add('aboutBorderRightAnimated');
    aboutBorderBottomLeft.classList.add('aboutBorderBottomLeftAnimated');
    aboutBorderBottomRight.classList.add('aboutBorderBottomRightAnimated');
    
    setTimeout(() => {
        bioKeyPoints.style.opacity = '1';
        bioKeyPoints.style.visibility = 'visible';
    }, 1200); // 1200 milliseconds

    aboutMeNav.removeEventListener('click', openAboutMeKeyPoints);
}

aboutMeNav.addEventListener('click', openAboutMeKeyPoints);