// a-h-hub - Interactive Features
class AHHub {
    constructor() {
        this.init();
    }

    init() {
        this.handleLogoLoading();
        this.addClickEffects();
        this.addScrollAnimations();
        this.addKeyboardNavigation();
        this.trackAnalytics();
        this.addTooltips();
    }

    // Handle logo loading and fallback
    handleLogoLoading() {
        const logo = document.querySelector('.logo');
        const logoFallback = document.querySelector('.logo-fallback');
        const logoContainer = document.querySelector('.logo-container');

        if (logo) {
            // Show loading animation
            logoContainer.classList.add('logo-loading');

            logo.addEventListener('load', () => {
                logoContainer.classList.remove('logo-loading');
                logoFallback.style.display = 'none';
            });

            logo.addEventListener('error', () => {
                logoContainer.classList.remove('logo-loading');
                logo.style.display = 'none';
                logoFallback.style.display = 'flex';
            });

            // Check if logo is already loaded
            if (logo.complete) {
                logoContainer.classList.remove('logo-loading');
                if (logo.naturalWidth === 0) {
                    logo.style.display = 'none';
                    logoFallback.style.display = 'flex';
                } else {
                    logoFallback.style.display = 'none';
                }
            }
        }
    }

    // Add click effects and haptic feedback
    addClickEffects() {
        const linkItems = document.querySelectorAll('.link-item');
        
        linkItems.forEach(link => {
            link.addEventListener('click', (e) => {
                // Add ripple effect
                this.createRipple(e);
                
                // Add haptic feedback (if supported)
                if ('vibrate' in navigator) {
                    navigator.vibrate