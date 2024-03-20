function buy(productName, price) {
    // Create popup container
    var popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');

    // Create popup content
    var popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    popupContent.innerHTML = `
        <h2>Confirm Purchase</h2>
        <p>Are you sure you want to buy ${productName} for ₹${price.toFixed(2)}?</p>
        <button class="confirm-button">Confirm</button>
        <button class="cancel-button">Cancel</button>
    `;

    // Append popup content to container
    popupContainer.appendChild(popupContent);

    // Append container to body
    document.body.appendChild(popupContainer);

    // Center popup vertically and horizontally
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var popupHeight = popupContent.offsetHeight;
    var popupWidth = popupContent.offsetWidth;

    popupContent.style.top = (windowHeight - popupHeight) / 2 + 'px';
    popupContent.style.left = (windowWidth - popupWidth) / 2 + 'px';

    // Add event listeners to buttons
    var confirmButton = document.querySelector('.confirm-button');
    var cancelButton = document.querySelector('.cancel-button');

    confirmButton.addEventListener('click', function() {
        // Close the popup
        document.body.removeChild(popupContainer);
        // Perform further actions (e.g., send purchase data to server)
        alert("Thank you for your purchase!");
    });

    cancelButton.addEventListener('click', function() {
        // Close the popup
        document.body.removeChild(popupContainer);
    });
}