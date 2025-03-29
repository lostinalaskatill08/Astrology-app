// Constants for the application
const HOUSE_COLORS = [
  '#FF5733', '#FFC300', '#DAF7A6', '#C70039', '#900C3F', '#581845',
  '#2471A3', '#7D3C98', '#1ABC9C', '#F1C40F', '#E67E22', '#E74C3C'
];

const ZODIAC_INTERPRETATIONS = {
  'Aries': {
    element: 'Fire',
    modality: 'Cardinal',
    keywords: ['initiative', 'courage', 'action', 'enthusiasm', 'independence']
  },
  'Taurus': {
    element: 'Earth',
    modality: 'Fixed',
    keywords: ['stability', 'persistence', 'sensuality', 'reliability', 'practicality']
  },
  'Gemini': {
    element: 'Air',
    modality: 'Mutable',
    keywords: ['communication', 'curiosity', 'adaptability', 'versatility', 'intellect']
  },
  'Cancer': {
    element: 'Water',
    modality: 'Cardinal',
    keywords: ['nurturing', 'emotional sensitivity', 'intuition', 'protection', 'home']
  },
  'Leo': {
    element: 'Fire',
    modality: 'Fixed',
    keywords: ['creativity', 'self-expression', 'leadership', 'confidence', 'generosity']
  },
  'Virgo': {
    element: 'Earth',
    modality: 'Mutable',
    keywords: ['analysis', 'precision', 'service', 'health', 'organization']
  },
  'Libra': {
    element: 'Air',
    modality: 'Cardinal',
    keywords: ['balance', 'harmony', 'justice', 'partnership', 'diplomacy']
  },
  'Scorpio': {
    element: 'Water',
    modality: 'Fixed',
    keywords: ['intensity', 'transformation', 'depth', 'power', 'mystery']
  },
  'Sagittarius': {
    element: 'Fire',
    modality: 'Mutable',
    keywords: ['exploration', 'optimism', 'freedom', 'philosophy', 'adventure']
  },
  'Capricorn': {
    element: 'Earth',
    modality: 'Cardinal',
    keywords: ['ambition', 'discipline', 'responsibility', 'structure', 'achievement']
  },
  'Aquarius': {
    element: 'Air',
    modality: 'Fixed',
    keywords: ['innovation', 'humanitarianism', 'originality', 'independence', 'vision']
  },
  'Pisces': {
    element: 'Water',
    modality: 'Mutable',
    keywords: ['compassion', 'spirituality', 'imagination', 'intuition', 'transcendence']
  }
};

const ASPECTS = [
  { name: 'Conjunction', degrees: 0, orb: 8, color: '#FF5733' },
  { name: 'Opposition', degrees: 180, orb: 8, color: '#C70039' },
  { name: 'Trine', degrees: 120, orb: 8, color: '#2ECC71' },
  { name: 'Square', degrees: 90, orb: 8, color: '#E74C3C' },
  { name: 'Sextile', degrees: 60, orb: 6, color: '#3498DB' },
  { name: 'Quincunx', degrees: 150, orb: 5, color: '#9B59B6' },
  { name: 'Semisextile', degrees: 30, orb: 3, color: '#F1C40F' },
  { name: 'Semisquare', degrees: 45, orb: 3, color: '#E67E22' },
  { name: 'Sesquiquadrate', degrees: 135, orb: 3, color: '#D35400' }
];

const PLANETS = [
  {
    name: 'Sun',
    symbol: '☉',
    color: '#FFD700',
    size: 18,
    keywords: ['identity', 'ego', 'vitality', 'purpose', 'self-expression'],
    interpretations: {
      'Aries': 'You have a bold, pioneering spirit with natural leadership abilities.',
      'Taurus': 'You have a steady, reliable nature with a strong appreciation for beauty and comfort.',
      'Gemini': 'You have a curious, adaptable mind with excellent communication skills.',
      'Cancer': 'You have a nurturing, protective nature with deep emotional sensitivity.',
      'Leo': 'You have a warm, generous spirit with natural creative talents and leadership abilities.',
      'Virgo': 'You have a practical, analytical mind with attention to detail and a desire to be of service.',
      'Libra': 'You have a diplomatic, harmonious nature with a strong sense of fairness and beauty.',
      'Scorpio': 'You have an intense, passionate nature with transformative power and emotional depth.',
      'Sagittarius': 'You have an optimistic, adventurous spirit with a love of freedom and exploration.',
      'Capricorn': 'You have an ambitious, disciplined nature with a strong sense of responsibility.',
      'Aquarius': 'You have an innovative, humanitarian spirit with original thinking and vision.',
      'Pisces': 'You have a compassionate, intuitive nature with spiritual depth and imagination.'
    }
  },
  {
    name: 'Moon',
    symbol: '☽',
    color: '#SILVER',
    size: 16,
    keywords: ['emotions', 'instincts', 'nurturing', 'subconscious', 'habits'],
    interpretations: {
      'Aries': 'Your emotional responses are quick, direct, and sometimes impulsive.',
      'Taurus': 'Your emotional nature is steady, sensual, and security-oriented.',
      'Gemini': 'Your emotional responses are adaptable, curious, and intellectually oriented.',
      'Cancer': 'Your emotional nature is deeply sensitive, nurturing, and protective.',
      'Leo': 'Your emotional responses are warm, generous, and dramatic.',
      'Virgo': 'Your emotional nature is practical, analytical, and service-oriented.',
      'Libra': 'Your emotional responses are balanced, harmonious, and relationship-focused.',
      'Scorpio': 'Your emotional nature is intense, passionate, and transformative.',
      'Sagittarius': 'Your emotional responses are optimistic, freedom-loving, and adventurous.',
      'Capricorn': 'Your emotional nature is disciplined, responsible, and achievement-oriented.',
      'Aquarius': 'Your emotional responses are detached, humanitarian, and unconventional.',
      'Pisces': 'Your emotional nature is compassionate, intuitive, and spiritually attuned.'
    }
  },
  {
    name: 'Mercury',
    symbol: '☿',
    color: '#ADD8E6',
    size: 14,
    keywords: ['communication', 'intellect', 'perception', 'learning', 'information'],
    interpretations: {
      'Aries': 'Your thinking is quick, direct, and pioneering with a preference for immediate action.',
      'Taurus': 'Your communication style is deliberate, practical, and sensory-oriented.',
      'Gemini': 'Your thinking is quick, versatile, and curious with excellent verbal abilities.',
      'Cancer': 'Your communication style is intuitive, emotionally attuned, and protective.',
      'Leo': 'Your thinking is creative, expressive, and confident with natural leadership in communication.',
      'Virgo': 'Your communication style is precise, analytical, and detail-oriented.',
      'Libra': 'Your thinking is balanced, diplomatic, and focused on fairness and harmony.',
      'Scorpio': 'Your communication style is penetrating, investigative, and psychologically astute.',
      'Sagittarius': 'Your thinking is expansive, optimistic, and philosophically oriented.',
      'Capricorn': 'Your communication style is structured, practical, and achievement-focused.',
      'Aquarius': 'Your thinking is innovative, original, and oriented toward humanitarian ideals.',
      'Pisces': 'Your communication style is intuitive, imaginative, and spiritually attuned.'
    }
  },
  {
    name: 'Venus',
    symbol: '♀',
    color: '#FFC0CB',
    size: 14,
    keywords: ['love', 'beauty', 'harmony', 'attraction', 'values'],
    interpretations: {
      'Aries': 'You approach love with enthusiasm and directness, valuing excitement and independence.',
      'Taurus': 'You express love through sensuality and loyalty, valuing stability and comfort.',
      'Gemini': 'You approach relationships with curiosity and mental connection, valuing communication and variety.',
      'Cancer': 'You express love through nurturing and emotional bonding, valuing security and family.',
      'Leo': 'You approach relationships with warmth and generosity, valuing romance and creative expression.',
      'Virgo': 'You express love through acts of service and attention to detail, valuing improvement and practicality.',
      'Libra': 'You approach relationships with diplomacy and fairness, valuing harmony and partnership.',
      'Scorpio': 'You express love with intensity and depth, valuing emotional intimacy and transformation.',
      'Sagittarius': 'You approach relationships with optimism and freedom, valuing growth and adventure.',
      'Capricorn': 'You express love through commitment and responsibility, valuing tradition and achievement.',
      'Aquarius': 'You approach relationships with friendship and idealism, valuing independence and uniqueness.',
      'Pisces': 'You express love with compassion and spiritual connection, valuing transcendence and unity.'
    }
  },
  {
    name: 'Mars',
    symbol: '♂',
    color: '#FF4500',
    size: 14,
    keywords: ['action', 'desire', 'energy', 'courage', 'assertion'],
    interpretations: {
      'Aries': 'You take action with courage and directness, asserting yourself boldly and independently.',
      'Taurus': 'You channel energy with persistence and determination, working steadily toward practical goals.',
      'Gemini': 'You take action through communication and mental agility, asserting yourself through words and ideas.',
      'Cancer': 'You channel energy into protection and nurturing, asserting yourself indirectly and emotionally.',
      'Leo': 'You take action with confidence and creativity, asserting yourself dramatically and generously.',
      'Virgo': 'You channel energy into practical service and improvement, working with precision and analysis.',
      'Libra': 'You take action through cooperation and diplomacy, asserting yourself in balanced and fair ways.',
      'Scorpio': 'You channel energy with intensity and strategy, working with determination and transformative power.',
      'Sagittarius': 'You take action with enthusiasm and optimism, asserting yourself through exploration and growth.',
      'Capricorn': 'You channel energy into structured achievement, working with discipline and responsibility.',
      'Aquarius': 'You take action for humanitarian causes and innovation, asserting yourself through originality.',
      'Pisces': 'You channel energy in subtle, intuitive ways, working with compassion and spiritual motivation.'
    }
  }
];

class Settings {
  static storageKey = 'astrologyAppSettings';

  static getSettings() {
    const settings = localStorage.getItem(this.storageKey);
    return settings ? JSON.parse(settings) : {
      astroApiKey: '',
      geocodingApiKey: '',
      theme: 'light',
      showAspectLines: true,
      showHouseLabels: true,
      animationsEnabled: true
    };
  }

  static saveSettings(settings) {
    localStorage.setItem(this.storageKey, JSON.stringify(settings));
  }
  
  static getTheme() {
    const settings = this.getSettings();
    return settings.theme || 'light';
  }
  
  static setTheme(theme) {
    const settings = this.getSettings();
    settings.theme = theme;
    this.saveSettings(settings);
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update theme toggle if it exists
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.checked = theme === 'dark';
    }
  }
}

class AstrologyCalculator {
  constructor() {
    this.planets = [];
    this.houses = [];
    this.aspects = [];
    this.apiUrl = import.meta.env.VITE_API_BASE || 'https://api.astrologer.app/v1/chart';
    
    // Get API keys from settings
    const settings = Settings.getSettings();
    this.apiKey = settings.astroApiKey || ''; 
    this.geocodingApiKey = settings.geocodingApiKey || '';
    this.openrouterApiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
    
    this.useLocalCalculations = false;
    this.chartHistory = JSON.parse(localStorage.getItem('chartHistory') || '[]');
    this.currentChartName = '';
  }

  setApiKeys(astroApiKey, geocodingApiKey) {
    this.apiKey = astroApiKey;
    this.geocodingApiKey = geocodingApiKey;
  }

  async calculateChart(birthDate, birthTime, birthLocation, name = '') {
    try {
      // Show loading animation
      const loadingAnimation = document.querySelector('.loading-animation');
      if (loadingAnimation) {
        loadingAnimation.style.display = 'flex';
        
        // Update loading text with personalized message
        const loadingText = loadingAnimation.querySelector('.loading-text');
        if (loadingText) {
          loadingText.textContent = name ? 
            `Calculating ${name}'s Cosmic Blueprint...` : 
            'Calculating Your Cosmic Blueprint...';
        }
      }

      // Validate inputs
      if (!birthDate || !birthTime || !birthLocation) {
        throw new Error('Please provide all required birth information');
      }

      // First get coordinates using geocoding
      const locationData = await this.geocodeLocation(birthLocation);
      
      try {
        // Try AI calculation if API key is available
        if (this.openrouterApiKey && this.openrouterApiKey !== 'your_openrouter_key_here') {
          const chartData = await this.fetchAIGeneratedChart(birthDate, birthTime, locationData);
          
          if (chartData && chartData.planets && chartData.planets.length > 0) {
            // Use the AI-generated data
            this.planets = this.processPlanetsData(chartData.planets);
            // Calculate houses and aspects based on planet positions
            this.calculateHousesFromPlanets();
            this.aspects = this.calculateAspects();
          } else {
            throw new Error('Invalid chart data structure');
          }
        } else {
          // Fall back to algorithmic calculations if no API key
          this.calculateChartAlgorithmically(birthDate, birthTime, locationData);
        }
      } catch (aiError) {
        console.warn('AI calculation failed, using algorithmic calculations:', aiError);
        // Fall back to algorithmic calculations
        this.calculateChartAlgorithmically(birthDate, birthTime, locationData);
      }

      // Update interpretations panel
      const interpretationsPanel = document.getElementById('interpretations-panel');
      if (interpretationsPanel) {
        interpretationsPanel.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        interpretationsPanel.style.color = 'white';
        this.updateInterpretations(name);
      }

      // Save to chart history
      if (name) {
        this.saveToHistory(name, birthDate, birthTime, birthLocation);
      }

      return {
        planets: this.planets,
        houses: this.houses,
        aspects: this.aspects
      };
    } catch (error) {
      console.error("Error in chart calculation:", error);
      this.showNotification(`Error calculating chart: ${error.message}`, 'error');
      
      this.generateMockData();
      return {
        planets: this.planets,
        houses: this.houses,
        aspects: this.aspects
      };
    } finally {
      const loadingAnimation = document.querySelector('.loading-animation');
      if (loadingAnimation) loadingAnimation.style.display = 'none';
    }
  }

  async fetchAIGeneratedChart(birthDate, birthTime, locationData) {
    const response = await fetch('https://api.openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.openrouterApiKey}`,
        'HTTP-Referer': 'https://github.com/lostinalaskatill08/Astrology-app',
        'X-Title': 'Astrology Wheel Calculator',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "google/gemini-pro",
        messages: [{
          role: "user",
          content: `You are an expert astrologer. Calculate natal chart positions for:
                  Birth Date: ${birthDate}
                  Birth Time: ${birthTime}
                  Location: ${locationData.formattedAddress}
                  Coordinates: ${locationData.latitude}, ${locationData.longitude}
                  
                  Return ONLY a JSON object with this structure, no other text:
                  {
                    "planets": [
                      {"name": "Sun", "sign": "Leo", "degree": 15.5, "house": 1, "retrograde": false},
                      {"name": "Moon", "sign": "Cancer", "degree": 25.3, "house": 12, "retrograde": false}
                    ]
                  }`
        }],
        stream: false,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('AI response:', data);
    
    // Try to parse the content as JSON directly
    const content = data.choices[0].message.content;
    return typeof content === 'string' ? JSON.parse(content) : content;
  }

  saveToHistory(name, birthDate, birthTime, birthLocation) {
    const chartEntry = {
      name,
      birthDate,
      birthTime,
      birthLocation,
      timestamp: new Date().toISOString()
    };
    
    // Add to history and limit to 10 entries
    this.chartHistory.unshift(chartEntry);
    if (this.chartHistory.length > 10) {
      this.chartHistory = this.chartHistory.slice(0, 10);
    }
    
    // Save to localStorage
    localStorage.setItem('chartHistory', JSON.stringify(this.chartHistory));
    
    // Update history UI if it exists
    this.updateHistoryUI();
  }
  
  updateHistoryUI() {
    const historyList = document.getElementById('history-list');
    if (!historyList) return;
    
    historyList.innerHTML = '';
    
    this.chartHistory.forEach((entry, index) => {
      const item = document.createElement('div');
      item.className = 'history-item';
      
      const date = new Date(entry.timestamp);
      const formattedDate = date.toLocaleDateString();
      
      item.innerHTML = `
        <div class="history-name">${entry.name}</div>
        <div class="history-details">
          ${formattedDate} • ${entry.birthLocation}
        </div>
      `;
      
      item.addEventListener('click', () => {
        this.loadFromHistory(index);
      });
      
      historyList.appendChild(item);
    });
  }
  
  loadFromHistory(index) {
    const entry = this.chartHistory[index];
    if (!entry) return;
    
    // Fill form fields
    const dateInput = document.getElementById('birth-date');
    const timeInput = document.getElementById('birth-time');
    const locationInput = document.getElementById('birth-location');
    const nameInput = document.getElementById('chart-name');
    
    if (dateInput) dateInput.value = entry.birthDate;
    if (timeInput) timeInput.value = entry.birthTime;
    if (locationInput) locationInput.value = entry.birthLocation;
    if (nameInput) nameInput.value = entry.name;
    
    // Generate chart
    this.calculateChart(entry.birthDate, entry.birthTime, entry.birthLocation, entry.name);
  }

  showNotification(message, type = 'info') {
    const notification = document.getElementById('status-notification');
    if (!notification) return;

    const messageEl = notification.querySelector('.notification-message');
    if (!messageEl) return;

    // Set message and style based on type
    messageEl.textContent = message;
    notification.className = `notification ${type}`;
    notification.style.display = 'block';

    // Auto-hide after 5 seconds
    setTimeout(() => {
      notification.style.display = 'none';
    }, 5000);

    // Allow manual close
    const closeBtn = notification.querySelector('.close-notification');
    if (closeBtn) {
      closeBtn.onclick = () => {
        notification.style.display = 'none';
      };
    }
  }

  calculateChartAlgorithmically(birthDate, birthTime, locationData) {
    // Basic astronomical calculations
    const date = new Date(`${birthDate}T${birthTime}`);
    const julianDate = this.getJulianDate(date);
    const siderealTime = this.getSiderealTime(julianDate, locationData.longitude);
    
    // Calculate planet positions
    this.planets = PLANETS.map(planet => {
      const position = this.calculatePlanetPosition(planet, julianDate);
      return {
        ...planet,
        angle: position.longitude,
        sign: this.getSignName(position.longitude),
        house: this.calculateHouse(position.longitude, siderealTime),
        retrograde: position.retrograde,
        orbitalRadius: 200 - (PLANETS.indexOf(planet) * 15) // For rendering
      };
    });

    // Calculate houses
    this.calculateHousesFromAscendant(siderealTime);
    
    // Calculate aspects
    this.aspects = this.calculateAspects();
  }

  calculateHousesFromPlanets() {
    // If we have an ascendant, use it to calculate houses
    const ascendant = this.planets.find(p => p.name === 'Ascendant');
    if (ascendant) {
      const ascendantAngle = ascendant.angle;
      this.houses = Array.from({length: 12}, (_, i) => {
        const position = (ascendantAngle + i * 30) % 360;
        return {
          number: i + 1,
          position: position,
          sign: this.getSignName(position),
          color: HOUSE_COLORS[i] || '#888888'
        };
      });
    } else {
      // Fallback to equal houses from 0° Aries
      this.houses = Array.from({length: 12}, (_, i) => {
        const position = i * 30;
        return {
          number: i + 1,
          position: position,
          sign: this.getSignName(position),
          color: HOUSE_COLORS[i] || '#888888'
        };
      });
    }
  }

  getJulianDate(date) {
    // Basic Julian Date calculation
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const a = Math.floor((14 - month) / 12);
    const y = year + 4800 - a;
    const m = month + 12 * a - 3;
    let jd = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
    
    // Add time component
    jd += (date.getHours() - 12) / 24 + date.getMinutes() / 1440 + date.getSeconds() / 86400;
    
    return jd;
  }

  getSiderealTime(jd, longitude) {
    // Basic sidereal time calculation
    const t = (jd - 2451545.0) / 36525;
    let theta = 280.46061837 + 360.98564736629 * (jd - 2451545.0) + 0.000387933 * t * t - t * t * t / 38710000;
    theta = (theta + longitude) % 360;
    if (theta < 0) theta += 360;
    return theta;
  }

  calculatePlanetPosition(planet, jd) {
    // Simplified calculation for testing
    const baseAngle = ((jd % 365.25) / 365.25) * 360;
    const speed = planet.name === 'Moon' ? 13.2 : 1;
    const angle = (baseAngle * speed + Math.random() * 30) % 360;
    
    return {
      longitude: angle,
      retrograde: Math.random() > 0.8 // 20% chance of retrograde
    };
  }

  calculateHouse(longitude, siderealTime) {
    // Basic house calculation
    let housePosition = (longitude - siderealTime + 360) % 360;
    return Math.floor(housePosition / 30) + 1;
  }

  calculateHousesFromAscendant(siderealTime) {
    this.houses = Array.from({length: 12}, (_, i) => {
      const position = (siderealTime + i * 30) % 360;
      return {
        number: i + 1,
        position: position,
        sign: this.getSignName(position),
        color: HOUSE_COLORS[i] || '#888888'
      };
    });
  }

  async geocodeLocation(location) {
    try {
      // URL encode the location string
      const encodedLocation = encodeURIComponent(location);
      const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodedLocation}&key=${this.geocodingApiKey}`;
      
      console.log('Geocoding location:', location);
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`Geocoding API error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Geocoding response:', data);

      if (data.results && data.results.length > 0) {
        const firstResult = data.results[0];
        const coords = firstResult.geometry;
        const formattedAddress = firstResult.formatted;
        
        // Update the location input with formatted address
        const locationInput = document.getElementById('birth-location');
        if (locationInput) {
          locationInput.value = formattedAddress;
        }

        // Update lat/long inputs if they exist
        const latInput = document.getElementById('latitude');
        const lngInput = document.getElementById('longitude');
        if (latInput) latInput.value = coords.lat;
        if (lngInput) lngInput.value = coords.lng;

        return {
          latitude: coords.lat,
          longitude: coords.lng,
          formattedAddress: formattedAddress
        };
      }
      
      throw new Error(`No results found for location: ${location}`);
    } catch (error) {
      console.error("Geocoding failed:", error);
      this.showNotification(`Geocoding error: ${error.message}`, 'error');
      return { latitude: 0, longitude: 0, formattedAddress: location };
    }
  }

  // Generate mock data for testing when API is unavailable
  generateMockData() {
    console.log("Generating mock data for testing");
    
    // Mock planets data
    this.planets = PLANETS.map(planet => {
      return {
        ...planet,
        angle: Math.random() * 360, // Random position
        sign: this.getSignName(Math.random() * 360),
        house: Math.floor(Math.random() * 12) + 1,
        retrograde: Math.random() > 0.8,
        orbitalRadius: 200 - (PLANETS.indexOf(planet) * 15) // For rendering
      };
    });
    
    // Mock houses data
    this.houses = Array.from({length: 12}, (_, i) => {
      return {
        number: i + 1,
        position: i * 30,
        sign: this.getSignName(i * 30),
        color: HOUSE_COLORS[i] || '#888888'
      };
    });
    
    // Mock aspects
    this.aspects = [];
    for (let i = 0; i < this.planets.length; i++) {
      for (let j = i + 1; j < this.planets.length; j++) {
        if (Math.random() > 0.7) { // 30% chance to create an aspect
          const aspectType = ASPECTS[Math.floor(Math.random() * ASPECTS.length)];
          this.aspects.push({
            planet1: this.planets[i],
            planet2: this.planets[j],
            type: aspectType.name,
            angle: aspectType.degrees,
            orb: Math.random() * 5,
            color: aspectType.color
          });
        }
      }
    }
  }
  
  // Helper method to get sign name from angle
  getSignName(angle) {
    const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
                 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
    if (angle < 0) angle += 360; // Adjust negative angles
    const signIndex = Math.floor(angle / 30) % 12;
    return signs[signIndex];
  }

  processPlanetsData(celestialBodies) {
    if (!celestialBodies) return [];
    
    return PLANETS.map(planetInfo => {
      const apiPlanet = celestialBodies.find(body => 
        body.name.toLowerCase() === planetInfo.name.toLowerCase());
      
      if (apiPlanet) {
        return {
          ...planetInfo,
          angle: apiPlanet.longitude || apiPlanet.degree || 0,
          sign: apiPlanet.sign || this.getSignName(apiPlanet.longitude || apiPlanet.degree || 0),
          house: apiPlanet.house || null,
          retrograde: apiPlanet.retrograde || apiPlanet.isRetrograde || false,
          orbitalRadius: 200 - (PLANETS.indexOf(planetInfo) * 15) // For rendering
        };
      } else {
        // If planet not found in API response, use default values
        return {
          ...planetInfo,
          angle: 0,
          sign: 'Unknown',
          house: null,
          retrograde: false,
          orbitalRadius: 200 - (PLANETS.indexOf(planetInfo) * 15) // For rendering
        };
      }
    });
  }

  calculateAspects() {
    if (!this.planets) return [];
    
    const aspects = [];
    
    // Calculate aspects manually
    for (let i = 0; i < this.planets.length; i++) {
      for (let j = i + 1; j < this.planets.length; j++) {
        const planet1 = this.planets[i];
        const planet2 = this.planets[j];
        
        // Calculate the angle between planets
        let angle = Math.abs(planet1.angle - planet2.angle);
        if (angle > 180) angle = 360 - angle;
        
        // Check if this angle matches any aspect type within orb
        ASPECTS.forEach(aspectType => {
          const orb = Math.abs(angle - aspectType.degrees);
          if (orb <= aspectType.orb) {
            aspects.push({
              planet1,
              planet2,
              type: aspectType.name,
              angle: aspectType.degrees,
              orb,
              color: aspectType.color
            });
          }
        });
      }
    }
    
    return aspects;
  }
  
  updateInterpretations(name = '') {
    const interpretationsPanel = document.getElementById('interpretations-panel');
    if (!interpretationsPanel) return;

    // Clear existing content
    const zodiacSection = document.getElementById('zodiac-interpretations');
    if (zodiacSection) {
      zodiacSection.innerHTML = '';
    }

    // Update planet interpretations with white text
    this.planets.forEach(planet => {
      const interpretationDiv = document.createElement('div');
      interpretationDiv.className = 'interpretation-item';
      interpretationDiv.innerHTML = `
        <div class="interpretation-title" style="color: var(--accent-color);">${planet.name} in ${planet.sign}</div>
        <div class="interpretation-content" style="color: white;">
          <p>${planet.name} in ${planet.sign} ${this.getPlanetInterpretation(planet)}</p>
          <p><strong>House:</strong> ${planet.house || 'Unknown'}</p>
          ${planet.retrograde ? '<p><strong>Retrograde:</strong> Moving backward, suggesting internal reflection and review.</p>' : ''}
        </div>
      `;
      zodiacSection.appendChild(interpretationDiv);
    });

    // Show panel
    interpretationsPanel.style.display = 'block';
  }
  
  getPlanetInterpretation(planet) {
    // Basic interpretations
    const signInfo = ZODIAC_INTERPRETATIONS[planet.sign];
    if (!signInfo) return '';

    return `brings ${signInfo.keywords.join(', ')} to your chart through the ${signInfo.element} element and ${signInfo.modality} modality.`;
  }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  // Apply saved theme
  const theme = Settings.getTheme();
  document.documentElement.setAttribute('data-theme', theme);
  
  // Initialize theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.checked = theme === 'dark';
    themeToggle.addEventListener('change', function() {
      Settings.setTheme(this.checked ? 'dark' : 'light');
    });
  }
  
  // Initialize chart calculator
  const calculator = new AstrologyCalculator();
  
  // Set up form submission
  const chartForm = document.getElementById('chart-form');
  if (chartForm) {
    chartForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const birthDate = document.getElementById('birth-date').value;
      const birthTime = document.getElementById('birth-time').value;
      const birthLocation = document.getElementById('birth-location').value;
      const chartName = document.getElementById('chart-name')?.value || '';
      
      await calculator.calculateChart(birthDate, birthTime, birthLocation, chartName);
      
      // Render chart
      const renderer = new ChartRenderer(calculator);
      renderer.renderChart();
    });
  }
  
  // Initialize history panel
  calculator.updateHistoryUI();
});

// Add loading animation styles
const loadingStyles = document.createElement('style');
loadingStyles.textContent = `
  .loading-animation {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .loading-spinner {
    width: 80px;
    height: 80px;
    border: 8px solid var(--background-color, #fff);
    border-top: 8px solid var(--primary-color, #3498db);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  .loading-text {
    color: white;
    margin-top: 20px;
    font-size: 18px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(loadingStyles);

// Add loading animation HTML
const loadingAnimation = document.createElement('div');
loadingAnimation.className = 'loading-animation';
loadingAnimation.innerHTML = `
  <div style="text-align: center;">
    <div class="loading-spinner"></div>
    <div class="loading-text">Calculating Your Cosmic Blueprint...</div>
  </div>
`;
document.body.appendChild(loadingAnimation);

// Simple Chart Renderer class
class ChartRenderer {
  constructor(calculator) {
    this.calculator = calculator;
    this.svg = document.getElementById('chart-svg');
    this.planetsGroup = document.getElementById('planets-group');
    this.housesGroup = document.getElementById('houses-group');
    this.aspectsGroup = document.getElementById('aspects-group');
  }
  
  renderChart() {
    if (!this.svg) return;
    
    this.clearChart();
    this.renderHouses();
    this.renderPlanets();
    this.renderAspects();
  }
  
  clearChart() {
    if (this.planetsGroup) this.planetsGroup.innerHTML = '';
    if (this.housesGroup) this.housesGroup.innerHTML = '';
    if (this.aspectsGroup) this.aspectsGroup.innerHTML = '';
  }
  
  renderHouses() {
    if (!this.housesGroup) return;
    
    this.calculator.houses.forEach(house => {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      const angle = house.position;
      const x1 = Math.cos((angle - 90) * Math.PI / 180) * 280;
      const y1 = Math.sin((angle - 90) * Math.PI / 180) * 280;
      
      line.setAttribute('x1', '0');
      line.setAttribute('y1', '0');
      line.setAttribute('x2', x1);
      line.setAttribute('y2', y1);
      line.setAttribute('stroke', house.color);
      line.setAttribute('data-house', house.number);
      line.setAttribute('class', 'house-line');
      
      this.housesGroup.appendChild(line);
    });
  }
  
  renderPlanets() {
    if (!this.planetsGroup) return;
    
    this.calculator.planets.forEach(planet => {
      const angle = planet.angle;
      const radius = planet.orbitalRadius || 200;
      const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
      const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
      
      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      group.setAttribute('class', 'planet-symbol');
      group.setAttribute('data-planet', planet.name);
      group.setAttribute('transform', `translate(${x},${y})`);
      
      // Planet circle
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('r', planet.size || 15);
      circle.setAttribute('fill', planet.color);
      
      // Planet symbol
      const symbol = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      symbol.setAttribute('text-anchor', 'middle');
      symbol.setAttribute('dy', '0.35em');
      symbol.setAttribute('fill', '#fff');
      symbol.setAttribute('font-size', `${planet.size || 15}px`);
      symbol.textContent = planet.symbol;
      
      group.appendChild(circle);
      group.appendChild(symbol);
      this.planetsGroup.appendChild(group);
    });
  }
  
  renderAspects() {
    if (!this.aspectsGroup) return;
    
    this.calculator.aspects.forEach(aspect => {
      const p1 = aspect.planet1;
      const p2 = aspect.planet2;
      
      const x1 = Math.cos((p1.angle - 90) * Math.PI / 180) * p1.orbitalRadius;
      const y1 = Math.sin((p1.angle - 90) * Math.PI / 180) * p1.orbitalRadius;
      const x2 = Math.cos((p2.angle - 90) * Math.PI / 180) * p2.orbitalRadius;
      const y2 = Math.sin((p2.angle - 90) * Math.PI / 180) * p2.orbitalRadius;
      
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', x1);
      line.setAttribute('y1', y1);
      line.setAttribute('x2', x2);
      line.setAttribute('y2', y2);
      line.setAttribute('stroke', aspect.color);
      line.setAttribute('class', 'aspect-line');
      line.setAttribute('data-aspect-type', aspect.type);
      
      this.aspectsGroup.appendChild(line);
    });
  }
}
