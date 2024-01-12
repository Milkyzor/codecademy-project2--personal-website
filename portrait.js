function portrait () {
    // Popup
    window.onload = function() {
        document.getElementById("popupOverlay").classList.add("puVisible");
    };

    function closePopup() {
        document.getElementById("popupOverlay").classList.remove("puVisible");
    }


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



    // Gets access to navElements and KeyPoints
    // Shows KeyPoints
    // Hide KeyPoints
    // Adds event listeners
    function setupNavElement(buttonId, contentId) {
        // Get the elements
        const button = document.getElementById(buttonId);
        const content = document.getElementById(contentId);

        // Function to show content
        function showContent(event) {
            event.stopPropagation();
            content.style.display = 'flex';
            content.classList.add('fadeIn');
            content.classList.remove('fadeOut');
            setTimeout(() => {
                button.classList.add('navClickedPortrait');
            }, 550);
        }

        // Function to hide content
        function hideContent() {
            content.classList.remove('fadeIn');
            content.classList.add('fadeOut');
            setTimeout(() => {
                content.style.display = 'none';
            }, 500);
        }

        // Event listeners
        button.addEventListener('click', showContent);
        document.addEventListener('click', hideContent);     
    }


    setupNavElement('about', 'aboutKeyPoints');
    setupNavElement('skills', 'skillsKeyPoints');
    setupNavElement('projects', 'projectsKeyPoints');
    setupNavElement('professionalExperience', 'professionalExperienceKeyPoints');
    setupNavElement('education', 'educationKeyPoints');
    setupNavElement('contacts', 'contactsKeyPoints');
}