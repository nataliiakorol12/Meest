document.addEventListener('DOMContentLoaded', () => {
    const lines = document.querySelectorAll('.line');

    let i = 0;
    //
    // while (lines.length > i) {
    //     if (i % 2 !== 0) {
    //         lines[i].classList.add('red');
    //     }
    //
    //     i++;
    // }

    // for (i = 1; i <= lines.length; i++) {
    //     if (i % 2 === 0) {
    //         lines[i - 1].classList.add('red');
    //     }
    // }

    const namesList = document.getElementById('names');
    const names = ['Nataha', 'Kolyan'];

    names.forEach(name => {
        let element = document.createElement('li');
        element.innerText = name;
        namesList.appendChild(element);
    })

    lines.forEach((line, i) => {
        if (i % 2 !== 0) {
            lines[i].classList.add('red');
        }
    });

})