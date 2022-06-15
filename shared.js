var selectMobileButton = document.querySelector('.mobile-nav');
var backdrop = document.querySelector('.backdrop');

/* selectMobileButton.style.display = 'block'; */

selectMobileButton.addEventListener("click", function() {
    selectMobileButton.style.display = "block";
    backdrop.style.display = "block";
});

backdrop.addEventListener("click", function() {
    backdrop.style.display = "none";
    selectMobileButton.style.display = "none";
});