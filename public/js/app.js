let menuItems = document.querySelectorAll('.menu-item')

menuItems.forEach(function(menuItem) {
   menuItem.addEventListener('click', function() {
    menuItems.forEach(function(item) {
        item.classList.remove('active');
        this.classList.add('active')
    })
   })
})