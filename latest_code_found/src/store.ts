// Astrology App Store
// This file manages the global state for the Astrology application

import { createStore } from 'zustand/vanilla';

// Define the store state type
interface AstrologyState {
  // User preferences
  theme: 'light' | 'dark';
  
  // Chart data
  chartName: string;
  birthDate: string;
  birthTime: string;
  birthLocation: string;
  
  // Chart history
  savedCharts: SavedChart[];
  
  // Actions
  setTheme: (theme: 'light' | 'dark') => void;
  setChartData: (data: ChartData) => void;
  saveCurrentChart: () => void;
  loadChart: (index: number) => void;
  deleteChart: (index: number) => void;
  clearHistory: () => void;
}

// Chart data type
interface ChartData {
  chartName: string;
  birthDate: string;
  birthTime: string;
  birthLocation: string;
}

// Saved chart type
interface SavedChart extends ChartData {
  timestamp: string;
}

// Create the store
export const useAstrologyStore = createStore<AstrologyState>((set, get) => ({
  // Initial state
  theme: localStorage.getItem('theme') as 'light' | 'dark' || 'light',
  chartName: '',
  birthDate: '',
  birthTime: '',
  birthLocation: '',
  savedCharts: JSON.parse(localStorage.getItem('chartHistory') || '[]'),
  
  // Actions
  setTheme: (theme) => {
    set({ theme });
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  },
  
  setChartData: (data) => {
    set({
      chartName: data.chartName,
      birthDate: data.birthDate,
      birthTime: data.birthTime,
      birthLocation: data.birthLocation
    });
  },
  
  saveCurrentChart: () => {
    const { chartName, birthDate, birthTime, birthLocation, savedCharts } = get();
    
    // Validate data
    if (!birthDate || !birthTime || !birthLocation) {
      console.error('Cannot save chart: missing required fields');
      return;
    }
    
    // Create new chart
    const newChart: SavedChart = {
      chartName: chartName || 'Unnamed Chart',
      birthDate,
      birthTime,
      birthLocation,
      timestamp: new Date().toISOString()
    };
    
    // Add to beginning of array
    const updatedCharts = [newChart, ...savedCharts];
    
    // Limit to 10 charts
    if (updatedCharts.length > 10) {
      updatedCharts.pop();
    }
    
    // Update state and localStorage
    set({ savedCharts: updatedCharts });
    localStorage.setItem('chartHistory', JSON.stringify(updatedCharts));
  },
  
  loadChart: (index) => {
    const { savedCharts } = get();
    
    if (index < 0 || index >= savedCharts.length) {
      console.error('Invalid chart index');
      return;
    }
    
    const chart = savedCharts[index];
    set({
      chartName: chart.chartName,
      birthDate: chart.birthDate,
      birthTime: chart.birthTime,
      birthLocation: chart.birthLocation
    });
  },
  
  deleteChart: (index) => {
    const { savedCharts } = get();
    
    if (index < 0 || index >= savedCharts.length) {
      console.error('Invalid chart index');
      return;
    }
    
    const updatedCharts = [...savedCharts];
    updatedCharts.splice(index, 1);
    
    set({ savedCharts: updatedCharts });
    localStorage.setItem('chartHistory', JSON.stringify(updatedCharts));
  },
  
  clearHistory: () => {
    set({ savedCharts: [] });
    localStorage.removeItem('chartHistory');
  }
}));

// Export types
export type { ChartData, SavedChart };
