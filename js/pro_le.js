document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach(bar => {
        const progress = bar.querySelector(".progress");
        const percentage = bar.getAttribute("data-percentage");
        setTimeout(() => {
            progress.style.width = `${percentage}%`;
        }, 500); 
    });
});