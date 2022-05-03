var progressbar = document.querySelectorAll('[role="progressbar"]');

const progressAnimation = (element) => {
    let i = 0;
    let WS = element.getAttribute("aria-valuenow");
    let Animations;
    Animations = setInterval(() => {
        element.innerText = i + "%";
        element.style.width = i + "%";
        i >= Number(WS) ? clearInterval(Animations) : i++;
    }, 5);
};

for (var i = 0; i < progressbar.length; i++) {
    progressAnimation(progressbar[i]);
}