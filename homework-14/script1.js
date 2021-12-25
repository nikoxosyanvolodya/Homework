document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const element = document.querySelector('.element');

    document.addEventListener('keydown', event => {

        switch (event.keyCode) {
            case 39:
                if (element.offsetLeft + 50 < container.offsetWidth) {
                    element.style.left = `${element.offsetLeft + 1}px`
                }
                break;
            case 37:
                if (element.offsetLeft > 0) {
                    element.style.left = `${element.offsetLeft - 1}px`
                }
                break;
            case 38:
                if (element.offsetTop > 0) {
                    element.style.top = `${element.offsetTop - 1}px`
                }
                break;
            case 40:
                if (element.offsetTop + 50 < container.offsetHeight) {
                    element.style.top = `${element.offsetTop + 1}px`
                }
                break;
        }
    });
});