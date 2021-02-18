var header = document.getElementById('header')
var mobileMenu = document.getElementById("mobile-menu")
var headerClient = header.clientHeight;

mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerClient;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null; // ẩn menu đ
    }
}

var menuItems = document.querySelectorAll('.nav li a[href*="#"]')
    // console.log(menuItems)
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    // console.log(menuItem);
    menuItem.onclick = function(event) {
        var isParenMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if (isParenMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}