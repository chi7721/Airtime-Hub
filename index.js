// Select the elements
const parkWrapper = document.querySelector('.park-wrapper');
const realParkWindow = document.querySelector('.real-park-window');

// Variables to track dragging state
let isDragging = false;
let startX, startY, initialLeft, initialTop;

// Mouse down event on park-wrapper to start dragging
parkWrapper.addEventListener('mousedown', (e) => {
    isDragging = true;

    // Get the initial mouse position
    startX = e.clientX;
    startY = e.clientY;

    // Get the initial position of the real-park-window
    const rect = realParkWindow.getBoundingClientRect();
    initialLeft = rect.left;
    initialTop = rect.top;

    // Add mousemove and mouseup listeners to the document
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

// Mouse move event to drag the real-park-window
function onMouseMove(e) {
    if (!isDragging) return;

    // Calculate the new position
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    // Update the position of the real-park-window
    realParkWindow.style.position = 'absolute';
    realParkWindow.style.left = `${initialLeft + deltaX}px`;
    realParkWindow.style.top = `${initialTop + deltaY}px`;
}

// Mouse up event to stop dragging
function onMouseUp() {
    isDragging = false;

    // Remove the mousemove and mouseup listeners
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}
