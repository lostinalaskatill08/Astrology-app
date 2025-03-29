// History Panel for Astrology App
import { useAstrologyStore } from './src/store';

// Get the store instance
const store = useAstrologyStore.getState();

// Create and initialize the history panel
function initializeHistoryPanel() {
  // Create panel if it doesn't exist
  if (!document.querySelector('.history-panel')) {
    createHistoryPanel();
  }
  
  // Load saved charts from store
  loadSavedCharts();
  
  // Set up event listeners
  setupEventListeners();
}

// Create the history panel DOM structure
function createHistoryPanel() {
  const container = document.querySelector('.container') || document.body;
  
  // Create panel element
  const panel = document.createElement('div');
  panel.className = 'history-panel fade-in';
  
  // Add header
  const header = document.createElement('div');
  header.className = 'history-header';
  header.innerHTML = `
    <h2>Chart History</h2>
    <div class="history-actions">
      <button id="clear-history" class="secondary">Clear All</button>
    </div>
  `;
  
  // Add content container
  const content = document.createElement('div');
  content.className = 'history-content';
  content.innerHTML = '<p class="empty-message">No saved charts yet.</p>';
  
  // Assemble panel
  panel.appendChild(header);
  panel.appendChild(content);
  
  // Add to DOM
  container.appendChild(panel);
  
  return panel;
}

// Load saved charts from the store
function loadSavedCharts() {
  try {
    if (!store || !store.savedCharts) return;
    
    const savedCharts = store.savedCharts;
    updateHistoryPanel(savedCharts);
  } catch (e) {
    console.log('Store not available yet, using localStorage');
    
    // Fallback to localStorage
    const savedChartsJSON = localStorage.getItem('chartHistory');
    if (savedChartsJSON) {
      const savedCharts = JSON.parse(savedChartsJSON);
      updateHistoryPanel(savedCharts);
    }
  }
}

// Update the history panel with saved charts
function updateHistoryPanel(charts) {
  const content = document.querySelector('.history-content');
  if (!content) return;
  
  if (!charts || charts.length === 0) {
    content.innerHTML = '<p class="empty-message">No saved charts yet.</p>';
    return;
  }
  
  // Create HTML for each chart
  const chartsHTML = charts.map((chart, index) => {
    const date = new Date(chart.timestamp);
    const formattedDate = date.toLocaleString();
    
    return `
      <div class="history-item" data-index="${index}">
        <div class="history-item-header">
          <h3>${chart.chartName || 'Unnamed Chart'}</h3>
          <button class="delete-chart" data-index="${index}">×</button>
        </div>
        <div class="history-item-details">
          <p><strong>Date:</strong> ${chart.birthDate}</p>
          <p><strong>Time:</strong> ${chart.birthTime}</p>
          <p><strong>Location:</strong> ${chart.birthLocation}</p>
          <p class="date">Saved on: ${formattedDate}</p>
        </div>
      </div>
    `;
  }).join('');
  
  content.innerHTML = chartsHTML;
}

// Set up event listeners for the history panel
function setupEventListeners() {
  // Event delegation for history panel
  document.addEventListener('click', (event) => {
    // Clear all history
    if (event.target.id === 'clear-history') {
      clearAllHistory();
    }
    
    // Delete individual chart
    if (event.target.classList.contains('delete-chart')) {
      const index = parseInt(event.target.dataset.index);
      deleteChart(index);
      event.stopPropagation(); // Prevent loading the chart
    }
    
    // Load chart when clicking on history item
    if (event.target.closest('.history-item')) {
      const item = event.target.closest('.history-item');
      const index = parseInt(item.dataset.index);
      loadChart(index);
    }
  });
  
  // Listen for save chart button
  const saveButton = document.getElementById('save-chart');
  if (saveButton) {
    saveButton.addEventListener('click', saveCurrentChart);
  }
  
  // Listen for store changes
  window.addEventListener('chartHistoryUpdated', () => {
    loadSavedCharts();
  });
}

// Save current chart to history
function saveCurrentChart() {
  try {
    if (store && store.saveCurrentChart) {
      store.saveCurrentChart();
      loadSavedCharts(); // Refresh the panel
    }
  } catch (e) {
    console.log('Store not available, using form values');
    
    // Fallback to form values
    const chartName = document.getElementById('chart-name')?.value || 'Unnamed Chart';
    const birthDate = document.getElementById('birth-date')?.value;
    const birthTime = document.getElementById('birth-time')?.value;
    const birthLocation = document.getElementById('birth-location')?.value;
    
    if (!birthDate || !birthTime || !birthLocation) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Create new chart
    const newChart = {
      chartName,
      birthDate,
      birthTime,
      birthLocation,
      timestamp: new Date().toISOString()
    };
    
    // Get existing charts
    const savedChartsJSON = localStorage.getItem('chartHistory');
    const savedCharts = savedChartsJSON ? JSON.parse(savedChartsJSON) : [];
    
    // Add to beginning of array
    const updatedCharts = [newChart, ...savedCharts];
    
    // Limit to 10 charts
    if (updatedCharts.length > 10) {
      updatedCharts.pop();
    }
    
    // Save to localStorage
    localStorage.setItem('chartHistory', JSON.stringify(updatedCharts));
    
    // Update panel
    updateHistoryPanel(updatedCharts);
  }
}

// Load a chart from history
function loadChart(index) {
  try {
    if (store && store.loadChart) {
      store.loadChart(index);
      
      // Update form fields
      updateFormFields(store);
      
      // Generate chart
      if (window.generateChart) {
        window.generateChart();
      }
    }
  } catch (e) {
    console.log('Store not available, using localStorage');
    
    // Fallback to localStorage
    const savedChartsJSON = localStorage.getItem('chartHistory');
    if (savedChartsJSON) {
      const savedCharts = JSON.parse(savedChartsJSON);
      if (index >= 0 && index < savedCharts.length) {
        const chart = savedCharts[index];
        
        // Update form fields
        document.getElementById('chart-name').value = chart.chartName;
        document.getElementById('birth-date').value = chart.birthDate;
        document.getElementById('birth-time').value = chart.birthTime;
        document.getElementById('birth-location').value = chart.birthLocation;
        
        // Generate chart
        if (window.generateChart) {
          window.generateChart();
        }
      }
    }
  }
}

// Update form fields from store
function updateFormFields(store) {
  document.getElementById('chart-name').value = store.chartName;
  document.getElementById('birth-date').value = store.birthDate;
  document.getElementById('birth-time').value = store.birthTime;
  document.getElementById('birth-location').value = store.birthLocation;
}

// Delete a chart from history
function deleteChart(index) {
  try {
    if (store && store.deleteChart) {
      store.deleteChart(index);
      loadSavedCharts(); // Refresh the panel
    }
  } catch (e) {
    console.log('Store not available, using localStorage');
    
    // Fallback to localStorage
    const savedChartsJSON = localStorage.getItem('chartHistory');
    if (savedChartsJSON) {
      const savedCharts = JSON.parse(savedChartsJSON);
      if (index >= 0 && index < savedCharts.length) {
        savedCharts.splice(index, 1);
        localStorage.setItem('chartHistory', JSON.stringify(savedCharts));
        updateHistoryPanel(savedCharts);
      }
    }
  }
}

// Clear all history
function clearAllHistory() {
  if (!confirm('Are you sure you want to clear all saved charts?')) {
    return;
  }
  
  try {
    if (store && store.clearHistory) {
      store.clearHistory();
      loadSavedCharts(); // Refresh the panel
    }
  } catch (e) {
    console.log('Store not available, using localStorage');
    
    // Fallback to localStorage
    localStorage.removeItem('chartHistory');
    updateHistoryPanel([]);
  }
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeHistoryPanel();
});

// Export functions for use in other modules
export { initializeHistoryPanel, saveCurrentChart, loadChart };
