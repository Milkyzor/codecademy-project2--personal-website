// GETS & QUERIES
// Header
const nameAndSlogan = document.querySelector('.nameAndSlogan');

// Branching (Header -> Nav)
const nav = document.querySelector('nav');

// Footer
const footer = document.querySelector('footer');



// Initial Animation
// Makes border complete
// nameAndSlogan disappears and navElements appears
const openNavBranches = () => {
    nameAndSlogan.removeEventListener('click', openNavBranches);
    nameAndSlogan.classList.add('headerClickedPortrait');
    const headerClickedPortrait = document.querySelector('.headerClickedPortrait');

    // Makes nameAndSlogan disappear after border is completed
    setTimeout(() => {
        headerClickedPortrait.style.display = 'none';
    }, 750); // 750 milliseconds

    // Shows navElements and footer
    setTimeout(() => {
        nav.style.opacity = '1';
        nav.style.visibility = 'visible';
        footer.style.opacity = '1';
        footer.style.visibility = 'visible';
    }, 800); // 800 milliseconds

}

// Event Listener for first interaction
nameAndSlogan.addEventListener('click', openNavBranches);