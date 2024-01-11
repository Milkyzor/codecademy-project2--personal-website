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














// Get the elements
const aboutButton = document.getElementById('about');
const aboutKeyPoints = document.getElementById('aboutKeyPoints');

// Function to show aboutKeyPoints
function showAboutKeyPoints(event) {
    event.stopPropagation(); // Stop the event from bubbling up to the document
    aboutButton.classList.add('navClicked');
    aboutKeyPoints.style.display = 'flex'; // Make it visible
    aboutKeyPoints.classList.add('fadeIn'); // Add fadeIn class
    aboutKeyPoints.classList.remove('fadeOut'); // Ensure fadeOut class is removed
}

// Function to hide aboutKeyPoints
function hideAboutKeyPoints() {
    aboutKeyPoints.classList.remove('fadeIn'); // Remove fadeIn class
    aboutKeyPoints.classList.add('fadeOut'); // Add fadeOut class

    // After 1 second, set display to none
    setTimeout(() => {
        aboutKeyPoints.style.display = 'none';
    }, 1000); // 1000 milliseconds = 1 second
}

// Event listeners
aboutButton.addEventListener('click', showAboutKeyPoints);

document.addEventListener('click', hideAboutKeyPoints);
