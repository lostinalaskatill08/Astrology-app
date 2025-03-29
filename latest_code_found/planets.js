// Intuitive Astrology Wheel - Planet Definitions
// This file contains constants for astrological calculations and interpretations

// Zodiac Signs data
const ZODIAC_SIGNS = [
    { 
        name: "Aries", 
        symbol: "♈", 
        startDegree: 0, 
        color: "#ff4d4d", 
        element: "Fire",
        modality: "Cardinal",
        ruler: "Mars",
        keywords: ["Initiative", "Courage", "Action", "Self", "Pioneering"]
    },
    { 
        name: "Taurus", 
        symbol: "♉", 
        startDegree: 30, 
        color: "#65b891", 
        element: "Earth",
        modality: "Fixed",
        ruler: "Venus",
        keywords: ["Stability", "Sensuality", "Resources", "Values", "Persistence"]
    },
    { 
        name: "Gemini", 
        symbol: "♊", 
        startDegree: 60, 
        color: "#ffce56", 
        element: "Air",
        modality: "Mutable",
        ruler: "Mercury",
        keywords: ["Communication", "Curiosity", "Duality", "Adaptability", "Information"]
    },
    { 
        name: "Cancer", 
        symbol: "♋", 
        startDegree: 90, 
        color: "#88c9e0", 
        element: "Water",
        modality: "Cardinal",
        ruler: "Moon",
        keywords: ["Nurturing", "Home", "Emotion", "Security", "Memory"]
    },
    { 
        name: "Leo", 
        symbol: "♌", 
        startDegree: 120, 
        color: "#ff9f43", 
        element: "Fire",
        modality: "Fixed",
        ruler: "Sun",
        keywords: ["Creativity", "Leadership", "Expression", "Generosity", "Heart"]
    },
    { 
        name: "Virgo", 
        symbol: "♍", 
        startDegree: 150, 
        color: "#a8e6cf", 
        element: "Earth",
        modality: "Mutable",
        ruler: "Mercury",
        keywords: ["Analysis", "Service", "Improvement", "Health", "Precision"]
    },
    { 
        name: "Libra", 
        symbol: "♎", 
        startDegree: 180, 
        color: "#dda0dd", 
        element: "Air",
        modality: "Cardinal",
        ruler: "Venus",
        keywords: ["Balance", "Partnership", "Harmony", "Justice", "Beauty"]
    },
    { 
        name: "Scorpio", 
        symbol: "♏", 
        startDegree: 210, 
        color: "#c71585", 
        element: "Water",
        modality: "Fixed",
        ruler: "Pluto",
        keywords: ["Transformation", "Intensity", "Depth", "Power", "Mystery"]
    },
    { 
        name: "Sagittarius", 
        symbol: "♐", 
        startDegree: 240, 
        color: "#9370db", 
        element: "Fire",
        modality: "Mutable",
        ruler: "Jupiter",
        keywords: ["Expansion", "Freedom", "Philosophy", "Optimism", "Adventure"]
    },
    { 
        name: "Capricorn", 
        symbol: "♑", 
        startDegree: 270, 
        color: "#4b4b4b", 
        element: "Earth",
        modality: "Cardinal",
        ruler: "Saturn",
        keywords: ["Ambition", "Structure", "Responsibility", "Mastery", "Achievement"]
    },
    { 
        name: "Aquarius", 
        symbol: "♒", 
        startDegree: 300, 
        color: "#00bfff", 
        element: "Air",
        modality: "Fixed",
        ruler: "Uranus",
        keywords: ["Innovation", "Community", "Progress", "Individuality", "Humanitarian"]
    },
    { 
        name: "Pisces", 
        symbol: "♓", 
        startDegree: 330, 
        color: "#7ed6df", 
        element: "Water",
        modality: "Mutable",
        ruler: "Neptune",
        keywords: ["Compassion", "Imagination", "Spirituality", "Unity", "Transcendence"]
    }
];

// Planet configurations and data
const PLANETS = [
    {
        name: 'Sun',
        symbol: '☉',
        color: '#FFB800',
        size: 20,
        orbitalRadius: 200,
        keywords: ['identity', 'ego', 'vitality', 'purpose', 'self-expression'],
        renderDetails: {
            type: 'gasGiant',
            bands: false,
            glow: true
        },
        gradientColors: ['#FFB800', '#FF8C00'],
        interpretations: {
            Aries: "You express yourself with boldness, initiative, and a pioneering spirit. Your identity is tied to being first, taking action, and leading the way forward.",
            Taurus: "You express yourself with steadiness, reliability, and sensuality. Your identity is tied to creating security, enjoying life's pleasures, and building lasting value.",
            Gemini: "You express yourself with curiosity, versatility, and communication skills. Your identity is tied to learning, sharing ideas, and making connections.",
            Cancer: "You express yourself with sensitivity, nurturing, and emotional depth. Your identity is tied to caring for others, creating security, and honoring the past.",
            Leo: "You express yourself with warmth, creativity, and dramatic flair. Your identity is tied to being seen, appreciated, and making a memorable impact.",
            Virgo: "You express yourself with precision, analysis, and helpfulness. Your identity is tied to improving things, solving problems, and mastering skills.",
            Libra: "You express yourself with diplomacy, fairness, and aesthetic sensibility. Your identity is tied to creating harmony, forming partnerships, and appreciating beauty.",
            Scorpio: "You express yourself with intensity, depth, and transformative power. Your identity is tied to exploring mysteries, wielding influence, and experiencing profound change.",
            Sagittarius: "You express yourself with optimism, honesty, and philosophical insight. Your identity is tied to exploring possibilities, seeking truth, and expanding horizons.",
            Capricorn: "You express yourself with discipline, responsibility, and ambition. Your identity is tied to achieving goals, building structures, and earning respect.",
            Aquarius: "You express yourself with originality, humanitarian vision, and intellectual detachment. Your identity is tied to innovation, community involvement, and progressive ideals.",
            Pisces: "You express yourself with compassion, imagination, and spiritual sensitivity. Your identity is tied to transcending boundaries, artistic expression, and emotional connection."
        }
    },
    {
        name: 'Moon',
        symbol: '☽',
        color: '#SILVER',
        size: 18,
        orbitalRadius: 185,
        keywords: ['emotions', 'intuition', 'nurturing', 'subconscious', 'habits'],
        renderDetails: {
            type: 'rocky',
            texture: 'cratered',
            glow: true
        },
        interpretations: {
            Aries: "Your emotional responses are quick, direct, and sometimes impulsive. You need independence and action to feel emotionally secure and may become restless when things move too slowly.",
            Taurus: "Your emotional responses are steady, sensual, and security-oriented. You need stability, comfort, and tangible pleasures to feel emotionally secure and may resist change.",
            Gemini: "Your emotional responses are adaptable, curious, and intellectually oriented. You need mental stimulation and variety to feel emotionally secure and may become anxious when bored.",
            Cancer: "Your emotional responses are deeply sensitive, nurturing, and protective. You need close connections and a sense of belonging to feel emotionally secure and may withdraw when feeling vulnerable.",
            Leo: "Your emotional responses are warm, generous, and dramatic. You need recognition and creative expression to feel emotionally secure and may become hurt when overlooked.",
            Virgo: "Your emotional responses are practical, analytical, and service-oriented. You need order and usefulness to feel emotionally secure and may worry when things seem chaotic.",
            Libra: "Your emotional responses are balanced, harmonious, and relationship-focused. You need beauty and cooperation to feel emotionally secure and may feel distressed by conflict.",
            Scorpio: "Your emotional responses are intense, passionate, and transformative. You need depth and authenticity to feel emotionally secure and may become suspicious when things seem superficial.",
            Sagittarius: "Your emotional responses are optimistic, freedom-loving, and adventurous. You need space and meaning to feel emotionally secure and may feel trapped by routine.",
            Capricorn: "Your emotional responses are disciplined, responsible, and achievement-oriented. You need structure and accomplishment to feel emotionally secure and may suppress feelings to maintain control.",
            Aquarius: "Your emotional responses are detached, humanitarian, and unconventional. You need intellectual freedom and social connection to feel emotionally secure and may distance yourself from overwhelming emotions.",
            Pisces: "Your emotional responses are compassionate, intuitive, and spiritually attuned. You need creative and spiritual outlets to feel emotionally secure and may escape into fantasy when reality feels harsh."
        }
    },
    {
        name: 'Mercury',
        symbol: '☿',
        color: '#ADD8E6',
        size: 14,
        orbitalRadius: 170,
        keywords: ['communication', 'intellect', 'perception', 'learning', 'information'],
        interpretations: {
            Aries: "Your thinking is quick, direct, and pioneering with a preference for immediate action. You communicate with enthusiasm and may sometimes speak before thinking.",
            Taurus: "Your communication style is deliberate, practical, and sensory-oriented. You think methodically and prefer concrete, useful information.",
            Gemini: "Your thinking is quick, versatile, and curious with excellent verbal abilities. You gather and share information constantly and may juggle multiple interests.",
            Cancer: "Your communication style is intuitive, emotionally attuned, and protective. You think with feeling and remember information that has emotional significance.",
            Leo: "Your thinking is creative, expressive, and confident with natural leadership in communication. You speak from the heart and may have a flair for dramatic storytelling.",
            Virgo: "Your communication style is precise, analytical, and detail-oriented. You think systematically and excel at problem-solving and critical analysis.",
            Libra: "Your thinking is balanced, diplomatic, and focused on fairness and harmony. You communicate with tact and consider multiple perspectives before deciding.",
            Scorpio: "Your communication style is penetrating, investigative, and psychologically astute. You think deeply and may be drawn to taboo or hidden subjects.",
            Sagittarius: "Your thinking is expansive, optimistic, and philosophically oriented. You communicate with enthusiasm and are interested in the big picture and meaning.",
            Capricorn: "Your communication style is structured, practical, and achievement-focused. You think strategically and value information that helps you reach your goals.",
            Aquarius: "Your thinking is innovative, original, and oriented toward humanitarian ideals. You communicate in unique ways and may be ahead of your time.",
            Pisces: "Your communication style is intuitive, imaginative, and spiritually attuned. You think in images and metaphors and may absorb information through osmosis."
        }
    },
    {
        name: 'Venus',
        symbol: '♀',
        color: '#FFC0CB',
        size: 16,
        orbitalRadius: 155,
        keywords: ['love', 'beauty', 'harmony', 'attraction', 'values'],
        interpretations: {
            Aries: "You approach love with enthusiasm and directness, valuing excitement and independence. You are attracted to confident, active partners and may pursue relationships boldly.",
            Taurus: "You express love through sensuality and loyalty, valuing stability and comfort. You are attracted to reliable, sensual partners and create relationships that last.",
            Gemini: "You approach relationships with curiosity and mental connection, valuing communication and variety. You are attracted to witty, interesting partners and need mental stimulation.",
            Cancer: "You express love through nurturing and emotional bonding, valuing security and family. You are attracted to caring, sensitive partners and create deeply connected relationships.",
            Leo: "You approach relationships with warmth and generosity, valuing romance and creative expression. You are attracted to confident, charismatic partners and enjoy grand gestures.",
            Virgo: "You express love through acts of service and attention to detail, valuing improvement and practicality. You are attracted to skilled, helpful partners and show love by solving problems.",
            Libra: "You approach relationships with diplomacy and fairness, valuing harmony and partnership. You are attracted to balanced, beautiful partners and excel at compromise.",
            Scorpio: "You express love with intensity and depth, valuing emotional intimacy and transformation. You are attracted to mysterious, powerful partners and form passionate bonds.",
            Sagittarius: "You approach relationships with optimism and freedom, valuing growth and adventure. You are attracted to philosophical, adventurous partners and need space to explore.",
            Capricorn: "You express love through commitment and responsibility, valuing tradition and achievement. You are attracted to accomplished, reliable partners and build relationships slowly.",
            Aquarius: "You approach relationships with friendship and idealism, valuing independence and uniqueness. You are attracted to unusual, intellectual partners and may have unconventional arrangements.",
            Pisces: "You express love with compassion and spiritual connection, valuing transcendence and unity. You are attracted to sensitive, artistic partners and may idealize your relationships."
        }
    },
    {
        name: 'Mars',
        symbol: '♂',
        color: '#FF4500',
        size: 15,
        orbitalRadius: 140,
        keywords: ['action', 'desire', 'energy', 'courage', 'assertion'],
        interpretations: {
            Aries: "You take action with courage and directness, asserting yourself boldly and independently. Your energy is explosive, pioneering, and competitive.",
            Taurus: "You channel energy with persistence and determination, working steadily toward practical goals. Your actions are deliberate, sensual, and resource-oriented.",
            Gemini: "You take action through communication and mental agility, asserting yourself through words and ideas. Your energy is versatile, curious, and quick-moving.",
            Cancer: "You channel energy into protection and nurturing, asserting yourself indirectly and emotionally. Your actions are protective, intuitive, and security-oriented.",
            Leo: "You take action with confidence and creativity, asserting yourself dramatically and generously. Your energy is warm, expressive, and leadership-oriented.",
            Virgo: "You channel energy into practical service and improvement, working with precision and analysis. Your actions are methodical, helpful, and detail-oriented.",
            Libra: "You take action through cooperation and diplomacy, asserting yourself in balanced and fair ways. Your energy is harmonizing, relationship-oriented, and justice-seeking.",
            Scorpio: "You channel energy with intensity and strategy, working with determination and transformative power. Your actions are penetrating, resourceful, and sometimes secretive.",
            Sagittarius: "You take action with enthusiasm and optimism, asserting yourself through exploration and growth. Your energy is adventurous, philosophical, and freedom-loving.",
            Capricorn: "You channel energy into structured achievement, working with discipline and responsibility. Your actions are ambitious, patient, and goal-oriented.",
            Aquarius: "You take action for humanitarian causes and innovation, asserting yourself through originality. Your energy is progressive, group-oriented, and sometimes rebellious.",
            Pisces: "You channel energy in subtle, intuitive ways, working with compassion and spiritual motivation. Your actions are inspired, imaginative, and sometimes indirect."
        }
    },
    {
        name: 'Jupiter',
        symbol: '♃',
        color: '#FFA500',
        size: 22,
        orbitalRadius: 125,
        keywords: ['expansion', 'growth', 'optimism', 'abundance', 'wisdom'],
        renderDetails: {
            type: 'gasGiant',
            bands: true
        },
        gradientColors: ['#FFA500', '#CD853F'],
        interpretations: {
            Aries: "You find growth through initiative and pioneering action, expanding through courage and leadership. Your optimism fuels bold new beginnings and independent ventures.",
            Taurus: "You experience abundance through practical resources and sensual enjoyment, growing through stability. Your optimism manifests as steady accumulation and appreciation of life's pleasures.",
            Gemini: "You find expansion through learning and communication, growing through intellectual curiosity. Your optimism fuels diverse interests and the gathering of knowledge.",
            Cancer: "You experience abundance through emotional connections and nurturing, expanding through family and roots. Your optimism manifests as emotional generosity and creating security.",
            Leo: "You find growth through creative self-expression and generosity, expanding through joy and leadership. Your optimism fuels dramatic gestures and heartfelt celebrations.",
            Virgo: "You experience abundance through service and improvement, growing through practical skills and analysis. Your optimism manifests as finding solutions and refining systems.",
            Libra: "You find expansion through relationships and cooperation, growing through harmony and fairness. Your optimism fuels successful partnerships and diplomatic solutions.",
            Scorpio: "You experience abundance through transformation and depth, expanding through powerful emotional experiences. Your optimism manifests as psychological insight and regenerative power.",
            Sagittarius: "You find growth through exploration and higher learning, expanding through optimism and adventure. Your natural enthusiasm fuels philosophical quests and far-reaching journeys.",
            Capricorn: "You experience abundance through achievement and structure, growing through discipline and responsibility. Your optimism manifests as ambitious goals and lasting accomplishments.",
            Aquarius: "You find expansion through innovation and humanitarian ideals, growing through originality and vision. Your optimism fuels progressive change and group endeavors.",
            Pisces: "You experience abundance through spiritual connection and compassion, expanding through imagination and unity. Your optimism manifests as artistic inspiration and universal love."
        }
    },
    {
        name: 'Saturn',
        symbol: '♄',
        color: '#708090',
        size: 20,
        orbitalRadius: 110,
        keywords: ['discipline', 'responsibility', 'limitation', 'structure', 'maturity'],
        renderDetails: {
            type: 'ringed',
            ringColor: '#A9A9A9'
        },
        interpretations: {
            Aries: "Your life lessons involve tempering impulsiveness with patience, learning discipline in self-assertion. You are challenged to develop sustainable independence and leadership.",
            Taurus: "Your challenges center on developing material security through hard work and delayed gratification. You are learning to build lasting value and use resources responsibly.",
            Gemini: "Your life lessons involve bringing structure to communication and learning, developing mental discipline. You are challenged to transform curiosity into expertise.",
            Cancer: "Your challenges center on emotional maturity and creating security through responsibility. You are learning to balance sensitivity with strength and nurturing with boundaries.",
            Leo: "Your life lessons involve authentic self-expression balanced with humility and consistent effort. You are challenged to develop leadership that serves rather than seeks applause.",
            Virgo: "Your challenges center on perfectionism and learning to balance critical analysis with self-acceptance. You are learning to create systems that serve rather than restrict.",
            Libra: "Your life lessons involve creating balanced relationships through commitment and responsibility. You are challenged to make difficult decisions while maintaining harmony.",
            Scorpio: "Your challenges center on emotional control and using power with integrity and wisdom. You are learning to transform fear into strength and desire into mastery.",
            Sagittarius: "Your life lessons involve tempering optimism with realism and bringing structure to beliefs. You are challenged to transform exploration into wisdom and freedom into purpose.",
            Capricorn: "Your challenges center on achievement through persistent effort and responsible leadership. You are learning to balance ambition with compassion and tradition with innovation.",
            Aquarius: "Your life lessons involve bringing practical structure to humanitarian ideals and innovation. You are challenged to transform rebellion into constructive change.",
            Pisces: "Your challenges center on grounding spiritual insights and creating boundaries in compassion. You are learning to balance dreams with reality and sacrifice with self-care."
        }
    },
    {
        name: 'Uranus',
        symbol: '♅',
        color: '#00FFFF',
        size: 17,
        orbitalRadius: 95,
        keywords: ['innovation', 'rebellion', 'originality', 'awakening', 'freedom'],
        interpretations: {
            Aries: "You experience breakthrough through bold individuality and pioneering innovation. Your revolutionary energy expresses through independent initiatives and sudden courage.",
            Taurus: "You revolutionize values and resources, bringing unexpected changes to stability. Your innovative energy transforms material security and challenges fixed patterns.",
            Gemini: "You experience breakthrough through original thinking and revolutionary communication. Your awakening energy expresses through intellectual insights and new connections.",
            Cancer: "You revolutionize emotional patterns and family structures with unexpected insights. Your innovative energy transforms security needs and ancestral patterns.",
            Leo: "You experience breakthrough through authentic self-expression and creative innovation. Your revolutionary energy expresses through unique performances and heart-centered leadership.",
            Virgo: "You revolutionize methods and routines, bringing unexpected improvements to daily life. Your awakening energy transforms service and work patterns with brilliant solutions.",
            Libra: "You experience breakthrough through unconventional relationships and balanced freedom. Your innovative energy expresses through partnership experiments and social justice.",
            Scorpio: "You revolutionize transformative processes, bringing unexpected regeneration. Your awakening energy transforms power dynamics and shared resources.",
            Sagittarius: "You experience breakthrough through expanded awareness and philosophical revolution. Your innovative energy expresses through visionary beliefs and freedom quests.",
            Capricorn: "You revolutionize structures and traditions, bringing unexpected changes to authority. Your awakening energy transforms achievement patterns and societal structures.",
            Aquarius: "You experience breakthrough through humanitarian vision and collective innovation. Your revolutionary energy expresses naturally through group endeavors and future-oriented thinking.",
            Pisces: "You revolutionize spiritual understanding, bringing unexpected mystical insights. Your innovative energy transforms compassion into universal awareness and transcendent freedom."
        }
    },
    {
        name: 'Neptune',
        symbol: '♆',
        color: '#9370DB',
        size: 17,
        orbitalRadius: 80,
        keywords: ['spirituality', 'imagination', 'inspiration', 'illusion', 'compassion'],
        interpretations: {
            Aries: "You dissolve boundaries through inspired action and spiritual courage. Your imagination fuels pioneering visions and compassionate initiatives.",
            Taurus: "You transcend material limitations through spiritual values and sensory awareness. Your imagination transforms resources into beauty and ordinary moments into sacred experiences.",
            Gemini: "You dissolve mental boundaries through inspired communication and spiritual ideas. Your imagination fuels poetic expression and intuitive connections between concepts.",
            Cancer: "You transcend emotional patterns through intuitive connection and spiritual nurturing. Your imagination transforms family bonds into soul connections and memories into mystical experiences.",
            Leo: "You dissolve ego boundaries through inspired creativity and spiritual self-expression. Your imagination fuels dramatic performances and heart-centered compassion.",
            Virgo: "You transcend perfectionism through compassionate service and spiritual discernment. Your imagination transforms daily routines into sacred rituals and work into devotion.",
            Libra: "You dissolve relationship boundaries through spiritual harmony and inspired cooperation. Your imagination fuels artistic partnerships and idealistic visions of justice.",
            Scorpio: "You transcend power dynamics through spiritual transformation and mystical depth. Your imagination transforms intense experiences into transcendent awareness.",
            Sagittarius: "You dissolve belief limitations through spiritual wisdom and inspired vision. Your imagination fuels philosophical quests and expansive compassion.",
            Capricorn: "You transcend structural boundaries through spiritual discipline and inspired achievement. Your imagination transforms ambition into service and tradition into timeless wisdom.",
            Aquarius: "You dissolve social boundaries through spiritual idealism and inspired innovation. Your imagination fuels humanitarian visions and collective consciousness.",
            Pisces: "You transcend all boundaries through spiritual unity and complete compassion. Your imagination flows naturally as artistic inspiration and mystical awareness."
        }
    },
    {
        name: 'Pluto',
        symbol: '♇',
        color: '#800080',
        size: 13,
        orbitalRadius: 65,
        keywords: ['transformation', 'power', 'regeneration', 'intensity', 'depth'],
        interpretations: {
            Aries: "You transform through powerful initiation and the rebirth of personal identity. Your regenerative power expresses through courageous new beginnings and self-reinvention.",
            Taurus: "You regenerate through deep changes in values and complete resource transformation. Your transformative power restructures security and relationship to possessions.",
            Gemini: "You transform through powerful communication and the rebirth of mental patterns. Your regenerative power revolutionizes perception and information-sharing.",
            Cancer: "You regenerate through deep emotional changes and complete family transformation. Your transformative power restructures security needs and ancestral patterns.",
            Leo: "You transform through powerful self-expression and the rebirth of creative identity. Your regenerative power revolutionizes leadership and authentic performance.",
            Virgo: "You regenerate through deep methodological changes and complete service transformation. Your transformative power restructures daily routines and healing approaches.",
            Libra: "You transform through powerful relationships and the rebirth of partnership patterns. Your regenerative power revolutionizes cooperation and balance of power.",
            Scorpio: "You regenerate through deep psychological changes and complete personal transformation. Your transformative power expresses naturally through intensity and emotional depth.",
            Sagittarius: "You transform through powerful beliefs and the rebirth of philosophical outlook. Your regenerative power revolutionizes meaning-making and truth-seeking.",
            Capricorn: "You regenerate through deep structural changes and complete authority transformation. Your transformative power restructures ambition and societal systems.",
            Aquarius: "You transform through powerful social vision and the rebirth of collective patterns. Your regenerative power revolutionizes group dynamics and future planning.",
            Pisces: "You regenerate through deep spiritual changes and complete transcendent transformation. Your transformative power restructures compassion and universal connection."
        }
    }
];

// House data
const HOUSES = [
    { number: 1, color: '#FF4D4D', name: 'Ascendant' },
    { number: 2, color: '#65B891', name: 'Possessions' },
    { number: 3, color: '#FFCE56', name: 'Communication' },
    { number: 4, color: '#88C9E0', name: 'Home' },
    { number: 5, color: '#FF9F43', name: 'Creativity' },
    { number: 6, color: '#A8E6CF', name: 'Service' },
    { number: 7, color: '#DDA0DD', name: 'Partnerships' },
    { number: 8, color: '#C71585', name: 'Transformation' },
    { number: 9, color: '#9370DB', name: 'Philosophy' },
    { number: 10, color: '#4B4B4B', name: 'Career' },
    { number: 11, color: '#00BFFF', name: 'Community' },
    { number: 12, color: '#7ED6DF', name: 'Spirituality' }
];

// Aspect definitions
const ASPECTS = [
    { name: 'Conjunction', degrees: 0, orb: 8, color: '#FFD700' },
    { name: 'Opposition', degrees: 180, orb: 8, color: '#FF4500' },
    { name: 'Trine', degrees: 120, orb: 8, color: '#98FB98' },
    { name: 'Square', degrees: 90, orb: 8, color: '#DC143C' },
    { name: 'Sextile', degrees: 60, orb: 6, color: '#87CEEB' }
];

// Zodiac interpretations
const ZODIAC_INTERPRETATIONS = {
    Aries: {
        element: 'Fire',
        modality: 'Cardinal',
        ruler: 'Mars',
        keywords: ['Initiative', 'Courage', 'Action', 'Leadership', 'Self-expression']
    },
    Taurus: {
        element: 'Earth',
        modality: 'Fixed',
        ruler: 'Venus',
        keywords: ['Stability', 'Resources', 'Sensuality', 'Values', 'Persistence']
    },
    Gemini: {
        element: 'Air',
        modality: 'Mutable',
        ruler: 'Mercury',
        keywords: ['Communication', 'Versatility', 'Curiosity', 'Learning', 'Exchange']
    },
    Cancer: {
        element: 'Water',
        modality: 'Cardinal',
        ruler: 'Moon',
        keywords: ['Nurturing', 'Emotion', 'Security', 'Memory', 'Home']
    },
    Leo: {
        element: 'Fire',
        modality: 'Fixed',
        ruler: 'Sun',
        keywords: ['Creativity', 'Drama', 'Pride', 'Joy', 'Expression']
    },
    Virgo: {
        element: 'Earth',
        modality: 'Mutable',
        ruler: 'Mercury',
        keywords: ['Analysis', 'Service', 'Health', 'Skill', 'Improvement']
    },
    Libra: {
        element: 'Air',
        modality: 'Cardinal',
        ruler: 'Venus',
        keywords: ['Balance', 'Partnership', 'Justice', 'Harmony', 'Art']
    },
    Scorpio: {
        element: 'Water',
        modality: 'Fixed',
        ruler: 'Pluto',
        keywords: ['Intensity', 'Power', 'Transformation', 'Mystery', 'Depth']
    },
    Sagittarius: {
        element: 'Fire',
        modality: 'Mutable',
        ruler: 'Jupiter',
        keywords: ['Adventure', 'Philosophy', 'Expansion', 'Optimism', 'Truth']
    },
    Capricorn: {
        element: 'Earth',
        modality: 'Cardinal',
        ruler: 'Saturn',
        keywords: ['Ambition', 'Structure', 'Achievement', 'Responsibility', 'Mastery']
    },
    Aquarius: {
        element: 'Air',
        modality: 'Fixed',
        ruler: 'Uranus',
        keywords: ['Innovation', 'Community', 'Freedom', 'Progress', 'Originality']
    },
    Pisces: {
        element: 'Water',
        modality: 'Mutable',
        ruler: 'Neptune',
        keywords: ['Compassion', 'Dreams', 'Unity', 'Imagination', 'Spirituality']
    }
};

// Export constants for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ZODIAC_SIGNS,
        PLANETS,
        HOUSES,
        ASPECTS,
        ZODIAC_INTERPRETATIONS
    };
}
