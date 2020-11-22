const element = document.getElementById('app_index');

element.addEventListener("DOMNodeInserted", function (event) {
    if (event.target.className === 'skip__button') {
        setTimeout(() => {
            const skipButton = document.getElementsByClassName("skip__button")[0];
            skipButton.click();
        }, 0);
    }
}, false);