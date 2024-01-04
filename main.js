// Shrink name and slogan
// New position do header
// Draw nav branches

const nameAndSlogan = document.querySelector('.nameAndSlogan');
const myName = document.getElementById('name');
const mySlogan = document.getElementById('slogan');

const openNavBranches = () => {
    nameAndSlogan.style.height = '110px';
    nameAndSlogan.style.width = '410px';
    nameAndSlogan.style.backgroundColor = '#BBE1FA';
    nameAndSlogan.style.color = '#1B262C';
    myName.style.fontSize = '2.4rem';
    mySlogan.style.fontSize = '1.25rem';
    nameAndSlogan.classList.add('headerClicked'); // Add the 'clicked' class
    nameAndSlogan.style.position = 'absolute';
    nameAndSlogan.style.top = '3vh';
    nameAndSlogan.style.left = '50%';
    nameAndSlogan.style.transform = 'translateX(-50%)';
    nameAndSlogan.removeEventListener('click', openNavBranches);
}

nameAndSlogan.addEventListener('click', openNavBranches);