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
