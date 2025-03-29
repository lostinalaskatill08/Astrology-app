// Theme Toggle Functionality
import { useAstrologyStore } from './src/store';

// Get the store instance
const store = useAstrologyStore.getState();

// Initialize theme from store or localStorage
function initializeTheme() {
  const storedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', storedTheme);
  
  // Create toggle button if it doesn't exist
  if (!document.querySelector('.theme-toggle')) {
    createThemeToggle();
  }
}

// Create theme toggle button
function createThemeToggle() {
  const header = document.querySelector('header') || document.body;
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'theme-toggle';
  toggleBtn.setAttribute('aria-label', 'Toggle dark/light mode');
  toggleBtn.innerHTML = getCurrentTheme() === 'dark' ? '☀️' : '🌙';
  
  toggleBtn.addEventListener('click', toggleTheme);
  
  // Insert at the beginning of the header or body
  header.insertBefore(toggleBtn, header.firstChild);
  
  return toggleBtn;
}

// Get current theme
function getCurrentTheme() {
  return document.documentElement.getAttribute('data-theme') || 'light';
}

// Toggle between light and dark themes
function toggleTheme() {
  const currentTheme = getCurrentTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  // Update DOM
  document.documentElement.setAttribute('data-theme', newTheme);
  
  // Update button icon
  const toggleBtn = document.querySelector('.theme-toggle');
  if (toggleBtn) {
    toggleBtn.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
  }
  
  // Save to localStorage
  localStorage.setItem('theme', newTheme);
  
  // Update store if available
  try {
    if (store && store.setTheme) {
      store.setTheme(newTheme);
    }
  } catch (e) {
    console.log('Store not available yet, theme saved to localStorage');
  }
  
  // Dispatch custom event
  window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: newTheme } }));
}

// Apply theme-specific adjustments
function applyThemeAdjustments() {
  const currentTheme = getCurrentTheme();
  
  // Adjust chart colors based on theme
  const chartElements = document.querySelectorAll('.chart-element');
  chartElements.forEach(el => {
    if (currentTheme === 'dark') {
      // Brighten colors for dark mode
      el.style.filter = 'brightness(1.2)';
    } else {
      el.style.filter = 'none';
    }
  });
  
  // Adjust text colors for better contrast
  const textElements = document.querySelectorAll('.zodiac-text, .planet-text');
  textElements.forEach(el => {
    if (currentTheme === 'dark') {
      el.classList.add('dark-text');
    } else {
      el.classList.remove('dark-text');
    }
  });
}

// Listen for theme changes
window.addEventListener('themechange', () => {
  applyThemeAdjustments();
});

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  applyThemeAdjustments();
});

// Export functions for use in other modules
export { initializeTheme, toggleTheme, getCurrentTheme };
