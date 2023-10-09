const menuItems = [...document.querySelectorAll('.menu-item')];

// Add feature that toggles which menu item is currently selected.
menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', () => {
        // Remove 'selected' class from the currently selected menu-item.
        const currentlySelected = document.querySelector('.selected');
        currentlySelected.classList.remove('selected');

        // Add the 'selected' class to the clicked menu-item.
        menuItem.classList.add('selected');
    });
});
