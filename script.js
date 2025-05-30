function toggleNav() {
    document.getElementById('navbar').classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed('#element', {
        strings: ['Web Developer', 'Data Analyst', 'Programmer'],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });
});
