// Chart Utilities for Astrology App

// Calculate planet positions
function calculatePlanetPositions(date, time, latitude, longitude) {
  // This is a simplified placeholder function
  // In a real app, this would use astronomical calculations or an API
  
  // Parse date and time
  const dateTime = new Date(`${date}T${time}`);
  
  // Seed random based on inputs for consistent results
  const seed = dateTime.getTime() + parseFloat(latitude) + parseFloat(longitude);
  const seededRandom = createSeededRandom(seed);
  
  // Generate positions (in a real app, these would be calculated)
  const planets = [
    { name: 'Sun', symbol: '☉', position: seededRandom() * 360, house: Math.floor(seededRandom() * 12) + 1 },
    { name: 'Moon', symbol: '☽', position: seededRandom() * 360, house: Math.floor(seededRandom() * 12) + 1 },
    { name: 'Mercury', symbol: '☿', position: seededRandom() * 360, house: Math.floor(seededRandom() * 12) + 1 },
    { name: 'Venus', symbol: '♀', position: seededRandom() * 360, house: Math.floor(seededRandom() * 12) + 1 },
    { name: 'Mars', symbol: '♂', position: seededRandom() * 360, house: Math.floor(seededRandom() * 12) + 1 },
    { name: 'Jupiter', symbol: '♃', position: seededRandom() * 360, house: Math.floor(seededRandom() * 12) + 1 },
    { name: 'Saturn', symbol: '♄', position: seededRandom() * 360, house: Math.floor(seededRandom() * 12) + 1 },
    { name: 'Uranus', symbol: '♅', position: seededRandom() * 360, house: Math.floor(seededRandom() * 12) + 1 },
    { name: 'Neptune', symbol: '♆', position: seededRandom() * 360, house: Math.floor(seededRandom() * 12) + 1 },
    { name: 'Pluto', symbol: '♇', position: seededRandom() * 360, house: Math.floor(seededRandom() * 12) + 1 }
  ];
  
  // Calculate zodiac signs based on position
  planets.forEach(planet => {
    planet.sign = getZodiacSign(planet.position);
    planet.signSymbol = getZodiacSymbol(planet.sign);
    planet.aspect = calculateAspects(planet, planets);
  });
  
  return planets;
}

// Create a seeded random number generator
function createSeededRandom(seed) {
  return function() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

// Get zodiac sign based on position (0-360 degrees)
function getZodiacSign(position) {
  const signs = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 
    'Leo', 'Virgo', 'Libra', 'Scorpio', 
    'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];
  
  const signIndex = Math.floor(position / 30) % 12;
  return signs[signIndex];
}

// Get zodiac symbol based on sign name
function getZodiacSymbol(sign) {
  const symbols = {
    'Aries': '♈',
    'Taurus': '♉',
    'Gemini': '♊',
    'Cancer': '♋',
    'Leo': '♌',
    'Virgo': '♍',
    'Libra': '♎',
    'Scorpio': '♏',
    'Sagittarius': '♐',
    'Capricorn': '♑',
    'Aquarius': '♒',
    'Pisces': '♓'
  };
  
  return symbols[sign] || '';
}

// Calculate aspects between planets
function calculateAspects(planet, allPlanets) {
  const aspects = [];
  const aspectTypes = [
    { name: 'Conjunction', angle: 0, orb: 8 },
    { name: 'Opposition', angle: 180, orb: 8 },
    { name: 'Trine', angle: 120, orb: 8 },
    { name: 'Square', angle: 90, orb: 8 },
    { name: 'Sextile', angle: 60, orb: 6 }
  ];
  
  allPlanets.forEach(otherPlanet => {
    if (planet.name === otherPlanet.name) return; // Skip self
    
    const angleDiff = Math.abs(planet.position - otherPlanet.position);
    const normalizedDiff = angleDiff > 180 ? 360 - angleDiff : angleDiff;
    
    aspectTypes.forEach(aspectType => {
      if (Math.abs(normalizedDiff - aspectType.angle) <= aspectType.orb) {
        aspects.push({
          planet: otherPlanet.name,
          type: aspectType.name,
          angle: normalizedDiff
        });
      }
    });
  });
  
  return aspects;
}

// Calculate houses based on birth time and location
function calculateHouses(date, time, latitude, longitude) {
  // This is a simplified placeholder function
  // In a real app, this would use astronomical calculations
  
  // Parse date and time
  const dateTime = new Date(`${date}T${time}`);
  
  // Seed random based on inputs for consistent results
  const seed = dateTime.getTime() + parseFloat(latitude) + parseFloat(longitude);
  const seededRandom = createSeededRandom(seed);
  
  // Generate house cusps (in a real app, these would be calculated)
  const houses = [];
  let cuspPosition = seededRandom() * 30; // Random starting point
  
  for (let i = 1; i <= 12; i++) {
    houses.push({
      number: i,
      position: cuspPosition,
      sign: getZodiacSign(cuspPosition),
      signSymbol: getZodiacSymbol(getZodiacSign(cuspPosition))
    });
    
    // Each house spans roughly 30 degrees, but we add some variation
    cuspPosition = (cuspPosition + 30 + (seededRandom() * 5 - 2.5)) % 360;
  }
  
  return houses;
}

// Generate chart interpretation
function generateChartInterpretation(planets, houses) {
  let interpretation = '<div class="chart-interpretation">';
  interpretation += '<h2>Chart Interpretation</h2>';
  
  // Sun sign interpretation
  const sunPlanet = planets.find(p => p.name === 'Sun');
  if (sunPlanet) {
    interpretation += `<div class="interpretation-section">
      <h3>Sun in ${sunPlanet.sign} ${sunPlanet.signSymbol}</h3>
      <p>${getSunSignInterpretation(sunPlanet.sign)}</p>
    </div>`;
  }
  
  // Moon sign interpretation
  const moonPlanet = planets.find(p => p.name === 'Moon');
  if (moonPlanet) {
    interpretation += `<div class="interpretation-section">
      <h3>Moon in ${moonPlanet.sign} ${moonPlanet.signSymbol}</h3>
      <p>${getMoonSignInterpretation(moonPlanet.sign)}</p>
    </div>`;
  }
  
  // Rising sign (Ascendant) interpretation
  const ascendantHouse = houses.find(h => h.number === 1);
  if (ascendantHouse) {
    interpretation += `<div class="interpretation-section">
      <h3>Ascendant in ${ascendantHouse.sign} ${ascendantHouse.signSymbol}</h3>
      <p>${getAscendantInterpretation(ascendantHouse.sign)}</p>
    </div>`;
  }
  
  // Major aspects interpretation
  interpretation += '<div class="interpretation-section">';
  interpretation += '<h3>Major Aspects</h3>';
  
  // Get significant aspects
  const significantAspects = [];
  planets.forEach(planet => {
    planet.aspect.forEach(aspect => {
      if (['Conjunction', 'Opposition', 'Trine'].includes(aspect.type)) {
        significantAspects.push({
          planet1: planet.name,
          planet2: aspect.planet,
          type: aspect.type
        });
      }
    });
  });
  
  // Remove duplicates (e.g., Sun conjunct Moon and Moon conjunct Sun)
  const uniqueAspects = significantAspects.filter((aspect, index, self) => 
    index === self.findIndex(a => 
      (a.planet1 === aspect.planet1 && a.planet2 === aspect.planet2) || 
      (a.planet1 === aspect.planet2 && a.planet2 === aspect.planet1)
    )
  );
  
  // Add aspect interpretations
  if (uniqueAspects.length > 0) {
    uniqueAspects.slice(0, 5).forEach(aspect => {
      interpretation += `<p><strong>${aspect.planet1} ${aspect.type} ${aspect.planet2}:</strong> 
        ${getAspectInterpretation(aspect.planet1, aspect.planet2, aspect.type)}</p>`;
    });
  } else {
    interpretation += '<p>No major aspects found.</p>';
  }
  
  interpretation += '</div>';
  interpretation += '</div>';
  
  return interpretation;
}

// Placeholder interpretation functions
function getSunSignInterpretation(sign) {
  const interpretations = {
    'Aries': 'You are energetic, courageous, and enthusiastic. You have a pioneering spirit and love to take initiative.',
    'Taurus': 'You are reliable, patient, and practical. You appreciate beauty and comfort, and have a strong connection to the physical world.',
    'Gemini': 'You are versatile, curious, and communicative. You love to learn and share ideas with others.',
    'Cancer': 'You are nurturing, intuitive, and protective. You have deep emotional connections and value security.',
    'Leo': 'You are creative, generous, and confident. You have a natural flair for drama and leadership.',
    'Virgo': 'You are analytical, practical, and detail-oriented. You strive for perfection and have a service-oriented nature.',
    'Libra': 'You are diplomatic, fair-minded, and cooperative. You seek harmony and balance in all aspects of life.',
    'Scorpio': 'You are intense, passionate, and resourceful. You have deep emotional insights and transformative power.',
    'Sagittarius': 'You are optimistic, freedom-loving, and philosophical. You seek knowledge and new experiences.',
    'Capricorn': 'You are disciplined, responsible, and ambitious. You have a strong drive to achieve your goals.',
    'Aquarius': 'You are innovative, independent, and humanitarian. You think outside the box and value community.',
    'Pisces': 'You are compassionate, intuitive, and artistic. You have a deep connection to the spiritual realm.'
  };
  
  return interpretations[sign] || 'Interpretation not available.';
}

function getMoonSignInterpretation(sign) {
  const interpretations = {
    'Aries': 'Your emotions are quick, direct, and sometimes impulsive. You need independence even in close relationships.',
    'Taurus': 'Your emotional nature is steady and security-oriented. You find comfort in routine and physical pleasures.',
    'Gemini': 'Your emotions are changeable and intellectually influenced. You need mental stimulation and variety.',
    'Cancer': 'Your emotions are deep, nurturing, and protective. You have a strong need for emotional security.',
    'Leo': 'Your emotional nature is warm, generous, and dramatic. You need recognition and creative expression.',
    'Virgo': 'Your emotions are practical and service-oriented. You need order and usefulness in your emotional life.',
    'Libra': 'Your emotional nature seeks harmony and balance. You need relationships and aesthetic pleasures.',
    'Scorpio': 'Your emotions are intense, passionate, and sometimes secretive. You need emotional depth and transformation.',
    'Sagittarius': 'Your emotional nature is optimistic and freedom-loving. You need adventure and meaning in your emotional life.',
    'Capricorn': 'Your emotions are controlled and responsibility-oriented. You need achievement and structure.',
    'Aquarius': 'Your emotional nature is detached and humanitarian. You need intellectual freedom and social connection.',
    'Pisces': 'Your emotions are sensitive, compassionate, and sometimes escapist. You need spiritual connection and creative outlets.'
  };
  
  return interpretations[sign] || 'Interpretation not available.';
}

function getAscendantInterpretation(sign) {
  const interpretations = {
    'Aries': 'You present yourself as confident, direct, and energetic. You have a pioneering approach to life.',
    'Taurus': 'You present yourself as reliable, patient, and sensual. You have a grounded approach to life.',
    'Gemini': 'You present yourself as adaptable, curious, and communicative. You have an intellectual approach to life.',
    'Cancer': 'You present yourself as nurturing, protective, and sensitive. You have an emotional approach to life.',
    'Leo': 'You present yourself as confident, generous, and dramatic. You have a creative approach to life.',
    'Virgo': 'You present yourself as analytical, helpful, and modest. You have a practical approach to life.',
    'Libra': 'You present yourself as diplomatic, charming, and fair-minded. You have a balanced approach to life.',
    'Scorpio': 'You present yourself as intense, mysterious, and powerful. You have a transformative approach to life.',
    'Sagittarius': 'You present yourself as optimistic, honest, and adventurous. You have an expansive approach to life.',
    'Capricorn': 'You present yourself as responsible, disciplined, and ambitious. You have a structured approach to life.',
    'Aquarius': 'You present yourself as unique, progressive, and detached. You have an innovative approach to life.',
    'Pisces': 'You present yourself as compassionate, dreamy, and receptive. You have a spiritual approach to life.'
  };
  
  return interpretations[sign] || 'Interpretation not available.';
}

function getAspectInterpretation(planet1, planet2, aspectType) {
  // This is a simplified placeholder function
  // In a real app, this would have specific interpretations for each planet combination
  
  const aspectMeanings = {
    'Conjunction': 'brings together the energies of these planets, creating a powerful focus in your chart.',
    'Opposition': 'creates tension between these planetary energies, requiring balance and integration.',
    'Trine': 'creates a harmonious flow between these planetary energies, bringing ease and opportunity.'
  };
  
  return `This ${aspectType.toLowerCase()} ${aspectMeanings[aspectType] || ''}`;
}

// Export functions for use in other modules
export {
  calculatePlanetPositions,
  calculateHouses,
  getZodiacSign,
  getZodiacSymbol,
  generateChartInterpretation
};
