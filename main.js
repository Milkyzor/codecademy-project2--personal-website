// Gets and queries
const nameAndSlogan = document.querySelector('.nameAndSlogan');
const myName = document.getElementById('name');
const mySlogan = document.getElementById('slogan');

const headerBranchVertical = document.querySelector('.headerBranchVertical');
const headerBranchHorizontal = document.querySelector('.headerBranchHorizontal');

const aboutMeNav = document.getElementById('bio');



// INITIAL ANIMATION
// Shrink and reposisions nameAndSlogan
// Draw nav branches
const openNavBranches = () => {
    //nameAndSlogan new style
    nameAndSlogan.style.height = '13vh';
    nameAndSlogan.style.width = '24.5vw';
    nameAndSlogan.style.paddingBottom = '22.5px';
    nameAndSlogan.style.backgroundColor = '#BBE1FA';
    nameAndSlogan.style.color = '#1B262C';
    myName.style.fontSize = '3.8vh';
    mySlogan.style.fontSize = '2.2vh';
    nameAndSlogan.classList.add('headerClicked'); // Add the 'clicked' class
    nameAndSlogan.style.position = 'absolute';
    nameAndSlogan.style.top = '3vh';
    nameAndSlogan.style.left = '50%';
    nameAndSlogan.style.transform = 'translateX(-50%)';
    nameAndSlogan.removeEventListener('click', openNavBranches);

    //branching to navbar
    headerBranchVertical.classList.add('animateHeaderVerticalLine');
    headerBranchHorizontal.classList.add('animateHeaderHorizontalLine');
    
    //Adds the sub-branches
    document.querySelectorAll('.subBranch').forEach(branch => {
        branch.classList.add('animateSubBranch');
    });

    //Shows navbar elements 2.5 seconds after nameAndSlogan is clicked
    setTimeout(() => {
        const nav = document.querySelector('nav');
        nav.style.opacity = '1';
        nav.style.visibility = 'visible';
    }, 2500); // 2500 milliseconds
}

nameAndSlogan.addEventListener('click', openNavBranches);



// ABOUT ME ANIMATION
const openAboutMeKeyPoints = () => {
aboutMeNav.classList.add('clickedAboutMe');
aboutMeNav.removeEventListener('click', openAboutMeKeyPoints);
}

aboutMeNav.addEventListener('click', openAboutMeKeyPoints);