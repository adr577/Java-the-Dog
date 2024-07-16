document.addEventListener("DOMContentLoaded", function () {
    var gifEl = document.querySelector('.java-vid-el');

    function changeBackground() {
        gifEl.style.backgroundImage = "url('./images/gif-after.gif')";
    }

    gifEl.addEventListener('click', changeBackground);
    gifEl.addEventListener('touchend', changeBackground);
});

