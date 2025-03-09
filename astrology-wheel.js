// This file contains more advanced JavaScript functions for the Intuitive Astrology Wheel application
// It would be linked to the main HTML file in a complete implementation

// Constants for astrological calculations
const ZODIAC_SIGNS = [
    { name: "Aries", symbol: "♈", startDegree: 0, color: "#ff4d4d", element: "Fire" },
    { name: "Taurus", symbol: "♉", startDegree: 30, color: "#65b891", element: "Earth" },
    { name: "Gemini", symbol: "♊", startDegree: 60, color: "#ffce56", element: "Air" },
    { name: "Cancer", symbol: "♋", startDegree: 90, color: "#88c9e0", element: "Water" },
    { name: "Leo", symbol: "♌", startDegree: 120, color: "#ff9f43", element: "Fire" },
    { name: "Virgo", symbol: "♍", startDegree: 150, color: "#a8e6cf", element: "Earth" },
    { name: "Libra", symbol: "♎", startDegree: 180, color: "#dda0dd", element: "Air" },
    { name: "Scorpio", symbol: "♏", startDegree: 210, color: "#c71585", element: "Water" },
    { name: "Sagittarius", symbol: "♐", startDegree: 240, color: "#9370db", element: "Fire" },
    { name: "Capricorn", symbol: "♑", startDegree: 270, color: "#4b4b4b", element: "Earth" },
    { name: "Aquarius", symbol: "♒", startDegree: 300, color: "#00bfff", element: "Air" },
    { name: "Pisces", symbol: "♓", startDegree: 330, color: "#7ed6df", element: "Water" }
];

const PLANETS = [
    { name: "Sun", symbol: "☉", color: "#ffdd44", borderColor: "#ff9900", size: 15 },
    { name: "Moon", symbol: "☽", color: "#f0f0f0", borderColor: "#cccccc", size: 15 },
    { name: "Mercury", symbol: "☿", color: "#88ccff", borderColor: "#3399ff", size: 13 },
    { name: "Venus", symbol: "♀", color: "#ffaacc", borderColor: "#ff6699", size: 13 },
    { name: "Mars", symbol: "♂", color: "#ff6666", borderColor: "#cc0000", size: 13 },
    { name: "Jupiter", symbol: "♃", color: "#ffcc88", borderColor: "#ff9933", size: 17 },
    { name: "Saturn", symbol: "♄", color: "#e0e0e0", borderColor: "#aaaaaa", size: 17 },
    { name: "Uranus", symbol: "♅", color: "#99ffcc", borderColor: "#00cc99", size: 13 },
    { name: "Neptune", symbol: "♆", color: "#99ccff", borderColor: "#0099cc", size: 13 },
    { name: "Pluto", symbol: "♇", color: "#cc99cc", borderColor: "#993399", size: 12 },
    { name: "Chiron", symbol: "⚷", color: "#ff9999", borderColor: "#cc6666", size: 12 },
    { name: "North Node", symbol: "☊", color: "#ffffff", borderColor: "#333333", size: 12 }
];

const ASPECTS = [
    { name: "Conjunction", angle: 0, orb: 8, color: "#9c27b0", lineStyle: "solid" },
    { name: "Opposition", angle: 180, orb: 8, color: "#f44336", lineStyle: "solid" },
    { name: "Trine", angle: 120, orb: 8, color: "#4caf50", lineStyle: "solid" },
    { name: "Square", angle: 90, orb: 8, color: "#ff9800", lineStyle: "solid" },
    { name: "Sextile", angle: 60, orb: 6, color: "#2196f3", lineStyle: "solid" },
    { name: "Quincunx", angle: 150, orb: 5, color: "#795548", lineStyle: "dashed" },
    { name: "Semi-Sextile", angle: 30, orb: 3, color: "#607d8b", lineStyle: "dashed" }
];

// Class to handle all chart calculations and rendering
class AstrologyChart {
    constructor(chartSvg) {
        this.svg = chartSvg;
        this.wheelRadius = 350;
        this.centerX = 400;
        this.centerY = 400;
        this.planets = [];
        this.houses = [];
        this.aspects = [];
    }

    // Calculate planet position in the chart based on zodiac degree
    calculatePlanetPosition(zodiacDegree, distance = 250) {
        // Convert zodiac degree to radians (note that 0° Aries is at the 3 o'clock position in SVG coordinates)
        // We subtract from 450 because SVG starts at top and goes clockwise, while zodiac starts at 3 o'clock and goes counterclockwise
        const angleInRadians = ((450 - zodiacDegree) % 360) * (Math.PI / 180);
        
        // Calculate position
        const x = Math.cos(angleInRadians) * distance;
        const y = Math.sin(angleInRadians) * distance;
        
        return { x, y };
    }

    // Get zodiac sign based on degree
    getZodiacSign(degree) {
        // Normalize the degree to be between 0 and 360
        const normalizedDegree = degree % 360;
        
        // Find the sign
        for (let i = ZODIAC_SIGNS.length - 1; i >= 0; i--) {
            if (normalizedDegree >= ZODIAC_SIGNS[i].startDegree) {
                return ZODIAC_SIGNS[i];
            }
        }
        
        return ZODIAC_SIGNS[0]; // Default to Aries if something goes wrong
    }

    // Calculate the degree within a sign (0-29)
    getDegreeInSign(absoluteDegree) {
        const normalizedDegree = absoluteDegree % 360;
        const sign = this.getZodiacSign(normalizedDegree);
        return Math.floor(normalizedDegree - sign.startDegree);
    }

    // Format position as text (e.g., "15° Aries")
    formatPlanetPosition(degree) {
        const sign = this.getZodiacSign(degree);
        const degreeInSign = this.getDegreeInSign(degree);
        return `${degreeInSign}° ${sign.name}`;
    }

    // Check if two planets form an aspect
    checkAspect(planet1Degree, planet2Degree) {
        // Calculate the shortest angle between the two planets
        let angle = Math.abs(planet1Degree - planet2Degree) % 360;
        if (angle > 180) angle = 360 - angle;
        
        // Check against known aspects
        for (const aspect of ASPECTS) {
            if (Math.abs(angle - aspect.angle) <= aspect.orb) {
                return {
                    name: aspect.name,
                    angle: aspect.angle,
                    orb: Math.abs(angle - aspect.angle).toFixed(1),
                    color: aspect.color,
                    lineStyle: aspect.lineStyle
                };
            }
        }
        
        return null; // No aspect found
    }

    // Calculate all aspects between planets
    calculateAspects() {
        this.aspects = [];
        
        for (let i = 0; i < this.planets.length; i++) {
            for (let j = i + 1; j < this.planets.length; j++) {
                const aspect = this.checkAspect(this.planets[i].degree, this.planets[j].degree);
                
                if (aspect) {
                    this.aspects.push({
                        planet1: this.planets[i],
                        planet2: this.planets[j],
                        aspect: aspect
                    });
                }
            }
        }
        
        return this.aspects;
    }

    // Draw a planet on the chart
    drawPlanet(planet) {
        const position = this.calculatePlanetPosition(planet.degree);
        const planetInfo = PLANETS.find(p => p.name === planet.name);
        
        if (!planetInfo) return;
        
        const planetGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        planetGroup.classList.add("planet");
        planetGroup.dataset.name = planet.name;
        planetGroup.dataset.position = this.formatPlanetPosition(planet.degree);
        planetGroup.setAttribute("transform", `translate(${this.centerX}, ${this.centerY})`);
        
        // Create circle
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", position.x);
        circle.setAttribute("cy", position.y);
        circle.setAttribute("r", planetInfo.size);
        circle.setAttribute("fill", planetInfo.color);
        circle.setAttribute("stroke", planetInfo.borderColor);
        circle.setAttribute("stroke-width", "2");
        circle.classList.add("planet-symbol");
        
        // Create text symbol
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", position.x);
        text.setAttribute("y", position.y + 5); // Slight adjustment for vertical centering
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("fill", "#333");
        text.setAttribute("font-size", "16");
        text.textContent = planetInfo.symbol;
        
        planetGroup.appendChild(circle);
        planetGroup.appendChild(text);
        
        // Add to the planets group in the SVG
        const planetsGroup = document.getElementById("planets");
        planetsGroup.appendChild(planetGroup);
        
        return { element: planetGroup, x: position.x, y: position.y };
    }

    // Draw aspect lines
    drawAspects() {
        const aspectsGroup = document.getElementById("aspects");
        
        // Clear existing aspects
        while (aspectsGroup.firstChild) {
            aspectsGroup.removeChild(aspectsGroup.firstChild);
        }
        
        // Draw each aspect
        this.aspects.forEach(aspectData => {
            const planet1Pos = this.calculatePlanetPosition(aspectData.planet1.degree);
            const planet2Pos = this.calculatePlanetPosition(aspectData.planet2.degree);
            
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", planet1Pos.x);
            line.setAttribute("y1", planet1Pos.y);
            line.setAttribute("x2", planet2Pos.x);
            line.setAttribute("y2", planet2Pos.y);
            line.setAttribute("stroke", aspectData.aspect.color);
            line.setAttribute("stroke-width", "1.5");
            line.setAttribute("stroke-opacity", "0.6");
            
            if (aspectData.aspect.lineStyle === "dashed") {
                line.setAttribute("stroke-dasharray", "5,3");
            }
            
            line.classList.add("aspect-line");
            line.dataset.aspect = `${aspectData.aspect.name}: ${aspectData.planet1.name} to ${aspectData.planet2.name} (orb: ${aspectData.aspect.orb}°)`;
            
            aspectsGroup.appendChild(line);
        });
    }

    // Update house cusps
    drawHouses(houses) {
        this.houses = houses;
        const housesGroup = document.getElementById("houses");
        
        // Clear existing house lines
        while (housesGroup.firstChild) {
            housesGroup.removeChild(housesGroup.firstChild);
        }
        
        // Draw each house cusp
        this.houses.forEach((cusp, index) => {
            const outerPos = this.calculatePlanetPosition(cusp, this.wheelRadius);
            const innerPos = this.calculatePlanetPosition(cusp, 200); // Inner circle radius
            
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", outerPos.x);
            line.setAttribute("y1", outerPos.y);
            line.setAttribute("x2", innerPos.x);
            line.setAttribute("y2", innerPos.y);
            line.setAttribute("stroke", "#bbb");
            line.setAttribute("stroke-width", index === 0 ? "2" : "1"); // Ascendant is thicker
            
            if (index !== 0) { // Non-ascendant houses get dashed lines
                line.setAttribute("stroke-dasharray", "5,3");
            }
            
            housesGroup.appendChild(line);
            
            // Add house number
            if (index === 0) {
                const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                const midPoint = this.calculatePlanetPosition(cusp, this.wheelRadius - 20);
                text.setAttribute("x", midPoint.x);
                text.setAttribute("y", midPoint.y);
                text.setAttribute("text-anchor", "middle");
                text.setAttribute("fill", "#6247aa");
                text.setAttribute("font-size", "14");
                text.setAttribute("font-weight", "bold");
                text.textContent = "ASC";
                housesGroup.appendChild(text);
            }
        });
    }

    // Update the entire chart with new data
    updateChart(birthData) {
        // In a real implementation, this would calculate planetary positions
        // based on birth date, time, and location using astronomical algorithms
        
        // For demo purposes, we'll use some sample data
        this.planets = [
            { name: "Sun", degree: 15 },        // 15° Aries
            { name: "Moon", degree: 113 },      // 23° Cancer
            { name: "Mercury", degree: 335 },   // 5° Pisces
            { name: "Venus", degree: 319 },     // 19° Aquarius
            { name: "Mars", degree: 220 },      // 10° Scorpio
            { name: "Jupiter", degree: 92 },    // 2° Cancer
            { name: "Saturn", degree: 275 },    // 5° Capricorn
            { name: "Uranus", degree: 43 },     // 13° Taurus
            { name: "Neptune", degree: 355 },   // 25° Pisces
            { name: "Pluto", degree: 260 }      // 20° Sagittarius
        ];
        
        // Sample house cusps (Placidus system example)
        const houseCusps = [78, 108, 138, 168, 198, 228, 258, 288, 318, 348, 18, 48];
        
        // Clear existing planets
        const planetsGroup = document.getElementById("planets");
        while (planetsGroup.firstChild) {
            planetsGroup.removeChild(planetsGroup.firstChild);
        }
        
        // Draw planets
        this.planets.forEach(planet => {
            this.drawPlanet(planet);
        });
        
        // Calculate and draw aspects
        this.calculateAspects();
        this.drawAspects();
        
        // Draw houses
        this.drawHouses(houseCusps);
        
        return {
            planets: this.planets.map(p => ({
                name: p.name,
                position: this.formatPlanetPosition(p.degree)
            })),
            aspects: this.aspects.map(a => ({
                aspect: a.aspect.name,
                planets: `${a.planet1.name} to ${a.planet2.name}`,
                orb: a.aspect.orb
            }))
        };
    }

    // Show detailed information about the chart
    generateChartReport() {
        let report = {
            planets: {},
            houses: {},
            aspects: []
        };
        
        // Planet information
        this.planets.forEach(planet => {
            const sign = this.getZodiacSign(planet.degree);
            const degreeInSign = this.getDegreeInSign(planet.degree);
            
            report.planets[planet.name] = {
                sign: sign.name,
                degree: degreeInSign,
                fullPosition: `${degreeInSign}° ${sign.name}`,
                element: sign.element
            };
        });
        
        // House information
        this.houses.forEach((cusp, index) => {
            const houseNumber = (index + 1);
            const sign = this.getZodiacSign(cusp);
            const degreeInSign = this.getDegreeInSign(cusp);
            
            report.houses[houseNumber] = {
                sign: sign.name,
                degree: degreeInSign,
                fullPosition: `${degreeInSign}° ${sign.name}`
            };
        });
        
        // Aspect information
        this.aspects.forEach(aspectData => {
            report.aspects.push({
                planets: `${aspectData.planet1.name} ${aspectData.aspect.name} ${aspectData.planet2.name}`,
                orb: aspectData.aspect.orb,
                nature: this.getAspectNature(aspectData.aspect.name)
            });
        });
        
        return report;
    }
    
    // Helper to classify aspects
    getAspectNature(aspectName) {
        const harmonious = ["Trine", "Sextile"];
        const challenging = ["Square", "Opposition", "Quincunx"];
        const neutral = ["Conjunction", "Semi-Sextile"];
        
        if (harmonious.includes(aspectName)) return "Harmonious";
        if (challenging.includes(aspectName)) return "Challenging";
        return "Neutral";
    }
}

// UI Enhancement Functions

// Function to create animation when chart is generated
function animateChartGeneration() {
    const zodiacWheel = document.getElementById('zodiac-wheel');
    const planets = document.querySelectorAll('.planet');
    const aspectLines = document.querySelectorAll('.aspect-line');
    
    // Reset animations
    zodiacWheel.style.animation = 'none';
    zodiacWheel.offsetHeight; // Trigger reflow
    
    // Animate zodiac wheel
    zodiacWheel.style.animation = 'rotateIn 1.5s';
    
    // Animate planets with staggered delay
    planets.forEach((planet, index) => {
        planet.style.opacity = '0';
        planet.style.transform = 'scale(0)';
        planet.style.transition = 'opacity 0.8s, transform 0.8s';
        
        setTimeout(() => {
            planet.style.opacity = '1';
            planet.style.transform = 'scale(1)';
        }, 1000 + (index * 100));
    });
    
    // Animate aspect lines
    aspectLines.forEach((line, index) => {
        line.style.strokeDasharray = line.getTotalLength();
        line.style.strokeDashoffset = line.getTotalLength();
        line.style.transition = 'stroke-dashoffset 1s ease-in-out';
        
        setTimeout(() => {
            line.style.strokeDashoffset = '0';
        }, 1500 + (index * 100));
    });
}

// Function to add particle effects for a magical touch
function addMagicalEffects() {
    const svgContainer = document.querySelector('.chart-container');
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('magic-particle');
        
        // Random position, size, and animation duration
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        // Random color
        const hue = Math.floor(Math.random() * 360);
        particle.style.backgroundColor = `hsla(${hue}, 100%, 70%, 0.8)`;
        
        svgContainer.appendChild(particle);
    }
}

// Add styles for magical particles
function injectParticleStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .magic-particle {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            opacity: 0;
            z-index: 10;
            filter: blur(1px);
            animation: floatParticle linear infinite, glowParticle 2s ease-in-out infinite alternate;
        }
        
        @keyframes floatParticle {
            0% {
                transform: translate(0, 0) rotate(0deg);
                opacity: 0;
            }
            20% {
                opacity: 0.8;
            }
            80% {
                opacity: 0.8;
            }
            100% {
                transform: translate(${Math.random() > 0.5 ? '+' : '-'}${Math.random() * 100 + 50}px, ${Math.random() > 0.5 ? '+' : '-'}${Math.random() * 100 + 50}px) rotate(360deg);
                opacity: 0;
            }
        }
        
        @keyframes glowParticle {
            0% {
                filter: blur(1px) brightness(1);
            }
            100% {
                filter: blur(2px) brightness(1.5);
            }
        }
    `;
    
    document.head.appendChild(styleElement);
}

// Initialize chart
document.addEventListener('DOMContentLoaded', function() {
    const chartSvg = document.getElementById('chart-svg');
    const chart = new AstrologyChart(chartSvg);
    
    // Add magical particle effects
    injectParticleStyles();
    addMagicalEffects();
    
    // Handle chart generation
    document.getElementById('generate-chart').addEventListener('click', function() {
        const name = document.getElementById('name').value || 'Anonymous';
        const birthDate = document.getElementById('birth-date').value;
        const birthTime = document.getElementById('birth-time').value;
        const birthLocation = document.getElementById('birth-location').value;
        
        if (!birthDate) {
            alert('Please enter a birth date');
            return;
        }
        
        // In a real app, we'd use the birth details to calculate positions
        // For now, we'll use our sample data
        const chartData = chart.updateChart({
            date: birthDate,
            time: birthTime,
            location: birthLocation
        });
        
        // Animate the new chart
        animateChartGeneration();
        
        console.log('Chart generated for:', name);
        console.log('Planet positions:', chartData.planets);
        console.log('Aspects:', chartData.aspects);
    });
});
