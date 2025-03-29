// Zodiac Data for Astrology App

// Zodiac sign data
const zodiacSigns = [
  {
    name: 'Aries',
    symbol: '♈',
    element: 'Fire',
    quality: 'Cardinal',
    ruler: 'Mars',
    dates: 'March 21 - April 19',
    traits: ['Courageous', 'Energetic', 'Confident', 'Enthusiastic', 'Independent', 'Impatient', 'Impulsive'],
    color: '#FF5733',
    compatibility: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
    description: "Aries is the first sign of the zodiac, and that's exactly how those born under this sign like to be—first. Aries are known for their fiery energy, enthusiasm, and dynamism. They're natural leaders who are unafraid to blaze a trail and take risks. Competitive and often impatient, Aries individuals are action-oriented and rarely hesitate when pursuing their goals."
  },
  {
    name: 'Taurus',
    symbol: '♉',
    element: 'Earth',
    quality: 'Fixed',
    ruler: 'Venus',
    dates: 'April 20 - May 20',
    traits: ['Patient', 'Reliable', 'Practical', 'Devoted', 'Stubborn', 'Possessive'],
    color: '#3CB371',
    compatibility: ['Virgo', 'Capricorn', 'Cancer', 'Pisces'],
    description: "Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in peaceful, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors. They value stability, consistency, and quality in all areas of life. Known for their determination and dedication, Taurus individuals can sometimes be perceived as stubborn, but they prefer to think of themselves as persistent."
  },
  {
    name: 'Gemini',
    symbol: '♊',
    element: 'Air',
    quality: 'Mutable',
    ruler: 'Mercury',
    dates: 'May 21 - June 20',
    traits: ['Adaptable', 'Versatile', 'Communicative', 'Curious', 'Inconsistent', 'Indecisive'],
    color: '#FFD700',
    compatibility: ['Libra', 'Aquarius', 'Aries', 'Leo'],
    description: "Gemini is represented by the twins, a symbol that perfectly represents this air sign's dual nature. Expressive and quick-witted, Gemini represents two different personalities in one and you'll never be sure which one you'll face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless. They are fascinated with the world itself, extremely curious, with a constant feeling that there is not enough time to experience everything they want to see."
  },
  {
    name: 'Cancer',
    symbol: '♋',
    element: 'Water',
    quality: 'Cardinal',
    ruler: 'Moon',
    dates: 'June 21 - July 22',
    traits: ['Emotional', 'Intuitive', 'Nurturing', 'Protective', 'Moody', 'Insecure'],
    color: '#87CEEB',
    compatibility: ['Scorpio', 'Pisces', 'Taurus', 'Virgo'],
    description: "Cancer is a cardinal water sign. Represented by the crab, this oceanic crustacean seamlessly weaves between the sea and shore, representing Cancer's ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. They are nurturing, deeply emotional, and protective of themselves and their loved ones. Family and home are extremely important to them."
  },
  {
    name: 'Leo',
    symbol: '♌',
    element: 'Fire',
    quality: 'Fixed',
    ruler: 'Sun',
    dates: 'July 23 - August 22',
    traits: ['Creative', 'Passionate', 'Generous', 'Warm-hearted', 'Arrogant', 'Stubborn'],
    color: '#FFA500',
    compatibility: ['Aries', 'Sagittarius', 'Gemini', 'Libra'],
    description: "Leo is represented by the lion, and these spirited fire signs are the kings and queens of the celestial jungle. They're delighted to embrace their royal status: Vivacious, theatrical, and passionate, Leos love to bask in the spotlight and celebrate themselves. These lions are natural leaders and they enjoy cultivating friendships and romances that are artistically and creatively inspired."
  },
  {
    name: 'Virgo',
    symbol: '♍',
    element: 'Earth',
    quality: 'Mutable',
    ruler: 'Mercury',
    dates: 'August 23 - September 22',
    traits: ['Analytical', 'Practical', 'Diligent', 'Modest', 'Critical', 'Perfectionist'],
    color: '#8B4513',
    compatibility: ['Taurus', 'Capricorn', 'Cancer', 'Scorpio'],
    description: "Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo's deep-rooted presence in the material world. Virgos are logical, practical, and systematic in their approach to life. This earth sign is a perfectionist at heart and isn't afraid to improve skills through diligent and consistent practice. They are always striving to provide workable solutions and improve systems."
  },
  {
    name: 'Libra',
    symbol: '♎',
    element: 'Air',
    quality: 'Cardinal',
    ruler: 'Venus',
    dates: 'September 23 - October 22',
    traits: ['Diplomatic', 'Fair-minded', 'Social', 'Cooperative', 'Indecisive', 'Avoids confrontation'],
    color: '#6495ED',
    compatibility: ['Gemini', 'Aquarius', 'Leo', 'Sagittarius'],
    description: "Libra is an air sign represented by the scales, an association that reflects Libra's fixation on balance and harmony. These air signs are the aesthetes of the zodiac: Ruled by Venus, the planet that governs love, beauty, and money, Libras adore high art, intellectualism, and connoisseurship. They are natural diplomats who seek harmony in all relationships and situations."
  },
  {
    name: 'Scorpio',
    symbol: '♏',
    element: 'Water',
    quality: 'Fixed',
    ruler: 'Pluto, Mars',
    dates: 'October 23 - November 21',
    traits: ['Passionate', 'Resourceful', 'Brave', 'Stubborn', 'Jealous', 'Secretive'],
    color: '#800000',
    compatibility: ['Cancer', 'Pisces', 'Virgo', 'Capricorn'],
    description: "Scorpio is one of the most misunderstood signs of the zodiac. Because of its incredible passion and power, Scorpio is often mistaken for a fire sign. In fact, Scorpio is a water sign that derives its strength from the psychic, emotional realm. Like fellow water signs Cancer and Pisces, Scorpio is extremely clairvoyant and intuitive. They have an uncanny ability to see through people's facades and understand what's really going on beneath the surface."
  },
  {
    name: 'Sagittarius',
    symbol: '♐',
    element: 'Fire',
    quality: 'Mutable',
    ruler: 'Jupiter',
    dates: 'November 22 - December 21',
    traits: ['Optimistic', 'Freedom-loving', 'Philosophical', 'Straightforward', 'Careless', 'Tactless'],
    color: '#9370DB',
    compatibility: ['Aries', 'Leo', 'Libra', 'Aquarius'],
    description: "Sagittarius, the ninth sign of the zodiac, is the home of the wanderers of the zodiac. It's not a mindless ramble for these folks, either. Sagittarians are truth-seekers, and the best way for them to do this is to hit the road, talk to others and get some answers. Knowledge is key to these folks, since it fuels their broad-minded approach to life. Sagittarians are keenly interested in philosophy and religion, and they find that these disciplines aid their internal quest."
  },
  {
    name: 'Capricorn',
    symbol: '♑',
    element: 'Earth',
    quality: 'Cardinal',
    ruler: 'Saturn',
    dates: 'December 22 - January 19',
    traits: ['Responsible', 'Disciplined', 'Self-controlled', 'Reserved', 'Pessimistic', 'Fatalistic'],
    color: '#2F4F4F',
    compatibility: ['Taurus', 'Virgo', 'Scorpio', 'Pisces'],
    description: "Capricorn, the tenth sign of the zodiac, is all about hard work. Those born under this sign are more than happy to put in a full day at the office, realizing that it will likely take a lot of those days to get to the top. That's no problem, since Capricorns are both ambitious and determined: they will get there. Life is one big project for these folks, and they adapt to this by adopting a businesslike approach to most everything they do."
  },
  {
    name: 'Aquarius',
    symbol: '♒',
    element: 'Air',
    quality: 'Fixed',
    ruler: 'Uranus, Saturn',
    dates: 'January 20 - February 18',
    traits: ['Progressive', 'Original', 'Independent', 'Humanitarian', 'Aloof', 'Temperamental'],
    color: '#00BFFF',
    compatibility: ['Gemini', 'Libra', 'Aries', 'Sagittarius'],
    description: "Aquarius is the eleventh sign of the zodiac, and Aquarians are the perfect representatives for the Age of Aquarius. Those born under this horoscope sign have the social conscience needed to carry us into the new millennium. These folks are humanitarian, philanthropic, and keenly interested in making the world a better place. Along those lines, they'd like to make the world work better, which is why they focus much of their energy on our social institutions and how they work (or don't work)."
  },
  {
    name: 'Pisces',
    symbol: '♓',
    element: 'Water',
    quality: 'Mutable',
    ruler: 'Neptune, Jupiter',
    dates: 'February 19 - March 20',
    traits: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle', 'Escapist', 'Idealistic'],
    color: '#7B68EE',
    compatibility: ['Cancer', 'Scorpio', 'Taurus', 'Capricorn'],
    description: "Pisces is the twelfth and final sign of the zodiac, and thus carries with it a little of each sign of the zodiac. It's the sign of dreams and secrets, of spiritual journeys, and compassion for all. Pisceans are known for their emotional sensitivity, grace, and awareness of the world around them. Their ruling planet is Neptune, the planet that governs creativity, dreams, and the subconscious. They are deeply intuitive and often seem to operate on a different wavelength than others."
  }
];

// Planet data
const planets = [
  {
    name: 'Sun',
    symbol: '☉',
    description: 'The Sun represents our core identity, ego, and life purpose. It is the center of our solar system and similarly represents the center of our personal universe.',
    keywords: ['Identity', 'Ego', 'Life purpose', 'Vitality', 'Creativity'],
    rulership: 'Leo'
  },
  {
    name: 'Moon',
    symbol: '☽',
    description: 'The Moon represents our emotions, instincts, and subconscious. It governs our emotional responses, habits, and how we instinctively react to situations.',
    keywords: ['Emotions', 'Instincts', 'Nurturing', 'Subconscious', 'Habits'],
    rulership: 'Cancer'
  },
  {
    name: 'Mercury',
    symbol: '☿',
    description: 'Mercury represents communication, intellect, and reasoning. It governs how we think, learn, and share information with others.',
    keywords: ['Communication', 'Intellect', 'Learning', 'Information', 'Perception'],
    rulership: 'Gemini, Virgo'
  },
  {
    name: 'Venus',
    symbol: '♀',
    description: 'Venus represents love, beauty, and values. It governs our relationships, aesthetic preferences, and what we find pleasure in.',
    keywords: ['Love', 'Beauty', 'Values', 'Pleasure', 'Harmony'],
    rulership: 'Taurus, Libra'
  },
  {
    name: 'Mars',
    symbol: '♂',
    description: 'Mars represents action, energy, and desire. It governs our drive, ambition, and how we assert ourselves in the world.',
    keywords: ['Action', 'Energy', 'Desire', 'Courage', 'Aggression'],
    rulership: 'Aries, Scorpio (traditional)'
  },
  {
    name: 'Jupiter',
    symbol: '♃',
    description: 'Jupiter represents expansion, growth, and wisdom. It governs our beliefs, philosophy, and how we seek meaning in life.',
    keywords: ['Expansion', 'Growth', 'Wisdom', 'Abundance', 'Optimism'],
    rulership: 'Sagittarius, Pisces (traditional)'
  },
  {
    name: 'Saturn',
    symbol: '♄',
    description: 'Saturn represents structure, discipline, and responsibility. It governs our limitations, challenges, and how we build lasting foundations.',
    keywords: ['Structure', 'Discipline', 'Responsibility', 'Limitations', 'Maturity'],
    rulership: 'Capricorn, Aquarius (traditional)'
  },
  {
    name: 'Uranus',
    symbol: '♅',
    description: 'Uranus represents innovation, rebellion, and sudden change. It governs our originality, inventiveness, and how we break free from convention.',
    keywords: ['Innovation', 'Rebellion', 'Freedom', 'Originality', 'Disruption'],
    rulership: 'Aquarius'
  },
  {
    name: 'Neptune',
    symbol: '♆',
    description: 'Neptune represents dreams, intuition, and spirituality. It governs our imagination, compassion, and connection to the collective unconscious.',
    keywords: ['Dreams', 'Intuition', 'Spirituality', 'Illusion', 'Compassion'],
    rulership: 'Pisces'
  },
  {
    name: 'Pluto',
    symbol: '♇',
    description: 'Pluto represents transformation, power, and rebirth. It governs our deepest psychological patterns, hidden resources, and capacity for regeneration.',
    keywords: ['Transformation', 'Power', 'Rebirth', 'Intensity', 'Depth'],
    rulership: 'Scorpio'
  }
];

// House data
const houses = [
  {
    number: 1,
    name: 'First House (Ascendant)',
    description: "The First House represents self-image, appearance, and how we present ourselves to the world. It's associated with our physical body, personal identity, and first impressions.",
    keywords: ['Self-image', 'Appearance', 'Identity', 'First impressions', 'Beginnings'],
    naturalSign: 'Aries'
  },
  {
    number: 2,
    name: 'Second House',
    description: "The Second House represents personal resources, values, and material possessions. It's associated with money, income, self-worth, and what we find valuable.",
    keywords: ['Resources', 'Values', 'Possessions', 'Income', 'Self-worth'],
    naturalSign: 'Taurus'
  },
  {
    number: 3,
    name: 'Third House',
    description: "The Third House represents communication, early education, and immediate environment. It's associated with siblings, neighbors, short trips, and how we process information.",
    keywords: ['Communication', 'Learning', 'Siblings', 'Neighborhood', 'Short trips'],
    naturalSign: 'Gemini'
  },
  {
    number: 4,
    name: 'Fourth House (Imum Coeli)',
    description: "The Fourth House represents home, family, and roots. It's associated with our private life, emotional foundation, ancestry, and sense of belonging.",
    keywords: ['Home', 'Family', 'Roots', 'Security', 'Private life'],
    naturalSign: 'Cancer'
  },
  {
    number: 5,
    name: 'Fifth House',
    description: "The Fifth House represents creativity, pleasure, and self-expression. It's associated with romance, children, hobbies, and how we experience joy.",
    keywords: ['Creativity', 'Pleasure', 'Romance', 'Children', 'Self-expression'],
    naturalSign: 'Leo'
  },
  {
    number: 6,
    name: 'Sixth House',
    description: "The Sixth House represents work, health, and service. It's associated with daily routines, wellness practices, skills development, and how we are of service to others.",
    keywords: ['Work', 'Health', 'Service', 'Routines', 'Skills'],
    naturalSign: 'Virgo'
  },
  {
    number: 7,
    name: 'Seventh House (Descendant)',
    description: "The Seventh House represents partnerships, relationships, and contracts. It's associated with marriage, business partnerships, open enemies, and how we relate to others one-on-one.",
    keywords: ['Partnerships', 'Marriage', 'Contracts', 'Cooperation', 'Open enemies'],
    naturalSign: 'Libra'
  },
  {
    number: 8,
    name: 'Eighth House',
    description: "The Eighth House represents transformation, shared resources, and the mysteries of life. It's associated with sex, death, rebirth, taxes, inheritances, and deep psychological processes.",
    keywords: ['Transformation', 'Shared resources', 'Intimacy', 'Death', 'Rebirth'],
    naturalSign: 'Scorpio'
  },
  {
    number: 9,
    name: 'Ninth House',
    description: "The Ninth House represents higher education, philosophy, and long-distance travel. It's associated with beliefs, spirituality, publishing, and expanding our horizons.",
    keywords: ['Philosophy', 'Travel', 'Higher education', 'Beliefs', 'Expansion'],
    naturalSign: 'Sagittarius'
  },
  {
    number: 10,
    name: 'Tenth House (Medium Coeli)',
    description: "The Tenth House represents career, public image, and achievements. It's associated with ambition, authority figures, social status, and our contribution to society.",
    keywords: ['Career', 'Reputation', 'Authority', 'Achievement', 'Public image'],
    naturalSign: 'Capricorn'
  },
  {
    number: 11,
    name: 'Eleventh House',
    description: "The Eleventh House represents friendships, groups, and aspirations. It's associated with social networks, humanitarian causes, hopes, and wishes for the future.",
    keywords: ['Friendships', 'Groups', 'Aspirations', 'Social causes', 'Innovation'],
    naturalSign: 'Aquarius'
  },
  {
    number: 12,
    name: 'Twelfth House',
    description: "The Twelfth House represents the unconscious, spirituality, and hidden strengths. It's associated with dreams, secrets, isolation, self-undoing, and connection to the collective.",
    keywords: ['Unconscious', 'Spirituality', 'Secrets', 'Isolation', 'Transcendence'],
    naturalSign: 'Pisces'
  }
];

// Aspect data
const aspects = [
  {
    name: 'Conjunction',
    angle: 0,
    orb: 8,
    symbol: '☌',
    nature: 'Major',
    description: 'A conjunction occurs when two planets are at the same position in the zodiac. This aspect blends the energies of the planets involved, creating a powerful focus in that area of the chart.',
    keywords: ['Fusion', 'Intensity', 'Emphasis', 'Blending', 'New beginnings']
  },
  {
    name: 'Opposition',
    angle: 180,
    orb: 8,
    symbol: '☍',
    nature: 'Major',
    description: 'An opposition occurs when two planets are 180 degrees apart. This aspect creates tension and awareness between the planets involved, often manifesting as external relationships or conflicts that need to be balanced.',
    keywords: ['Awareness', 'Tension', 'Balance', 'Relationship', 'Polarity']
  },
  {
    name: 'Trine',
    angle: 120,
    orb: 8,
    symbol: '△',
    nature: 'Major',
    description: 'A trine occurs when two planets are 120 degrees apart. This aspect creates a harmonious flow of energy between the planets involved, bringing ease, opportunity, and natural talents.',
    keywords: ['Harmony', 'Flow', 'Ease', 'Opportunity', 'Talent']
  },
  {
    name: 'Square',
    angle: 90,
    orb: 8,
    symbol: '□',
    nature: 'Major',
    description: 'A square occurs when two planets are 90 degrees apart. This aspect creates tension and challenges between the planets involved, often manifesting as obstacles that require action and growth.',
    keywords: ['Challenge', 'Tension', 'Action', 'Growth', 'Effort']
  },
  {
    name: 'Sextile',
    angle: 60,
    orb: 6,
    symbol: '⚹',
    nature: 'Major',
    description: 'A sextile occurs when two planets are 60 degrees apart. This aspect creates opportunities and potential between the planets involved, often manifesting as talents that require some effort to develop.',
    keywords: ['Opportunity', 'Potential', 'Harmony', 'Development', 'Cooperation']
  },
  {
    name: 'Quincunx',
    angle: 150,
    orb: 5,
    symbol: '⚻',
    nature: 'Minor',
    description: 'A quincunx occurs when two planets are 150 degrees apart. This aspect creates adjustment and adaptation between the planets involved, often manifesting as situations that require flexibility and compromise.',
    keywords: ['Adjustment', 'Adaptation', 'Flexibility', 'Compromise', 'Integration']
  },
  {
    name: 'Semi-Sextile',
    angle: 30,
    orb: 3,
    symbol: '⚺',
    nature: 'Minor',
    description: 'A semi-sextile occurs when two planets are 30 degrees apart. This aspect creates subtle connections between the planets involved, often manifesting as minor opportunities or irritations that require awareness.',
    keywords: ['Connection', 'Awareness', 'Subtlety', 'Adjustment', 'Potential']
  }
];

// Export data for use in other modules
export { zodiacSigns, planets, houses, aspects };
