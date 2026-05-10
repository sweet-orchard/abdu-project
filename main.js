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
        
        // Toggle active form select
        document.querySelector('.ar-text select[name="service"]').disabled = true;
        document.querySelector('.en-text select[name="service"]').disabled = false;
    } else {
        // Switch to Arabic
        body.classList.replace('lang-en', 'lang-ar');
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        
        // Toggle active form select
        document.querySelector('.en-text select[name="service"]').disabled = true;
        document.querySelector('.ar-text select[name="service"]').disabled = false;
    }
}

// Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const submitBtn = document.getElementById('submit-btn');
            const originalBtnHtml = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span class="ar-text">جاري الإرسال...</span><span class="en-text">Sending...</span>';
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-75', 'cursor-not-allowed');

            // Send form using EmailJS
            emailjs.sendForm('service_vafhnnq', 'template_awv2xwa', this)
                .then(function() {
                    // Success
                    submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> <span class="ar-text">تم الإرسال بنجاح!</span><span class="en-text">Sent Successfully!</span>';
                    submitBtn.classList.replace('bg-primary', 'bg-green-500');
                    submitBtn.classList.replace('hover:bg-yellow-500', 'hover:bg-green-600');
                    quoteForm.reset();
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        submitBtn.innerHTML = originalBtnHtml;
                        submitBtn.disabled = false;
                        submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
                        submitBtn.classList.replace('bg-green-500', 'bg-primary');
                        submitBtn.classList.replace('hover:bg-green-600', 'hover:bg-yellow-500');
                    }, 3000);
                }, function(error) {
                    // Error
                    console.log('FAILED...', error);
                    submitBtn.innerHTML = '<i class="fa-solid fa-xmark"></i> <span class="ar-text">فشل الإرسال</span><span class="en-text">Failed to send</span>';
                    submitBtn.classList.replace('bg-primary', 'bg-red-500');
                    submitBtn.classList.replace('hover:bg-yellow-500', 'hover:bg-red-600');
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        submitBtn.innerHTML = originalBtnHtml;
                        submitBtn.disabled = false;
                        submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
                        submitBtn.classList.replace('bg-red-500', 'bg-primary');
                        submitBtn.classList.replace('hover:bg-red-600', 'hover:bg-yellow-500');
                    }, 3000);
                });
        });
    }
});
