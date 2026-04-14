// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    
    menu.classList.toggle('hidden');
    
    if(menu.classList.contains('hidden')) {
        icon.classList.replace('fa-xmark', 'fa-bars');
    } else {
        icon.classList.replace('fa-bars', 'fa-xmark');
    }
}

// Language Toggle
function toggleLanguage() {
    const body = document.body;
    const html = document.documentElement;
    
    if (body.classList.contains('lang-ar')) {
        // Switch to English
        body.classList.replace('lang-ar', 'lang-en');
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
    } else {
        // Switch to Arabic
        body.classList.replace('lang-en', 'lang-ar');
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
    }
}
