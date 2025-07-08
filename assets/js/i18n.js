// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Initialize with saved language or default to English
  const currentLang = localStorage.getItem('language') || 'en';
  applyLanguage(currentLang);
  initLanguageSwitchers();
});



// Core function to handle language changes
function applyLanguage(lang) {
  // 1. Validate language
  if (!translations[lang]) lang = 'en';
  
  // 2. Save preference
  localStorage.setItem('language', lang);
  
  // 3. Update all translations
  updateTextContent(lang);
  // 3. Force layout recalculation (critical fix!)
  document.body.style.display = 'none';
  void document.body.offsetHeight; // trigger reflow
  document.body.style.display = '';
  
  // 4. Update UI elements
  updateLanguageSwitcher(lang);
  
  // 5. Set page direction
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // 6. Handle slider (if exists)
  handleSliderTransition();
}

// Update all text elements
function updateTextContent(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang]?.[key]) {
     el.innerHTML = translations[lang][key];
    } else {
      console.warn(`Missing translation: ${key} for ${lang}`);
    }
  });
}

// Initialize all language switchers
function initLanguageSwitchers() {
  // Handle Bootstrap dropdown
  document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', function(e) {
      e.preventDefault();
      applyLanguage(this.dataset.lang);
    });
  });
}

// Update language switcher UI
function updateLanguageSwitcher(lang) {
  // Update Bootstrap dropdown toggle text
  const dropdownToggle = document.querySelector('.nav-link.dropdown-toggle');
  if (dropdownToggle) {
    dropdownToggle.innerHTML = `
      ${lang === 'en' ? 'English' : lang === 'fr' ? 'Français' : 'العربية'}
      <span class="caret"></span>
    `;
  }
  
  // Highlight active option
  document.querySelectorAll('.language-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });
}

// Special handling for slider transitions
function handleSliderTransition() {
  // Visual transition effect
  document.documentElement.style.opacity = 0;
  setTimeout(() => {
    document.documentElement.style.opacity = 1;
  }, 100);
}

