document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    const container = document.querySelector('.to-do');

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            let input = document.createElement('input');
            input.classList.add('input')
            container.appendChild(input);
        });
    });
});
