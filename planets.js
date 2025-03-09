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

// Planet data
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
            "Aries": "Your Sun in Aries brings a pioneering spirit, courage, and natural leadership qualities. You possess abundant energy and initiative, often being the first to take action and lead others into new territory. Direct and straightforward, you have little patience for complications or delays. Your identity centers around being authentic, independent, and self-driven. Personal growth comes through balancing your assertiveness with patience and consideration for others.",
            "Taurus": "Your Sun in Taurus gives you a grounded, practical nature with remarkable persistence. You value stability, reliability, and tangible results. Patient and methodical, you prefer steady progress to risky ventures. Your identity revolves around your capacity to build and maintain resources, relationships, and projects of lasting value. Personal growth comes through finding the balance between stability and necessary change.",
            "Gemini": "Your Sun in Gemini infuses you with curiosity, adaptability, and quick mental processing. Versatile and communicative, you thrive on variety and intellectual stimulation. You naturally collect and distribute information, making connections between diverse ideas. Your identity centers around your mental agility and communicative abilities. Personal growth comes through developing depth alongside breadth of knowledge and finding your authentic voice.",
            "Cancer": "Your Sun in Cancer endows you with emotional sensitivity, nurturing instincts, and deep intuition. You naturally create safe spaces for others and have a remarkable emotional memory. Your identity revolves around your capacity to care for others and maintain emotional connections. Personal growth comes through balancing your need to nurture others with self-care and establishing healthy boundaries.",
            "Leo": "Your Sun in Leo grants you natural charisma, creativity, and a warm-hearted approach to life. Generous and expressive, you bring warmth and drama to all you do. Your identity revolves around authentic self-expression and receiving recognition for your unique contributions. Personal growth comes through balancing self-confidence with humility and learning to shine your light in service to others.",
            "Virgo": "Your Sun in Virgo gives you analytical precision, practicality, and an eye for improvement. Detail-oriented and methodical, you excel at refining systems and processes. Your identity revolves around your capacity for discernment and being of practical service. Personal growth comes through balancing critical analysis with self-acceptance and understanding that perfection is a process, not a destination.",
            "Libra": "Your Sun in Libra endows you with diplomatic skills, artistic appreciation, and a natural sense of balance. Relationship-oriented and fair-minded, you seek harmony in all areas of life. Your identity revolves around your capacity to create beauty, balance, and cooperation. Personal growth comes through developing your own identity within relationships and finding your voice even when it disrupts temporary harmony.",
            "Scorpio": "Your Sun in Scorpio gives you emotional intensity, psychological insight, and transformative power. Passionate and perceptive, you're drawn to life's deeper mysteries and unafraid of its shadows. Your identity revolves around your capacity for emotional honesty and profound transformation. Personal growth comes through balancing control with surrender and using your powerful will for healing rather than manipulation.",
            "Sagittarius": "Your Sun in Sagittarius infuses you with optimism, adventurousness, and philosophical inclinations. Freedom-loving and truth-seeking, you're on a perpetual quest for meaning and expansion. Your identity revolves around your capacity for growth, exploration, and inspiring vision. Personal growth comes through balancing broad vision with practical details and developing commitment alongside your love of freedom.",
            "Capricorn": "Your Sun in Capricorn grants you ambition, discipline, and remarkable perseverance. Responsible and achievement-oriented, you take a structured approach to reaching your goals. Your identity revolves around your capacity for hard work, integrity, and building lasting legacies. Personal growth comes through balancing work with play and understanding that your worth extends beyond your accomplishments.",
            "Aquarius": "Your Sun in Aquarius gives you originality, humanitarian values, and an innovative approach to life. Independent and forward-thinking, you're often ahead of your time. Your identity revolves around your unique perspective and contribution to collective progress. Personal growth comes through balancing intellectual detachment with emotional connection and reconciling your need for both community and individuality.",
            "Pisces": "Your Sun in Pisces endows you with compassion, imagination, and spiritual sensitivity. Intuitive and empathetic, you naturally transcend boundaries and connect with the universal. Your identity revolves around your capacity for empathy, creativity, and spiritual insight. Personal growth comes through establishing healthy boundaries while maintaining your compassionate connection and anchoring your dreams in practical reality."
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
            "Aries": "Your Moon in Aries creates emotional responses that are immediate, direct, and fiery. You process feelings through action and need space when emotions run high. Security comes through maintaining your independence and having outlets for emotional energy. Your emotional well-being depends on honoring your need for autonomy while building emotional courage.",
            "Taurus": "Your Moon in Taurus creates a need for emotional stability, comfort, and sensory satisfaction. You process feelings slowly and steadily, preferring not to be rushed. Security comes through physical comfort, financial stability, and reliable routines. Your emotional well-being depends on creating beauty and stability in your environment.",
            "Gemini": "Your Moon in Gemini creates a need for mental stimulation and communication to feel emotionally secure. You process feelings through talking, writing, and intellectual analysis. Security comes through information, connection, and variety. Your emotional well-being depends on having outlets for curiosity and maintaining mental flexibility.",
            "Cancer": "Your Moon in Cancer creates deep emotional sensitivity, strong intuition, and a nurturing nature. You process feelings deeply and remember emotional experiences vividly. Security comes through close family connections and creating a safe, comfortable home. Your emotional well-being depends on honoring your sensitivity and creating emotional boundaries.",
            "Leo": "Your Moon in Leo creates a need for recognition, creative expression, and heartfelt connections. You process feelings dramatically and authentically. Security comes through receiving admiration and having opportunities for self-expression. Your emotional well-being depends on being true to your heart and sharing your warmth generously.",
            "Virgo": "Your Moon in Virgo creates a need for order, usefulness, and analytical understanding of emotions. You process feelings through practical analysis and problem-solving. Security comes through routines, attention to health, and being of service. Your emotional well-being depends on finding practical ways to channel your sensitivity.",
            "Libra": "Your Moon in Libra creates a need for harmony, balance, and aesthetic beauty. You process feelings through seeking fairness and reconciling opposites. Security comes through peaceful relationships and pleasant surroundings. Your emotional well-being depends on creating harmony while still acknowledging difficult emotions.",
            "Scorpio": "Your Moon in Scorpio creates emotional intensity, psychological depth, and transformative emotional experiences. You process feelings through deep diving into emotional currents. Security comes through intimate trust and uncovering hidden truths. Your emotional well-being depends on embracing transformation and emotional honesty.",
            "Sagittarius": "Your Moon in Sagittarius creates a need for emotional freedom, optimism, and meaning. You process feelings through finding the bigger picture and philosophical understanding. Security comes through adventure, learning, and maintaining perspective. Your emotional well-being depends on having space to explore and grow.",
            "Capricorn": "Your Moon in Capricorn creates emotional reserve, self-discipline, and a need for achievement. You process feelings through practical responsibility and structure. Security comes through order, accomplishment, and earned respect. Your emotional well-being depends on balancing self-sufficiency with allowing vulnerability.",
            "Aquarius": "Your Moon in Aquarius creates emotional detachment, originality, and humanitarian concerns. You process feelings through intellectual understanding and principle-based approaches. Security comes through friendship, community, and maintaining individuality. Your emotional well-being depends on finding your unique emotional expression.",
            "Pisces": "Your Moon in Pisces creates emotional sensitivity, compassion, and spiritual receptivity. You process feelings through intuition, creativity, and surrender. Security comes through spiritual connection and escape from harsh realities. Your emotional well-being depends on healthy boundaries and creative-spiritual outlets."
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
            "Aries": "Your Mercury in Aries gives you direct, quick thinking and straightforward communication. You express ideas boldly and decisively, sometimes speaking before fully thinking things through. You learn best through action, competition, and independent exploration. Your mental energy is pioneering but may need to develop more patience for details.",
            "Taurus": "Your Mercury in Taurus gives you methodical, practical thinking and deliberate communication. You express ideas with care and prefer concrete, useful information. You learn best through hands-on experience, repetition, and sensory engagement. Your mental approach is thorough but may resist new ideas initially.",
            "Gemini": "Your Mercury in Gemini gives you quick, versatile thinking and lively, adaptable communication. You express ideas with wit and variety, easily shifting between topics and perspectives. You learn best through discussion, reading widely, and connecting diverse information. Your mental energy excels in gathering information but may need to develop more focus.",
            "Cancer": "Your Mercury in Cancer gives you intuitive, emotionally-connected thinking and nurturing communication. You express ideas with sensitivity to others' feelings and remember information connected to emotional experiences. You learn best through personal relevance and emotional security. Your mental approach incorporates subtle perceptions but may be overly influenced by moods.",
            "Leo": "Your Mercury in Leo gives you creative, confident thinking and expressive, dramatic communication. You express ideas with warmth, enthusiasm, and a personal touch. You learn best through creative engagement, performance, and receiving recognition. Your mental energy is generous but may seek attention or dominate conversations.",
            "Virgo": "Your Mercury in Virgo gives you analytical, precise thinking and careful, detailed communication. You express ideas with clarity, accuracy, and practical application. You learn best through systematic analysis, categorization, and problem-solving. Your mental approach excels at improvement but may become overly critical or perfectionistic.",
            "Libra": "Your Mercury in Libra gives you balanced, diplomatic thinking and harmonious, considerate communication. You express ideas with fairness, seeking multiple perspectives and elegant phrasings. You learn best through discussion, weighing options, and artistic presentation. Your mental approach excels in creating balance but may have difficulty with decisive conclusions.",
            "Scorpio": "Your Mercury in Scorpio gives you penetrating, investigative thinking and intense, strategic communication. You express ideas with psychological insight, sometimes holding back until you're sure of your ground. You learn best through deep research and uncovering hidden information. Your mental approach is powerful but may become fixated or suspicious.",
            "Sagittarius": "Your Mercury in Sagittarius gives you expansive, optimistic thinking and philosophical, straightforward communication. You express ideas with enthusiasm, big-picture vision, and colorful language. You learn best through travel, conceptual frameworks, and connecting to higher meaning. Your mental approach is inspiring but may overlook practical details.",
            "Capricorn": "Your Mercury in Capricorn gives you structured, strategic thinking and practical, authoritative communication. You express ideas with clarity, organization, and purpose. You learn best through structured education, clear objectives, and practical application. Your mental approach is methodical but may be overly conventional or status-conscious.",
            "Aquarius": "Your Mercury in Aquarius gives you innovative, objective thinking and original, progressive communication. You express ideas with intellectual detachment, future orientation, and humanitarian values. You learn best through conceptual understanding, group discussion, and experimental approaches. Your mental energy is inventive but may be overly theoretical or detached.",
            "Pisces": "Your Mercury in Pisces gives you intuitive, impressionistic thinking and imaginative, empathetic communication. You express ideas with imagery, emotional undertones, and subtle nuances. You learn best through artistic immersion, visualization, and emotional connection. Your mental approach is creative but may lack clarity or logical structure."
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
            "Aries": "Your Venus in Aries approaches love with enthusiasm, directness, and a pioneering spirit. You're attracted to confidence, independence, and exciting challenges in partners. In aesthetics, you appreciate bold, energetic expressions and statement pieces. You value passion, authenticity, and immediate gratification in pleasures.",
            "Taurus": "Your Venus in Taurus approaches love with sensuality, loyalty, and steadfastness. You're attracted to stability, physical beauty, and practical reliability in partners. In aesthetics, you appreciate quality craftsmanship, natural beauty, and sensory pleasures. You value comfort, security, and enduring worth in possessions.",
            "Gemini": "Your Venus in Gemini approaches love with curiosity, playfulness, and mental connection. You're attracted to wit, versatility, and interesting conversation in partners. In aesthetics, you appreciate variety, clever designs, and intellectual stimulation. You value experiences, information, and social connections over material possessions.",
            "Cancer": "Your Venus in Cancer approaches love with nurturing, emotional depth, and protective tenderness. You're attracted to sensitivity, familial orientation, and emotional security in partners. In aesthetics, you appreciate nostalgic elements, comfortable spaces, and items with sentimental value. You value emotional connection, history, and creating sanctuary.",
            "Leo": "Your Venus in Leo approaches love with warmth, generosity, and dramatic flair. You're attracted to charisma, creativity, and authentic self-expression in partners. In aesthetics, you appreciate luxury, vibrant colors, and theatrical elements. You value quality, recognition, and items that reflect your unique identity.",
            "Virgo": "Your Venus in Virgo approaches love with thoughtfulness, practical assistance, and attention to detail. You're attracted to intelligence, skill, and health-consciousness in partners. In aesthetics, you appreciate simplicity, functionality, and refined craftsmanship. You value usefulness, purity, and subtle quality over flashy displays.",
            "Libra": "Your Venus in Libra approaches love with harmony, fairness, and refined partnership. You're attracted to grace, balance, and cooperative attitudes in partners. In aesthetics, you appreciate symmetry, harmonious colors, and cultured elegance. You value beauty, partnership, and creating peaceful environments.",
            "Scorpio": "Your Venus in Scorpio approaches love with intensity, depth, and transformative power. You're attracted to mystery, emotional honesty, and profound intimacy in partners. In aesthetics, you appreciate dramatic contrasts, hidden meanings, and powerful expressions. You value experiences that touch the soul and possessions with depth and significance.",
            "Sagittarius": "Your Venus in Sagittarius approaches love with optimism, freedom, and philosophical connection. You're attracted to wisdom, adventurousness, and expansive vision in partners. In aesthetics, you appreciate multicultural influences, natural wonders, and spaces that feel expansive. You value experiences over possessions and freedom to explore.",
            "Capricorn": "Your Venus in Capricorn approaches love with commitment, respect, and traditional values. You're attracted to accomplishment, integrity, and mature responsibility in partners. In aesthetics, you appreciate timeless elegance, quality materials, and classic design. You value investments that appreciate over time and symbols of achievement.",
            "Aquarius": "Your Venus in Aquarius approaches love with friendship, intellectual connection, and progressive ideals. You're attracted to uniqueness, humanitarian values, and mental innovation in partners. In aesthetics, you appreciate avant-garde designs, technological elements, and anything unconventional. You value freedom, equality, and items that represent new possibilities.",
            "Pisces": "Your Venus in Pisces approaches love with compassion, spiritual connection, and romantic idealism. You're attracted to sensitivity, artistic expression, and soul-level understanding in partners. In aesthetics, you appreciate dreamy qualities, ethereal beauty, and artistic depth. You value transcendent experiences and items that inspire imagination."
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
            "Aries": "Your Mars in Aries gives you abundant energy, direct assertiveness, and natural leadership. You take action immediately, with courage and self-confidence. You express anger openly but quickly move on. Your drive centers around personal achievement, competition, and pioneering new territory.",
            "Taurus": "Your Mars in Taurus gives you steady determination, practical resourcefulness, and sensual energy. You take action methodically, with remarkable endurance and follow-through. You express anger slowly but powerfully once provoked. Your drive centers around building security, acquiring resources, and creating tangible results.",
            "Gemini": "Your Mars in Gemini gives you mental agility, versatile energy, and communicative drive. You take action through words, ideas, and making connections. You express anger through debate and may use wit as a weapon. Your drive centers around intellectual pursuits, social interaction, and exploring options.",
            "Cancer": "Your Mars in Cancer gives you emotional energy, protective instincts, and indirect power. You take action based on feelings and in defense of what you care about. You express anger through moods, withdrawal, or indirect approaches. Your drive centers around creating security, nurturing others, and honoring emotional needs.",
            "Leo": "Your Mars in Leo gives you dramatic expression, creative energy, and charismatic assertion. You take action with confidence, flair, and generosity. You express anger openly but with dignity and fairness. Your drive centers around creative expression, receiving recognition, and defending your honor.",
            "Virgo": "Your Mars in Virgo gives you precise efficiency, analytical energy, and skillful execution. You take action through careful analysis, practical fixes, and attention to detail. You express anger through criticism or nervous tension. Your drive centers around improvement, service, and mastering techniques.",
            "Libra": "Your Mars in Libra gives you diplomatic assertion, relational energy, and strategic charm. You take action through cooperation, negotiation, and creating balance. You express anger through argument or passive-aggressive tactics. Your drive centers around creating fairness, harmony, and successful partnerships.",
            "Scorpio": "Your Mars in Scorpio gives you intense focus, strategic power, and transformative energy. You take action with depth, research, and calculated precision. You express anger through control, strategy, or powerful confrontation. Your drive centers around achieving influence, uncovering truth, and profound transformation.",
            "Sagittarius": "Your Mars in Sagittarius gives you adventurous energy, enthusiastic action, and philosophical motivation. You take action with optimism, faith, and a broad vision. You express anger through direct confrontation or moral indignation. Your drive centers around expansion, freedom, and meaningful pursuits.",
            "Capricorn": "Your Mars in Capricorn gives you disciplined ambition, structured energy, and authoritative action. You take action systematically, with long-term goals and strategic patience. You express anger through controlled intensity or increased determination. Your drive centers around achievement, status, and mastering challenges.",
            "Aquarius": "Your Mars in Aquarius gives you innovative energy, principled action, and humanitarian drives. You take action in unique ways, often guided by ideals rather than convention. You express anger through intellectual arguments or unexpected rebellion. Your drive centers around creating change, independence, and group progress.",
            "Pisces": "Your Mars in Pisces gives you intuitive action, spiritual energy, and diffuse power. You take action through inspiration, compassion, and indirect means. You express anger through emotional withdrawal or self-sacrifice. Your drive centers around transcendent goals, creative vision, and universal connection."
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
            "Aries": "Your Jupiter in Aries brings expansion through direct action, individual initiative, and pioneering courage. Your path to growth involves taking bold risks, asserting your independence, and leading the way into new territory. Your natural optimism expresses through confidence in your ability to forge ahead and overcome challenges. Your philosophical outlook values personal freedom, authentic self-expression, and the courage to begin anew.",
            "Taurus": "Your Jupiter in Taurus brings expansion through building resources, appreciating life's pleasures, and creating lasting value. Your path to growth involves patience, practicality, and connecting with the natural world. Your natural optimism expresses through faith in steady progress and the abundance of earthly delights. Your philosophical outlook values sensory experience, financial security, and the wisdom found in nature's rhythms.",
            "Gemini": "Your Jupiter in Gemini brings expansion through learning, communication, and intellectual exploration. Your path to growth involves gathering diverse information, making connections between ideas, and sharing knowledge. Your natural optimism expresses through curiosity and belief in the power of information and exchange. Your philosophical outlook values mental flexibility, variety of experience, and the continuous evolution of ideas.",
            "Cancer": "Your Jupiter in Cancer brings expansion through emotional connection, nurturing relationships, and creating sanctuary. Your path to growth involves honoring your sensitivity, connecting with your roots, and creating secure foundations. Your natural optimism expresses through faith in family, tradition, and emotional bonds. Your philosophical outlook values caring for others, honoring the past, and emotional authenticity.",
            "Leo": "Your Jupiter in Leo brings expansion through creative self-expression, leadership, and whole-hearted living. Your path to growth involves developing your unique gifts, sharing them generously, and inspiring others. Your natural optimism expresses through confidence in your creative powers and the goodness of life. Your philosophical outlook values authenticity, creative courage, and the importance of joy and celebration.",
            "Virgo": "Your Jupiter in Virgo brings expansion through service, skill development, and practical improvement. Your path to growth involves analysis, refinement, and finding the sacred in everyday details. Your natural optimism expresses through faith in your ability to solve problems and create order. Your philosophical outlook values usefulness, craftsmanship, and finding meaning through practical service.",
            "Libra": "Your Jupiter in Libra brings expansion through relationships, harmony, and aesthetic appreciation. Your path to growth involves cooperation, balance, and creating beauty. Your natural optimism expresses through faith in fairness, human connection, and the power of harmony. Your philosophical outlook values partnership, justice, and the integration of opposing viewpoints.",
            "Scorpio": "Your Jupiter in Scorpio brings expansion through emotional depth, psychological insight, and transformative experiences. Your path to growth involves facing shadow aspects, developing intimate trust, and embracing transformation. Your natural optimism expresses through faith in the regenerative power of crisis and deep connection. Your philosophical outlook values intensity, honesty, and the wisdom gained through confronting life's depths.",
            "Sagittarius": "Your Jupiter in Sagittarius brings expansion through exploration, higher education, and quest for meaning. Your path to growth involves adventure, philosophical understanding, and developing a broad perspective. Your natural optimism expresses through faith in life's abundance and the journey itself. Your philosophical outlook values freedom, truth-seeking, and the integration of diverse cultural and spiritual wisdom.",
            "Capricorn": "Your Jupiter in Capricorn brings expansion through discipline, achievement, and structural understanding. Your path to growth involves responsibility, mastery of time and resources, and building lasting contributions. Your natural optimism expresses through faith in hard work and the rewards of perseverance. Your philosophical outlook values tradition, expert knowledge, and the wisdom that comes with maturity.",
            "Aquarius": "Your Jupiter in Aquarius brings expansion through innovation, humanitarian vision, and group collaboration. Your path to growth involves intellectual freedom, technological advancement, and contributing to collective progress. Your natural optimism expresses through faith in human potential and future possibilities. Your philosophical outlook values originality, equality, and the power of rational thought to create positive change.",
            "Pisces": "Your Jupiter in Pisces brings expansion through imagination, compassion, and spiritual connection. Your path to growth involves intuitive development, artistic expression, and transcending boundaries. Your natural optimism expresses through faith in universal love and spiritual guidance. Your philosophical outlook values unity, mystical experience, and the dissolution of artificial separations between beings."
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
            "Aries": "Your Saturn in Aries brings life lessons through developing patience, strategic action, and balanced self-assertion. Your challenges may involve impulsivity, anger management, or balancing independence with cooperation. Your growth comes through channeling your initiative constructively, developing perseverance, and finding the courage to begin again after setbacks. Your maturity brings disciplined leadership and tempered courage.",
            "Taurus": "Your Saturn in Taurus brings life lessons through developing material security, practical resource management, and healthy self-worth. Your challenges may involve scarcity concerns, rigidity, or attachment to possessions. Your growth comes through building sustainable resources, finding security within rather than only through external means, and creating lasting value. Your maturity brings financial wisdom and grounded stability.",
            "Gemini": "Your Saturn in Gemini brings life lessons through developing clear communication, focused thinking, and intellectual discipline. Your challenges may involve scattered thoughts, communication anxiety, or information overload. Your growth comes through organized thinking, mastering essential knowledge, and learning to express complex ideas with clarity. Your maturity brings intellectual authority and masterful communication.",
            "Cancer": "Your Saturn in Cancer brings life lessons through developing emotional security, healthy boundaries, and family responsibility. Your challenges may involve emotional reservation, family burdens, or difficulty nurturing yourself. Your growth comes through creating emotional structure, honoring your sensitivity while maintaining boundaries, and building emotional maturity. Your maturity brings nurturing wisdom and emotional stability.",
            "Leo": "Your Saturn in Leo brings life lessons through developing authentic self-expression, creative discipline, and balanced confidence. Your challenges may involve performance anxiety, excessive pride, or creative blocks. Your growth comes through dedicated creative practice, responsible leadership, and earning recognition through sustained effort. Your maturity brings creative mastery and dignified authority.",
            "Virgo": "Your Saturn in Virgo brings life lessons through developing practical skills, healthy routines, and balanced perfectionism. Your challenges may involve self-criticism, work anxiety, or health concerns. Your growth comes through methodical improvement, developing expertise, and finding joy in the details of craft and service. Your maturity brings technical mastery and practical wisdom.",
            "Libra": "Your Saturn in Libra brings life lessons through developing balanced relationships, fair judgment, and social responsibility. Your challenges may involve indecision, relationship anxiety, or excessive compromise. Your growth comes through creating healthy partnership dynamics, developing clear principles for fairness, and taking responsibility in relationships. Your maturity brings diplomatic skill and balanced judgment.",
            "Scorpio": "Your Saturn in Scorpio brings life lessons through developing emotional honesty, responsible use of power, and transformative discipline. Your challenges may involve trust issues, power struggles, or fear of vulnerability. Your growth comes through facing shadow aspects, developing emotional resilience, and using depth psychology for healing. Your maturity brings transformative wisdom and psychological insight.",
            "Sagittarius": "Your Saturn in Sagittarius brings life lessons through developing focused beliefs, ethical discipline, and grounded optimism. Your challenges may involve dogmatism, philosophical disillusionment, or scattered goals. Your growth comes through developing practical wisdom, focused study, and aligning actions with beliefs. Your maturity brings philosophical depth and ethical authority.",
            "Capricorn": "Your Saturn in Capricorn brings life lessons through developing structure, ambition, and responsible authority. Your challenges may involve workaholism, status anxiety, or rigid expectations. Your growth comes through dedicated effort, strategic planning, and developing integrity in leadership. Your maturity brings administrative skill and the ability to manifest long-term goals.",
            "Aquarius": "Your Saturn in Aquarius brings life lessons through developing social responsibility, disciplined innovation, and structured freedom. Your challenges may involve detachment, rebellion against necessary structures, or social alienation. Your growth comes through practical idealism, collaborative discipline, and responsible use of technology. Your maturity brings innovative leadership and humanitarian vision.",
            "Pisces": "Your Saturn in Pisces brings life lessons through developing spiritual discipline, practical compassion, and structured intuition. Your challenges may involve escapism, boundary confusion, or spiritual disillusionment. Your growth comes through grounding spiritual insights in practical action, developing discernment, and finding structure within surrender. Your maturity brings spiritual wisdom and compassionate boundaries."
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
            "Aries": "Your Uranus in Aries brings revolutionary energy to personal identity, independent action, and pioneering initiatives. You belong to a generation characterized by sudden breakthroughs in individual expression, disruptive leadership approaches, and innovations in personal technology. You may experience sudden awakenings around how you assert yourself and navigate your path forward.",
            "Taurus": "Your Uranus in Taurus brings revolutionary energy to material systems, values, and resources. You belong to a generation characterized by disruptions in financial systems, radical approaches to sustainability, and innovations in how we relate to the physical world. You may experience sudden awakenings around security, possessions, and what truly holds lasting value.",
            "Gemini": "Your Uranus in Gemini brings revolutionary energy to communication, information systems, and intellectual frameworks. You belong to a generation characterized by breakthroughs in communication technology, disruptive ideas, and radical approaches to education and information sharing. You may experience sudden awakenings through new ideas and unexpected connections.",
            "Cancer": "Your Uranus in Cancer brings revolutionary energy to emotional patterns, family structures, and security needs. You belong to a generation characterized by disruptions in traditional family models, innovative approaches to nurturing, and radical reconnection with emotional roots. You may experience sudden awakenings through emotional insights and changes in your sense of belonging.",
            "Leo": "Your Uranus in Leo brings revolutionary energy to self-expression, creativity, and leadership. You belong to a generation characterized by dramatic innovation in arts and entertainment, radical approaches to creativity, and disruption of traditional authority. You may experience sudden awakenings through creative breakthroughs and authentic self-discovery.",
            "Virgo": "Your Uranus in Virgo brings revolutionary energy to work systems, health approaches, and analytical methods. You belong to a generation characterized by technological innovation in healthcare, radical approaches to efficiency, and disruption of traditional service roles. You may experience sudden awakenings through developing new skills and finding innovative solutions to practical problems.",
            "Libra": "Your Uranus in Libra brings revolutionary energy to relationships, social justice, and aesthetic values. You belong to a generation characterized by innovations in partnership models, radical approaches to equality, and disruptions in how we create harmony. You may experience sudden awakenings through relationship insights and new frameworks for balance and justice.",
            "Scorpio": "Your Uranus in Scorpio brings revolutionary energy to transformation processes, shared resources, and psychological understanding. You belong to a generation characterized by breakthroughs in depth psychology, radical approaches to sexuality and intimacy, and disruptions in financial and power systems. You may experience sudden awakenings through transformative crises and deep psychological insights.",
            "Sagittarius": "Your Uranus in Sagittarius brings revolutionary energy to belief systems, education, and cultural exchange. You belong to a generation characterized by innovations in higher learning, radical philosophical approaches, and disruptions in religious and cultural frameworks. You may experience sudden awakenings through travel, educational experiences, and expansions of consciousness.",
            "Capricorn": "Your Uranus in Capricorn brings revolutionary energy to structures, authority systems, and long-term planning. You belong to a generation characterized by disruptions in government and business models, radical approaches to achievement, and innovations in how we build lasting legacies. You may experience sudden awakenings through challenges to established orders and realizations about authentic success.",
            "Aquarius": "Your Uranus in Aquarius brings revolutionary energy to social movements, collective ideals, and technological innovation. You belong to a generation characterized by breakthroughs in digital technology, radical humanitarian approaches, and disruptions in how we form community. You may experience sudden awakenings through group involvement and visions of future possibilities.",
            "Pisces": "Your Uranus in Pisces brings revolutionary energy to spiritual understanding, collective consciousness, and dissolution of boundaries. You belong to a generation characterized by innovations in spiritual practice, radical approaches to compassion, and disruptions in how we understand subtle realities. You may experience sudden awakenings through mystical experiences and unexpected dissolutions of perceived limitations."
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
            "Aries": "Your Neptune in Aries brings spiritual inspiration to pioneering initiatives, independent action, and personal identity. You belong to a generation characterized by idealistic visions of heroic action, dreams of personal freedom, and potential confusion around individual assertion. You may experience transcendence through courageous new beginnings and alignment with spiritual warrior archetypes.",
            "Taurus": "Your Neptune in Taurus brings spiritual inspiration to material resources, sensory experience, and values. You belong to a generation characterized by idealistic visions of abundance, dreams of sustainable beauty, and potential confusion around material security. You may experience transcendence through deep connection with nature and discovering the sacred in physical form.",
            "Gemini": "Your Neptune in Gemini brings spiritual inspiration to communication, information, and intellectual connection. You belong to a generation characterized by idealistic visions of universal understanding, dreams of perfect communication, and potential confusion around facts and knowledge. You may experience transcendence through poetry, inspired writing, and the magic of perfect understanding beyond words.",
            "Cancer": "Your Neptune in Cancer brings spiritual inspiration to emotional bonds, nurturing instincts, and sense of home. You belong to a generation characterized by idealistic visions of perfect family, dreams of emotional sanctuary, and potential confusion around belonging. You may experience transcendence through deep feeling, ancestral connection, and creating sacred spaces of emotional safety.",
            "Leo": "Your Neptune in Leo brings spiritual inspiration to creative expression, authenticity, and leadership. You belong to a generation characterized by idealistic visions of creative brilliance, dreams of heart-centered leadership, and potential confusion around recognition and specialness. You may experience transcendence through artistic performance, romance, and moments of pure joy.",
            "Virgo": "Your Neptune in Virgo brings spiritual inspiration to service, health practices, and improvement processes. You belong to a generation characterized by idealistic visions of perfect systems, dreams of holistic healing, and potential confusion around standards and procedures. You may experience transcendence through humble service, healing rituals, and finding the divine in the details.",
            "Libra": "Your Neptune in Libra brings spiritual inspiration to relationships, harmony, and justice. You belong to a generation characterized by idealistic visions of perfect union, dreams of world peace, and potential confusion around partnership and fairness. You may experience transcendence through artistic beauty, moments of perfect balance, and divine love expressed through human connection.",
            "Scorpio": "Your Neptune in Scorpio brings spiritual inspiration to transformation, intimacy, and psychological depth. You belong to a generation characterized by idealistic visions of complete transformation, dreams of perfect merging, and potential confusion around power and sexuality. You may experience transcendence through deep surrender, tantric connection, and psychological rebirth.",
            "Sagittarius": "Your Neptune in Sagittarius brings spiritual inspiration to belief systems, higher education, and expansion. You belong to a generation characterized by idealistic visions of universal truth, dreams of perfect wisdom, and potential confusion around faith and meaning. You may experience transcendence through spiritual pilgrimage, philosophical revelation, and cosmic consciousness.",
            "Capricorn": "Your Neptune in Capricorn brings spiritual inspiration to structure, achievement, and authority. You belong to a generation characterized by idealistic visions of perfect order, dreams of spiritual governance, and potential confusion around achievement and responsibility. You may experience transcendence through disciplined spiritual practice, discovering the divine architecture of reality, and building structures that serve higher purposes.",
            "Aquarius": "Your Neptune in Aquarius brings spiritual inspiration to social vision, technological innovation, and collective progress. You belong to a generation characterized by idealistic visions of technological utopia, dreams of perfect community, and potential confusion around innovation and group identity. You may experience transcendence through humanitarian service, visionary invention, and experiencing unity within diversity.",
            "Pisces": "Your Neptune in Pisces brings spiritual inspiration to compassion, imagination, and unity consciousness. You belong to a generation characterized by idealistic visions of universal oneness, dreams of boundless love, and potential confusion around boundaries and identity. You may experience transcendence through artistic immersion, mystical practice, and dissolving into universal compassion."
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
            "Aries": "Your Pluto in Aries brings transformative power to identity, initiative, and self-assertion. You belong to a generation characterized by profound transformation in how individuals express their will, collective rebirth through courageous action, and intense power dynamics around independence. You may experience personal transformation through confronting your relationship with power, courage, and autonomous action.",
            "Taurus": "Your Pluto in Taurus brings transformative power to resources, values, and material security. You belong to a generation characterized by profound transformation in economic systems, collective rebirth through reconnection with nature, and intense power dynamics around possession and survival. You may experience personal transformation through confronting your relationship with wealth, attachment, and physical embodiment.",
            "Gemini": "Your Pluto in Gemini brings transformative power to communication, information, and mental processing. You belong to a generation characterized by profound transformation in how we share and process information, collective rebirth through new forms of communication, and intense power dynamics around knowledge and ideas. You may experience personal transformation through confronting your relationship with words, perception, and the power of thought.",
            "Cancer": "Your Pluto in Cancer brings transformative power to emotional bonds, family structures, and security needs. You belong to a generation characterized by profound transformation in home and family life, collective rebirth through emotional authenticity, and intense power dynamics around nurturing and protection. You may experience personal transformation through confronting your relationship with emotional vulnerability, ancestry, and belonging.",
            "Leo": "Your Pluto in Leo brings transformative power to self-expression, creativity, and leadership. You belong to a generation characterized by profound transformation in concepts of individuality, collective rebirth through authentic expression, and intense power dynamics around recognition and leadership. You may experience personal transformation through confronting your relationship with personal power, creative force, and the need for recognition.",
            "Virgo": "Your Pluto in Virgo brings transformative power to work systems, health approaches, and critical analysis. You belong to a generation characterized by profound transformation in healthcare and service, collective rebirth through attention to detail and improvement, and intense power dynamics around efficiency and perfection. You may experience personal transformation through confronting your relationship with criticism, purity, and the power of analysis.",
            "Libra": "Your Pluto in Libra brings transformative power to relationships, justice systems, and harmony. You belong to a generation characterized by profound transformation in partnership models, collective rebirth through rebalancing power dynamics, and intense focus on equality and fairness. You may experience personal transformation through confronting your relationship with compromise, projection, and the power of balance.",
            "Scorpio": "Your Pluto in Scorpio brings transformative power to sexuality, shared resources, and psychological depth. You belong to a generation characterized by profound transformation in approaches to intimacy, collective rebirth through facing shadow aspects, and intense power dynamics around taboo subjects. You may experience personal transformation through confronting your relationship with intensity, surrender, and the power of total honesty.",
            "Sagittarius": "Your Pluto in Sagittarius brings transformative power to belief systems, higher education, and cultural exchange. You belong to a generation characterized by profound transformation in religious and philosophical frameworks, collective rebirth through multicultural integration, and intense power dynamics around truth and meaning. You may experience personal transformation through confronting your relationship with faith, dogma, and the power of expanded awareness.",
            "Capricorn": "Your Pluto in Capricorn brings transformative power to structures, authority systems, and long-term planning. You belong to a generation characterized by profound transformation in government and institutions, collective rebirth through restructuring of power hierarchies, and intense focus on responsibility and consequence. You may experience personal transformation through confronting your relationship with authority, ambition, and the power of discipline.",
            "Aquarius": "Your Pluto in Aquarius brings transformative power to social movements, technology, and humanitarian concerns. You belong to a generation characterized by profound transformation in group dynamics, collective rebirth through technological revolution, and intense power dynamics around freedom and progress. You may experience personal transformation through confronting your relationship with social identity, innovation, and the power of radical change.",
            "Pisces": "Your Pluto in Pisces brings transformative power to spirituality, compassion, and universal connection. You belong to a generation characterized by profound transformation in spiritual understanding, collective rebirth through dissolution of artificial boundaries, and intense power dynamics around surrender and faith. You may experience personal transformation through confronting your relationship with sacrifice, illusion, and the power of complete surrender."
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
            "Aries": "Your Chiron in Aries suggests wounding around self-assertion, personal identity, or the right to initiate action. You may have experienced early challenges to your independence, courage, or ability to stand up for yourself. Your healing journey involves reclaiming your right to be a self-directed individual, finding constructive outlets for anger, and developing healthy self-assertion. Your gift lies in helping others find their courage and authentic self-expression.",
            "Taurus": "Your Chiron in Taurus suggests wounding around self-worth, physical security, or material resources. You may have experienced early challenges related to stability, comfort, or having your basic needs met. Your healing journey involves developing healthy self-esteem independent of possessions, healing your relationship with the physical world, and finding inner security. Your gift lies in helping others find true value and reconnect with embodied pleasure.",
            "Gemini": "Your Chiron in Gemini suggests wounding around communication, learning, or being heard and understood. You may have experienced early challenges related to education, verbal expression, or having your ideas validated. Your healing journey involves reclaiming your voice, developing confidence in your ideas, and finding channels for meaningful exchange. Your gift lies in helping others bridge communication gaps and express their unique perspective.",
            "Cancer": "Your Chiron in Cancer suggests wounding around emotional security, nurturing, or family connections. You may have experienced early challenges related to home, maternal energy, or emotional validation. Your healing journey involves developing emotional self-nurturing, creating safe space for vulnerability, and healing family patterns. Your gift lies in helping others reconnect with their emotional roots and develop nurturing capacities.",
            "Leo": "Your Chiron in Leo suggests wounding around creative expression, recognition, or authentic self-display. You may have experienced early challenges related to being seen, appreciated, or allowed to shine. Your healing journey involves reclaiming your creative power, developing confidence in your unique gifts, and risking authentic self-expression. Your gift lies in helping others find and express their special light.",
            "Virgo": "Your Chiron in Virgo suggests wounding around perfectionism, service, or feelings of inadequacy. You may have experienced early challenges related to criticism, health, or feeling fundamentally flawed. Your healing journey involves developing self-acceptance, finding value in your natural way of serving, and healing the inner critic. Your gift lies in helping others find wholeness within their imperfections and practical pathways to healing.",
            "Libra": "Your Chiron in Libra suggests wounding around relationships, harmony, or finding fair balance. You may have experienced early challenges related to partnership, conflict resolution, or maintaining your identity within relationships. Your healing journey involves developing healthy relationship patterns, finding inner balance, and healing codependency. Your gift lies in helping others navigate relationship dynamics and find harmony without self-sacrifice.",
            "Scorpio": "Your Chiron in Scorpio suggests wounding around intimacy, trust, or shared resources. You may have experienced early challenges related to betrayal, sexuality, or power dynamics. Your healing journey involves developing healthy intimacy, reclaiming your personal power, and transforming fear into strength. Your gift lies in helping others navigate emotional depths and find healing through transformation.",
            "Sagittarius": "Your Chiron in Sagittarius suggests wounding around faith, meaning, or freedom to explore. You may have experienced early challenges related to belief systems, education, or cultural belonging. Your healing journey involves developing your own philosophy of life, healing religious wounds, and finding authentic meaning. Your gift lies in helping others expand their horizons and discover personal truth.",
            "Capricorn": "Your Chiron in Capricorn suggests wounding around authority, achievement, or social position. You may have experienced early challenges related to fathers, institutions, or living up to expectations. Your healing journey involves developing healthy ambition, healing your relationship with authority, and finding authentic success. Your gift lies in helping others navigate hierarchical systems and find integrity in their life path.",
            "Aquarius": "Your Chiron in Aquarius suggests wounding around social belonging, originality, or humanitarian values. You may have experienced early challenges related to group rejection, conformity pressure, or suppression of your uniqueness. Your healing journey involves embracing your individuality, finding community that accepts your authentic self, and healing alienation. Your gift lies in helping others bridge individual needs with collective concerns.",
            "Pisces": "Your Chiron in Pisces suggests wounding around boundaries, spiritual connection, or emotional overwhelm. You may have experienced early challenges related to confusion, sacrifice, or difficulty distinguishing self from others. Your healing journey involves developing healthy boundaries, grounding spiritual gifts, and finding strength in sensitivity. Your gift lies in helping others connect with transcendent dimensions while maintaining practical functioning."
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
            "Aries": "Your North Node in Aries indicates a soul path toward developing independence, courage, and self-directed action. Your growth comes through learning to initiate, assert your individual will, and develop healthy self-focus. You're learning to move away from over-dependency on relationships, excessive compromise, and living through others. Your challenge is to develop confidence in your ability to stand alone and take bold action without requiring consensus.",
            "Taurus": "Your North Node in Taurus indicates a soul path toward stability, simplicity, and embodied presence. Your growth comes through developing patience, practical resource management, and sensory enjoyment. You're learning to move away from complexity, power struggles, and emotional intensity. Your challenge is to find security in the concrete present moment rather than through transformation and crisis.",
            "Gemini": "Your North Node in Gemini indicates a soul path toward mental flexibility, curiosity, and communication skills. Your growth comes through gathering diverse information, making connections, and sharing ideas without attachment to being right. You're learning to move away from rigid beliefs, dogmatic thinking, and the need for absolute truth. Your challenge is to embrace the journey of ongoing learning rather than arrive at final conclusions.",
            "Cancer": "Your North Node in Cancer indicates a soul path toward emotional authenticity, nurturing connections, and creating sanctuary. Your growth comes through developing emotional intelligence, creating home, and honoring your sensitivity. You're learning to move away from overemphasis on achievement, rigid structures, and emotional suppression. Your challenge is to prioritize emotional well-being and family connection over external achievement and control.",
            "Leo": "Your North Node in Leo indicates a soul path toward creative self-expression, authentic leadership, and open-hearted living. Your growth comes through developing confidence in your unique gifts, taking center stage when appropriate, and expressing joy. You're learning to move away from blending into the group, excessive detachment, and intellectual analysis without heart engagement. Your challenge is to shine your individual light rather than remain safely in collective anonymity.",
            "Virgo": "Your North Node in Virgo indicates a soul path toward practical service, skill development, and mindful living. Your growth comes through attending to details, developing useful skills, and creating healthy routines. You're learning to move away from escapism, confusion, and spiritual bypassing. Your challenge is to ground spiritual insights in practical application and find the sacred in everyday details.",
            "Libra": "Your North Node in Libra indicates a soul path toward harmonious relationships, diplomacy, and fair exchange. Your growth comes through developing partnership skills, finding balance, and considering multiple perspectives. You're learning to move away from self-centered action, combative independence, and impulsivity. Your challenge is to consider others' needs while maintaining your sense of self within relationships.",
            "Scorpio": "Your North Node in Scorpio indicates a soul path toward emotional depth, transformation, and authentic intimacy. Your growth comes through embracing intensity, developing trust, and facing shadow aspects. You're learning to move away from surface comfort, material attachment, and resistance to change. Your challenge is to dive beneath appearances to find deeper truths and allow transformative experiences to reshape you.",
            "Sagittarius": "Your North Node in Sagittarius indicates a soul path toward expanded awareness, philosophical growth, and adventurous exploration. Your growth comes through developing faith, seeking broader meaning, and exposing yourself to diverse perspectives. You're learning to move away from getting lost in details, excessive criticism, and narrow thinking. Your challenge is to see the bigger picture and allow yourself to explore beyond familiar intellectual territory.",
            "Capricorn": "Your North Node in Capricorn indicates a soul path toward structure, responsibility, and achievement through disciplined effort. Your growth comes through developing practical ambition, respecting traditions, and building lasting contributions. You're learning to move away from excessive emotionality, dependency, and living in the past. Your challenge is to develop emotional maturity that allows you to build concrete results in the world.",
            "Aquarius": "Your North Node in Aquarius indicates a soul path toward innovation, community connection, and humanitarian values. Your growth comes through developing intellectual objectivity, embracing originality, and contributing to collective progress. You're learning to move away from self-centered creative expression, ego attachments, and need for personal recognition. Your challenge is to channel your unique gifts toward group benefit rather than individual acclaim.",
            "Pisces": "Your North Node in Pisces indicates a soul path toward compassion, spiritual connection, and creative imagination. Your growth comes through developing intuition, practicing forgiveness, and transcending rigid boundaries. You're learning to move away from excessive analysis, criticism, and need for concrete proof. Your challenge is to trust the invisible realms and allow compassionate understanding to supersede logical judgment."
        },
        renderDetails: {
            type: "karmic",
            glowColor: "#ffffff",
            pulseEffect: true
        }
    }
];

// Aspect definitions
const ASPECTS = [
    { 
        name: "Conjunction", 
        angle: 0, 
        orb: 8, 
        color: "#9c27b0", 
        lineStyle: "solid",
        nature: "Neutral",
        keywords: ["Blending", "Intensification", "Focus", "Unity", "Merging"],
        description: "Planets in conjunction combine their energies, intensifying and blending their qualities. This can create powerful focus or potential stress depending on the planets involved."
    },
    { 
        name: "Opposition", 
        angle: 180, 
        orb: 8, 
        color: "#f44336", 
        lineStyle: "solid",
        nature: "Challenging",
        keywords: ["Tension", "Awareness", "Balancing", "Integration", "Polarity"],
        description: "Planets in opposition create tension that seeks resolution through awareness and integration. They represent polarities that need to be balanced and can create growth through challenges."
    },
    { 
        name: "Trine", 
        angle: 120, 
        orb: 8, 
        color: "#4caf50", 
        lineStyle: "solid",
        nature: "Harmonious", 
        keywords: ["Flow", "Harmony", "Talent", "Ease", "Support"],
        description: "Planets in trine create harmonious energy flow and natural talents. These aspects bring ease and support, though they may need conscious activation to be fully utilized."
    },
    { 
        name: "Square", 
        angle: 90, 
        orb: 8, 
        color: "#ff9800", 
        lineStyle: "solid",
        nature: "Challenging",
        keywords: ["Friction", "Growth", "Action", "Development", "Motivation"],
        description: "Planets in square create dynamic tension and motivation for growth. While challenging, squares provide the friction necessary for development and decisive action."
    },
    { 
        name: "Sextile", 
        angle: 60, 
        orb: 6, 
        color: "#2196f3", 
        lineStyle: "solid",
        nature: "Harmonious",
        keywords: ["Opportunity", "Potential", "Cooperation", "Learning", "Possibility"],
        description: "Planets in sextile create opportunities for cooperation and learning. This aspect represents potential that can be developed with conscious effort."
    },
    { 
        name: "Quincunx", 
        angle: 150, 
        orb: 5, 
        color: "#795548", 
        lineStyle: "dashed",
        nature: "Challenging",
        keywords: ["Adjustment", "Paradox", "Adaptation", "Health", "Integration"],
        description: "Planets in quincunx require continual adjustment and adaptation. This aspect brings together energies that don't naturally blend, requiring creative integration."
    },
    { 
        name: "Semi-Sextile", 
        angle: 30, 
        orb: 3, 
        color: "#607d8b", 
        lineStyle: "dashed",
        nature: "Neutral",
        keywords: ["Connection", "Awareness", "Subtlety", "Stimulus", "Transition"],
        description: "Planets in semi-sextile have a subtle connection that can create mild irritation or gentle stimulus. This aspect represents transitional energy between signs."
    }
];

// House interpretations have been incorporated into the main JavaScript file

// Export constants for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ZODIAC_SIGNS,
        PLANETS,
        ASPECTS
    };
}
