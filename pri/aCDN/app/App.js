viewDir = 'aCDN/view/';
console.log('1');

var navFlag = false;
var navBtn = document.querySelector('.topcoat-icon--menu-stack');
navBtn.addEventListener('click', toggleSideNav, false);

var nav = document.getElementById('slider');
nav.addEventListener('click', toggleSideNav, false);

function toggleSideNav() {
    console.log('side');
    if (!navFlag) {
        TweenLite.to('#slider', .2, { x: 405 });
        TweenLite.to('#kontainer', .2, { x: 405 });
    } else {
        TweenLite.to('#slider', .2, { x: 0 });
        TweenLite.to('#kontainer', .2, { x: 0 });
    }
    navFlag = !navFlag;
}

function onWhy(id) {
    console.log('loaded');
    TweenLite.from('#code1', .2, { x: 200 });
    TweenLite.from('#code2', 1, { x: 600 });
    TweenLite.from('#code3', 2, { x: 1200 });
}

window.addEventListener('load', function () {
    FastClick.attach(document.body);
    forward('tut', 'tut');
}, false);
//@ sourceMappingURL=App.js.map
