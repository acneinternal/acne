document.addEventListener('DOMContentLoaded', () => {
    
    // Draggable Window Logic
    const windowHeader = document.querySelector('.window-header');
    const cheatWindow = document.querySelector('.cheat-window');
    
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    windowHeader.addEventListener("mousedown", dragStart);
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("mousemove", drag);

    function dragStart(e) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;

        if (e.target === windowHeader || windowHeader.contains(e.target)) {
            isDragging = true;
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, cheatWindow);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }

    // Fake Status Updates for Download Page
    const statusBar = document.querySelector('.status-bar span');
    const statuses = [
        "WAITING FOR DOWNLOAD...",
        "VAC BYPASS: ENABLED",
        "LATEST VERSION: 2.4.1",
        "READY TO INJECT"
    ];

    let statusIndex = 0;
    setInterval(() => {
        statusIndex = (statusIndex + 1) % statuses.length;
        statusBar.style.opacity = 0;
        
        setTimeout(() => {
            statusBar.textContent = statuses[statusIndex];
            statusBar.style.opacity = 1;
        }, 500);
    }, 4000);
});
