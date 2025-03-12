/****************************************************************************
 * ENHANCED PLANETS.JS - COMPLETE SINGLE-FILE VERSION
 * 
 * This file contains:
 *  1) ZODIAC_SIGNS array
 *  2) ASPECTS array
 *  3) HOUSE_INTERPRETATIONS object (houses 1–12)
 *  4) The PLANETS array with their rendering details and interpretations
 *  5) The "AstrologyCalculator" and "EnhancedAstrologyChart" classes
 *  6) A DOMContentLoaded block that sets up the chart
 * 
 * Copy and paste this entire file into your repo. 
 * Make sure your HTML includes matching IDs and elements for it to work.
 ****************************************************************************/

/* ------------------------------------------------------------------------
   1) ZODIAC_SIGNS - Provide name, symbol, color, and element for each sign
   ------------------------------------------------------------------------ */
const ZODIAC_SIGNS = [
  { name: "Aries",      symbol: "♈", color: "#ff0000", element: "Fire" },
  { name: "Taurus",     symbol: "♉", color: "#008000", element: "Earth" },
  { name: "Gemini",     symbol: "♊", color: "#cc9900", element: "Air" },
  { name: "Cancer",     symbol: "♋", color: "#339999", element: "Water" },
  { name: "Leo",        symbol: "♌", color: "#ff9900", element: "Fire" },
  { name: "Virgo",      symbol: "♍", color: "#669900", element: "Earth" },
  { name: "Libra",      symbol: "♎", color: "#4da6ff", element: "Air" },
  { name: "Scorpio",    symbol: "♏", color: "#9900cc", element: "Water" },
  { name: "Sagittarius",symbol: "♐", color: "#ff66ff", element: "Fire" },
  { name: "Capricorn",  symbol: "♑", color: "#996633", element: "Earth" },
  { name: "Aquarius",   symbol: "♒", color: "#33cccc", element: "Air" },
  { name: "Pisces",     symbol: "♓", color: "#6666cc", element: "Water" },
];

/* ------------------------------------------------------------------
   2) ASPECTS - Define major aspects, angles, orb, color, line styles
   ------------------------------------------------------------------ */
const ASPECTS = [
  { name: "Conjunction", angle: 0,   orb: 8, color: "#c05", lineStyle: "solid" },
  { name: "Sextile",     angle: 60,  orb: 4, color: "#09f", lineStyle: "dashed" },
  { name: "Square",      angle: 90,  orb: 6, color: "#f00", lineStyle: "solid" },
  { name: "Trine",       angle: 120, orb: 6, color: "#0c0", lineStyle: "solid" },
  { name: "Opposition",  angle: 180, orb: 8, color: "#60f", lineStyle: "solid" }
];

/* --------------------------------------------------------------------------------
   3) HOUSE_INTERPRETATIONS (1–12) with name, title, description, sign meanings
   -------------------------------------------------------------------------------- */
const HOUSE_INTERPRETATIONS = {
  1: {
    name: "First House",
    title: "House of Self",
    description: "Represents your identity, appearance, and how you project yourself.",
    interpretations: {
      "Aries": "With Aries on your First House cusp, you present yourself with energy, directness, and a pioneering spirit...",
      "Taurus": "With Taurus on your First House cusp, you present yourself with steadiness, reliability, and sensual awareness...",
      "Gemini": "With Gemini on your First House cusp, you present yourself with versatility, curiosity, and mental alertness...",
      "Cancer": "With Cancer on your First House cusp, you present yourself with sensitivity, nurturing energy, and emotional responsiveness...",
      "Leo": "With Leo on your First House cusp, you present yourself with warmth, confidence, and natural leadership...",
      "Virgo": "With Virgo on your First House cusp, you present yourself with precision, practicality, and attention to detail...",
      "Libra": "With Libra on your First House cusp, you present yourself with grace, diplomacy, and aesthetic awareness...",
      "Scorpio": "With Scorpio on your First House cusp, you present yourself with intensity, depth, and magnetic reserve...",
      "Sagittarius": "With Sagittarius on your First House cusp, you present yourself with optimism, expansiveness, and philosophical interest...",
      "Capricorn": "With Capricorn on your First House cusp, you present yourself with dignity, discipline, and practical ambition...",
      "Aquarius": "With Aquarius on your First House cusp, you present yourself with originality, intellectual detachment, and humanitarian awareness...",
      "Pisces": "With Pisces on your First House cusp, you present yourself with sensitivity, adaptability, and compassionate awareness..."
    }
  },
  2: {
    name: "Second House",
    title: "House of Resources",
    description: "Represents your values, possessions, and material security.",
    interpretations: {
      "Aries": "With Aries on your Second House cusp, you approach material resources with initiative, direct action, and pioneering energy...",
      "Taurus": "With Taurus on your Second House cusp, you approach material resources with persistence, practicality, and sensual appreciation...",
      "Gemini": "With Gemini on your Second House cusp, you approach material resources with versatility, mental agility, and adaptable strategies...",
      "Cancer": "With Cancer on your Second House cusp, you approach material resources with emotional security needs and protective instincts...",
      "Leo": "With Leo on your Second House cusp, you approach material resources with generosity, creative flair, and self-expressive investments...",
      "Virgo": "With Virgo on your Second House cusp, you approach material resources with analytical precision, practical efficiency, and attention to detail...",
      "Libra": "With Libra on your Second House cusp, you approach material resources with balance, partnership orientation, and aesthetic appreciation...",
      "Scorpio": "With Scorpio on your Second House cusp, you approach material resources with intensity, strategic planning, and transformation potential...",
      "Sagittarius": "With Sagittarius on your Second House cusp, you approach material resources with optimism, expansion orientation, and philosophical perspective...",
      "Capricorn": "With Capricorn on your Second House cusp, you approach material resources with discipline, long-term strategy, and structural understanding...",
      "Aquarius": "With Aquarius on your Second House cusp, you approach material resources with originality, group awareness, and future orientation...",
      "Pisces": "With Pisces on your Second House cusp, you approach material resources with intuitive flow, compassionate values, and spiritual perspective..."
    }
  },
  3: {
    name: "Third House",
    title: "House of Communication",
    description: "Represents your communication style, learning process, and immediate environment.",
    interpretations: {
      "Aries": "With Aries on your Third House cusp, you communicate with directness, quick thinking, and pioneering ideas...",
      "Taurus": "With Taurus on your Third House cusp, you communicate with reliability, practical focus, and sensory awareness...",
      "Gemini": "With Gemini on your Third House cusp, you communicate with versatility, curiosity, and quick mental connections...",
      "Cancer": "With Cancer on your Third House cusp, you communicate with emotional sensitivity, nurturing language, and protective instincts...",
      "Leo": "With Leo on your Third House cusp, you communicate with warmth, dramatic flair, and creative expression...",
      "Virgo": "With Virgo on your Third House cusp, you communicate with precision, analytical detail, and practical focus...",
      "Libra": "With Libra on your Third House cusp, you communicate with diplomacy, aesthetic awareness, and relationship-building skills...",
      "Scorpio": "With Scorpio on your Third House cusp, you communicate with depth, strategic thinking, and psychological insight...",
      "Sagittarius": "With Sagittarius on your Third House cusp, you communicate with enthusiasm, broad perspective, and philosophical insight...",
      "Capricorn": "With Capricorn on your Third House cusp, you communicate with structure, authority, and disciplined thinking...",
      "Aquarius": "With Aquarius on your Third House cusp, you communicate with originality, intellectual detachment, and future-oriented thinking...",
      "Pisces": "With Pisces on your Third House cusp, you communicate with empathy, intuitive understanding, and poetic language..."
    }
  },
  4: {
    name: "Fourth House",
    title: "House of Home and Family",
    description: "Represents your roots, private life, and emotional foundation.",
    interpretations: {
      "Aries": "With Aries on your Fourth House cusp, your home environment expresses energy, independence, and pioneering spirit...",
      "Taurus": "With Taurus on your Fourth House cusp, your home environment expresses stability, sensory comfort, and enduring quality...",
      "Gemini": "With Gemini on your Fourth House cusp, your home environment expresses versatility, mental stimulation, and social connection...",
      "Cancer": "With Cancer on your Fourth House cusp, your home environment expresses nurturing, emotional safety, and historical connection...",
      "Leo": "With Leo on your Fourth House cusp, your home environment expresses warmth, creative display, and generous hospitality...",
      "Virgo": "With Virgo on your Fourth House cusp, your home environment expresses order, functionality, and attention to detail...",
      "Libra": "With Libra on your Fourth House cusp, your home environment expresses harmony, beauty, and balanced relationships...",
      "Scorpio": "With Scorpio on your Fourth House cusp, your home environment expresses privacy, emotional depth, and transformative potential...",
      "Sagittarius": "With Sagittarius on your Fourth House cusp, your home environment expresses expansion, optimism, and cultural diversity...",
      "Capricorn": "With Capricorn on your Fourth House cusp, your home environment expresses structure, tradition, and lasting quality...",
      "Aquarius": "With Aquarius on your Fourth House cusp, your home environment expresses originality, community connection, and future orientation...",
      "Pisces": "With Pisces on your Fourth House cusp, your home environment expresses sensitivity, spiritual connection, and artistic sensibility..."
    }
  },
  5: {
    name: "Fifth House",
    title: "House of Creativity and Pleasure",
    description: "Represents creative expression, romance, recreation, and children.",
    interpretations: {
      "Aries": "With Aries on your Fifth House cusp, your creative expression is energetic, pioneering, and self-initiated...",
      "Taurus": "With Taurus on your Fifth House cusp, your creative expression is sensual, patient, and produces tangible results...",
      "Gemini": "With Gemini on your Fifth House cusp, your creative expression is versatile, communicative, and intellectually playful...",
      "Cancer": "With Cancer on your Fifth House cusp, your creative expression is emotionally rich, nurturing, and connected to memory...",
      "Leo": "With Leo on your Fifth House cusp, your creative expression is dramatic, heart-centered, and radiantly authentic...",
      "Virgo": "With Virgo on your Fifth House cusp, your creative expression is precise, skillful, and improvement-oriented...",
      "Libra": "With Libra on your Fifth House cusp, your creative expression is harmonious, relationship-oriented, and aesthetically balanced...",
      "Scorpio": "With Scorpio on your Fifth House cusp, your creative expression is intense, psychologically profound, and transformative...",
      "Sagittarius": "With Sagittarius on your Fifth House cusp, your creative expression is expansive, optimistic, and meaning-oriented...",
      "Capricorn": "With Capricorn on your Fifth House cusp, your creative expression is structured, disciplined, and builds lasting value...",
      "Aquarius": "With Aquarius on your Fifth House cusp, your creative expression is innovative, socially conscious, and future-oriented...",
      "Pisces": "With Pisces on your Fifth House cusp, your creative expression is imaginative, emotionally attuned, and spiritually inspired..."
    }
  },
  6: {
    name: "Sixth House",
    title: "House of Service and Health",
    description: "Represents your work ethic, daily routines, health practices, and service to others.",
    interpretations: {
      "Aries": "With Aries on your Sixth House cusp, your approach to work involves initiative, leadership, and independent action...",
      "Taurus": "With Taurus on your Sixth House cusp, your approach to work involves reliability, thoroughness, and sensory awareness...",
      "Gemini": "With Gemini on your Sixth House cusp, your approach to work involves versatility, communication skills, and mental variety...",
      "Cancer": "With Cancer on your Sixth House cusp, your approach to work involves nurturing, emotional connection, and creating security...",
      "Leo": "With Leo on your Sixth House cusp, your approach to work involves creativity, leadership, and authentic self-expression...",
      "Virgo": "With Virgo on your Sixth House cusp, your approach to work involves precision, analytical skill, and attention to detail...",
      "Libra": "With Libra on your Sixth House cusp, your approach to work involves cooperation, aesthetic awareness, and creating harmony...",
      "Scorpio": "With Scorpio on your Sixth House cusp, your approach to work involves intensity, psychological insight, and strategic planning...",
      "Sagittarius": "With Sagittarius on your Sixth House cusp, your approach to work involves optimism, broader meaning, and continuous growth...",
      "Capricorn": "With Capricorn on your Sixth House cusp, your approach to work involves discipline, structured progress, and long-term goals...",
      "Aquarius": "With Aquarius on your Sixth House cusp, your approach to work involves innovation, group awareness, and humanitarian principles...",
      "Pisces": "With Pisces on your Sixth House cusp, your approach to work involves compassion, intuitive understanding, and spiritual connection..."
    }
  },
  7: {
    name: "Seventh House",
    title: "House of Partnership",
    description: "Represents your approach to one-on-one relationships, marriage, and open interactions.",
    interpretations: {
      "Aries": "With Aries on your Seventh House cusp, you attract partners who are independent, direct, and action-oriented...",
      "Taurus": "With Taurus on your Seventh House cusp, you attract partners who are reliable, sensually present, and resource-conscious...",
      "Gemini": "With Gemini on your Seventh House cusp, you attract partners who are mentally agile, communicative, and socially connected...",
      "Cancer": "With Cancer on your Seventh House cusp, you attract partners who are emotionally nurturing, protective, and family-oriented...",
      "Leo": "With Leo on your Seventh House cusp, you attract partners who are charismatic, generous, and creatively expressive...",
      "Virgo": "With Virgo on your Seventh House cusp, you attract partners who are analytical, service-oriented, and detail-conscious...",
      "Libra": "With Libra on your Seventh House cusp, you attract partners who are harmonious, diplomatic, and aesthetically aware...",
      "Scorpio": "With Scorpio on your Seventh House cusp, you attract partners who are intense, psychologically perceptive, and transformative...",
      "Sagittarius": "With Sagittarius on your Seventh House cusp, you attract partners who are optimistic, philosophical, and freedom-loving...",
      "Capricorn": "With Capricorn on your Seventh House cusp, you attract partners who are responsible, achievement-oriented, and structurally aware...",
      "Aquarius": "With Aquarius on your Seventh House cusp, you attract partners who are independent, intellectually innovative, and socially conscious...",
      "Pisces": "With Pisces on your Seventh House cusp, you attract partners who are compassionate, imaginative, and spiritually attuned..."
    }
  },
  8: {
    name: "Eighth House",
    title: "House of Transformation",
    description: "Represents shared resources, intimacy, transformation, and psychological depths.",
    interpretations: {
      "Aries": "With Aries on your Eighth House cusp, you approach transformation with courage, directness, and pioneering energy...",
      "Taurus": "With Taurus on your Eighth House cusp, you approach transformation with patience, sensory awareness, and practical focus...",
      "Gemini": "With Gemini on your Eighth House cusp, you approach transformation with mental agility, communicative processing, and curious exploration...",
      "Cancer": "With Cancer on your Eighth House cusp, you approach transformation with emotional sensitivity, intuitive understanding, and protective awareness...",
      "Leo": "With Leo on your Eighth House cusp, you approach transformation with creative courage, authentic self-expression, and generous engagement...",
      "Virgo": "With Virgo on your Eighth House cusp, you approach transformation with analytical precision, discriminating awareness, and practical attention...",
      "Libra": "With Libra on your Eighth House cusp, you approach transformation with balanced consideration, harmonizing awareness, and cooperative engagement...",
      "Scorpio": "With Scorpio on your Eighth House cusp, you approach transformation with emotional intensity, psychological depth, and powerful engagement...",
      "Sagittarius": "With Sagittarius on your Eighth House cusp, you approach transformation with optimism, philosophical perspective, and expansive engagement...",
      "Capricorn": "With Capricorn on your Eighth House cusp, you approach transformation with discipline, structural awareness, and strategic engagement...",
      "Aquarius": "With Aquarius on your Eighth House cusp, you approach transformation with intellectual detachment, innovative awareness, and humanitarian engagement...",
      "Pisces": "With Pisces on your Eighth House cusp, you approach transformation with compassionate understanding, spiritual awareness, and boundary-dissolving surrender..."
    }
  },
  9: {
    name: "Ninth House",
    title: "House of Expansion",
    description: "Represents higher education, philosophy, travel, and your quest for meaning.",
    interpretations: {
      "Aries": "With Aries on your Ninth House cusp, you seek meaning through pioneering exploration, independent quest, and direct experience of truth...",
      "Taurus": "With Taurus on your Ninth House cusp, you seek meaning through embodied wisdom, practical philosophy, and tangible experience...",
      "Gemini": "With Gemini on your Ninth House cusp, you seek meaning through intellectual exploration, diverse perspectives, and communicative exchange...",
      "Cancer": "With Cancer on your Ninth House cusp, you seek meaning through emotional wisdom, cultural heritage, and nurturing connection...",
      "Leo": "With Leo on your Ninth House cusp, you seek meaning through creative expression, personal authenticity, and heart-centered wisdom...",
      "Virgo": "With Virgo on your Ninth House cusp, you seek meaning through practical analysis, refined knowledge, and helpful wisdom...",
      "Libra": "With Libra on your Ninth House cusp, you seek meaning through balanced perspective, harmonious relationships, and shared wisdom...",
      "Scorpio": "With Scorpio on your Ninth House cusp, you seek meaning through psychological depth, transformative experience, and esoteric knowledge...",
      "Sagittarius": "With Sagittarius on your Ninth House cusp, you seek meaning through expansive exploration, visionary perspective, and joyful discovery...",
      "Capricorn": "With Capricorn on your Ninth House cusp, you seek meaning through structured understanding, traditional wisdom, and achievement of mastery...",
      "Aquarius": "With Aquarius on your Ninth House cusp, you seek meaning through innovative thinking, humanitarian vision, and collective wisdom...",
      "Pisces": "With Pisces on your Ninth House cusp, you seek meaning through mystical experience, compassionate understanding, and transcendent wisdom..."
    }
  },
  10: {
    name: "Tenth House",
    title: "House of Career",
    description: "Represents your public image, career, reputation, and sense of responsibility.",
    interpretations: {
      "Aries": "With Aries on your Tenth House cusp, your career path emphasizes leadership, competition, and self-driven achievements...",
      "Taurus": "With Taurus on your Tenth House cusp, your career path emphasizes stability, material security, and patient building of reputation...",
      "Gemini": "With Gemini on your Tenth House cusp, your career path emphasizes communication, adaptability, and intellectual engagement...",
      "Cancer": "With Cancer on your Tenth House cusp, your career path emphasizes nurturing leadership, emotional intelligence in public, and creating supportive structures...",
      "Leo": "With Leo on your Tenth House cusp, your career path emphasizes creative expression, spotlight, and dignified leadership roles...",
      "Virgo": "With Virgo on your Tenth House cusp, your career path emphasizes service, analytical skill, and systematic improvement in professional spheres...",
      "Libra": "With Libra on your Tenth House cusp, your career path emphasizes partnership, diplomacy, and balanced social engagement...",
      "Scorpio": "With Scorpio on your Tenth House cusp, your career path emphasizes depth, transformation, and strategic use of power in professional settings...",
      "Sagittarius": "With Sagittarius on your Tenth House cusp, your career path emphasizes exploration, teaching, and broadening horizons through your public image...",
      "Capricorn": "With Capricorn on your Tenth House cusp, your career path emphasizes structure, ambition, and long-term achievement of professional goals...",
      "Aquarius": "With Aquarius on your Tenth House cusp, your career path emphasizes innovation, humanitarian concerns, and progressive ideals in your public roles...",
      "Pisces": "With Pisces on your Tenth House cusp, your career path emphasizes compassion, spirituality, imagination, and altruistic work in the public sphere..."
    }
  },
  11: {
    name: "Eleventh House",
    title: "House of Community",
    description: "Represents friendships, groups, hopes, and future aspirations.",
    interpretations: {
      "Aries": "With Aries on your Eleventh House cusp, you relate to groups through initiating, competitive energy, and bold leadership among friends...",
      "Taurus": "With Taurus on your Eleventh House cusp, you relate to groups through reliability, patience, and shared enjoyment of resources...",
      "Gemini": "With Gemini on your Eleventh House cusp, you relate to groups through lively communication, curiosity, and intellectual or social networks...",
      "Cancer": "With Cancer on your Eleventh House cusp, you relate to groups through nurturing bonds, emotional connections, and family-like friendships...",
      "Leo": "With Leo on your Eleventh House cusp, you relate to groups through creativity, generosity, and a desire to shine or bring warmth to collective goals...",
      "Virgo": "With Virgo on your Eleventh House cusp, you relate to groups through practical service, analytical help, and a focus on improvement or efficiency...",
      "Libra": "With Libra on your Eleventh House cusp, you relate to groups through harmony, diplomacy, and a desire for social justice...",
      "Scorpio": "With Scorpio on your Eleventh House cusp, you relate to groups through intensity, emotional depth, and sometimes transformative power struggles...",
      "Sagittarius": "With Sagittarius on your Eleventh House cusp, you relate to groups through shared ideals, optimism, cultural or philosophical pursuits...",
      "Capricorn": "With Capricorn on your Eleventh House cusp, you relate to groups through responsibility, ambition, and a desire to structure collective endeavors...",
      "Aquarius": "With Aquarius on your Eleventh House cusp, you relate to groups through innovation, humanitarian ideals, and a broad vision for social progress...",
      "Pisces": "With Pisces on your Eleventh House cusp, you relate to groups through compassion, intuition, and shared dreams or spiritual aims..."
    }
  },
  12: {
    name: "Twelfth House",
    title: "House of the Subconscious",
    description: "Represents your hidden self, spiritual connections, and karmic patterns.",
    interpretations: {
      "Aries": "With Aries on your Twelfth House cusp, hidden strengths involve courage and initiative, but you may bury anger or impulsive drives subconsciously...",
      "Taurus": "With Taurus on your Twelfth House cusp, hidden strengths involve stability and persistence, but you may have subconscious fears about material security...",
      "Gemini": "With Gemini on your Twelfth House cusp, hidden strengths involve curiosity and mental adaptability, but you may have repressed worries or difficulty voicing deeper truths...",
      "Cancer": "With Cancer on your Twelfth House cusp, hidden strengths involve empathy, nurturing, and emotional depth, but you may wrestle with unrecognized insecurities or family patterns...",
      "Leo": "With Leo on your Twelfth House cusp, hidden strengths involve creative self-expression and generosity, but you may struggle with secret fears of being overshadowed or unappreciated...",
      "Virgo": "With Virgo on your Twelfth House cusp, hidden strengths involve analytical precision and helpfulness, but you may have unresolved self-criticism or anxiety stored within...",
      "Libra": "With Libra on your Twelfth House cusp, hidden strengths involve diplomacy, harmony, and fairness, but you may bury conflict avoidance or unexpressed needs for balance...",
      "Scorpio": "With Scorpio on your Twelfth House cusp, hidden strengths involve transformative power, psychological insight, and deep intuition, but you may wrestle with fear of betrayal or intense secrets...",
      "Sagittarius": "With Sagittarius on your Twelfth House cusp, hidden strengths involve faith, optimism, and a love of learning, but you may hide philosophical doubts or unexpressed restlessness...",
      "Capricorn": "With Capricorn on your Twelfth House cusp, hidden strengths involve discipline, ambition, and leadership, but you may bury insecurities around failure or burden of responsibility...",
      "Aquarius": "With Aquarius on your Twelfth House cusp, hidden strengths involve innovation, humanitarian ideals, and inventive thinking, but you may have repressed feelings of alienation or unpredictability...",
      "Pisces": "With Pisces on your Twelfth House cusp, hidden strengths involve compassion, imagination, and spiritual connection, but you may struggle with blurred boundaries or escapist tendencies..."
    }
  }
};

/* --------------------------------------------------------------------------------
   4) PLANETS array with rendering details, plus all your detailed interpretations
   -------------------------------------------------------------------------------- */
const PLANETS = [
  {
    name: "Sun",
    symbol: "☉",
    color: "#ffd000",
    gradientColors: ["#ffd000", "#ff9500", "#ff4400"],
    borderColor: "#ff7700",
    size: 18,
    description: "The Sun represents your essential self, your purpose, and your vitality.",
    interpretations: {
      "Aries": "Your Sun in Aries brings a pioneering spirit, courage, and natural leadership qualities...",
      "Taurus": "Your Sun in Taurus gives you a grounded, practical nature with remarkable persistence...",
      "Gemini": "Your Sun in Gemini infuses you with curiosity, adaptability, and quick mental processing...",
      "Cancer": "Your Sun in Cancer endows you with emotional sensitivity, nurturing instincts, and deep intuition...",
      "Leo": "Your Sun in Leo grants you natural charisma, creativity, and a warm-hearted approach to life...",
      "Virgo": "Your Sun in Virgo gives you analytical precision, practicality, and an eye for improvement...",
      "Libra": "Your Sun in Libra endows you with diplomatic skills, artistic appreciation, and a natural sense of balance...",
      "Scorpio": "Your Sun in Scorpio gives you emotional intensity, psychological insight, and transformative power...",
      "Sagittarius": "Your Sun in Sagittarius infuses you with optimism, adventurousness, and philosophical inclinations...",
      "Capricorn": "Your Sun in Capricorn grants you ambition, discipline, and remarkable perseverance...",
      "Aquarius": "Your Sun in Aquarius gives you originality, humanitarian values, and an innovative approach to life...",
      "Pisces": "Your Sun in Pisces endows you with compassion, imagination, and spiritual sensitivity..."
    },
    renderDetails: {
      type: "radialGradient",
      highlightEffects: true,
      rays: true
    }
  },
  {
    name: "Moon",
    symbol: "☽",
    color: "#e0e0e0",
    gradientColors: ["#ffffff", "#e0e0e0", "#c0c0c0"],
    borderColor: "#a0a0a0",
    size: 16,
    description: "The Moon reflects your emotional nature, instinctual reactions, and subconscious patterns.",
    interpretations: {
      "Aries": "Your Moon in Aries creates emotional responses that are immediate, direct, and fiery...",
      "Taurus": "Your Moon in Taurus creates a need for emotional stability, comfort, and sensory satisfaction...",
      "Gemini": "Your Moon in Gemini creates a need for mental stimulation and communication to feel emotionally secure...",
      "Cancer": "Your Moon in Cancer creates deep emotional sensitivity, strong intuition, and a nurturing nature...",
      "Leo": "Your Moon in Leo creates a need for recognition, creative expression, and heartfelt connections...",
      "Virgo": "Your Moon in Virgo creates a need for order, usefulness, and analytical understanding of emotions...",
      "Libra": "Your Moon in Libra creates a need for harmony, balance, and aesthetic beauty...",
      "Scorpio": "Your Moon in Scorpio creates emotional intensity, psychological depth, and transformative emotional experiences...",
      "Sagittarius": "Your Moon in Sagittarius creates a need for emotional freedom, optimism, and meaning...",
      "Capricorn": "Your Moon in Capricorn creates emotional reserve, self-discipline, and a need for achievement...",
      "Aquarius": "Your Moon in Aquarius creates emotional detachment, originality, and humanitarian concerns...",
      "Pisces": "Your Moon in Pisces creates emotional sensitivity, compassion, and spiritual receptivity..."
    },
    renderDetails: {
      type: "cratered",
      craterColor: "#a0a0a0",
      phases: true,
      glow: "#e0e0e0"
    }
  },
  {
    name: "Mercury",
    symbol: "☿",
    color: "#c0c0c0",
    gradientColors: ["#e0e0e0", "#b0b0b0", "#909090"],
    borderColor: "#808080",
    size: 13,
    description: "Mercury governs your communication style, learning processes, and intellectual approach.",
    interpretations: {
      "Aries": "Your Mercury in Aries gives you direct, quick thinking and straightforward communication...",
      "Taurus": "Your Mercury in Taurus gives you methodical, practical thinking and deliberate communication...",
      "Gemini": "Your Mercury in Gemini gives you quick, versatile thinking and lively, adaptable communication...",
      "Cancer": "Your Mercury in Cancer gives you intuitive, emotionally-connected thinking and nurturing communication...",
      "Leo": "Your Mercury in Leo gives you creative, confident thinking and expressive, dramatic communication...",
      "Virgo": "Your Mercury in Virgo gives you analytical, precise thinking and careful, detailed communication...",
      "Libra": "Your Mercury in Libra gives you balanced, diplomatic thinking and harmonious, considerate communication...",
      "Scorpio": "Your Mercury in Scorpio gives you penetrating, investigative thinking and intense, strategic communication...",
      "Sagittarius": "Your Mercury in Sagittarius gives you expansive, optimistic thinking and philosophical, straightforward communication...",
      "Capricorn": "Your Mercury in Capricorn gives you structured, strategic thinking and practical, authoritative communication...",
      "Aquarius": "Your Mercury in Aquarius gives you innovative, objective thinking and original, progressive communication...",
      "Pisces": "Your Mercury in Pisces gives you intuitive, impressionistic thinking and imaginative, empathetic communication..."
    },
    renderDetails: {
      type: "rocky",
      texture: "cracked",
      craterColor: "#808080"
    }
  },
  {
    name: "Venus",
    symbol: "♀",
    color: "#ffb6c1",
    gradientColors: ["#ffe6ea", "#ffb6c1", "#e29aa6"],
    borderColor: "#d87f8c",
    size: 14,
    description: "Venus reveals your approach to love, beauty, pleasure, and material values.",
    interpretations: {
      "Aries": "Your Venus in Aries approaches love with enthusiasm, directness, and a pioneering spirit...",
      "Taurus": "Your Venus in Taurus approaches love with sensuality, loyalty, and steadfastness...",
      "Gemini": "Your Venus in Gemini approaches love with curiosity, playfulness, and mental connection...",
      "Cancer": "Your Venus in Cancer approaches love with nurturing, emotional depth, and protective tenderness...",
      "Leo": "Your Venus in Leo approaches love with warmth, generosity, and dramatic flair...",
      "Virgo": "Your Venus in Virgo approaches love with thoughtfulness, practical assistance, and attention to detail...",
      "Libra": "Your Venus in Libra approaches love with harmony, fairness, and refined partnership...",
      "Scorpio": "Your Venus in Scorpio approaches love with intensity, depth, and transformative power...",
      "Sagittarius": "Your Venus in Sagittarius approaches love with optimism, freedom, and philosophical connection...",
      "Capricorn": "Your Venus in Capricorn approaches love with commitment, respect, and traditional values...",
      "Aquarius": "Your Venus in Aquarius approaches love with friendship, intellectual connection, and progressive ideals...",
      "Pisces": "Your Venus in Pisces approaches love with compassion, spiritual connection, and romantic idealism..."
    },
    renderDetails: {
      type: "cloudy",
      cloudColor: "#ffe6ea",
      rotationEffect: true
    }
  },
  {
    name: "Mars",
    symbol: "♂",
    color: "#ff4500",
    gradientColors: ["#ff7755", "#ff4500", "#cc3000"],
    borderColor: "#aa2000",
    size: 13,
    description: "Mars shows your drive, assertiveness, passion, and how you take action.",
    interpretations: {
      "Aries": "Your Mars in Aries gives you abundant energy, direct assertiveness, and natural leadership...",
      "Taurus": "Your Mars in Taurus gives you steady determination, practical resourcefulness, and sensual energy...",
      "Gemini": "Your Mars in Gemini gives you mental agility, versatile energy, and communicative drive...",
      "Cancer": "Your Mars in Cancer gives you emotional energy, protective instincts, and indirect power...",
      "Leo": "Your Mars in Leo gives you dramatic expression, creative energy, and charismatic assertion...",
      "Virgo": "Your Mars in Virgo gives you precise efficiency, analytical energy, and skillful execution...",
      "Libra": "Your Mars in Libra gives you diplomatic assertion, relational energy, and strategic charm...",
      "Scorpio": "Your Mars in Scorpio gives you intense focus, strategic power, and transformative energy...",
      "Sagittarius": "Your Mars in Sagittarius gives you adventurous energy, enthusiastic action, and philosophical motivation...",
      "Capricorn": "Your Mars in Capricorn gives you disciplined ambition, structured energy, and authoritative action...",
      "Aquarius": "Your Mars in Aquarius gives you innovative energy, principled action, and humanitarian drives...",
      "Pisces": "Your Mars in Pisces gives you intuitive action, spiritual energy, and diffuse power..."
    },
    renderDetails: {
      type: "rocky",
      texture: "dusty",
      polarCaps: true
    }
  },
  {
    name: "Jupiter",
    symbol: "♃",
    color: "#ffa500",
    gradientColors: ["#ffd280", "#ffa500", "#cc8400"],
    borderColor: "#cc8400",
    size: 18,
    description: "Jupiter represents expansion, growth, optimism, and your beliefs and philosophy.",
    interpretations: {
      "Aries": "Your Jupiter in Aries brings expansion through direct action, individual initiative, and pioneering courage...",
      "Taurus": "Your Jupiter in Taurus brings expansion through building resources, appreciating life's pleasures, and creating lasting value...",
      "Gemini": "Your Jupiter in Gemini brings expansion through learning, communication, and intellectual exploration...",
      "Cancer": "Your Jupiter in Cancer brings expansion through emotional connection, nurturing relationships, and creating sanctuary...",
      "Leo": "Your Jupiter in Leo brings expansion through creative self-expression, leadership, and whole-hearted living...",
      "Virgo": "Your Jupiter in Virgo brings expansion through service, skill development, and practical improvement...",
      "Libra": "Your Jupiter in Libra brings expansion through relationships, harmony, and aesthetic appreciation...",
      "Scorpio": "Your Jupiter in Scorpio brings expansion through emotional depth, psychological insight, and transformative experiences...",
      "Sagittarius": "Your Jupiter in Sagittarius brings expansion through exploration, higher education, and quest for meaning...",
      "Capricorn": "Your Jupiter in Capricorn brings expansion through discipline, achievement, and structural understanding...",
      "Aquarius": "Your Jupiter in Aquarius brings expansion through innovation, humanitarian vision, and group collaboration...",
      "Pisces": "Your Jupiter in Pisces brings expansion through imagination, compassion, and spiritual connection..."
    },
    renderDetails: {
      type: "gasGiant",
      bands: true,
      greatRedSpot: true,
      rotationEffect: true
    }
  },
  {
    name: "Saturn",
    symbol: "♄",
    color: "#c3a992",
    gradientColors: ["#e0c9b5", "#c3a992", "#9f8878"],
    borderColor: "#9f8878",
    size: 17,
    description: "Saturn represents structure, limitations, responsibility, and life lessons.",
    interpretations: {
      "Aries": "Your Saturn in Aries brings life lessons through developing patience, strategic action, and balanced self-assertion...",
      "Taurus": "Your Saturn in Taurus brings life lessons through developing material security, practical resource management, and healthy self-worth...",
      "Gemini": "Your Saturn in Gemini brings life lessons through developing clear communication, focused thinking, and intellectual discipline...",
      "Cancer": "Your Saturn in Cancer brings life lessons through developing emotional security, healthy boundaries, and family responsibility...",
      "Leo": "Your Saturn in Leo brings life lessons through developing authentic self-expression, creative discipline, and balanced confidence...",
      "Virgo": "Your Saturn in Virgo brings life lessons through developing practical skills, healthy routines, and balanced perfectionism...",
      "Libra": "Your Saturn in Libra brings life lessons through developing balanced relationships, fair judgment, and social responsibility...",
      "Scorpio": "Your Saturn in Scorpio brings life lessons through developing emotional honesty, responsible use of power, and transformative discipline...",
      "Sagittarius": "Your Saturn in Sagittarius brings life lessons through developing focused beliefs, ethical discipline, and grounded optimism...",
      "Capricorn": "Your Saturn in Capricorn brings life lessons through developing structure, ambition, and responsible authority...",
      "Aquarius": "Your Saturn in Aquarius brings life lessons through developing social responsibility, disciplined innovation, and structured freedom...",
      "Pisces": "Your Saturn in Pisces brings life lessons through developing spiritual discipline, practical compassion, and structured intuition..."
    },
    renderDetails: {
      type: "ringed",
      ringColor: "#e0d5c0",
      ringThickness: [7, 3, 1],
      rotationEffect: true
    }
  },
  {
    name: "Uranus",
    symbol: "♅",
    color: "#40e0d0",
    gradientColors: ["#a0f5eb", "#40e0d0", "#27aca0"],
    borderColor: "#27aca0",
    size: 15,
    description: "Uranus signifies innovation, rebellion, originality, and sudden change.",
    interpretations: {
      "Aries": "Your Uranus in Aries brings revolutionary energy to personal identity, independent action, and pioneering initiatives...",
      "Taurus": "Your Uranus in Taurus brings revolutionary energy to material systems, values, and resources...",
      "Gemini": "Your Uranus in Gemini brings revolutionary energy to communication, information systems, and intellectual frameworks...",
      "Cancer": "Your Uranus in Cancer brings revolutionary energy to emotional patterns, family structures, and security needs...",
      "Leo": "Your Uranus in Leo brings revolutionary energy to self-expression, creativity, and leadership...",
      "Virgo": "Your Uranus in Virgo brings revolutionary energy to work systems, health approaches, and analytical methods...",
      "Libra": "Your Uranus in Libra brings revolutionary energy to relationships, social justice, and aesthetic values...",
      "Scorpio": "Your Uranus in Scorpio brings revolutionary energy to transformation processes, shared resources, and psychological understanding...",
      "Sagittarius": "Your Uranus in Sagittarius brings revolutionary energy to belief systems, education, and cultural exchange...",
      "Capricorn": "Your Uranus in Capricorn brings revolutionary energy to structures, authority systems, and long-term planning...",
      "Aquarius": "Your Uranus in Aquarius brings revolutionary energy to social movements, collective ideals, and technological innovation...",
      "Pisces": "Your Uranus in Pisces brings revolutionary energy to spiritual understanding, collective consciousness, and dissolution of boundaries..."
    },
    renderDetails: {
      type: "gasGiant",
      tilt: true,
      blueish: true,
      rotationEffect: true
    }
  },
  {
    name: "Neptune",
    symbol: "♆",
    color: "#4169e1",
    gradientColors: ["#738eea", "#4169e1", "#2a4cb3"],
    borderColor: "#2a4cb3",
    size: 15,
    description: "Neptune represents dreams, imagination, spirituality, and transcendence.",
    interpretations: {
      "Aries": "Your Neptune in Aries brings spiritual inspiration to pioneering initiatives, independent action, and personal identity...",
      "Taurus": "Your Neptune in Taurus brings spiritual inspiration to material resources, sensory experience, and values...",
      "Gemini": "Your Neptune in Gemini brings spiritual inspiration to communication, information, and intellectual connection...",
      "Cancer": "Your Neptune in Cancer brings spiritual inspiration to emotional bonds, nurturing instincts, and sense of home...",
      "Leo": "Your Neptune in Leo brings spiritual inspiration to creative expression, authenticity, and leadership...",
      "Virgo": "Your Neptune in Virgo brings spiritual inspiration to service, health practices, and improvement processes...",
      "Libra": "Your Neptune in Libra brings spiritual inspiration to relationships, harmony, and justice...",
      "Scorpio": "Your Neptune in Scorpio brings spiritual inspiration to transformation, intimacy, and psychological depth...",
      "Sagittarius": "Your Neptune in Sagittarius brings spiritual inspiration to belief systems, higher education, and expansion...",
      "Capricorn": "Your Neptune in Capricorn brings spiritual inspiration to structure, achievement, and authority...",
      "Aquarius": "Your Neptune in Aquarius brings spiritual inspiration to social vision, technological innovation, and collective progress...",
      "Pisces": "Your Neptune in Pisces brings spiritual inspiration to compassion, imagination, and unity consciousness..."
    },
    renderDetails: {
      type: "gasGiant",
      deepBlue: true,
      stormSpots: true,
      rotationEffect: true
    }
  },
  {
    name: "Pluto",
    symbol: "♇",
    color: "#8b4513",
    gradientColors: ["#aa6633", "#8b4513", "#703a10"],
    borderColor: "#5e2f0d",
    size: 12,
    description: "Pluto signifies transformation, power, rebirth, and the deepest parts of the psyche.",
    interpretations: {
      "Aries": "Your Pluto in Aries brings transformative power to identity, initiative, and self-assertion...",
      "Taurus": "Your Pluto in Taurus brings transformative power to resources, values, and material security...",
      "Gemini": "Your Pluto in Gemini brings transformative power to communication, information, and mental processing...",
      "Cancer": "Your Pluto in Cancer brings transformative power to emotional bonds, family structures, and security needs...",
      "Leo": "Your Pluto in Leo brings transformative power to self-expression, creativity, and leadership...",
      "Virgo": "Your Pluto in Virgo brings transformative power to work systems, health approaches, and critical analysis...",
      "Libra": "Your Pluto in Libra brings transformative power to relationships, justice systems, and harmony...",
      "Scorpio": "Your Pluto in Scorpio brings transformative power to sexuality, shared resources, and psychological depth...",
      "Sagittarius": "Your Pluto in Sagittarius brings transformative power to belief systems, higher education, and cultural exchange...",
      "Capricorn": "Your Pluto in Capricorn brings transformative power to structures, authority systems, and long-term planning...",
      "Aquarius": "Your Pluto in Aquarius brings transformative power to social movements, technology, and humanitarian concerns...",
      "Pisces": "Your Pluto in Pisces brings transformative power to spirituality, compassion, and universal connection..."
    },
    renderDetails: {
      type: "rocky",
      texture: "icy",
      craterColor: "#5e2f0d"
    }
  },
  {
    name: "Chiron",
    symbol: "⚷",
    color: "#b0c4de",
    gradientColors: ["#d0e0f0", "#b0c4de", "#8090b0"],
    borderColor: "#8090b0",
    size: 12,
    description: "Chiron represents your deepest wound and greatest healing potential.",
    interpretations: {
      "Aries": "Your Chiron in Aries suggests wounding around self-assertion, personal identity, or the right to initiate action...",
      "Taurus": "Your Chiron in Taurus suggests wounding around self-worth, physical security, or material resources...",
      "Gemini": "Your Chiron in Gemini suggests wounding around communication, learning, or being heard and understood...",
      "Cancer": "Your Chiron in Cancer suggests wounding around emotional security, nurturing, or family connections...",
      "Leo": "Your Chiron in Leo suggests wounding around creative expression, recognition, or authentic self-display...",
      "Virgo": "Your Chiron in Virgo suggests wounding around perfectionism, service, or feelings of inadequacy...",
      "Libra": "Your Chiron in Libra suggests wounding around relationships, harmony, or finding fair balance...",
      "Scorpio": "Your Chiron in Scorpio suggests wounding around intimacy, trust, or shared resources...",
      "Sagittarius": "Your Chiron in Sagittarius suggests wounding around faith, meaning, or freedom to explore...",
      "Capricorn": "Your Chiron in Capricorn suggests wounding around authority, achievement, or social position...",
      "Aquarius": "Your Chiron in Aquarius suggests wounding around social belonging, originality, or humanitarian values...",
      "Pisces": "Your Chiron in Pisces suggests wounding around boundaries, spiritual connection, or emotional overwhelm..."
    },
    renderDetails: {
      type: "comet",
      tailColor: "#d0e0f0",
      glowEffect: true
    }
  },
  {
    name: "North Node",
    symbol: "☊",
    color: "#ffffff",
    gradientColors: ["#ffffff", "#f0f0f0", "#e0e0e0"],
    borderColor: "#888888",
    size: 13,
    description: "The North Node points to your soul's growth direction and future development.",
    interpretations: {
      "Aries": "Your North Node in Aries indicates a soul path toward developing independence, courage, and self-directed action...",
      "Taurus": "Your North Node in Taurus indicates a soul path toward stability, simplicity, and embodied presence...",
      "Gemini": "Your North Node in Gemini indicates a soul path toward mental flexibility, curiosity, and communication skills...",
      "Cancer": "Your North Node in Cancer indicates a soul path toward emotional authenticity, nurturing connections, and creating sanctuary...",
      "Leo": "Your North Node in Leo indicates a soul path toward creative self-expression, authentic leadership, and open-hearted living...",
      "Virgo": "Your North Node in Virgo indicates a soul path toward practical service, skill development, and mindful living...",
      "Libra": "Your North Node in Libra indicates a soul path toward harmonious relationships, diplomacy, and fair exchange...",
      "Scorpio": "Your North Node in Scorpio indicates a soul path toward emotional depth, transformation, and authentic intimacy...",
      "Sagittarius": "Your North Node in Sagittarius indicates a soul path toward expanded awareness, philosophical growth, and adventurous exploration...",
      "Capricorn": "Your North Node in Capricorn indicates a soul path toward structure, responsibility, and achievement through disciplined effort...",
      "Aquarius": "Your North Node in Aquarius indicates a soul path toward innovation, community connection, and humanitarian values...",
      "Pisces": "Your North Node in Pisces indicates a soul path toward compassion, spiritual connection, and creative imagination..."
    },
    renderDetails: {
      type: "karmic",
      glowColor: "#ffffff",
      pulseEffect: true
    }
  }
];

// House interpretations for dynamic content are in HOUSE_INTERPRETATIONS above.


/* --------------------------------------------------------------------------------
   5) ASTROLOGY CALCULATOR & ENHANCED CHART CLASS
   -------------------------------------------------------------------------------- */

class AstrologyCalculator {
  constructor() {
    this.J2000 = 2451545.0; // Julian date for J2000.0 epoch
  }

  // Convert date to Julian date
  toJulianDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours() + date.getMinutes()/60 + date.getSeconds()/3600;

    let a = Math.floor((14 - month) / 12);
    let y = year + 4800 - a;
    let m = month + 12 * a - 3;

    let jd = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) -
             Math.floor(y / 100) + Math.floor(y / 400) - 32045 + hours/24;

    return jd;
  }

  // Convert degrees to zodiac position
  degreeToZodiacPosition(degree) {
    // Normalize to 0-360
    let normalizedDegree = degree % 360;
    if (normalizedDegree < 0) normalizedDegree += 360;

    // Find sign
    const signIndex = Math.floor(normalizedDegree / 30);
    const degreeInSign = normalizedDegree % 30;

    return {
      sign: ZODIAC_SIGNS[signIndex],
      degree: degreeInSign
    };
  }

  // Format zodiac position (e.g. "7° Aries")
  formatZodiacPosition(position) {
    return `${Math.floor(position.degree)}° ${position.sign.name}`;
  }

  // Simple algorithm to calculate Sun's position (for demonstration)
  calculateSunPosition(date) {
    const jd = this.toJulianDate(date);
    const n = jd - this.J2000;

    // Mean longitude
    let L = 280.460 + 0.9856474 * n;
    L = L % 360; if (L < 0) L += 360;

    // Mean anomaly
    let g = 357.528 + 0.9856003 * n;
    g = g % 360; if (g < 0) g += 360;

    // Ecliptic longitude
    let lambda = L + 1.915 * Math.sin(g * Math.PI / 180) + 0.020 * Math.sin(2 * g * Math.PI / 180);
    lambda = lambda % 360; if (lambda < 0) lambda += 360;

    return lambda;
  }

  // Calculate Moon position (simplified)
  calculateMoonPosition(date) {
    const jd = this.toJulianDate(date);
    const n = jd - this.J2000;

    // Mean longitude of the Moon
    let L = 218.316 + 13.176396 * n;
    L = L % 360; if (L < 0) L += 360;

    // Mean anomaly of the Moon
    let M = 134.963 + 13.064993 * n;
    M = M % 360; if (M < 0) M += 360;

    // Simplified longitude
    let lambda = L + 6.289 * Math.sin(M * Math.PI / 180);
    lambda = lambda % 360; if (lambda < 0) lambda += 360;

    return lambda;
  }

  // Simplified calculation for other planets
  calculatePlanetPosition(planet, date) {
    const jd = this.toJulianDate(date);
    const n = jd - this.J2000;
    let meanLongitude, meanAnomaly, eccentricity;

    // Very rough placeholders
    switch(planet.toLowerCase()) {
      case 'mercury':
        meanLongitude = 252.251 + 4.092317 * n;
        meanAnomaly   = 48.331  + 4.092317 * n;
        eccentricity  = 0.205;
        break;
      case 'venus':
        meanLongitude = 181.980 + 1.602136 * n;
        meanAnomaly   = 76.680  + 1.602136 * n;
        eccentricity  = 0.007;
        break;
      case 'mars':
        meanLongitude = 355.433 + 0.524039 * n;
        meanAnomaly   = 19.373  + 0.524039 * n;
        eccentricity  = 0.093;
        break;
      case 'jupiter':
        meanLongitude = 34.351 + 0.083056 * n;
        meanAnomaly   = 20.020 + 0.083056 * n;
        eccentricity  = 0.048;
        break;
      case 'saturn':
        meanLongitude = 50.077 + 0.033459 * n;
        meanAnomaly   = 317.021 + 0.033459 * n;
        eccentricity  = 0.056;
        break;
      case 'uranus':
        meanLongitude = 314.055 + 0.011737 * n;
        meanAnomaly   = 141.050 + 0.011737 * n;
        eccentricity  = 0.047;
        break;
      case 'neptune':
        meanLongitude = 304.348 + 0.005981 * n;
        meanAnomaly   = 256.228 + 0.005981 * n;
        eccentricity  = 0.009;
        break;
      case 'pluto':
        meanLongitude = 238.958 + 0.003973 * n;
        meanAnomaly   = 14.882  + 0.003973 * n;
        eccentricity  = 0.248;
        break;
      case 'chiron':
        meanLongitude = 30 + 0.08 * n;
        meanAnomaly   = 0  + 0.08 * n;
        eccentricity  = 0.2;
        break;
      case 'north node':
        // NN is retrograde
        return (125.1 - 0.0529539 * n) % 360;
      default:
        return 0;
    }

    // Normalize
    meanLongitude = meanLongitude % 360;
    if (meanLongitude < 0) meanLongitude += 360;
    meanAnomaly = meanAnomaly % 360;
    if (meanAnomaly < 0) meanAnomaly += 360;

    // Convert to radians
    const M = meanAnomaly * Math.PI / 180;

    // Solve Kepler's eqn (quick iteration)
    let E = M;
    for (let i = 0; i < 5; i++) {
      E = M + eccentricity * Math.sin(E);
    }

    // True anomaly
    const v = 2 * Math.atan(Math.sqrt((1 + eccentricity) / (1 - eccentricity)) * Math.tan(E / 2));

    // Planet's longitude
    let longitude = meanLongitude + (v * 180/Math.PI) - (M * 180/Math.PI);
    longitude = longitude % 360;
    if (longitude < 0) longitude += 360;

    return longitude;
  }

  // Calculate positions of all main planets for a given date
  calculateAllPlanetPositions(date) {
    return [
      { name: "Sun",        degree: this.calculateSunPosition(date) },
      { name: "Moon",       degree: this.calculateMoonPosition(date) },
      { name: "Mercury",    degree: this.calculatePlanetPosition("mercury", date) },
      { name: "Venus",      degree: this.calculatePlanetPosition("venus", date) },
      { name: "Mars",       degree: this.calculatePlanetPosition("mars", date) },
      { name: "Jupiter",    degree: this.calculatePlanetPosition("jupiter", date) },
      { name: "Saturn",     degree: this.calculatePlanetPosition("saturn", date) },
      { name: "Uranus",     degree: this.calculatePlanetPosition("uranus", date) },
      { name: "Neptune",    degree: this.calculatePlanetPosition("neptune", date) },
      { name: "Pluto",      degree: this.calculatePlanetPosition("pluto", date) },
      { name: "Chiron",     degree: this.calculatePlanetPosition("chiron", date) },
      { name: "North Node", degree: this.calculatePlanetPosition("north node", date) }
    ];
  }

  // Calculate house cusps with a simplified approach
  calculateHouseCusps(date, latitude, longitude) {
    const jd = this.toJulianDate(date);
    const n = jd - this.J2000;

    // Approx sidereal time
    let siderealTime = 280.16 + 360.9856235 * n + longitude;
    siderealTime = siderealTime % 360;
    if (siderealTime < 0) siderealTime += 360;

    // Simplified Asc
    const ascendant = siderealTime;

    // Evenly spaced for demonstration
    const houseCusps = [];
    for (let i = 0; i < 12; i++) {
      houseCusps.push((ascendant + i * 30) % 360);
    }

    return houseCusps;
  }
}


class EnhancedAstrologyChart {
  constructor(svgElement) {
    this.svg = svgElement;
    this.centerX = 400;
    this.centerY = 400;
    this.wheelRadius = 350;
    this.calculator = new AstrologyCalculator();
    this.planets = [];
    this.houses = [];
    this.aspects = [];
    this.currentView = 'wheel';
    this.activePlanet = null;

    this.initializeInteractions();
  }

  initializeInteractions() {
    this.svg.addEventListener('mousemove', this.handleMouseMove.bind(this));
  }

  handleMouseMove(event) {
    const planetElements = document.querySelectorAll('.planet-group');
    const tooltipElement = document.getElementById('planet-info');
    if (!tooltipElement) return;

    let hoveredPlanet = null;

    planetElements.forEach(planetEl => {
      const rect = planetEl.getBoundingClientRect();
      const radius = parseFloat(planetEl.querySelector('circle').getAttribute('r')) || 0;

      // center of planet
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distance = Math.sqrt(
        Math.pow(event.clientX - centerX, 2) +
        Math.pow(event.clientY - centerY, 2)
      );

      if (distance <= radius + 5) {
        hoveredPlanet = planetEl;
      }
    });

    if (hoveredPlanet) {
      const planetName = hoveredPlanet.dataset.name;
      const position = hoveredPlanet.dataset.position;
      const planetData = PLANETS.find(p => p.name === planetName);

      const signName = (position.split('°')[1] || '').trim();
      let interpretation = "";
      if (planetData && planetData.interpretations[signName]) {
        interpretation = planetData.interpretations[signName];
      } else {
        interpretation = `Your ${planetName} in ${signName} shows a unique blend of energies.`;
      }

      tooltipElement.innerHTML = `
        <strong>${planetName} in ${position}</strong>
        <p>${planetData ? planetData.description : ''}</p>
        <p>${interpretation.substring(0, 120)}...</p>
      `;

      tooltipElement.style.display = 'block';
      tooltipElement.style.left = (event.clientX + 15) + 'px';
      tooltipElement.style.top = (event.clientY + 15) + 'px';

      // keep in viewport
      const tooltipRect = tooltipElement.getBoundingClientRect();
      if (tooltipRect.right > window.innerWidth) {
        tooltipElement.style.left = (event.clientX - tooltipRect.width - 15) + 'px';
      }
      if (tooltipRect.bottom > window.innerHeight) {
        tooltipElement.style.top = (event.clientY - tooltipRect.height - 15) + 'px';
      }

    } else {
      tooltipElement.style.display = 'none';
    }
  }

  // get cartesian coords for a given zodiac degree
  calculatePositionOnWheel(degree, distance) {
    // Zodiac's 0° Aries is at 9 o'clock in typical wheels, but in SVG 0° is 3 o’clock
    // We'll shift by 180° and invert direction
    const angleInRadians = ((180 - degree) % 360) * (Math.PI / 180);

    const x = this.centerX + Math.cos(angleInRadians) * distance;
    const y = this.centerY + Math.sin(angleInRadians) * distance;
    return { x, y };
  }

  checkAspect(planet1Degree, planet2Degree) {
    let angle = Math.abs(planet1Degree - planet2Degree) % 360;
    if (angle > 180) angle = 360 - angle;

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
    return null;
  }

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

  drawPlanet(planet, planetData) {
    const planetDistance = 250;
    const position = this.calculatePositionOnWheel(planet.degree, planetDistance);

    const planetGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    planetGroup.classList.add("planet-group");
    planetGroup.dataset.name = planet.name;

    const zodiacPosition = this.calculator.degreeToZodiacPosition(planet.degree);
    const positionText = this.calculator.formatZodiacPosition(zodiacPosition);
    planetGroup.dataset.position = positionText;

    // ensure we have a <defs> in the SVG
    let defs = this.svg.querySelector("defs");
    if (!defs) {
      defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      this.svg.appendChild(defs);
    }

    // handle various renderDetails
    if (planetData.renderDetails.type === "radialGradient") {
      // create unique gradient
      const gradientId = `${planet.name.toLowerCase()}-gradient`;
      const gradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
      gradient.setAttribute("id", gradientId);
      gradient.setAttribute("cx", "50%");
      gradient.setAttribute("cy", "50%");
      gradient.setAttribute("r", "50%");

      planetData.gradientColors.forEach((color, index) => {
        const stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
        stop.setAttribute("offset", `${index * 50}%`);
        stop.setAttribute("stop-color", color);
        gradient.appendChild(stop);
      });
      defs.appendChild(gradient);

      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", position.x);
      circle.setAttribute("cy", position.y);
      circle.setAttribute("r", planetData.size);
      circle.setAttribute("fill", `url(#${gradientId})`);
      circle.setAttribute("stroke", planetData.borderColor);
      circle.setAttribute("stroke-width", "2");
      planetGroup.appendChild(circle);

      // add rays if Sun
      if (planet.name === "Sun" && planetData.renderDetails.rays) {
        const rays = document.createElementNS("http://www.w3.org/2000/svg", "g");
        for (let i = 0; i < 8; i++) {
          const ray = document.createElementNS("http://www.w3.org/2000/svg", "line");
          const angle = i * 45 * Math.PI / 180;
          const innerRadius = planetData.size + 1;
          const outerRadius = planetData.size + 7;
          ray.setAttribute("x1", position.x + Math.cos(angle) * innerRadius);
          ray.setAttribute("y1", position.y + Math.sin(angle) * innerRadius);
          ray.setAttribute("x2", position.x + Math.cos(angle) * outerRadius);
          ray.setAttribute("y2", position.y + Math.sin(angle) * outerRadius);
          ray.setAttribute("stroke", planetData.borderColor);
          ray.setAttribute("stroke-width", "2");
          rays.appendChild(ray);
        }
        planetGroup.appendChild(rays);
      }
    }
    else if (planetData.renderDetails.type === "ringed") {
      // Saturn style
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", position.x);
      circle.setAttribute("cy", position.y);
      circle.setAttribute("r", planetData.size);
      circle.setAttribute("fill", planetData.color);
      circle.setAttribute("stroke", planetData.borderColor);
      circle.setAttribute("stroke-width", "1.5");
      planetGroup.appendChild(circle);

      const rings = document.createElementNS("http://www.w3.org/2000/svg", "g");
      const ringEllipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
      ringEllipse.setAttribute("cx", position.x);
      ringEllipse.setAttribute("cy", position.y);
      ringEllipse.setAttribute("rx", planetData.size * 1.8);
      ringEllipse.setAttribute("ry", planetData.size * 0.6);
      ringEllipse.setAttribute("fill", "none");
      ringEllipse.setAttribute("stroke", planetData.renderDetails.ringColor);
      ringEllipse.setAttribute("stroke-width", planetData.renderDetails.ringThickness[0]);
      rings.appendChild(ringEllipse);

      // Additional rings if specified
      if (planetData.renderDetails.ringThickness.length > 1) {
        const ringEllipse2 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        ringEllipse2.setAttribute("cx", position.x);
        ringEllipse2.setAttribute("cy", position.y);
        ringEllipse2.setAttribute("rx", planetData.size * 2.0);
        ringEllipse2.setAttribute("ry", planetData.size * 0.7);
        ringEllipse2.setAttribute("fill", "none");
        ringEllipse2.setAttribute("stroke", planetData.renderDetails.ringColor);
        ringEllipse2.setAttribute("stroke-width", planetData.renderDetails.ringThickness[1]);
        rings.appendChild(ringEllipse2);
      }
      planetGroup.appendChild(rings);
    }
    else if (planetData.renderDetails.type === "gasGiant") {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", position.x);
      circle.setAttribute("cy", position.y);
      circle.setAttribute("r", planetData.size);
      circle.setAttribute("fill", planetData.color);
      circle.setAttribute("stroke", planetData.borderColor);
      circle.setAttribute("stroke-width", "1.5");
      planetGroup.appendChild(circle);

      if (planetData.renderDetails.bands) {
        const bands = document.createElementNS("http://www.w3.org/2000/svg", "g");
        for (let i = 1; i <= 3; i++) {
          const yOffset = planetData.size * 0.2 * i - planetData.size * 0.4;
          const band = document.createElementNS("http://www.w3.org/2000/svg", "path");
          const width = Math.sqrt(planetData.size * planetData.size - yOffset * yOffset);

          band.setAttribute("d", `
            M ${position.x - width} ${position.y + yOffset}
            C ${position.x - width * 0.5} ${position.y + yOffset - 2},
              ${position.x + width * 0.5} ${position.y + yOffset - 2},
              ${position.x + width} ${position.y + yOffset}
            C ${position.x + width * 0.5} ${position.y + yOffset + 2},
              ${position.x - width * 0.5} ${position.y + yOffset + 2},
              ${position.x - width} ${position.y + yOffset}
          `);
          band.setAttribute("fill", "none");
          band.setAttribute("stroke", planetData.borderColor);
          band.setAttribute("stroke-width", "1");
          band.setAttribute("opacity", "0.7");
          bands.appendChild(band);
        }

        if (planet.name === "Jupiter" && planetData.renderDetails.greatRedSpot) {
          const spot = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
          spot.setAttribute("cx", position.x + planetData.size * 0.4);
          spot.setAttribute("cy", position.y - planetData.size * 0.2);
          spot.setAttribute("rx", planetData.size * 0.25);
          spot.setAttribute("ry", planetData.size * 0.15);
          spot.setAttribute("fill", "#d04030");
          spot.setAttribute("opacity", "0.7");
          bands.appendChild(spot);
        }

        if (planet.name === "Neptune" && planetData.renderDetails.stormSpots) {
          const spot = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
          spot.setAttribute("cx", position.x - planetData.size * 0.3);
          spot.setAttribute("cy", position.y + planetData.size * 0.3);
          spot.setAttribute("rx", planetData.size * 0.2);
          spot.setAttribute("ry", planetData.size * 0.2);
          spot.setAttribute("fill", "#1a4099");
          spot.setAttribute("opacity", "0.7");
          bands.appendChild(spot);
        }
        planetGroup.appendChild(bands);
      }

      if (planet.name === "Uranus" && planetData.renderDetails.tilt) {
        const tiltIndicator = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        tiltIndicator.setAttribute("cx", position.x);
        tiltIndicator.setAttribute("cy", position.y);
        tiltIndicator.setAttribute("rx", planetData.size * 1.4);
        tiltIndicator.setAttribute("ry", planetData.size * 0.4);
        tiltIndicator.setAttribute("fill", "none");
        tiltIndicator.setAttribute("stroke", "#88d8d0");
        tiltIndicator.setAttribute("stroke-width", "1.5");
        tiltIndicator.setAttribute("opacity", "0.6");
        tiltIndicator.setAttribute("transform", `rotate(95, ${position.x}, ${position.y})`);
        planetGroup.appendChild(tiltIndicator);
      }
    }
    else if (planetData.renderDetails.type === "rocky") {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", position.x);
      circle.setAttribute("cy", position.y);
      circle.setAttribute("r", planetData.size);
      circle.setAttribute("fill", planetData.color);
      circle.setAttribute("stroke", planetData.borderColor);
      circle.setAttribute("stroke-width", "1.5");
      planetGroup.appendChild(circle);

      if (planetData.renderDetails.texture === "cracked") {
        const features = document.createElementNS("http://www.w3.org/2000/svg", "g");
        for (let i = 0; i < 3; i++) {
          const crackLine = document.createElementNS("http://www.w3.org/2000/svg", "path");
          const startAngle = Math.random() * Math.PI * 2;
          const endAngle = startAngle + (Math.random() * Math.PI - Math.PI/2);

          const startX = position.x + Math.cos(startAngle) * planetData.size * 0.7;
          const startY = position.y + Math.sin(startAngle) * planetData.size * 0.7;
          const endX = position.x + Math.cos(endAngle) * planetData.size * 0.7;
          const endY = position.y + Math.sin(endAngle) * planetData.size * 0.7;

          const controlX = position.x + (Math.random() - 0.5) * planetData.size;
          const controlY = position.y + (Math.random() - 0.5) * planetData.size;

          crackLine.setAttribute("d", `
            M ${startX} ${startY}
            Q ${controlX} ${controlY}, ${endX} ${endY}
          `);
          crackLine.setAttribute("fill", "none");
          crackLine.setAttribute("stroke", planetData.renderDetails.craterColor);
          crackLine.setAttribute("stroke-width", "0.8");
          features.appendChild(crackLine);
        }
        planetGroup.appendChild(features);
      }
      else if (planetData.renderDetails.texture === "dusty") {
        if (planetData.renderDetails.polarCaps) {
          const northCap = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
          northCap.setAttribute("cx", position.x);
          northCap.setAttribute("cy", position.y - planetData.size * 0.7);
          northCap.setAttribute("rx", planetData.size * 0.5);
          northCap.setAttribute("ry", planetData.size * 0.3);
          northCap.setAttribute("fill", "#ffffff");
          northCap.setAttribute("opacity", "0.8");

          const southCap = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
          southCap.setAttribute("cx", position.x);
          southCap.setAttribute("cy", position.y + planetData.size * 0.7);
          southCap.setAttribute("rx", planetData.size * 0.5);
          southCap.setAttribute("ry", planetData.size * 0.3);
          southCap.setAttribute("fill", "#ffffff");
          southCap.setAttribute("opacity", "0.8");

          planetGroup.appendChild(northCap);
          planetGroup.appendChild(southCap);
        }
        const features = document.createElementNS("http://www.w3.org/2000/svg", "g");
        for (let i = 0; i < 4; i++) {
          const marking = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * planetData.size * 0.6;
          marking.setAttribute("cx", position.x + Math.cos(angle) * distance);
          marking.setAttribute("cy", position.y + Math.sin(angle) * distance);
          marking.setAttribute("rx", planetData.size * 0.1 + Math.random() * planetData.size * 0.15);
          marking.setAttribute("ry", planetData.size * 0.1 + Math.random() * planetData.size * 0.1);
          marking.setAttribute("fill", planetData.borderColor);
          marking.setAttribute("opacity", "0.3");
          features.appendChild(marking);
        }
        planetGroup.appendChild(features);
      }
      else if (planetData.renderDetails.texture === "icy") {
        const features = document.createElementNS("http://www.w3.org/2000/svg", "g");
        const heart = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const heartSize = planetData.size * 0.4;
        heart.setAttribute("d", `
          M ${position.x} ${position.y + heartSize * 0.3}
          C ${position.x - heartSize * 0.8} ${position.y - heartSize * 0.3},
            ${position.x - heartSize * 0.8} ${position.y - heartSize},
            ${position.x} ${position.y - heartSize * 0.6}
          C ${position.x + heartSize * 0.8} ${position.y - heartSize},
            ${position.x + heartSize * 0.8} ${position.y - heartSize * 0.3},
            ${position.x} ${position.y + heartSize * 0.3}
        `);
        heart.setAttribute("fill", "#d0c0b0");
        heart.setAttribute("opacity", "0.5");
        features.appendChild(heart);

        for (let i = 0; i < 3; i++) {
          const crater = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          const angle = Math.random() * Math.PI * 2;
          const dist = Math.random() * planetData.size * 0.6;
          crater.setAttribute("cx", position.x + Math.cos(angle) * dist);
          crater.setAttribute("cy", position.y + Math.sin(angle) * dist);
          crater.setAttribute("r", planetData.size * 0.1 + Math.random() * planetData.size * 0.1);
          crater.setAttribute("fill", planetData.renderDetails.craterColor);
          crater.setAttribute("opacity", "0.3");
          features.appendChild(crater);
        }
        planetGroup.appendChild(features);
      }
    }
    else if (planetData.renderDetails.type === "cratered") {
      // Moon-like
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", position.x);
      circle.setAttribute("cy", position.y);
      circle.setAttribute("r", planetData.size);
      circle.setAttribute("fill", planetData.color);
      circle.setAttribute("stroke", planetData.borderColor);
      circle.setAttribute("stroke-width", "1.5");
      planetGroup.appendChild(circle);

      const craters = document.createElementNS("http://www.w3.org/2000/svg", "g");
      for (let i = 0; i < 6; i++) {
        const crater = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * planetData.size * 0.7;
        crater.setAttribute("cx", position.x + Math.cos(angle) * dist);
        crater.setAttribute("cy", position.y + Math.sin(angle) * dist);
        crater.setAttribute("r", planetData.size * 0.05 + Math.random() * planetData.size * 0.1);
        crater.setAttribute("fill", planetData.renderDetails.craterColor);
        crater.setAttribute("opacity", "0.2");
        craters.appendChild(crater);
      }
      if (planetData.renderDetails.phases) {
        const phase = document.createElementNS("http://www.w3.org/2000/svg", "path");
        phase.setAttribute("d", `
          M ${position.x} ${position.y - planetData.size}
          A ${planetData.size} ${planetData.size} 0 0 1 
            ${position.x} ${position.y + planetData.size}
          A ${planetData.size * 1.5} ${planetData.size} 0 0 0 
            ${position.x} ${position.y - planetData.size}
        `);
        phase.setAttribute("fill", "#33333380");
        craters.appendChild(phase);
      }
      planetGroup.appendChild(craters);
    }
    else if (planetData.renderDetails.type === "cloudy") {
      // Venus-like
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", position.x);
      circle.setAttribute("cy", position.y);
      circle.setAttribute("r", planetData.size);
      circle.setAttribute("fill", planetData.color);
      circle.setAttribute("stroke", planetData.borderColor);
      circle.setAttribute("stroke-width", "1.5");
      planetGroup.appendChild(circle);

      const clouds = document.createElementNS("http://www.w3.org/2000/svg", "g");
      for (let i = 0; i < 4; i++) {
        const cloud = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        const angle = i * Math.PI / 2 + Math.random() * 0.7;
        const distance = planetData.size * 0.5;
        cloud.setAttribute("cx", position.x + Math.cos(angle) * distance);
        cloud.setAttribute("cy", position.y + Math.sin(angle) * distance);
        cloud.setAttribute("rx", planetData.size * 0.4);
        cloud.setAttribute("ry", planetData.size * 0.25);
        cloud.setAttribute("fill", planetData.renderDetails.cloudColor);
        cloud.setAttribute("opacity", "0.5");
        cloud.setAttribute("transform", `rotate(${Math.random() * 360}, ${position.x + Math.cos(angle) * distance}, ${position.y + Math.sin(angle) * distance})`);
        clouds.appendChild(cloud);
      }
      const haze = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      haze.setAttribute("cx", position.x);
      haze.setAttribute("cy", position.y);
      haze.setAttribute("r", planetData.size);
      haze.setAttribute("fill", planetData.renderDetails.cloudColor);
      haze.setAttribute("opacity", "0.2");
      clouds.appendChild(haze);

      planetGroup.appendChild(clouds);
    }
    else if (planetData.renderDetails.type === "comet") {
      // Chiron
      const nucleus = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      nucleus.setAttribute("cx", position.x);
      nucleus.setAttribute("cy", position.y);
      nucleus.setAttribute("r", planetData.size);
      nucleus.setAttribute("fill", planetData.color);
      nucleus.setAttribute("stroke", planetData.borderColor);
      nucleus.setAttribute("stroke-width", "1.5");
      planetGroup.appendChild(nucleus);

      const tail = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const sunDegree = this.planets.find(p => p.name === "Sun")?.degree || 0;
      const tailAngle = ((sunDegree + 180) % 360) * Math.PI / 180;
      const tailEndX = position.x + Math.cos(tailAngle) * planetData.size * 4;
      const tailEndY = position.y + Math.sin(tailAngle) * planetData.size * 4;
      const tailWidthStart = planetData.size * 0.8;
      const controlPoint1X = position.x + Math.cos(tailAngle + Math.PI/2) * tailWidthStart + Math.cos(tailAngle)*planetData.size*1.5;
      const controlPoint1Y = position.y + Math.sin(tailAngle + Math.PI/2) * tailWidthStart + Math.sin(tailAngle)*planetData.size*1.5;
      const controlPoint2X = position.x + Math.cos(tailAngle - Math.PI/2) * tailWidthStart + Math.cos(tailAngle)*planetData.size*1.5;
      const controlPoint2Y = position.y + Math.sin(tailAngle - Math.PI/2) * tailWidthStart + Math.sin(tailAngle)*planetData.size*1.5;

      tail.setAttribute("d", `
        M ${position.x + Math.cos(tailAngle + Math.PI/2) * tailWidthStart} 
          ${position.y + Math.sin(tailAngle + Math.PI/2) * tailWidthStart}
        Q ${controlPoint1X} ${controlPoint1Y}, ${tailEndX} ${tailEndY}
        Q ${controlPoint2X} ${controlPoint2Y},
          ${position.x + Math.cos(tailAngle - Math.PI/2) * tailWidthStart}
          ${position.y + Math.sin(tailAngle - Math.PI/2) * tailWidthStart}
        Z
      `);

      const tailGradientId = `${planet.name.toLowerCase()}-tail-gradient`;
      const tailGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
      tailGradient.setAttribute("id", tailGradientId);
      tailGradient.setAttribute("x1", "0%");
      tailGradient.setAttribute("y1", "0%");
      tailGradient.setAttribute("x2", "100%");
      tailGradient.setAttribute("y2", "0%");
      tailGradient.setAttribute("gradientTransform", `rotate(${tailAngle * 180 / Math.PI}, ${position.x}, ${position.y})`);

      const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      stop1.setAttribute("offset", "0%");
      stop1.setAttribute("stop-color", planetData.renderDetails.tailColor);
      stop1.setAttribute("stop-opacity", "0.7");
      const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      stop2.setAttribute("offset", "100%");
      stop2.setAttribute("stop-color", planetData.renderDetails.tailColor);
      stop2.setAttribute("stop-opacity", "0");
      tailGradient.appendChild(stop1);
      tailGradient.appendChild(stop2);

      defs.appendChild(tailGradient);

      tail.setAttribute("fill", `url(#${tailGradientId})`);
      tail.setAttribute("opacity", "0.6");
      planetGroup.appendChild(tail);

      if (planetData.renderDetails.glowEffect) {
        const glow = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        glow.setAttribute("cx", position.x);
        glow.setAttribute("cy", position.y);
        glow.setAttribute("r", planetData.size * 1.7);
        glow.setAttribute("fill", planetData.renderDetails.tailColor);
        glow.setAttribute("opacity", "0.2");
        glow.setAttribute("filter", "url(#glow)");
        planetGroup.insertBefore(glow, nucleus);
      }
    }
    else if (planetData.renderDetails.type === "karmic") {
      // Nodes
      const nodeCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      nodeCircle.setAttribute("cx", position.x);
      nodeCircle.setAttribute("cy", position.y);
      nodeCircle.setAttribute("r", planetData.size);
      nodeCircle.setAttribute("fill", "none");
      nodeCircle.setAttribute("stroke", planetData.borderColor);
      nodeCircle.setAttribute("stroke-width", "1.5");
      planetGroup.appendChild(nodeCircle);

      const innerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      innerCircle.setAttribute("cx", position.x);
      innerCircle.setAttribute("cy", position.y);
      innerCircle.setAttribute("r", planetData.size * 0.5);
      innerCircle.setAttribute("fill", planetData.color);
      innerCircle.setAttribute("opacity", "0.7");
      planetGroup.appendChild(innerCircle);

      if (planetData.renderDetails.pulseEffect) {
        const pulse1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        pulse1.setAttribute("cx", position.x);
        pulse1.setAttribute("cy", position.y);
        pulse1.setAttribute("r", planetData.size);
        pulse1.setAttribute("fill", "none");
        pulse1.setAttribute("stroke", planetData.renderDetails.glowColor);
        pulse1.setAttribute("stroke-width", "1");
        pulse1.setAttribute("opacity", "0.7");
        pulse1.classList.add("pulse-animation");
        pulse1.style.animation = "pulse 3s infinite";

        const pulse2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        pulse2.setAttribute("cx", position.x);
        pulse2.setAttribute("cy", position.y);
        pulse2.setAttribute("r", planetData.size);
        pulse2.setAttribute("fill", "none");
        pulse2.setAttribute("stroke", planetData.renderDetails.glowColor);
        pulse2.setAttribute("stroke-width", "1");
        pulse2.setAttribute("opacity", "0.5");
        pulse2.classList.add("pulse-animation");
        pulse2.style.animation = "pulse 3s infinite 1.5s";

        // define pulse if not existing
        if (!document.querySelector("style#pulse-animation")) {
          const style = document.createElement("style");
          style.id = "pulse-animation";
          style.textContent = `
            @keyframes pulse {
              0%   { r: ${planetData.size};   opacity: 0.7; }
              100% { r: ${planetData.size * 2}; opacity: 0; }
            }
          `;
          document.head.appendChild(style);
        }
        planetGroup.insertBefore(pulse1, nodeCircle);
        planetGroup.insertBefore(pulse2, nodeCircle);
      }
    }

    // add planet symbol
    const symbol = document.createElementNS("http://www.w3.org/2000/svg", "text");
    symbol.setAttribute("x", position.x);
    symbol.setAttribute("y", position.y + 5);
    symbol.setAttribute("text-anchor", "middle");
    symbol.setAttribute("dominant-baseline", "middle");
    symbol.setAttribute("fill", "#333");
    symbol.setAttribute("font-size", "14");
    symbol.setAttribute("font-weight", "bold");
    symbol.setAttribute("pointer-events", "none");
    symbol.textContent = planetData.symbol;
    planetGroup.appendChild(symbol);

    return planetGroup;
  }

  drawAspects() {
    let aspectsGroup = document.getElementById("aspects");
    if (!aspectsGroup) {
      aspectsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
      aspectsGroup.id = "aspects";
      aspectsGroup.setAttribute("transform", `translate(${this.centerX}, ${this.centerY})`);
      this.svg.appendChild(aspectsGroup);
    } else {
      while (aspectsGroup.firstChild) aspectsGroup.removeChild(aspectsGroup.firstChild);
    }

    this.aspects.forEach(aspectData => {
      const planet1Pos = this.calculatePositionOnWheel(aspectData.planet1.degree, 250);
      const planet2Pos = this.calculatePositionOnWheel(aspectData.planet2.degree, 250);

      const x1 = planet1Pos.x - this.centerX;
      const y1 = planet1Pos.y - this.centerY;
      const x2 = planet2Pos.x - this.centerX;
      const y2 = planet2Pos.y - this.centerY;

      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", x1);
      line.setAttribute("y1", y1);
      line.setAttribute("x2", x2);
      line.setAttribute("y2", y2);
      line.setAttribute("stroke", aspectData.aspect.color);
      line.setAttribute("stroke-width", "1.2");
      line.setAttribute("opacity", "0.6");

      if (aspectData.aspect.lineStyle === "dashed") {
        line.setAttribute("stroke-dasharray", "5,3");
      }
      line.classList.add("aspect-line");
      line.dataset.planet1 = aspectData.planet1.name;
      line.dataset.planet2 = aspectData.planet2.name;
      line.dataset.aspect = aspectData.aspect.name;
      line.dataset.orb = aspectData.aspect.orb;

      // tooltip
      line.setAttribute("data-tip",
        `${aspectData.aspect.name}: ${aspectData.planet1.name} to ${aspectData.planet2.name} (orb: ${aspectData.aspect.orb}°)`
      );

      aspectsGroup.appendChild(line);
    });
  }

  drawHouses(houseCusps) {
    this.houses = houseCusps;
    let housesGroup = document.getElementById("houses");
    if (!housesGroup) {
      housesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
      housesGroup.id = "houses";
      housesGroup.setAttribute("transform", `translate(${this.centerX}, ${this.centerY})`);
      this.svg.appendChild(housesGroup);
    } else {
      while (housesGroup.firstChild) housesGroup.removeChild(housesGroup.firstChild);
    }

    houseCusps.forEach((cusp, index) => {
      const outerPos = this.calculatePositionOnWheel(cusp, this.wheelRadius);
      const innerPos = this.calculatePositionOnWheel(cusp, 200);

      const outerX = outerPos.x - this.centerX;
      const outerY = outerPos.y - this.centerY;
      const innerX = innerPos.x - this.centerX;
      const innerY = innerPos.y - this.centerY;

      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", outerX);
      line.setAttribute("y1", outerY);
      line.setAttribute("x2", innerX);
      line.setAttribute("y2", innerY);
      line.setAttribute("stroke", "#aaa");

      if (index === 0) {
        line.setAttribute("stroke", "#6247aa");
        line.setAttribute("stroke-width", "2");
      } else {
        line.setAttribute("stroke-width", "1");
        line.setAttribute("stroke-dasharray", "5,3");
      }
      housesGroup.appendChild(line);

      const midPointDistance = this.wheelRadius - 40;
      const midPoint = this.calculatePositionOnWheel(cusp + 15, midPointDistance);
      const midX = midPoint.x - this.centerX;
      const midY = midPoint.y - this.centerY;

      const houseNumber = document.createElementNS("http://www.w3.org/2000/svg", "text");
      houseNumber.setAttribute("x", midX);
      houseNumber.setAttribute("y", midY);
      houseNumber.setAttribute("text-anchor", "middle");
      houseNumber.setAttribute("dominant-baseline", "middle");
      houseNumber.setAttribute("fill", "#6247aa");
      houseNumber.setAttribute("font-size", "12");
      houseNumber.setAttribute("font-weight", index === 0 ? "bold" : "normal");

      if (index === 0) {
        houseNumber.textContent = "ASC";
      } else if (index === 3) {
        houseNumber.textContent = "IC";
      } else if (index === 6) {
        houseNumber.textContent = "DSC";
      } else if (index === 9) {
        houseNumber.textContent = "MC";
      } else {
        houseNumber.textContent = (index + 1).toString();
      }
      housesGroup.appendChild(houseNumber);
    });
  }

  // Called after chart draws to update the interpretations panel
  updateInterpretationsPanel() {
    // Example for Sun and Moon
    const sunPlanet = this.planets.find(p => p.name === "Sun");
    if (sunPlanet) {
      const sunPosition = this.calculator.degreeToZodiacPosition(sunPlanet.degree);
      const sunSignTitle = document.getElementById('sun-sign-title');
      const sunSignContent = document.getElementById('sun-sign-content');
      if (sunSignTitle && sunSignContent) {
        sunSignTitle.textContent = `Sun in ${sunPosition.sign.name}`;
        const planetDef = PLANETS.find(p => p.name === "Sun");
        sunSignContent.textContent = planetDef.interpretations[sunPosition.sign.name] ||
          `Your Sun in ${sunPosition.sign.name} is a unique expression.`;
      }
    }

    const moonPlanet = this.planets.find(p => p.name === "Moon");
    if (moonPlanet) {
      const moonPosition = this.calculator.degreeToZodiacPosition(moonPlanet.degree);
      const moonSignTitle = document.getElementById('moon-sign-title');
      const moonSignContent = document.getElementById('moon-sign-content');
      if (moonSignTitle && moonSignContent) {
        moonSignTitle.textContent = `Moon in ${moonPosition.sign.name}`;
        const planetDef = PLANETS.find(p => p.name === "Moon");
        moonSignContent.textContent = planetDef.interpretations[moonPosition.sign.name] ||
          `Your Moon in ${moonPosition.sign.name} is a unique expression.`;
      }
    }

    // Update aspects interpretations if an element with id aspects-interpretations exists
    const aspectsInterpretations = document.getElementById('aspects-interpretations');
    if (aspectsInterpretations) {
      aspectsInterpretations.innerHTML = '';
      // Filter significant aspects
      const significantAspects = this.aspects.filter(a => {
        const isPersonal1 = ['Sun','Moon','Mercury','Venus','Mars'].includes(a.planet1.name);
        const isPersonal2 = ['Sun','Moon','Mercury','Venus','Mars'].includes(a.planet2.name);
        return (isPersonal1 || isPersonal2) && parseFloat(a.aspect.orb) < 5;
      });
      // Sort by orb
      significantAspects.sort((a,b) => parseFloat(a.aspect.orb) - parseFloat(b.aspect.orb));
      const topAspects = significantAspects.slice(0, 5);

      if (topAspects.length === 0) {
        aspectsInterpretations.innerHTML = '<p>No significant personal planet aspects found.</p>';
      } else {
        topAspects.forEach(aspect => {
          aspectsInterpretations.innerHTML += this.generateAspectInterpretation(aspect);
        });
      }
    }
  }

  generateAspectInterpretation(aspect) {
    const { planet1, planet2, aspect: aspectDetails } = aspect;
    const planetData1 = PLANETS.find(p => p.name === planet1.name);
    const planetData2 = PLANETS.find(p => p.name === planet2.name);
    if (!planetData1 || !planetData2) return "";

    const pos1 = this.calculator.degreeToZodiacPosition(planet1.degree);
    const pos2 = this.calculator.degreeToZodiacPosition(planet2.degree);

    const aspectType = (["Trine","Sextile"].includes(aspectDetails.name)) ? "harmonious"
      : (["Square","Opposition","Quincunx"].includes(aspectDetails.name)) ? "challenging"
      : "significant";

    let interpretation = `<div class="interpretation-item">
      <div class="interpretation-title">${planet1.name} ${aspectDetails.name} ${planet2.name}</div>
      <div class="interpretation-content">
        Your ${planet1.name} in ${pos1.sign.name} forms a ${aspectType} ${aspectDetails.name} aspect
        with your ${planet2.name} in ${pos2.sign.name}.`;

    if (aspectType === "harmonious") {
      interpretation += ` This creates a supportive flow, fostering natural talents and opportunities.`;
    } else if (aspectType === "challenging") {
      interpretation += ` This creates dynamic tension that can spur growth and integration.`;
    } else {
      interpretation += ` This is a powerful contact, linking these energies significantly in your chart.`;
    }
    interpretation += `</div></div>`;
    return interpretation;
  }

  updateAspectsTable() {
    const aspectsTable = document.getElementById('aspects-table');
    if (!aspectsTable) return;

    while (aspectsTable.firstChild) aspectsTable.removeChild(aspectsTable.firstChild);

    const headerRow = document.createElement('tr');
    headerRow.appendChild(document.createElement('th'));

    this.planets.forEach(planet => {
      const planetHeader = document.createElement('th');
      const planetData = PLANETS.find(p => p.name === planet.name);
      planetHeader.textContent = planetData ? planetData.symbol : planet.name;
      planetHeader.title = planet.name;
      headerRow.appendChild(planetHeader);
    });
    aspectsTable.appendChild(headerRow);

    this.planets.forEach((planet1, index1) => {
      const row = document.createElement('tr');
      const planetCell = document.createElement('td');
      const planetData = PLANETS.find(p => p.name === planet1.name);
      planetCell.textContent = planetData ? planetData.symbol : planet1.name;
      planetCell.title = planet1.name;
      row.appendChild(planetCell);

      this.planets.forEach((planet2, index2) => {
        const cell = document.createElement('td');
        if (index2 < index1) {
          const aspect = this.aspects.find(a =>
            (a.planet1.name === planet1.name && a.planet2.name === planet2.name) ||
            (a.planet1.name === planet2.name && a.planet2.name === planet1.name)
          );
          if (aspect) {
            cell.textContent = aspect.aspect.name.substring(0,3);
            cell.title = `${aspect.planet1.name} ${aspect.aspect.name} ${aspect.planet2.name} (orb: ${aspect.aspect.orb}°)`;
            cell.style.backgroundColor = aspect.aspect.color;
            cell.style.color = '#fff';
            cell.classList.add('aspect-cell');
          }
        } else if (index1 === index2) {
          const position = this.calculator.degreeToZodiacPosition(planet1.degree);
          cell.textContent = position.sign.symbol;
          cell.title = `${planet1.name} in ${position.sign.name}`;
          cell.style.backgroundColor = '#f0f0f0';
        }
        row.appendChild(cell);
      });
      aspectsTable.appendChild(row);
    });
  }

  updateHousesView() {
    const housesContainer = document.getElementById('houses-container');
    if (!housesContainer) return;
    while (housesContainer.firstChild) housesContainer.removeChild(housesContainer.firstChild);

    this.houses.forEach((cusp, index) => {
      const houseNumber = index + 1;
      const position = this.calculator.degreeToZodiacPosition(cusp);
      const signName = position.sign.name;

      const houseSection = document.createElement('div');
      houseSection.className = 'house-section';

      const houseTitle = document.createElement('h3');
      houseTitle.textContent = `House ${houseNumber}: ${HOUSE_INTERPRETATIONS[houseNumber].title}`;
      houseSection.appendChild(houseTitle);

      const houseInfo = document.createElement('div');
      houseInfo.className = 'house-info';
      houseInfo.innerHTML = `
        <div class="house-sign"><strong>${signName}</strong> on ${HOUSE_INTERPRETATIONS[houseNumber].name} cusp</div>
        <div class="house-description">${HOUSE_INTERPRETATIONS[houseNumber].description}</div>
        <div class="house-interpretation">${HOUSE_INTERPRETATIONS[houseNumber].interpretations[signName]}</div>
      `;
      houseSection.appendChild(houseInfo);

      housesContainer.appendChild(houseSection);
    });
  }

  updateTransitsView(transitDate = new Date()) {
    const transitsContainer = document.getElementById('transits-container');
    if (!transitsContainer) return;
    while (transitsContainer.firstChild) transitsContainer.removeChild(transitsContainer.firstChild);

    const transitPlanets = this.calculator.calculateAllPlanetPositions(transitDate);

    const transitHeading = document.createElement('h3');
    const formattedDate = transitDate.toLocaleDateString(undefined, {
      year: 'numeric', month: 'long', day: 'numeric'
    });
    transitHeading.textContent = `Transits for ${formattedDate}`;
    transitsContainer.appendChild(transitHeading);

    const transitTable = document.createElement('table');
    transitTable.className = 'transits-table';

    const headerRow = document.createElement('tr');
    ['Planet','Transit Position','Natal Position','Transit to Natal'].forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    });
    transitTable.appendChild(headerRow);

    transitPlanets.forEach(tPlanet => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      const pData = PLANETS.find(p => p.name === tPlanet.name);
      nameCell.innerHTML = pData ? `${pData.symbol} ${tPlanet.name}` : tPlanet.name;
      row.appendChild(nameCell);

      const transitPos = this.calculator.degreeToZodiacPosition(tPlanet.degree);
      const transitPosCell = document.createElement('td');
      transitPosCell.textContent = this.calculator.formatZodiacPosition(transitPos);
      transitPosCell.style.color = transitPos.sign.color;
      row.appendChild(transitPosCell);

      const natalPlanet = this.planets.find(p => p.name === tPlanet.name);
      const natalPosCell = document.createElement('td');
      if (natalPlanet) {
        const natalPos = this.calculator.degreeToZodiacPosition(natalPlanet.degree);
        natalPosCell.textContent = this.calculator.formatZodiacPosition(natalPos);
        natalPosCell.style.color = natalPos.sign.color;
      } else {
        natalPosCell.textContent = "N/A";
      }
      row.appendChild(natalPosCell);

      const transitNatalCell = document.createElement('td');
      if (natalPlanet) {
        const aspect = this.checkAspect(tPlanet.degree, natalPlanet.degree);
        if (aspect) {
          transitNatalCell.textContent = `${aspect.name} (orb: ${aspect.orb}°)`;
          transitNatalCell.style.color = aspect.color;
        } else {
          transitNatalCell.textContent = "No major aspect";
        }
      } else {
        transitNatalCell.textContent = "N/A";
      }
      row.appendChild(transitNatalCell);

      transitTable.appendChild(row);
    });
    transitsContainer.appendChild(transitTable);

    // significant transits
    const significantTransits = document.createElement('div');
    significantTransits.className = 'significant-transits';
    const significantHeading = document.createElement('h3');
    significantHeading.textContent = 'Significant Current Transits';
    significantTransits.appendChild(significantHeading);

    const significantAspects = [];
    transitPlanets.forEach(tPlanet => {
      this.planets.forEach(natalPlanet => {
        const aspect = this.checkAspect(tPlanet.degree, natalPlanet.degree);
        if (aspect && parseFloat(aspect.orb) < 3 &&
            ['Sun','Moon','Mercury','Venus','Mars'].includes(natalPlanet.name)) {
          significantAspects.push({ transitPlanet: tPlanet, natalPlanet, aspect });
        }
      });
    });
    significantAspects.sort((a,b) => parseFloat(a.aspect.orb) - parseFloat(b.aspect.orb));

    if (significantAspects.length > 0) {
      significantAspects.slice(0,5).forEach(({transitPlanet,natalPlanet,aspect}) => {
        const transitInfo = document.createElement('div');
        transitInfo.className = 'transit-info';
        const tPos = this.calculator.degreeToZodiacPosition(transitPlanet.degree);
        const nPos = this.calculator.degreeToZodiacPosition(natalPlanet.degree);

        transitInfo.innerHTML = `
          <div class="transit-title">Transit ${transitPlanet.name} in ${tPos.sign.name} 
            ${aspect.name} Natal ${natalPlanet.name} in ${nPos.sign.name}</div>
          <div class="transit-description">
            This transit suggests a period where your ${natalPlanet.name} energies are 
            ${(["Conjunction"].includes(aspect.name) ? "intensified" : 
               (["Trine","Sextile"].includes(aspect.name) ? "supported" : "challenged"))}
            by current cosmic forces...
          </div>
        `;
        significantTransits.appendChild(transitInfo);
      });
    } else {
      const noTransits = document.createElement('p');
      noTransits.textContent = "No significant tight aspects between transit and natal planets at this time.";
      significantTransits.appendChild(noTransits);
    }
    transitsContainer.appendChild(significantTransits);
  }

  updateChart(birthData) {
    let birthDate;
    if (typeof birthData.date === 'string') {
      birthDate = new Date(birthData.date);
      if (birthData.time) {
        const [h, m] = birthData.time.split(':').map(Number);
        birthDate.setHours(h,m,0);
      }
    } else if (birthData.date instanceof Date) {
      birthDate = birthData.date;
    } else {
      birthDate = new Date();
    }

    this.planets = this.calculator.calculateAllPlanetPositions(birthDate);
    this.houses = this.calculator.calculateHouseCusps(
      birthDate, 
      birthData.latitude || 0, 
      birthData.longitude || 0
    );

    let planetsGroup = document.getElementById("planets");
    if (!planetsGroup) {
      planetsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
      planetsGroup.id = "planets";
      planetsGroup.setAttribute("transform", `translate(${this.centerX}, ${this.centerY})`);
      this.svg.appendChild(planetsGroup);
    } else {
      while (planetsGroup.firstChild) planetsGroup.removeChild(planetsGroup.firstChild);
    }

    this.planets.forEach(planet => {
      const planetData = PLANETS.find(p => p.name === planet.name);
      if (planetData) {
        const planetElement = this.drawPlanet(planet, planetData);
        planetsGroup.appendChild(planetElement);
      }
    });

    this.calculateAspects();
    this.drawAspects();
    this.drawHouses(this.houses);

    this.updateInterpretationsPanel();

    if (this.currentView === 'aspects') {
      this.updateAspectsTable();
    }
    if (this.currentView === 'houses') {
      this.updateHousesView();
    }
    if (this.currentView === 'transits') {
      this.updateTransitsView();
    }

    return {
      planets: this.planets.map(p => ({
        name: p.name,
        position: this.calculator.formatZodiacPosition(
          this.calculator.degreeToZodiacPosition(p.degree)
        )
      })),
      aspects: this.aspects.map(a => ({
        aspect: a.aspect.name,
        planets: `${a.planet1.name} to ${a.planet2.name}`,
        orb: a.aspect.orb
      }))
    };
  }

  setView(viewName) {
    this.currentView = viewName;
    const viewContainers = document.querySelectorAll('.view-container');
    viewContainers.forEach(vc => vc.style.display = 'none');
    const activeContainer = document.getElementById(`${viewName}-view`);
    if (activeContainer) activeContainer.style.display = 'block';

    if (viewName === 'aspects') {
      this.updateAspectsTable();
    } else if (viewName === 'houses') {
      this.updateHousesView();
    } else if (viewName === 'transits') {
      this.updateTransitsView();
    }
  }

  animateChart() {
    const zodiacWheel = document.getElementById('zodiac-wheel');
    const planets = document.querySelectorAll('.planet-group');
    const aspectLines = document.querySelectorAll('.aspect-line');

    if (zodiacWheel) {
      zodiacWheel.style.animation = 'none';
      zodiacWheel.offsetHeight; 
      zodiacWheel.style.animation = 'rotateIn 1.5s';
    }

    planets.forEach((planet, idx) => {
      planet.style.opacity = '0';
      planet.style.transform = 'scale(0)';
      planet.style.transition = 'opacity 0.8s, transform 0.8s';
      setTimeout(() => {
        planet.style.opacity = '1';
        planet.style.transform = 'scale(1)';
      }, 1000 + idx * 100);
    });

    aspectLines.forEach((line, idx) => {
      const length = Math.hypot(
        parseFloat(line.getAttribute('x2')) - parseFloat(line.getAttribute('x1')),
        parseFloat(line.getAttribute('y2')) - parseFloat(line.getAttribute('y1'))
      );
      line.style.strokeDasharray = length;
      line.style.strokeDashoffset = length;
      line.style.transition = 'stroke-dashoffset 1s ease-in-out';
      setTimeout(() => {
        line.style.strokeDashoffset = '0';
      }, 1500 + idx * 100);
    });
  }

  addMagicalEffects() {
    const chartContainer = document.querySelector('.chart-container');
    if (!chartContainer) return;
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.classList.add('magic-particle');
      const size = Math.random() * 5 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;

      const colorIndex = Math.floor(Math.random() * ZODIAC_SIGNS.length);
      particle.style.backgroundColor = ZODIAC_SIGNS[colorIndex].color;
      chartContainer.appendChild(particle);
    }
  }
}


/* --------------------------------------------------------------------------------
   6) DOMContentLoaded SETUP - attach everything to your page
   -------------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
  // We assume <svg id="chart-svg" width="800" height="800"></svg> in HTML
  const chartSvg = document.getElementById('chart-svg');
  if (!chartSvg) return;

  const chart = new EnhancedAstrologyChart(chartSvg);

  // create needed containers for views if not present
  createViewContainers();

  injectParticleStyles();
  chart.addMagicalEffects();

  // Hook up your "Generate Chart" button
  const generateButton = document.getElementById('generate-chart');
  if (generateButton) {
    generateButton.addEventListener('click', function() {
      const name = document.getElementById('name')?.value || 'Anonymous';
      const birthDate = document.getElementById('birth-date')?.value;
      const birthTime = document.getElementById('birth-time')?.value;
      const birthLocation = document.getElementById('birth-location')?.value || '';

      if (!birthDate) {
        alert('Please enter a birth date');
        return;
      }

      const chartData = chart.updateChart({
        date: birthDate,
        time: birthTime,
        location: birthLocation,
        latitude: 0,  // placeholder
        longitude: 0  // placeholder
      });
      chart.animateChart();
      chart.setView('wheel');

      console.log('Chart generated for:', name);
      console.log('Planet positions:', chartData.planets);
      console.log('Aspects:', chartData.aspects);
    });
  }

  // handle view switching
  const viewButtons = document.querySelectorAll('.control-btn[data-view]');
  viewButtons.forEach(button => {
    button.addEventListener('click', function() {
      viewButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      const view = this.dataset.view;
      chart.setView(view);
    });
  });

  // Save chart as .svg
  const saveButton = document.getElementById('save-chart');
  if (saveButton) {
    saveButton.addEventListener('click', function() {
      const svg = document.getElementById('chart-svg');
      if (!svg) return;
      const serializer = new XMLSerializer();
      const svgStr = serializer.serializeToString(svg);
      const svgBlob = new Blob([svgStr], {type: 'image/svg+xml;charset=utf-8'});
      const url = URL.createObjectURL(svgBlob);

      const link = document.createElement('a');
      link.href = url;
      const name = document.getElementById('name')?.value || 'anonymous';
      const date = new Date().toISOString().slice(0, 10);
      link.download = `${name}-astrology-chart-${date}.svg`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  // For the transit date in the "Transits" view
  const transitDateInput = document.getElementById('transit-date');
  const updateTransitsButton = document.getElementById('update-transits');
  if (transitDateInput && updateTransitsButton) {
    updateTransitsButton.addEventListener('click', function() {
      const tDate = new Date(transitDateInput.value);
      chart.updateTransitsView(tDate);
    });
  }

  // Do an initial chart on load
  setTimeout(() => {
    const today = new Date();
    chart.updateChart({ date: today, latitude:0, longitude:0 });
    chart.animateChart();
    chart.setView('wheel');
  }, 500);

  /* helper to create the wheel, aspects, houses, transits containers */
  function createViewContainers() {
    const mainElement = document.querySelector('main');
    if (!mainElement) return;

    if (!document.getElementById('wheel-view')) {
      const chartContainer = document.querySelector('.chart-container');
      if (chartContainer) {
        chartContainer.id = 'wheel-view';
        chartContainer.classList.add('view-container');
      }

      // aspects
      const aspectsView = document.createElement('div');
      aspectsView.id = 'aspects-view';
      aspectsView.className = 'view-container';
      aspectsView.style.display = 'none';
      aspectsView.innerHTML = `
        <h3>Aspects Table</h3>
        <p>This table shows the aspects between planets in your chart.</p>
        <div class="aspects-table-container">
          <table id="aspects-table" class="aspects-table"></table>
        </div>
        <div class="aspects-legend">
          <h4>Aspect Legend</h4>
          <div class="aspect-legend-items">
            ${ASPECTS.map(a => `
              <div class="aspect-legend-item">
                <div class="aspect-color" style="background-color:${a.color}"></div>
                <div class="aspect-name">${a.name} (${a.angle}°)</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      mainElement.insertBefore(aspectsView, mainElement.firstChild);

      // houses
      const housesView = document.createElement('div');
      housesView.id = 'houses-view';
      housesView.className = 'view-container';
      housesView.style.display = 'none';
      housesView.innerHTML = `
        <h3>House Placements</h3>
        <p>Learn about how the zodiac signs influence different areas of life.</p>
        <div id="houses-container" class="houses-container"></div>
      `;
      mainElement.insertBefore(housesView, mainElement.firstChild);

      // transits
      const transitsView = document.createElement('div');
      transitsView.id = 'transits-view';
      transitsView.className = 'view-container';
      transitsView.style.display = 'none';
      transitsView.innerHTML = `
        <h3>Current Transits</h3>
        <p>Compare your natal chart with the current planetary positions.</p>
        <div class="transit-date-selector">
          <label for="transit-date">Transit Date:</label>
          <input type="date" id="transit-date" value="${new Date().toISOString().slice(0,10)}">
          <button id="update-transits">Update Transits</button>
        </div>
        <div id="transits-container" class="transits-container"></div>
      `;
      mainElement.insertBefore(transitsView, mainElement.firstChild);
    }
  }

  /* helper to inject CSS for magic particles, tables, houses, etc. */
  function injectParticleStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      :root {
        --primary-color: #6247aa;
        --secondary-color: #ff7700;
      }
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
        0% { transform: translate(0,0) rotate(0); opacity:0; }
        20% { opacity: 0.8; }
        80% { opacity:0.8; }
        100% { transform: translate(var(--particle-x,100px), var(--particle-y,100px)) rotate(360deg); opacity:0; }
      }
      @keyframes glowParticle {
        0% { filter: blur(1px) brightness(1); }
        100% { filter: blur(2px) brightness(1.5); }
      }
      .pulse-animation { animation: pulse 3s infinite; }
      @keyframes pulse {
        0% { transform: scale(1); opacity: 0.7; }
        100% { transform: scale(2); opacity: 0; }
      }
      .aspects-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
      }
      .aspects-table th, .aspects-table td {
        padding: 8px;
        text-align: center;
        border: 1px solid #ddd;
      }
      .aspects-table th {
        background-color: #f0f0f0;
        font-weight: bold;
      }
      .aspect-cell {
        cursor: pointer;
        font-weight: bold;
        border-radius: 4px;
      }
      .aspects-legend {
        margin-top:20px;
      }
      .aspect-legend-items {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 10px;
      }
      .aspect-legend-item {
        display:flex;
        align-items:center;
        gap:5px;
      }
      .aspect-color {
        width:20px; height:20px;
        border-radius:50%;
      }
      .houses-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
        gap:20px;
        margin-top:20px;
      }
      .house-section {
        background:white;
        border-radius:10px;
        padding:15px;
        box-shadow:0 2px 5px rgba(0,0,0,0.1);
      }
      .house-section h3 {
        color:var(--primary-color);
        margin-top:0;
        border-bottom:1px solid #eee;
        padding-bottom:10px;
      }
      .house-sign {
        font-size:1.1em;
        margin-bottom:10px;
        color: var(--secondary-color);
      }
      .house-description { margin-bottom:10px; font-style:italic; color:#666; }
      .house-interpretation { line-height:1.5; }
      .transit-date-selector {
        display:flex; align-items:center; gap:10px; margin-bottom:20px;
      }
      .transits-table {
        width:100%;
        border-collapse:collapse;
        margin-bottom:20px;
      }
      .transits-table th, .transits-table td {
        padding:8px; text-align:left; border:1px solid #ddd;
      }
      .transits-table th { background-color:#f0f0f0; font-weight:bold; }
      .significant-transits { margin-top:30px; }
      .transit-info {
        background:white;
        border-radius:10px;
        padding:15px;
        margin-bottom:15px;
        box-shadow:0 2px 5px rgba(0,0,0,0.1);
      }
      .transit-title { font-weight:bold; color:var(--secondary-color); margin-bottom:10px; }
      .transit-description { line-height:1.5; }
      .planet-info {
        max-width:300px; min-width:200px;
        background:white; border-radius:10px; padding:15px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.15);
        pointer-events:none; z-index:1000;
        position:absolute; display:none;
      }
      .planet-info strong {
        color: var(--secondary-color); font-size:1.1em; display:block; margin-bottom:8px;
      }
      .planet-info p { margin:5px 0; line-height:1.4; }
    `;
    document.head.appendChild(styleElement);

    // also create tooltip div if not existing
    if (!document.getElementById('planet-info')) {
      const tooltip = document.createElement('div');
      tooltip.id = 'planet-info';
      tooltip.className = 'planet-info';
      document.body.appendChild(tooltip);
    }
  }
});
