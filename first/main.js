document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.fq-section-item-container');

    items.forEach((item, idx) => {
        item.addEventListener('click', () => {
            toggleActive(item, idx);
        });
    });

    const yearContainers = document.querySelectorAll('.month-section-container');

    yearContainers.forEach((item, idx) => {
        item.addEventListener('click', () => {
            toggleActive(item, idx);
        });
    });

    const monthContainers = document.querySelectorAll('.months-list-item');

    monthContainers.forEach((item, idx) => {
        item.addEventListener('click', () => {
            monthContainers.forEach((item, idx) => {
                item.classList.remove('months-list-item-active');
            });

            item.classList.add('months-list-item-active');
        });

    });

    const footerBars = document.querySelectorAll('.footer-change-country-bottom-container');

    console.log(footerBars);
    footerBars.forEach((item, idx) => {
        item.addEventListener('click', () => {
            toggleActive(item, idx);
        });
    });


});


function toggleActive(el, index) {
    el.classList.toggle('active');
}


let a = 1;
while (a <= 3 ){
    alert(a);
    a++;
}


const John = [ 'tall', 'blonde' ];
console.log(John[1]);

