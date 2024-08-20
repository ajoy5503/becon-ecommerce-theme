"use strict";

// :: Scroll to Top

let scrollButton = document.getElementById('scrollToTop');
let topdistance = 600;

if (scrollButton) {
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > topdistance || document.documentElement.scrollTop > topdistance) {
            scrollButton.classList.add('scrolltop-show');
            scrollButton.classList.remove('scrolltop-hide');
        } else {
            scrollButton.classList.add('scrolltop-hide');
            scrollButton.classList.remove('scrolltop-show');
        }
    });

    scrollButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
}

// :: Venobox JS
const venoBox = document.querySelectorAll(".venobox");

if (venoBox.length > 0) {
    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });
}


// :: Program Slider Active
var serviceFour = new Swiper('.program-active-1', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1500,
    },
    breakpoints: {
        '1200': {
            slidesPerView: 4,
        },
        '992': {
            slidesPerView: 3,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    speed: 3000
});

// :: Nice Select

let heroSelect = document.getElementById("heroSelect");
if (heroSelect) {
    NiceSelect.bind(heroSelect, {
        searchable: false
    });
}

let heroSelect2 = document.getElementById("heroSelect2");

if (heroSelect2) {
    NiceSelect.bind(heroSelect2, {
        searchable: false
    });
}

let heroSelect3 = document.getElementById("heroSelect3");

if (heroSelect3) {
    NiceSelect.bind(heroSelect3, {
        searchable: false
    });
}

let heroSelect4 = document.getElementById("heroSelect4");

if (heroSelect4) {
    NiceSelect.bind(heroSelect4, {
        searchable: false
    });
}


// :: Prevent default "a" click

let anchor = document.querySelectorAll('a[href="#"]');
let anchorLength = anchor.length;

if (anchorLength > 0) {
    for (let i = 0; i < anchorLength; i++) {
        anchor[i].addEventListener('click', function (e) {
            e.preventDefault();
        });
    }
}
