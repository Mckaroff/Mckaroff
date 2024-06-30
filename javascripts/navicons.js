document.addEventListener("DOMContentLoaded", function() {
    // Определение иконок для разделов
    var navItems = {
        "Home": "fas fa-home",
        "Основы": "fas fa-book",
        "Инструменты CMO": "fas fa-tools",
        "Обо мне": "fas fa-user"
    };

    // Добавление иконок к разделам
    document.querySelectorAll('.md-nav__item').forEach(function(navItem) {
        var link = navItem.querySelector('.md-nav__link');
        if (link && navItems[link.textContent.trim()]) {
            link.innerHTML = '<i class="' + navItems[link.textContent.trim()] + '"></i> ' + link.innerHTML;
        }
    });
});
