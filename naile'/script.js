(function () {
    // ==========================================
    // 1. MOBILE MENU TOGGLE
    // ==========================================
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');
    
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const open = nav.classList.toggle('active');
            toggle.setAttribute('aria-expanded', open);
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ==========================================
    // 2. BOOKING FORM (Contact Page)
    // ==========================================
    const bookingForm = document.getElementById('bookingForm');
    const bookingSuccess = document.getElementById('successMessage');
    
    if (bookingForm && bookingSuccess) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            bookingForm.style.display = 'none';
            bookingSuccess.style.display = 'block';
        });
    }

    // ==========================================
    // 3. REVIEW FORM (Gallery Page)
    // ==========================================
    const reviewForm = document.getElementById('reviewForm');
    const reviewContainer = document.getElementById('reviewFormContainer');
    const reviewSuccess = document.getElementById('reviewSuccessMessage');

    if (reviewForm && reviewContainer && reviewSuccess) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            reviewContainer.style.display = 'none';
            reviewSuccess.style.display = 'block';
        });
    }

})();