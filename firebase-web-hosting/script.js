let mainContent = "";

function switchContent(event) {
    event.preventDefault();  // This prevents the default behavior

    const contentDiv = document.getElementById('content');

    if (contentDiv.innerHTML === mainContent || mainContent === "") {
        fetch('about.html')
            .then(response => response.text())
            .then(data => {
                mainContent = contentDiv.innerHTML;
                contentDiv.innerHTML = data;
            });
    } else {
        contentDiv.innerHTML = mainContent;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');

    // Positioning
    let top = 0;
    let left = 0;

    // Function to update the position
    function updatePosition() {
        contentDiv.style.transform = `translate(${left}px, ${top}px)`;
    }

    // Handle arrow keys
    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case 'ArrowUp':
                top -= 10; // adjust this value for larger/smaller steps
                break;
            case 'ArrowDown':
                top += 10;
                break;
            case 'ArrowLeft':
                left -= 10;
                break;
            case 'ArrowRight':
                left += 10;
                break;
        }
        updatePosition();
    });
});

// ... your other JavaScript code ...
