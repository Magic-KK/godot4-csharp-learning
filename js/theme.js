// Theme Toggle Functionality
(function() {
  const THEME_KEY = 'godot4-theme';
  
  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
    }
    updateThemeIcon(savedTheme);
  }
  
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    
    if (newTheme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
    
    updateThemeIcon(newTheme);
  }
  
  function updateThemeIcon(theme) {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.textContent = theme === 'light' ? '🌙' : '☀️';
      btn.setAttribute('aria-label', `切换到${theme === 'light' ? '暗色' : '亮色'}主题`);
    }
  }
  
  function createThemeButton() {
    const btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', '切换主题');
    btn.textContent = '☀️';
    btn.addEventListener('click', toggleTheme);
    document.body.appendChild(btn);
  }
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initTheme();
      createThemeButton();
    });
  } else {
    initTheme();
    createThemeButton();
  }
  
  // Expose toggle function globally
  window.toggleTheme = toggleTheme;
})();

// Progress bar animation on scroll
(function() {
  function animateProgressBars() {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        bar.classList.add('loaded');
      }
    });
  }
  
  window.addEventListener('scroll', animateProgressBars);
  window.addEventListener('load', animateProgressBars);
})();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});
