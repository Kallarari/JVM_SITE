'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    if (document.body.classList == "light-theme") {
        document.body.classList='dark-theme';
    }
    else {
        document.body.classList='light-theme';
    }

    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});