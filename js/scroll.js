document.querySelectorAll('#scrollHome, #scrollServ, #scrollPoints, #scrollTeam').forEach(function(navItem) {
    navItem.addEventListener('click', function() {
        const targetID = navItem.id.replace('scroll', 'target');
        const targetElement = document.getElementById(targetID);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});