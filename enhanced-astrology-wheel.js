// Enhanced planets.js file with realistic planet visualizations
// This file contains detailed planet information for the Intuitive Astrology Wheel application

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

// House interpretations for dynamic content
const HOUSE_INTERPRETATIONS = {
    1: {
        name: "First House",
        title: "House of Self",
        description: "The First House represents your identity, appearance, and how you project yourself to the world.",
        interpretations: {
            "Aries": "With Aries on your First House cusp, you present yourself with energy, directness, and a pioneering spirit. You appear confident, assertive, and ready for action. You may have an athletic build or quick movements, with a face that shows determination. Your approach to life is straightforward, courageous, and self-motivated, often leading the way or starting new initiatives.",
            "Taurus": "With Taurus on your First House cusp, you present yourself with steadiness, reliability, and sensual awareness. You appear grounded, patient, and in touch with the physical world. You may have a solid build or deliberate movements, with a face showing determination. Your approach to life is practical, persistent, and oriented toward building tangible results.",
            "Gemini": "With Gemini on your First House cusp, you present yourself with versatility, curiosity, and mental alertness. You appear adaptable, communicative, and intellectually engaged. You may have an animated expression, quick movements, or a youthful appearance. Your approach to life is inquisitive, flexible, and socially connected, thriving on variety and information exchange.",
            "Cancer": "With Cancer on your First House cusp, you present yourself with sensitivity, nurturing energy, and emotional responsiveness. You appear caring, protective, and attuned to feelings. You may have a round face, soft features, or a receptive demeanor. Your approach to life is intuitive, family-oriented, and security-minded, creating safe spaces for yourself and others.",
            "Leo": "With Leo on your First House cusp, you present yourself with warmth, confidence, and natural leadership. You appear charismatic, dignified, and expressive. You may have a striking presence, proud posture, or dramatic flair. Your approach to life is creative, generous, and oriented toward authentic self-expression and making a memorable impact.",
            "Virgo": "With Virgo on your First House cusp, you present yourself with precision, practicality, and attention to detail. You appear neat, analytical, and service-oriented. You may have a trim appearance, thoughtful expression, or modest demeanor. Your approach to life is methodical, improvement-focused, and oriented toward useful skills and practical solutions.",
            "Libra": "With Libra on your First House cusp, you present yourself with grace, diplomacy, and aesthetic awareness. You appear balanced, sociable, and refined. You may have symmetrical features, a pleasing smile, or tasteful presentation. Your approach to life is partnership-oriented, harmony-seeking, and focused on creating beautiful relationships and environments.",
            "Scorpio": "With Scorpio on your First House cusp, you present yourself with intensity, depth, and magnetic reserve. You appear mysterious, powerful, and observant. You may have penetrating eyes, contained energy, or an air of hidden strength. Your approach to life is strategic, transformative, and oriented toward uncovering deeper truths and experiencing powerful connections.",
            "Sagittarius": "With Sagittarius on your First House cusp, you present yourself with optimism, expansiveness, and philosophical interest. You appear adventurous, direct, and growth-oriented. You may have an athletic build, open expression, or a far-seeing gaze. Your approach to life is exploratory, truth-seeking, and oriented toward broadening horizons and finding meaning.",
            "Capricorn": "With Capricorn on your First House cusp, you present yourself with dignity, discipline, and practical ambition. You appear responsible, mature, and structured. You may have a serious demeanor, classical features, or an air of authority. Your approach to life is strategic, achievement-oriented, and focused on building lasting foundations and earning respect.",
            "Aquarius": "With Aquarius on your First House cusp, you present yourself with originality, intellectual detachment, and humanitarian awareness. You appear progressive, independent, and somewhat unconventional. You may have distinctive features, an electric energy, or a forward-looking gaze. Your approach to life is innovative, community-minded, and oriented toward creating positive future change.",
            "Pisces": "With Pisces on your First House cusp, you present yourself with sensitivity, adaptability, and compassionate awareness. You appear dreamy, receptive, and empathetic. You may have a gentle expression, fluid movements, or an otherworldly aura. Your approach to life is intuitive, artistic, and oriented toward spiritual connection and dissolving rigid boundaries."
        }
    },
    2: {
        name: "Second House",
        title: "House of Resources",
        description: "The Second House represents your values, possessions, and material security.",
        interpretations: {
            "Aries": "With Aries on your Second House cusp, you approach material resources with initiative, direct action, and pioneering energy. You may earn money through independent ventures, leadership roles, or being first to market with new ideas. You value freedom, taking action, and the ability to make quick financial decisions. Your challenge is developing patience with long-term investments and avoiding impulsive purchases.",
            "Taurus": "With Taurus on your Second House cusp, you approach material resources with persistence, practicality, and sensual appreciation. You may earn money through financial acumen, creating tangible products, or working with natural resources. You value quality, reliability, and investments that grow steadily over time. Your challenge is avoiding stubborn attachment to possessions or resistance to necessary financial changes.",
            "Gemini": "With Gemini on your Second House cusp, you approach material resources with versatility, mental agility, and adaptable strategies. You may earn money through communication skills, diverse income streams, or information-based services. You value learning, mobility, and possessions that serve multiple purposes. Your challenge is maintaining focus on financial goals and avoiding scattered economic activity.",
            "Cancer": "With Cancer on your Second House cusp, you approach material resources with emotional security needs, protective instincts, and nurturing awareness. You may earn money through food, real estate, or creating comfortable experiences for others. You value security, family treasures, and investments that support home and family. Your challenge is separating emotional needs from financial decisions and avoiding money hoarding from insecurity.",
            "Leo": "With Leo on your Second House cusp, you approach material resources with generosity, creative flair, and self-expressive investments. You may earn money through performance, creative endeavors, or leadership positions. You value quality, items that bring joy, and investments that reflect your unique identity. Your challenge is balancing spending on luxuries with practical needs and avoiding financial decisions made from pride.",
            "Virgo": "With Virgo on your Second House cusp, you approach material resources with analytical precision, practical efficiency, and attention to detail. You may earn money through skilled services, health industries, or improvement-oriented work. You value usefulness, quality craftsmanship, and well-organized financial systems. Your challenge is avoiding excessive worry about finances and learning that perfect efficiency isn't always necessary.",
            "Libra": "With Libra on your Second House cusp, you approach material resources with balance, partnership orientation, and aesthetic appreciation. You may earn money through collaborative ventures, artistic endeavors, or creating harmony in systems. You value beauty, fairness in financial arrangements, and investments in quality relationships. Your challenge is making financial decisions independently and avoiding luxury purchases just to please others.",
            "Scorpio": "With Scorpio on your Second House cusp, you approach material resources with intensity, strategic planning, and transformation potential. You may earn money through joint ventures, crisis management, or working with others' resources. You value financial depth, long-term growth potential, and investments with hidden value. Your challenge is developing trust around money and avoiding power struggles in financial relationships.",
            "Sagittarius": "With Sagittarius on your Second House cusp, you approach material resources with optimism, expansion orientation, and philosophical perspective. You may earn money through international connections, education, or adventure-related fields. You value freedom, growth potential, and investments that broaden your horizons. Your challenge is maintaining practical financial management and avoiding overly optimistic speculative investments.",
            "Capricorn": "With Capricorn on your Second House cusp, you approach material resources with discipline, long-term strategy, and structural understanding. You may earn money through business management, traditional industries, or climbing organizational ladders. You value security, lasting quality, and investments that appreciate with time. Your challenge is enjoying your resources in the present and avoiding defining your worth by financial status.",
            "Aquarius": "With Aquarius on your Second House cusp, you approach material resources with originality, group awareness, and future orientation. You may earn money through technology, humanitarian ventures, or innovative business models. You value independence, ethical investments, and resources that contribute to collective progress. Your challenge is developing practical financial systems and balancing idealism with material needs.",
            "Pisces": "With Pisces on your Second House cusp, you approach material resources with intuitive flow, compassionate values, and spiritual perspective. You may earn money through artistic endeavors, healing services, or spiritually oriented work. You value emotional fulfillment, intangible rewards, and investments that support well-being. Your challenge is maintaining clear boundaries around money and developing practical financial management skills."
        }
    },
    3: {
        name: "Third House",
        title: "House of Communication",
        description: "The Third House represents your communication style, learning process, and immediate environment.",
        interpretations: {
            "Aries": "With Aries on your Third House cusp, you communicate with directness, quick thinking, and pioneering ideas. Your learning style is active, self-directed, and thrives on challenge. In your local environment, you may take leadership roles, initiate neighborhood activities, or be known for your energetic presence. Your siblings or close peers may have strong, independent qualities or competitive dynamics may exist between you.",
            "Taurus": "With Taurus on your Third House cusp, you communicate with reliability, practical focus, and sensory awareness. Your learning style is methodical, hands-on, and values tangible results. In your local environment, you may create beauty, establish stability, or be known for your dependable presence. Your siblings or close peers may have grounded, resourceful qualities or material security may be a theme in these relationships.",
            "Gemini": "With Gemini on your Third House cusp, you communicate with versatility, curiosity, and quick mental connections. Your learning style is adaptable, information-gathering, and thrives on variety. In your local environment, you may serve as an information hub, maintain multiple connections, or be known for your social networking. Your siblings or close peers may have communicative, intellectually diverse qualities or educational pursuits may be a theme in these relationships.",
            "Cancer": "With Cancer on your Third House cusp, you communicate with emotional sensitivity, nurturing language, and protective instincts. Your learning style is intuitive, memory-based, and thrives with emotional security. In your local environment, you may create community connections, maintain family networks, or be known for your caring presence. Your siblings or close peers may have nurturing, emotionally expressive qualities or family dynamics may be a significant theme in these relationships.",
            "Leo": "With Leo on your Third House cusp, you communicate with warmth, dramatic flair, and creative expression. Your learning style is passionate, performance-oriented, and thrives with recognition. In your local environment, you may take center stage, organize community events, or be known for your charismatic presence. Your siblings or close peers may have creative, leadership qualities or issues of recognition and specialness may be themes in these relationships.",
            "Virgo": "With Virgo on your Third House cusp, you communicate with precision, analytical detail, and practical focus. Your learning style is methodical, improvement-oriented, and thrives with clear systems. In your local environment, you may organize information, provide useful services, or be known for your helpful presence. Your siblings or close peers may have analytical, service-oriented qualities or health and work themes may be significant in these relationships.",
            "Libra": "With Libra on your Third House cusp, you communicate with diplomacy, aesthetic awareness, and relationship-building skills. Your learning style is balanced, cooperation-oriented, and thrives in partnership. In your local environment, you may mediate conflicts, create beauty, or be known for your fair-minded presence. Your siblings or close peers may have harmonious, artistic qualities or partnerships and social justice may be themes in these relationships.",
            "Scorpio": "With Scorpio on your Third House cusp, you communicate with depth, strategic thinking, and psychological insight. Your learning style is investigative, transformation-oriented, and thrives with hidden knowledge. In your local environment, you may uncover secrets, navigate power dynamics, or be known for your penetrating presence. Your siblings or close peers may have intense, private qualities or shared resources and emotional honesty may be themes in these relationships.",
            "Sagittarius": "With Sagittarius on your Third House cusp, you communicate with enthusiasm, broad perspective, and philosophical insight. Your learning style is exploratory, meaning-seeking, and thrives with freedom. In your local environment, you may share knowledge, connect diverse groups, or be known for your optimistic presence. Your siblings or close peers may have adventurous, educational qualities or cultural expansion and belief systems may be themes in these relationships.",
            "Capricorn": "With Capricorn on your Third House cusp, you communicate with structure, authority, and disciplined thinking. Your learning style is systematic, achievement-oriented, and thrives with clear objectives. In your local environment, you may establish order, maintain traditions, or be known for your responsible presence. Your siblings or close peers may have ambitious, mature qualities or responsibility and status may be themes in these relationships.",
            "Aquarius": "With Aquarius on your Third House cusp, you communicate with originality, intellectual detachment, and future-oriented thinking. Your learning style is innovative, group-oriented, and thrives with conceptual understanding. In your local environment, you may introduce new ideas, form community networks, or be known for your progressive presence. Your siblings or close peers may have independent, humanitarian qualities or friendship and innovation may be themes in these relationships.",
            "Pisces": "With Pisces on your Third House cusp, you communicate with empathy, intuitive understanding, and poetic language. Your learning style is receptive, imagination-based, and thrives with creative immersion. In your local environment, you may sense undercurrents, connect on subtle levels, or be known for your compassionate presence. Your siblings or close peers may have sensitive, artistic qualities or spiritual connection and boundaries may be themes in these relationships."
        }
    },
    4: {
        name: "Fourth House",
        title: "House of Home and Family",
        description: "The Fourth House represents your roots, private life, and emotional foundation.",
        interpretations: {
            "Aries": "With Aries on your Fourth House cusp, your home environment expresses energy, independence, and pioneering spirit. You may prefer a home that allows for activity, has a bold design, or serves as a base for new beginnings. Your family background may include strong-willed individuals, competitive dynamics, or emphasis on individual achievement. Your emotional foundation involves courage, self-assertion, and the freedom to initiate action.",
            "Taurus": "With Taurus on your Fourth House cusp, your home environment expresses stability, sensory comfort, and enduring quality. You may prefer a home with natural materials, comfortable furnishings, or established in a secure location. Your family background may include resource-focused individuals, appreciation for quality, or emphasis on maintaining traditions. Your emotional foundation involves sensory grounding, material security, and connection to nature's rhythms.",
            "Gemini": "With Gemini on your Fourth House cusp, your home environment expresses versatility, mental stimulation, and social connection. You may prefer a home with multiple purposes, filled with books and information, or located near centers of activity. Your family background may include communicative individuals, emphasis on education, or diverse cultural influences. Your emotional foundation involves intellectual engagement, adaptability, and maintaining various social connections.",
            "Cancer": "With Cancer on your Fourth House cusp, your home environment expresses nurturing, emotional safety, and historical connection. You may prefer a home with nostalgic elements, spaces for gathering family, or located near water. Your family background may include deeply nurturing individuals, strong maternal influences, or emphasis on emotional bonds. Your emotional foundation involves sensitivity, protective instincts, and creating sanctuary for yourself and loved ones.",
            "Leo": "With Leo on your Fourth House cusp, your home environment expresses warmth, creative display, and generous hospitality. You may prefer a home with dramatic flair, space for entertaining, or unique design elements. Your family background may include charismatic individuals, emphasis on recognition, or creative accomplishments. Your emotional foundation involves self-expression, generosity, and creating spaces where everyone feels special.",
            "Virgo": "With Virgo on your Fourth House cusp, your home environment expresses order, functionality, and attention to detail. You may prefer a home with efficient systems, clean spaces, or elements that support health and wellbeing. Your family background may include service-oriented individuals, emphasis on improvement, or practical skill development. Your emotional foundation involves creating helpful routines, maintaining organization, and attending to the details that support daily life.",
            "Libra": "With Libra on your Fourth House cusp, your home environment expresses harmony, beauty, and balanced relationships. You may prefer a home with aesthetic appeal, spaces designed for connection, or elements that create peaceful atmosphere. Your family background may include diplomatic individuals, emphasis on fairness, or appreciation for arts and culture. Your emotional foundation involves creating beauty, maintaining balanced relationships, and resolving conflicts with grace.",
            "Scorpio": "With Scorpio on your Fourth House cusp, your home environment expresses privacy, emotional depth, and transformative potential. You may prefer a home with secluded spaces, psychological security, or elements that support regeneration. Your family background may include intense individuals, complex emotional dynamics, or experiences of profound transformation. Your emotional foundation involves emotional honesty, psychological understanding, and creating spaces that allow for deep healing and renewal.",
            "Sagittarius": "With Sagittarius on your Fourth House cusp, your home environment expresses expansion, optimism, and cultural diversity. You may prefer a home with space for growth, multicultural elements, or located where adventure is possible. Your family background may include wisdom-seeking individuals, international connections, or emphasis on higher education. Your emotional foundation involves maintaining perspective, finding meaning in your roots, and creating space for continued growth and exploration.",
            "Capricorn": "With Capricorn on your Fourth House cusp, your home environment expresses structure, tradition, and lasting quality. You may prefer a home with classic design, solid construction, or elements that convey achievement and status. Your family background may include authority figures, emphasis on responsibility, or historical connections to position or profession. Your emotional foundation involves creating secure structures, honoring traditions, and building legacies that endure through time.",
            "Aquarius": "With Aquarius on your Fourth House cusp, your home environment expresses originality, community connection, and future orientation. You may prefer a home with technological features, unique design, or spaces that accommodate group activities. Your family background may include independent thinkers, humanitarian values, or unconventional social arrangements. Your emotional foundation involves intellectual freedom, contributing to collective progress, and creating space for innovative approaches to family and belonging.",
            "Pisces": "With Pisces on your Fourth House cusp, your home environment expresses sensitivity, spiritual connection, and artistic sensibility. You may prefer a home with retreating spaces, elements that inspire imagination, or located near water or nature. Your family background may include empathic individuals, artistic or spiritual pursuits, or themes of sacrifice and service. Your emotional foundation involves intuitive understanding, compassionate connection, and creating sanctuary spaces that support emotional and spiritual renewal."
        }
    },
    5: {
        name: "Fifth House",
        title: "House of Creativity and Pleasure",
        description: "The Fifth House represents creative expression, romance, recreation, and children.",
        interpretations: {
            "Aries": "With Aries on your Fifth House cusp, your creative expression is energetic, pioneering, and self-initiated. In romance, you're direct, passionate, and enjoy the thrill of pursuit. Your approach to play and recreation often involves physical activity, competition, or new adventures. With children, you encourage independence, courage, and taking initiative. Your creative gifts include leadership, spontaneity, and the ability to inspire others through bold action.",
            "Taurus": "With Taurus on your Fifth House cusp, your creative expression is sensual, patient, and produces tangible results. In romance, you're tactile, devoted, and appreciate quality experiences. Your approach to play and recreation often involves physical pleasures, natural settings, or creating beautiful things. With children, you encourage stability, practical skills, and appreciation of nature. Your creative gifts include craftsmanship, aesthetic sensibility, and the ability to manifest ideas into physical form.",
            "Gemini": "With Gemini on your Fifth House cusp, your creative expression is versatile, communicative, and intellectually playful. In romance, you're witty, curious, and enjoy mental connection. Your approach to play and recreation often involves games requiring thought, social activities, or exploring variety. With children, you encourage curiosity, verbal expression, and learning through play. Your creative gifts include verbal agility, adaptability, and the ability to explain complex ideas in engaging ways.",
            "Cancer": "With Cancer on your Fifth House cusp, your creative expression is emotionally rich, nurturing, and connected to memory. In romance, you're protective, sensitive, and create emotional security. Your approach to play and recreation often involves home-based activities, family gatherings, or emotional sharing. With children, you encourage emotional intelligence, security, and family connection. Your creative gifts include emotional depth, intuitive understanding, and the ability to create work that touches the heart.",
            "Leo": "With Leo on your Fifth House cusp, your creative expression is dramatic, heart-centered, and radiantly authentic. In romance, you're generous, dramatic, and enjoy grand gestures. Your approach to play and recreation often involves performance, celebration, or activities where you can shine. With children, you encourage self-expression, confidence, and creative development. Your creative gifts include charismatic presentation, joyful enthusiasm, and the ability to inspire through genuine self-expression.",
            "Virgo": "With Virgo on your Fifth House cusp, your creative expression is precise, skillful, and improvement-oriented. In romance, you're attentive to details, service-minded, and appreciate refined quality. Your approach to play and recreation often involves crafts requiring skill, health-focused activities, or thoughtful analysis. With children, you encourage practical skills, healthy habits, and attention to detail. Your creative gifts include technical excellence, analytical insight, and the ability to refine and perfect creative works.",
            "Libra": "With Libra on your Fifth House cusp, your creative expression is harmonious, relationship-oriented, and aesthetically balanced. In romance, you're diplomatic, partnership-focused, and create beautiful experiences. Your approach to play and recreation often involves social activities, artistic pursuits, or creating harmony. With children, you encourage cooperation, fairness, and appreciation of beauty. Your creative gifts include aesthetic judgment, relational insight, and the ability to create work that brings people together in harmony.",
            "Scorpio": "With Scorpio on your Fifth House cusp, your creative expression is intense, psychologically profound, and transformative. In romance, you're passionate, private, and seek deep connection. Your approach to play and recreation often involves activities with psychological depth, strategic games, or transformative experiences. With children, you encourage emotional honesty, psychological understanding, and authentic power. Your creative gifts include emotional intensity, penetrating insight, and the ability to create work that catalyzes profound transformation.",
            "Sagittarius": "With Sagittarius on your Fifth House cusp, your creative expression is expansive, optimistic, and meaning-oriented. In romance, you're adventurous, philosophical, and seek growth through relationship. Your approach to play and recreation often involves travel, outdoor adventures, or cultural exploration. With children, you encourage exploration, higher learning, and developing personal beliefs. Your creative gifts include visionary perspective, cultural synthesis, and the ability to inspire through conveying meaning and possibility.",
            "Capricorn": "With Capricorn on your Fifth House cusp, your creative expression is structured, disciplined, and builds lasting value. In romance, you're responsible, traditional, and develop relationships over time. Your approach to play and recreation often involves achievement-oriented activities, structured challenges, or traditional pursuits. With children, you encourage responsibility, achievement, and respect for structure. Your creative gifts include masterful technique, strategic planning, and the ability to create work with enduring significance.",
            "Aquarius": "With Aquarius on your Fifth House cusp, your creative expression is innovative, socially conscious, and oriented toward future possibilities. In romance, you're intellectually engaged, friendship-based, and value uniqueness. Your approach to play and recreation often involves group activities, innovative approaches, or connecting diverse communities. With children, you encourage independent thinking, humanitarian values, and originality. Your creative gifts include conceptual innovation, social vision, and the ability to create work that catalyzes positive change.",
            "Pisces": "With Pisces on your Fifth House cusp, your creative expression is imaginative, emotionally attuned, and spiritually inspired. In romance, you're compassionate, dreamy, and seek soul connection. Your approach to play and recreation often involves artistic activities, spiritual practices, or escapist pleasures. With children, you encourage imagination, spiritual awareness, and compassionate connection. Your creative gifts include emotional resonance, imaginative vision, and the ability to create work that opens windows to transcendent dimensions."
        }
    },
    6: {
        name: "Sixth House",
        title: "House of Service and Health",
        description: "The Sixth House represents your work ethic, daily routines, health practices, and service to others.",
        interpretations: {
            "Aries": "With Aries on your Sixth House cusp, your approach to work involves initiative, leadership, and independent action. Your daily routines need physical activity, fresh challenges, and efficient time use. In health matters, you may experience issues related to inflammation, headaches, or injuries from overexertion, responding well to active therapies and quick interventions. Your service to others often involves taking action, providing leadership, or creating new solutions to practical problems.",
            "Taurus": "With Taurus on your Sixth House cusp, your approach to work involves reliability, thoroughness, and sensory awareness. Your daily routines need stability, physical comfort, and connection to natural rhythms. In health matters, you may experience issues related to the throat, neck, or metabolic processes, responding well to natural remedies and tangible healing approaches. Your service to others often involves creating stability, managing resources, or providing practical, hands-on assistance.",
            "Gemini": "With Gemini on your Sixth House cusp, your approach to work involves versatility, communication skills, and mental variety. Your daily routines need flexibility, information input, and social connection. In health matters, you may experience issues related to the respiratory system, nervous system, or hands and arms, responding well to treatments involving movement and mental stimulation. Your service to others often involves sharing information, facilitating communication, or helping connect people and resources.",
            "Cancer": "With Cancer on your Sixth House cusp, your approach to work involves nurturing, emotional connection, and creating security. Your daily routines need emotional meaning, nurturing activities, and rhythmic patterns. In health matters, you may experience issues related to the digestive system, breasts, or emotional imbalances affecting physical health, responding well to treatments involving emotional healing and nutritional care. Your service to others often involves emotional support, creating comforting environments, or caring for basic needs.",
            "Leo": "With Leo on your Sixth House cusp, your approach to work involves creativity, leadership, and authentic self-expression. Your daily routines need recognition, creative outlet, and heart-centered purpose. In health matters, you may experience issues related to the heart, spine, or circulation, responding well to treatments involving positive recognition and creative engagement. Your service to others often involves inspiring through example, bringing warmth to practical assistance, or helping others develop confidence and creative skills.",
            "Virgo": "With Virgo on your Sixth House cusp, your approach to work involves precision, analytical skill, and attention to detail. Your daily routines need organization, efficiency, and continuous improvement. In health matters, you may experience issues related to the digestive system, assimilation processes, or stress from perfectionism, responding well to treatments involving detailed analysis and systematic approaches. Your service to others often involves practical problem-solving, skill training, or helping create more efficient systems and procedures.",
            "Libra": "With Libra on your Sixth House cusp, your approach to work involves cooperation, aesthetic awareness, and creating harmony. Your daily routines need balance, pleasant environments, and social interaction. In health matters, you may experience issues related to the kidneys, lower back, or imbalances from excessive compromise, responding well to treatments involving partnership and aesthetic healing environments. Your service to others often involves creating harmony, mediating conflicts, or bringing beauty and balance to practical situations.",
            "Scorpio": "With Scorpio on your Sixth House cusp, your approach to work involves intensity, psychological insight, and strategic planning. Your daily routines need depth, privacy, and transformative purpose. In health matters, you may experience issues related to the reproductive system, elimination processes, or stress from suppressed emotions, responding well to treatments involving psychological understanding and deep tissue healing. Your service to others often involves crisis intervention, psychological support, or helping navigate complex power dynamics in practical situations.",
            "Sagittarius": "With Sagittarius on your Sixth House cusp, your approach to work involves optimism, broader meaning, and continuous growth. Your daily routines need freedom, variety, and connection to larger purpose. In health matters, you may experience issues related to the hips, thighs, or liver, responding well to treatments involving movement, fresh air, and philosophical perspective. Your service to others often involves teaching, expanding horizons, or helping connect daily activities to meaningful principles and broader understanding.",
            "Capricorn": "With Capricorn on your Sixth House cusp, your approach to work involves discipline, structured progress, and long-term goals. Your daily routines need clear structure, measurable achievement, and respect for time and tradition. In health matters, you may experience issues related to the skeletal system, skin, or joints, responding well to treatments involving disciplined practice and traditional approaches. Your service to others often involves providing structure, teaching responsibility, or helping build lasting solutions to practical problems.",
            "Aquarius": "With Aquarius on your Sixth House cusp, your approach to work involves innovation, group awareness, and humanitarian principles. Your daily routines need intellectual stimulation, technological engagement, and connection to collective needs. In health matters, you may experience issues related to circulation, nervous system, or ankle/lower leg, responding well to treatments involving innovative approaches and understanding systemic patterns. Your service to others often involves technological solutions, community organization, or helping implement progressive approaches to practical problems.",
            "Pisces": "With Pisces on your Sixth House cusp, your approach to work involves compassion, intuitive understanding, and spiritual connection. Your daily routines need quiet time, creative expression, and service to something greater than yourself. In health matters, you may experience issues related to the lymphatic system, feet, or immune responses affected by emotional sensitivity, responding well to treatments involving spiritual healing and creative therapies. Your service to others often involves emotional support, spiritual care, or helping bring compassion and imagination to practical assistance."
        }
    },
    7: {
        name: "Seventh House",
        title: "House of Partnership",
        description: "The Seventh House represents your approach to one-on-one relationships, marriage, and open interactions.",
        interpretations: {
            "Aries": "With Aries on your Seventh House cusp, you attract partners who are independent, direct, and action-oriented. In one-to-one relationships, you value courage, authenticity, and the spark of new beginnings. Through partnership, you develop patience, diplomacy, and the ability to consider others' needs alongside your own. Your relationship growth comes through balancing self-assertion with cooperation, navigating healthy competition, and finding dynamic equilibrium between independence and togetherness.",
            "Taurus": "With Taurus on your Seventh House cusp, you attract partners who are reliable, sensually present, and resource-conscious. In one-to-one relationships, you value stability, loyalty, and shared pleasures. Through partnership, you develop adaptability, mental flexibility, and comfort with change. Your relationship growth comes through balancing material security with intellectual stimulation, navigating different approaches to resources, and finding stability that accommodates necessary evolution.",
            "Gemini": "With Gemini on your Seventh House cusp, you attract partners who are mentally agile, communicative, and socially connected. In one-to-one relationships, you value intellectual exchange, versatility, and shared learning. Through partnership, you develop emotional depth, nurturing capacity, and sensitivity to unspoken needs. Your relationship growth comes through balancing mental connection with emotional bonding, navigating between information and intuition, and creating space for both expression and receptivity.",
            "Cancer": "With Cancer on your Seventh House cusp, you attract partners who are emotionally nurturing, protective, and family-oriented. In one-to-one relationships, you value emotional security, caring connection, and shared belonging. Through partnership, you develop self-confidence, creative self-expression, and authentic leadership. Your relationship growth comes through balancing emotional security with risk-taking, navigating between nurturing and challenging each other, and creating relationships that offer both safety and growth.",
            "Leo": "With Leo on your Seventh House cusp, you attract partners who are charismatic, generous, and creatively expressive. In one-to-one relationships, you value loyalty, warmth, and authentic recognition. Through partnership, you develop analytical skills, humble service, and attention to practical details. Your relationship growth comes through balancing dramatic expression with practical support, navigating between spotlight and background roles, and creating relationships that honor both heart and practical needs.",
            "Virgo": "With Virgo on your Seventh House cusp, you attract partners who are analytical, service-oriented, and detail-conscious. In one-to-one relationships, you value practical support, skill development, and continuous improvement. Through partnership, you develop diplomacy, aesthetic appreciation, and cooperative balance. Your relationship growth comes through balancing analytical precision with harmonious connection, navigating between improvement and acceptance, and creating relationships that are both useful and beautiful.",
            "Libra": "With Libra on your Seventh House cusp, you attract partners who are harmonious, diplomatic, and aesthetically aware. In one-to-one relationships, you value fairness, partnership, and shared beauty. Through partnership, you develop emotional depth, psychological insight, and comfort with transformation. Your relationship growth comes through balancing harmony with honesty, navigating between compromise and confrontation, and creating relationships that are both pleasant and profoundly real.",
            "Scorpio": "With Scorpio on your Seventh House cusp, you attract partners who are intense, psychologically perceptive, and transformative. In one-to-one relationships, you value emotional honesty, deep intimacy, and shared power. Through partnership, you develop optimism, broader perspective, and philosophical understanding. Your relationship growth comes through balancing intensity with lightness, navigating between depth and expansiveness, and creating relationships that honor both soul connection and freedom to grow.",
            "Sagittarius": "With Sagittarius on your Seventh House cusp, you attract partners who are optimistic, philosophical, and freedom-loving. In one-to-one relationships, you value honesty, shared exploration, and expansive vision. Through partnership, you develop discipline, responsibility, and structural understanding. Your relationship growth comes through balancing freedom with commitment, navigating between exploration and stability, and creating relationships that support both adventure and enduring foundation.",
            "Capricorn": "With Capricorn on your Seventh House cusp, you attract partners who are responsible, achievement-oriented, and structurally aware. In one-to-one relationships, you value integrity, maturity, and shared goals. Through partnership, you develop originality, humanitarian vision, and comfort with change. Your relationship growth comes through balancing tradition with innovation, navigating between hierarchy and equality, and creating relationships that support both achievement and visionary change.",
            "Aquarius": "With Aquarius on your Seventh House cusp, you attract partners who are independent, intellectually innovative, and socially conscious. In one-to-one relationships, you value friendship, shared ideals, and respect for individuality. Through partnership, you develop compassion, intuitive connection, and emotional receptivity. Your relationship growth comes through balancing intellectual detachment with emotional immersion, navigating between group concerns and intimate connection, and creating relationships that honor both rational understanding and soul communion.",
            "Pisces": "With Pisces on your Seventh House cusp, you attract partners who are compassionate, imaginative, and spiritually attuned. In one-to-one relationships, you value empathic understanding, artistic connection, and shared transcendence. Through partnership, you develop assertiveness, clear boundaries, and direct action. Your relationship growth comes through balancing compassion with self-definition, navigating between merger and separation, and creating relationships that honor both spiritual connection and individual purpose."
        }
    },
    8: {
        name: "Eighth House",
        title: "House of Transformation",
        description: "The Eighth House represents shared resources, intimacy, transformation, and psychological depths.",
        interpretations: {
            "Aries": "With Aries on your Eighth House cusp, you approach transformation with courage, directness, and pioneering energy. In matters of intimacy and shared resources, you value clear boundaries, honest confrontation, and the freedom to evolve at your own pace. You may experience transformative crises that require immediate action, independent decisions about shared finances, or direct approaches to psychological growth. Your path of rebirth involves developing the courage to face your shadows directly and pioneering new approaches to power and intimacy.",
            "Taurus": "With Taurus on your Eighth House cusp, you approach transformation with patience, sensory awareness, and practical focus on lasting value. In matters of intimacy and shared resources, you value stability, building trust over time, and creating material security through shared efforts. You may experience transformative crises that challenge your resource management, sensual approaches to deep intimacy, or gradual but profound internal shifts. Your path of rebirth involves finding security within change itself and transforming your relationship to physical possessions and pleasures.",
            "Gemini": "With Gemini on your Eighth House cusp, you approach transformation with mental agility, communicative processing, and curious exploration of hidden realms. In matters of intimacy and shared resources, you value intellectual honesty, discussing taboo subjects, and diverse approaches to financial management. You may experience transformative crises that challenge your ideas and perceptions, communication-based approaches to deep intimacy, or mental understanding of psychological patterns. Your path of rebirth involves transforming your thought patterns and developing deeper mental integration of polarized aspects of your psyche.",
            "Cancer": "With Cancer on your Eighth House cusp, you approach transformation with emotional sensitivity, intuitive understanding, and protective awareness of vulnerability. In matters of intimacy and shared resources, you value emotional security, nurturing support through crises, and family-based financial management. You may experience transformative crises that challenge your emotional foundations, memory-based approaches to deep intimacy, or intuitive understanding of psychological patterns. Your path of rebirth involves transforming your emotional attachments and developing security within the cycles of emotional death and rebirth.",
            "Leo": "With Leo on your Eighth House cusp, you approach transformation with creative courage, authentic self-expression, and generous engagement with life's depths. In matters of intimacy and shared resources, you value heart-centered honesty, dramatic emotional expression, and generous approaches to shared finances. You may experience transformative crises that challenge your identity and self-expression, creative approaches to deep intimacy, or dramatic confrontations with shadow aspects. Your path of rebirth involves transforming your relationship to recognition and developing authentic power based on creative integrity.",
            "Virgo": "With Virgo on your Eighth House cusp, you approach transformation with analytical precision, discriminating awareness, and practical attention to healing processes. In matters of intimacy and shared resources, you value careful analysis of dynamics, skillful management of shared finances, and continuous improvement of intimate connection. You may experience transformative crises that challenge your standards and systems, technical approaches to intimacy, or analytical understanding of psychological patterns. Your path of rebirth involves transforming your relationship to perfection and developing wholeness through integration of perceived flaws.",
            "Libra": "With Libra on your Eighth House cusp, you approach transformation with balanced consideration, harmonizing awareness, and cooperative engagement with shared evolution. In matters of intimacy and shared resources, you value fairness in financial arrangements, aesthetic approaches to sexuality, and finding balance in power dynamics. You may experience transformative crises that challenge your partnerships and sense of fairness, relationship-based approaches to intimacy, or diplomatic navigation of shared resources. Your path of rebirth involves transforming your approach to harmony and developing inner balance that can withstand external upheaval.",
            "Scorpio": "With Scorpio on your Eighth House cusp, you approach transformation with emotional intensity, psychological depth, and powerful engagement with life's mysteries. In matters of intimacy and shared resources, you value complete honesty, profound merging, and strategic management of joint finances. You may experience transformative crises that challenge your control and vulnerability, all-or-nothing approaches to intimacy, or profound psychological excavation. Your path of rebirth involves embracing the continuous cycle of death and regeneration at the core of your being and developing comfort with transformative power.",
            "Sagittarius": "With Sagittarius on your Eighth House cusp, you approach transformation with optimism, philosophical perspective, and expansive engagement with deeper meaning. In matters of intimacy and shared resources, you value freedom within connection, cross-cultural financial practices, and finding higher meaning in crisis. You may experience transformative crises that challenge your beliefs and assumptions, adventure-seeking approaches to intimacy, or philosophical understanding of psychological patterns. Your path of rebirth involves transforming your belief systems and developing faith that expands through (rather than despite) encounters with life's depths.",
            "Capricorn": "With Capricorn on your Eighth House cusp, you approach transformation with discipline, structural awareness, and strategic engagement with profound change. In matters of intimacy and shared resources, you value responsibility in financial arrangements, long-term building of intimate trust, and traditional approaches to inheritance and legacy. You may experience transformative crises that challenge your ambitions and sense of control, achievement-oriented approaches to intimacy, or structural understanding of psychological patterns. Your path of rebirth involves transforming your relationship to authority and developing internal guidance that withstands external dissolution.",
            "Aquarius": "With Aquarius on your Eighth House cusp, you approach transformation with intellectual detachment, innovative awareness, and humanitarian engagement with evolutionary processes. In matters of intimacy and shared resources, you value freedom within connection, unconventional financial arrangements, and progressive approaches to power dynamics. You may experience transformative crises that challenge your ideals and group connections, friendship-based approaches to intimacy, or conceptual understanding of psychological patterns. Your path of rebirth involves transforming your relationship to community and developing individual authenticity that contributes to collective evolution.",
            "Pisces": "With Pisces on your Eighth House cusp, you approach transformation with compassionate understanding, spiritual awareness, and boundary-dissolving surrender to change. In matters of intimacy and shared resources, you value spiritual connection, intuitive financial guidance, and transcendent approaches to sexuality. You may experience transformative crises that challenge your sense of separation, mystical approaches to intimacy, or spiritual understanding of psychological patterns. Your path of rebirth involves transforming your relationship to boundaries and developing discernment within experiences of unity consciousness."
        }
    },
   9: {
    name: "Ninth House",
    title: "House of Expansion",
    description: "The Ninth House represents higher education, philosophy, travel, and your quest for meaning.",
    interpretations: {
        "Aries": "With Aries on your Ninth House cusp, you seek meaning through pioneering exploration, independent quest, and direct experience of truth. Your philosophical approach tends to be action-oriented, courageous, and focused on breaking new ground. In education, you excel in self-directed learning and subjects that allow immediate application. Your travel style is adventurous, often leading the way into unexplored territory. Your spiritual path involves courage, personal initiation, and developing faith in your capacity to forge ahead.",
        "Taurus": "With Taurus on your Ninth House cusp, you seek meaning through embodied wisdom, practical philosophy, and tangible experience. Your philosophical approach tends to be grounded, methodical, and focused on principles that have enduring value. In education, you excel in subjects that can be applied practically and allow sensory engagement. Your travel style is comfort-oriented, focusing on natural beauty and cultural richness. Your spiritual path involves connecting with nature, finding sacred meaning in physical reality, and developing faith in natural processes.",
        "Gemini": "With Gemini on your Ninth House cusp, you seek meaning through intellectual exploration, diverse perspectives, and communicative exchange. Your philosophical approach tends to be curious, adaptable, and focused on gathering various viewpoints. In education, you excel in subjects that stimulate mental connections and offer variety. Your travel style is information-focused, often involving multiple destinations and social connections. Your spiritual path involves intellectual inquiry, reconciling paradoxes, and developing faith in the power of mental flexibility.",
        "Cancer": "With Cancer on your Ninth House cusp, you seek meaning through emotional wisdom, cultural heritage, and nurturing connection. Your philosophical approach tends to be intuitive, protective, and focused on creating meaningful security. In education, you excel in subjects with personal relevance and emotional resonance. Your travel style is oriented toward creating a sense of home wherever you go and connecting with different cultural families. Your spiritual path involves emotional depth, ancestral connection, and developing faith in your inner knowing.",
        "Leo": "With Leo on your Ninth House cusp, you seek meaning through creative expression, personal authenticity, and heart-centered wisdom. Your philosophical approach tends to be dramatic, generous, and focused on noble ideals. In education, you excel in subjects that allow creative engagement and recognition of your unique perspective. Your travel style is grand, often seeking experiences that feel special and memorable. Your spiritual path involves creative inspiration, loyalty to higher principles, and developing faith in your capacity for greatness.",
        "Virgo": "With Virgo on your Ninth House cusp, you seek meaning through practical analysis, refined knowledge, and helpful wisdom. Your philosophical approach tends to be discriminating, methodical, and focused on practical application. In education, you excel in subjects that involve detailed study and improvement of skills. Your travel style is well-organized, often including service elements or health considerations. Your spiritual path involves finding divinity in details, purification practices, and developing faith in the intelligence of natural systems.",
        "Libra": "With Libra on your Ninth House cusp, you seek meaning through balanced perspective, harmonious relationships, and shared wisdom. Your philosophical approach tends to be diplomatic, aesthetic, and focused on principles of fairness. In education, you excel in subjects involving cooperation, arts, and social sciences. Your travel style is partnership-oriented, often seeking beauty and cultural harmony. Your spiritual path involves relationship with the divine, finding balance amid paradox, and developing faith in the underlying harmony of existence.",
        "Scorpio": "With Scorpio on your Ninth House cusp, you seek meaning through psychological depth, transformative experience, and esoteric knowledge. Your philosophical approach tends to be penetrating, intense, and focused on uncovering hidden truths. In education, you excel in subjects that involve research, psychology, and taboo topics. Your travel style is powerful, often seeking transformative experiences and cultural depths. Your spiritual path involves initiation into mysteries, confronting shadow aspects, and developing faith in the process of death and rebirth.",
        "Sagittarius": "With Sagittarius on your Ninth House cusp, you seek meaning through expansive exploration, visionary perspective, and joyful discovery. Your philosophical approach tends to be optimistic, freedom-loving, and focused on broader contexts. In education, you excel in subjects involving cultural understanding, theoretical frameworks, and ethical principles. Your travel style is adventurous, often seeking wide-ranging experiences and cultural diversity. Your spiritual path involves direct communion with higher wisdom, questing for truth, and developing faith in life's abundance.",
        "Capricorn": "With Capricorn on your Ninth House cusp, you seek meaning through structured understanding, traditional wisdom, and achievement of mastery. Your philosophical approach tends to be disciplined, practical, and focused on time-tested principles. In education, you excel in subjects with clear structure, respected authorities, and practical application. Your travel style is purposeful, often including professional development or achievement elements. Your spiritual path involves responsibility to higher law, disciplined practice, and developing faith in earned wisdom.",
        "Aquarius": "With Aquarius on your Ninth House cusp, you seek meaning through innovative thinking, humanitarian vision, and collective wisdom. Your philosophical approach tends to be progressive, objective, and focused on future possibilities. In education, you excel in subjects involving social change, technology, and revolutionary concepts. Your travel style is community-oriented, often connecting with progressive groups or unusual destinations. Your spiritual path involves universal brotherhood, intellectual freedom, and developing faith in humanity's evolution.",
        "Pisces": "With Pisces on your Ninth House cusp, you seek meaning through mystical experience, compassionate understanding, and transcendent wisdom. Your philosophical approach tends to be intuitive, inclusive, and focused on unity consciousness. In education, you excel in subjects involving symbolic understanding, arts, and spiritual traditions. Your travel style is flow-oriented, often guided by synchronicity or spiritual calling. Your spiritual path involves mystical communion, dissolution of boundaries, and developing faith in divine guidance."
    }
},
// This file contains the core functionality for chart generation and visualization
};

// Utility function for astronomical calculations
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
    
    // Format zodiac position
    formatZodiacPosition(position) {
        return `${Math.floor(position.degree)}° ${position.sign.name}`;
    }
    
    // Simple algorithm to calculate Sun's position - for demonstration purposes
    // Real applications would use more precise astronomical algorithms
    calculateSunPosition(date) {
        const jd = this.toJulianDate(date);
        const n = jd - this.J2000;
        
        // Mean longitude of the Sun
        let L = 280.460 + 0.9856474 * n;
        L = L % 360;
        if (L < 0) L += 360;
        
        // Mean anomaly of the Sun
        let g = 357.528 + 0.9856003 * n;
        g = g % 360;
        if (g < 0) g += 360;
        
        // Ecliptic longitude of the Sun
        let lambda = L + 1.915 * Math.sin(g * Math.PI / 180) + 0.020 * Math.sin(2 * g * Math.PI / 180);
        lambda = lambda % 360;
        if (lambda < 0) lambda += 360;
        
        return lambda;
    }
    
    // Calculate Moon position - simplified for demonstration
    calculateMoonPosition(date) {
        const jd = this.toJulianDate(date);
        const n = jd - this.J2000;
        
        // Mean longitude of the Moon
        let L = 218.316 + 13.176396 * n;
        L = L % 360;
        if (L < 0) L += 360;
        
        // Mean anomaly of the Moon
        let M = 134.963 + 13.064993 * n;
        M = M % 360;
        if (M < 0) M += 360;
        
        // Simplified longitude calculation
        let lambda = L + 6.289 * Math.sin(M * Math.PI / 180);
        lambda = lambda % 360;
        if (lambda < 0) lambda += 360;
        
        return lambda;
    }
    
    // For demonstration purposes, we'll use simplified formulas for other planets
    // Real applications would use more precise astronomical algorithms
    calculatePlanetPosition(planet, date) {
        const jd = this.toJulianDate(date);
        const n = jd - this.J2000;
        
        let meanLongitude, meanAnomaly, eccentricity, semiMajorAxis;
        
        // Simplified orbital parameters for demonstration
        switch(planet.toLowerCase()) {
            case 'mercury':
                meanLongitude = 252.251 + 4.092317 * n;
                meanAnomaly = 48.331 + 4.092317 * n;
                eccentricity = 0.205;
                break;
            case 'venus':
                meanLongitude = 181.980 + 1.602136 * n;
                meanAnomaly = 76.680 + 1.602136 * n;
                eccentricity = 0.007;
                break;
            case 'mars':
                meanLongitude = 355.433 + 0.524039 * n;
                meanAnomaly = 19.373 + 0.524039 * n;
                eccentricity = 0.093;
                break;
            case 'jupiter':
                meanLongitude = 34.351 + 0.083056 * n;
                meanAnomaly = 20.020 + 0.083056 * n;
                eccentricity = 0.048;
                break;
            case 'saturn':
                meanLongitude = 50.077 + 0.033459 * n;
                meanAnomaly = 317.021 + 0.033459 * n;
                eccentricity = 0.056;
                break;
            case 'uranus':
                meanLongitude = 314.055 + 0.011737 * n;
                meanAnomaly = 141.050 + 0.011737 * n;
                eccentricity = 0.047;
                break;
            case 'neptune':
                meanLongitude = 304.348 + 0.005981 * n;
                meanAnomaly = 256.228 + 0.005981 * n;
                eccentricity = 0.009;
                break;
            case 'pluto':
                meanLongitude = 238.958 + 0.003973 * n;
                meanAnomaly = 14.882 + 0.003973 * n;
                eccentricity = 0.248;
                break;
            case 'chiron':
                // Simplified approximation
                meanLongitude = 30 + 0.08 * n;
                meanAnomaly = 0 + 0.08 * n;
                eccentricity = 0.2;
                break;
            case 'north node':
                // The North Node moves retrograde
                return (125.1 - 0.0529539 * n) % 360;
            default:
                return 0;
        }
        
        // Normalize to 0-360
        meanLongitude = meanLongitude % 360;
        if (meanLongitude < 0) meanLongitude += 360;
        
        meanAnomaly = meanAnomaly % 360;
        if (meanAnomaly < 0) meanAnomaly += 360;
        
        // Convert to radians
        const M = meanAnomaly * Math.PI / 180;
        
        // Solve Kepler's equation for eccentric anomaly
        let E = M;
        for (let i = 0; i < 5; i++) { // 5 iterations usually sufficient
            E = M + eccentricity * Math.sin(E);
        }
        
        // Calculate true anomaly
        const v = 2 * Math.atan(Math.sqrt((1 + eccentricity) / (1 - eccentricity)) * Math.tan(E / 2));
        
        // Calculate longitude
        let longitude = meanLongitude + v * 180 / Math.PI - M * 180 / Math.PI;
        
        // Normalize to 0-360
        longitude = longitude % 360;
        if (longitude < 0) longitude += 360;
        
        return longitude;
    }
    
    // Calculate planet positions for a given date
    calculateAllPlanetPositions(date) {
        return [
            { name: "Sun", degree: this.calculateSunPosition(date) },
            { name: "Moon", degree: this.calculateMoonPosition(date) },
            { name: "Mercury", degree: this.calculatePlanetPosition("mercury", date) },
            { name: "Venus", degree: this.calculatePlanetPosition("venus", date) },
            { name: "Mars", degree: this.calculatePlanetPosition("mars", date) },
            { name: "Jupiter", degree: this.calculatePlanetPosition("jupiter", date) },
            { name: "Saturn", degree: this.calculatePlanetPosition("saturn", date) },
            { name: "Uranus", degree: this.calculatePlanetPosition("uranus", date) },
            { name: "Neptune", degree: this.calculatePlanetPosition("neptune", date) },
            { name: "Pluto", degree: this.calculatePlanetPosition("pluto", date) },
            { name: "Chiron", degree: this.calculatePlanetPosition("chiron", date) },
            { name: "North Node", degree: this.calculatePlanetPosition("north node", date) }
        ];
    }
    
    // Calculate house cusps using a simplified Placidus system
    // Real applications would use more sophisticated algorithms
    calculateHouseCusps(date, latitude, longitude) {
        // For demonstration, we'll use a highly simplified approach
        // Start with Ascendant at the local sidereal time
        const jd = this.toJulianDate(date);
        const n = jd - this.J2000;
        
        // Approximate sidereal time calculation
        let siderealTime = 280.16 + 360.9856235 * n + longitude;
        siderealTime = siderealTime % 360;
        if (siderealTime < 0) siderealTime += 360;
        
        // Simplified Ascendant calculation (not accurate but good for demo)
        const ascendant = siderealTime;
        
        // For demo purpose, just space houses evenly
        const houseCusps = [];
        for (let i = 0; i < 12; i++) {
            houseCusps.push((ascendant + i * 30) % 360);
        }
        
        return houseCusps;
    }
}

// Enhanced Astrology Chart Class
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
        
        // Initialize interaction handlers
        this.initializeInteractions();
    }
    
    // Set up event listeners for interactive elements
    initializeInteractions() {
        this.svg.addEventListener('mousemove', this.handleMouseMove.bind(this));
    }
    
    // Handle mouse movement for tooltip display
    handleMouseMove(event) {
        const planetElements = document.querySelectorAll('.planet-group');
        const tooltipElement = document.getElementById('planet-info');
        let hoveredPlanet = null;
        
        // Check if we're hovering over a planet
        planetElements.forEach(planetEl => {
            const rect = planetEl.getBoundingClientRect();
            const radius = parseFloat(planetEl.querySelector('circle').getAttribute('r'));
            
            // Center of planet element
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Distance from mouse to center
            const distance = Math.sqrt(
                Math.pow(event.clientX - centerX, 2) + 
                Math.pow(event.clientY - centerY, 2)
            );
            
            if (distance <= radius + 5) {
                hoveredPlanet = planetEl;
            }
        });
        
        // Update tooltip
        if (hoveredPlanet) {
            const planetName = hoveredPlanet.dataset.name;
            const position = hoveredPlanet.dataset.position;
            const planetData = PLANETS.find(p => p.name === planetName);
            
            // Get sign from position
            const signName = position.split('°')[1].trim();
            const interpretation = planetData.interpretations[signName] || 
                                  `Your ${planetName} in ${signName} shows your unique blend of these energies.`;
            
            tooltipElement.innerHTML = `
                <strong>${planetName} in ${position}</strong>
                <p>${planetData.description}</p>
                <p>${interpretation.substring(0, 120)}...</p>
            `;
            
            // Position tooltip near the mouse
            tooltipElement.style.display = 'block';
            tooltipElement.style.left = (event.clientX + 15) + 'px';
            tooltipElement.style.top = (event.clientY + 15) + 'px';
            
            // Ensure tooltip stays within viewport
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
    
    // Calculate position on wheel from zodiac degree
    calculatePositionOnWheel(degree, distance) {
        // In SVG, 0 degrees is at 3 o'clock, but in the zodiac, Aries (0 degrees) is at 9 o'clock
        // So we need to shift by 180 degrees, then invert the direction (clockwise vs counterclockwise)
        const angleInRadians = ((180 - degree) % 360) * (Math.PI / 180);
        
        const x = this.centerX + Math.cos(angleInRadians) * distance;
        const y = this.centerY + Math.sin(angleInRadians) * distance;
        
        return { x, y };
    }
    
    // Find what aspect (if any) exists between two planets
    checkAspect(planet1Degree, planet2Degree) {
        // Calculate the shortest angle between the planets
        let angle = Math.abs(planet1Degree - planet2Degree) % 360;
        if (angle > 180) angle = 360 - angle;
        
        // Check against each aspect type
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
    drawPlanet(planet, planetData) {
        // Calculate position on the wheel
        const planetDistance = 250; // Distance from center
        const position = this.calculatePositionOnWheel(planet.degree, planetDistance);
        
        // Create the planet group
        const planetGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        planetGroup.classList.add("planet-group");
        planetGroup.dataset.name = planet.name;
        
        // Format position text
        const zodiacPosition = this.calculator.degreeToZodiacPosition(planet.degree);
        const positionText = this.calculator.formatZodiacPosition(zodiacPosition);
        planetGroup.dataset.position = positionText;
        
        // Create visual elements based on render details
        if (planetData.renderDetails.type === "radialGradient") {
            // Create a unique gradient ID for this planet
            const gradientId = `${planet.name.toLowerCase()}-gradient`;
            
            // Create gradient definition
            const defs = document.querySelector("defs") || 
                      document.createElementNS("http://www.w3.org/2000/svg", "defs");
            
            if (!document.querySelector("defs")) {
                this.svg.appendChild(defs);
            }
            
            const gradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
            gradient.setAttribute("id", gradientId);
            gradient.setAttribute("cx", "50%");
            gradient.setAttribute("cy", "50%");
            gradient.setAttribute("r", "50%");
            
            // Add gradient stops
            planetData.gradientColors.forEach((color, index) => {
                const stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                stop.setAttribute("offset", `${index * 50}%`);
                stop.setAttribute("stop-color", color);
                gradient.appendChild(stop);
            });
            
            defs.appendChild(gradient);
            
            // Create the planet circle with gradient
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", position.x);
            circle.setAttribute("cy", position.y);
            circle.setAttribute("r", planetData.size);
            circle.setAttribute("fill", `url(#${gradientId})`);
            circle.setAttribute("stroke", planetData.borderColor);
            circle.setAttribute("stroke-width", "2");
            
            // Add rays for the Sun
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
            
            planetGroup.appendChild(circle);
        } else if (planetData.renderDetails.type === "ringed") {
            // Create Saturn-style rings
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", position.x);
            circle.setAttribute("cy", position.y);
            circle.setAttribute("r", planetData.size);
            circle.setAttribute("fill", planetData.color);
            circle.setAttribute("stroke", planetData.borderColor);
            circle.setAttribute("stroke-width", "1.5");
            
            planetGroup.appendChild(circle);
            
            // Add rings (ellipses)
            const rings = document.createElementNS("http://www.w3.org/2000/svg", "g");
            
            // Ring with perspective effect
            const ringEllipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
            ringEllipse.setAttribute("cx", position.x);
            ringEllipse.setAttribute("cy", position.y);
            ringEllipse.setAttribute("rx", planetData.size * 1.8);
            ringEllipse.setAttribute("ry", planetData.size * 0.6);
            ringEllipse.setAttribute("fill", "none");
            ringEllipse.setAttribute("stroke", planetData.renderDetails.ringColor);
            ringEllipse.setAttribute("stroke-width", planetData.renderDetails.ringThickness[0]);
            rings.appendChild(ringEllipse);
            
            // Additional rings
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
        } else if (planetData.renderDetails.type === "gasGiant") {
            // Create Jupiter-style gas giant with bands
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", position.x);
            circle.setAttribute("cy", position.y);
            circle.setAttribute("r", planetData.size);
            circle.setAttribute("fill", planetData.color);
            circle.setAttribute("stroke", planetData.borderColor);
            circle.setAttribute("stroke-width", "1.5");
            
            planetGroup.appendChild(circle);
            
            // Add atmospheric bands
            if (planetData.renderDetails.bands) {
                const bands = document.createElementNS("http://www.w3.org/2000/svg", "g");
                
                // Add a few bands with slight curves
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
                
                // Add the Great Red Spot for Jupiter
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
                
                // Add blue spot for Neptune
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
            
            // Add tilt for Uranus
            if (planet.name === "Uranus" && planetData.renderDetails.tilt) {
                // Add a ring to indicate the tilt
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
        } else if (planetData.renderDetails.type === "rocky") {
            // Create rocky planet with craters or texture
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", position.x);
            circle.setAttribute("cy", position.y);
            circle.setAttribute("r", planetData.size);
            circle.setAttribute("fill", planetData.color);
            circle.setAttribute("stroke", planetData.borderColor);
            circle.setAttribute("stroke-width", "1.5");
            
            planetGroup.appendChild(circle);
            
            // Add craters or surface features
            if (planetData.renderDetails.texture === "cracked") {
                const features = document.createElementNS("http://www.w3.org/2000/svg", "g");
                
                // Add a few crack lines
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
            } else if (planetData.renderDetails.texture === "dusty") {
                // Add polar caps for Mars
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
                
                // Add surface features
                const features = document.createElementNS("http://www.w3.org/2000/svg", "g");
                
                // Add a few surface markings
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
            } else if (planetData.renderDetails.texture === "icy") {
                // Pluto-like icy world
                const features = document.createElementNS("http://www.w3.org/2000/svg", "g");
                
                // Add a heart-shaped feature like Pluto's
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
                
                // Add a few craters
                for (let i = 0; i < 3; i++) {
                    const crater = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                    const angle = Math.random() * Math.PI * 2;
                    const distance = Math.random() * planetData.size * 0.6;
                    
                    crater.setAttribute("cx", position.x + Math.cos(angle) * distance);
                    crater.setAttribute("cy", position.y + Math.sin(angle) * distance);
                    crater.setAttribute("r", planetData.size * 0.1 + Math.random() * planetData.size * 0.1);
                    crater.setAttribute("fill", planetData.renderDetails.craterColor);
                    crater.setAttribute("opacity", "0.3");
                    
                    features.appendChild(crater);
                }
                
                planetGroup.appendChild(features);
            }
        } else if (planetData.renderDetails.type === "cratered") {
            // Moon-like cratered body
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", position.x);
            circle.setAttribute("cy", position.y);
            circle.setAttribute("r", planetData.size);
            circle.setAttribute("fill", planetData.color);
            circle.setAttribute("stroke", planetData.borderColor);
            circle.setAttribute("stroke-width", "1.5");
            
            planetGroup.appendChild(circle);
            
            // Add craters
            const craters = document.createElementNS("http://www.w3.org/2000/svg", "g");
            
            // Add several randomly placed craters
            for (let i = 0; i < 6; i++) {
                const crater = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * planetData.size * 0.7;
                
                crater.setAttribute("cx", position.x + Math.cos(angle) * distance);
                crater.setAttribute("cy", position.y + Math.sin(angle) * distance);
                crater.setAttribute("r", planetData.size * 0.05 + Math.random() * planetData.size * 0.1);
                crater.setAttribute("fill", planetData.renderDetails.craterColor);
                crater.setAttribute("opacity", "0.2");
                
                craters.appendChild(crater);
            }
            
            // Create a moon phase effect if specified
            if (planetData.renderDetails.phases) {
                const phase = document.createElementNS("http://www.w3.org/2000/svg", "path");
                
                // For demo purposes, show a crescent phase
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
        } else if (planetData.renderDetails.type === "cloudy") {
            // Venus-like cloudy planet
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", position.x);
            circle.setAttribute("cy", position.y);
            circle.setAttribute("r", planetData.size);
            circle.setAttribute("fill", planetData.color);
            circle.setAttribute("stroke", planetData.borderColor);
            circle.setAttribute("stroke-width", "1.5");
            
            planetGroup.appendChild(circle);
            
            // Add cloud layer
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
            
            // Add an overall haze
            const haze = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            haze.setAttribute("cx", position.x);
            haze.setAttribute("cy", position.y);
            haze.setAttribute("r", planetData.size);
            haze.setAttribute("fill", planetData.renderDetails.cloudColor);
            haze.setAttribute("opacity", "0.2");
            
            clouds.appendChild(haze);
            planetGroup.appendChild(clouds);
        } else if (planetData.renderDetails.type === "comet") {
            // Chiron as a comet-like object
            const nucleus = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            nucleus.setAttribute("cx", position.x);
            nucleus.setAttribute("cy", position.y);
            nucleus.setAttribute("r", planetData.size);
            nucleus.setAttribute("fill", planetData.color);
            nucleus.setAttribute("stroke", planetData.borderColor);
            nucleus.setAttribute("stroke-width", "1.5");
            
            planetGroup.appendChild(nucleus);
            
            // Add a comet tail
            const tail = document.createElementNS("http://www.w3.org/2000/svg", "path");
            
            // Calculate tail direction (away from Sun for realism)
            const sunDegree = this.planets.find(p => p.name === "Sun")?.degree || 0;
            const tailAngle = ((sunDegree + 180) % 360) * Math.PI / 180;
            
            const tailEndX = position.x + Math.cos(tailAngle) * planetData.size * 4;
            const tailEndY = position.y + Math.sin(tailAngle) * planetData.size * 4;
            
            const tailWidthStart = planetData.size * 0.8;
            const controlPoint1X = position.x + Math.cos(tailAngle + Math.PI/2) * tailWidthStart + Math.cos(tailAngle) * planetData.size * 1.5;
            const controlPoint1Y = position.y + Math.sin(tailAngle + Math.PI/2) * tailWidthStart + Math.sin(tailAngle) * planetData.size * 1.5;
            const controlPoint2X = position.x + Math.cos(tailAngle - Math.PI/2) * tailWidthStart + Math.cos(tailAngle) * planetData.size * 1.5;
            const controlPoint2Y = position.y + Math.sin(tailAngle - Math.PI/2) * tailWidthStart + Math.sin(tailAngle) * planetData.size * 1.5;
            
            tail.setAttribute("d", `
                M ${position.x + Math.cos(tailAngle + Math.PI/2) * tailWidthStart} 
                  ${position.y + Math.sin(tailAngle + Math.PI/2) * tailWidthStart}
                Q ${controlPoint1X} ${controlPoint1Y}, ${tailEndX} ${tailEndY}
                Q ${controlPoint2X} ${controlPoint2Y}, 
                  ${position.x + Math.cos(tailAngle - Math.PI/2) * tailWidthStart}
                  ${position.y + Math.sin(tailAngle - Math.PI/2) * tailWidthStart}
                Z
            `);
            
            // Create a gradient for the tail
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
            
            document.querySelector("defs").appendChild(tailGradient);
            
            tail.setAttribute("fill", `url(#${tailGradientId})`);
            tail.setAttribute("opacity", "0.6");
            
            planetGroup.appendChild(tail);
            
            // Add glow effect
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
        } else if (planetData.renderDetails.type === "karmic") {
            // Nodes have a special appearance
            const nodeCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            nodeCircle.setAttribute("cx", position.x);
            nodeCircle.setAttribute("cy", position.y);
            nodeCircle.setAttribute("r", planetData.size);
            nodeCircle.setAttribute("fill", "none");
            nodeCircle.setAttribute("stroke", planetData.borderColor);
            nodeCircle.setAttribute("stroke-width", "1.5");
            
            planetGroup.appendChild(nodeCircle);
            
            // Add inner circle
            const innerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            innerCircle.setAttribute("cx", position.x);
            innerCircle.setAttribute("cy", position.y);
            innerCircle.setAttribute("r", planetData.size * 0.5);
            innerCircle.setAttribute("fill", planetData.color);
            innerCircle.setAttribute("opacity", "0.7");
            
            planetGroup.appendChild(innerCircle);
            
            // Add pulse effect
            if (planetData.renderDetails.pulseEffect) {
                // Create a pulse animation
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
                
                // Add pulse animation definition if it doesn't exist
                if (!document.querySelector("style#pulse-animation")) {
                    const style = document.createElement("style");
                    style.id = "pulse-animation";
                    style.textContent = `
                        @keyframes pulse {
                            0% {
                                r: ${planetData.size};
                                opacity: 0.7;
                            }
                            100% {
                                r: ${planetData.size * 2};
                                opacity: 0;
                            }
                        }
                    `;
                    document.head.appendChild(style);
                }
                
                planetGroup.insertBefore(pulse1, nodeCircle);
                planetGroup.insertBefore(pulse2, nodeCircle);
            }
        }
        
        // Add planet symbol
        const symbol = document.createElementNS("http://www.w3.org/2000/svg", "text");
        symbol.setAttribute("x", position.x);
        symbol.setAttribute("y", position.y + 5); // Center vertically
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
    
    // Draw aspect lines
    drawAspects() {
        const aspectsGroup = document.getElementById("aspects") || 
                         document.createElementNS("http://www.w3.org/2000/svg", "g");
        
        if (!document.getElementById("aspects")) {
            aspectsGroup.id = "aspects";
            aspectsGroup.setAttribute("transform", `translate(${this.centerX}, ${this.centerY})`);
            this.svg.appendChild(aspectsGroup);
        } else {
            // Clear existing aspects
            while (aspectsGroup.firstChild) {
                aspectsGroup.removeChild(aspectsGroup.firstChild);
            }
        }
        
        // Draw each aspect
        this.aspects.forEach(aspectData => {
            const planet1Pos = this.calculatePositionOnWheel(aspectData.planet1.degree, 250);
            const planet2Pos = this.calculatePositionOnWheel(aspectData.planet2.degree, 250);
            
            // Adjust positions relative to the group's transform
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
            
            // Add a tooltip title
            line.setAttribute("data-tip", `${aspectData.aspect.name}: ${aspectData.planet1.name} to ${aspectData.planet2.name} (orb: ${aspectData.aspect.orb}°)`);
            
            aspectsGroup.appendChild(line);
        });
    }
    
    // Draw house cusps
    drawHouses(houseCusps) {
        this.houses = houseCusps;
        
        const housesGroup = document.getElementById("houses") || 
                         document.createElementNS("http://www.w3.org/2000/svg", "g");
        
        if (!document.getElementById("houses")) {
            housesGroup.id = "houses";
            housesGroup.setAttribute("transform", `translate(${this.centerX}, ${this.centerY})`);
            this.svg.appendChild(housesGroup);
        } else {
            // Clear existing houses
            while (housesGroup.firstChild) {
                housesGroup.removeChild(housesGroup.firstChild);
            }
        }
        
        // Draw house cusps
        houseCusps.forEach((cusp, index) => {
            const outerPos = this.calculatePositionOnWheel(cusp, this.wheelRadius);
            const innerPos = this.calculatePositionOnWheel(cusp, 200);
            
            // Adjust positions relative to the group's transform
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
            
            // First house (Ascendant) gets special treatment
            if (index === 0) {
                line.setAttribute("stroke", "#6247aa");
                line.setAttribute("stroke-width", "2");
            } else {
                line.setAttribute("stroke-width", "1");
                line.setAttribute("stroke-dasharray", "5,3");
            }
            
            housesGroup.appendChild(line);
            
            // Add house number
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
            
            // Text for house numbers
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
    
    // Generate zodiac sign interpretations
    generateSunSignInterpretation(sign) {
        const sunPlanet = PLANETS.find(p => p.name === "Sun");
        if (!sunPlanet) return "Unable to generate Sun sign interpretation.";
        
        return sunPlanet.interpretations[sign] || 
               `Your Sun in ${sign} represents your core essence and life path.`;
    }
    
    // Generate Moon sign interpretations
    generateMoonSignInterpretation(sign) {
        const moonPlanet = PLANETS.find(p => p.name === "Moon");
        if (!moonPlanet) return "Unable to generate Moon sign interpretation.";
        
        return moonPlanet.interpretations[sign] || 
               `Your Moon in ${sign} reflects your emotional nature and instinctual patterns.`;
    }
    
    // Generate aspect interpretations
    generateAspectInterpretation(aspect) {
        const { planet1, planet2, aspect: aspectDetails } = aspect;
        const planetData1 = PLANETS.find(p => p.name === planet1.name);
        const planetData2 = PLANETS.find(p => p.name === planet2.name);
        
        if (!planetData1 || !planetData2) return "Unable to generate aspect interpretation.";
        
        // Get positions
        const position1 = this.calculator.degreeToZodiacPosition(planet1.degree);
        const position2 = this.calculator.degreeToZodiacPosition(planet2.degree);
        
        let aspectType = "";
        if (["Trine", "Sextile"].includes(aspectDetails.name)) {
            aspectType = "harmonious";
        } else if (["Square", "Opposition", "Quincunx"].includes(aspectDetails.name)) {
            aspectType = "challenging";
        } else {
            aspectType = "significant";
        }
        
        let interpretation = `<div class="interpretation-item">
            <div class="interpretation-title">${planet1.name} ${aspectDetails.name} ${planet2.name}</div>
            <div class="interpretation-content">
                Your ${planet1.name} in ${position1.sign.name} forms a ${aspectType} ${aspectDetails.name} 
                aspect to your ${planet2.name} in ${position2.sign.name}.`;
                
        if (aspectType === "harmonious") {
            interpretation += ` This creates a supportive flow between your ${planetData1.description.toLowerCase()} and your ${planetData2.description.toLowerCase()}. 
                The energies work together with ease, creating natural talents and opportunities.`;
        } else if (aspectType === "challenging") {
            interpretation += ` This creates a dynamic tension between your ${planetData1.description.toLowerCase()} and your ${planetData2.description.toLowerCase()}. 
                While potentially challenging, this aspect provides motivation for growth and conscious integration.`;
        } else {
            interpretation += ` This creates a powerful connection between your ${planetData1.description.toLowerCase()} and your ${planetData2.description.toLowerCase()}. 
                These energies are strongly linked in your chart, influencing each other significantly.`;
        }
        
        interpretation += `</div></div>`;
        
        return interpretation;
    }
    
    // Update aspects table in the aspects view
    updateAspectsTable() {
        const aspectsTable = document.getElementById('aspects-table');
        if (!aspectsTable) return;
        
        // Clear existing table content
        while (aspectsTable.firstChild) {
            aspectsTable.removeChild(aspectsTable.firstChild);
        }
        
        // Create header row
        const headerRow = document.createElement('tr');
        
        // Empty corner cell
        headerRow.appendChild(document.createElement('th'));
        
        // Add planet headers
        this.planets.forEach(planet => {
            const planetHeader = document.createElement('th');
            const planetData = PLANETS.find(p => p.name === planet.name);
            
            if (planetData) {
                planetHeader.textContent = planetData.symbol;
                planetHeader.title = planet.name;
                headerRow.appendChild(planetHeader);
            }
        });
        
        aspectsTable.appendChild(headerRow);
        
        // Create rows for each planet
        this.planets.forEach((planet1, index1) => {
            const row = document.createElement('tr');
            
            // Planet name in the first column
            const planetCell = document.createElement('td');
            const planetData = PLANETS.find(p => p.name === planet1.name);
            
            if (planetData) {
                planetCell.textContent = planetData.symbol;
                planetCell.title = planet1.name;
                row.appendChild(planetCell);
            } else {
                const emptyCell = document.createElement('td');
                row.appendChild(emptyCell);
            }
            
            // Add cells for each potential aspect
            this.planets.forEach((planet2, index2) => {
                const cell = document.createElement('td');
                
                // Only need to check aspects for the lower triangle of the matrix
                if (index2 < index1) {
                    // Find any aspect between these planets
                    const aspect = this.aspects.find(a => 
                        (a.planet1.name === planet1.name && a.planet2.name === planet2.name) ||
                        (a.planet1.name === planet2.name && a.planet2.name === planet1.name)
                    );
                    
                    if (aspect) {
                        cell.textContent = aspect.aspect.name.substring(0, 3);
                        cell.title = `${aspect.planet1.name} ${aspect.aspect.name} ${aspect.planet2.name} (orb: ${aspect.aspect.orb}°)`;
                        cell.style.backgroundColor = aspect.aspect.color;
                        cell.style.color = '#fff';
                        cell.dataset.aspect = aspect.aspect.name;
                        cell.dataset.planet1 = aspect.planet1.name;
                        cell.dataset.planet2 = aspect.planet2.name;
                        cell.dataset.orb = aspect.aspect.orb;
                        cell.classList.add('aspect-cell');
                    }
                } else if (index1 === index2) {
                    // Diagonal - planet's sign
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
    
    // Update house interpretations
    updateHousesView() {
        const housesContainer = document.getElementById('houses-container');
        if (!housesContainer) return;
        
        // Clear existing content
        while (housesContainer.firstChild) {
            housesContainer.removeChild(housesContainer.firstChild);
        }
        
        // Create content for each house
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
    
    // Update transits view
    updateTransitsView(transitDate = new Date()) {
        const transitsContainer = document.getElementById('transits-container');
        if (!transitsContainer) return;
        
        // Clear existing content
        while (transitsContainer.firstChild) {
            transitsContainer.removeChild(transitsContainer.firstChild);
        }
        
        // Calculate current planet positions (transits)
        const transitPlanets = this.calculator.calculateAllPlanetPositions(transitDate);
        
        // Create transit heading
        const transitHeading = document.createElement('h3');
        const formattedDate = transitDate.toLocaleDateString(undefined, { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        transitHeading.textContent = `Transits for ${formattedDate}`;
        transitsContainer.appendChild(transitHeading);
        
        // Create table for transit positions
        const transitTable = document.createElement('table');
        transitTable.className = 'transits-table';
        
        // Add header row
        const headerRow = document.createElement('tr');
        ['Planet', 'Transit Position', 'Natal Position', 'Transit to Natal'].forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        transitTable.appendChild(headerRow);
        
        // Add row for each planet
        transitPlanets.forEach(transitPlanet => {
            const row = document.createElement('tr');
            
            // Planet name
            const nameCell = document.createElement('td');
            const planetData = PLANETS.find(p => p.name === transitPlanet.name);
            nameCell.textContent = transitPlanet.name;
            nameCell.innerHTML = `${planetData.symbol} ${transitPlanet.name}`;
            row.appendChild(nameCell);
            
            // Transit position
            const transitPosition = this.calculator.degreeToZodiacPosition(transitPlanet.degree);
            const transitPositionCell = document.createElement('td');
            transitPositionCell.textContent = this.calculator.formatZodiacPosition(transitPosition);
            transitPositionCell.style.color = transitPosition.sign.color;
            row.appendChild(transitPositionCell);
            
            // Natal position
            const natalPlanet = this.planets.find(p => p.name === transitPlanet.name);
            const natalPositionCell = document.createElement('td');
            
            if (natalPlanet) {
                const natalPosition = this.calculator.degreeToZodiacPosition(natalPlanet.degree);
                natalPositionCell.textContent = this.calculator.formatZodiacPosition(natalPosition);
                natalPositionCell.style.color = natalPosition.sign.color;
            } else {
                natalPositionCell.textContent = "N/A";
            }
            
            row.appendChild(natalPositionCell);
            
            // Transit to natal aspects
            const transitNatalCell = document.createElement('td');
            
            if (natalPlanet) {
                // Check for aspects between transit and natal positions
                const aspect = this.checkAspect(transitPlanet.degree, natalPlanet.degree);
                
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
        
        // Add interpretation section for significant transits
        const significantTransits = document.createElement('div');
        significantTransits.className = 'significant-transits';
        const significantHeading = document.createElement('h3');
        significantHeading.textContent = 'Significant Current Transits';
        significantTransits.appendChild(significantHeading);
        
        // Find the most significant transits (tight aspects to personal planets)
        const significantAspects = [];
        
        transitPlanets.forEach(transitPlanet => {
            this.planets.forEach(natalPlanet => {
                const aspect = this.checkAspect(transitPlanet.degree, natalPlanet.degree);
                
                // Consider an aspect significant if it's tight (small orb) and involves personal planets
                if (aspect && parseFloat(aspect.orb) < 3 && 
                    ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars'].includes(natalPlanet.name)) {
                    significantAspects.push({
                        transitPlanet,
                        natalPlanet,
                        aspect
                    });
                }
            });
        });
        
        // Sort by orb (tightest first)
        significantAspects.sort((a, b) => parseFloat(a.aspect.orb) - parseFloat(b.aspect.orb));
        
        // Display the top significant aspects
        if (significantAspects.length > 0) {
            significantAspects.slice(0, 5).forEach(({ transitPlanet, natalPlanet, aspect }) => {
                const transitInfo = document.createElement('div');
                transitInfo.className = 'transit-info';
                
                const transitPosition = this.calculator.degreeToZodiacPosition(transitPlanet.degree);
                const natalPosition = this.calculator.degreeToZodiacPosition(natalPlanet.degree);
                
                transitInfo.innerHTML = `
                    <div class="transit-title">Transit ${transitPlanet.name} in ${transitPosition.sign.name} ${aspect.name} Natal ${natalPlanet.name} in ${natalPosition.sign.name}</div>
                    <div class="transit-description">
                        This transit suggests a period where your ${natalPlanet.name.toLowerCase()} energies are being 
                        ${aspect.name === "Conjunction" ? "intensified" : 
                          aspect.name === "Trine" || aspect.name === "Sextile" ? "supported" : "challenged"} 
                        by current cosmic energies. This is a good time to 
                        ${aspect.name === "Conjunction" ? "focus intensely on" : 
                          aspect.name === "Trine" || aspect.name === "Sextile" ? "flow with" : "work through challenges related to"} 
                        matters related to your natal ${natalPlanet.name}.
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
    
    // Update the entire chart with new data
    updateChart(birthData) {
        // Parse birth date
        let birthDate;
        if (typeof birthData.date === 'string') {
            birthDate = new Date(birthData.date);
            
            // If time is provided, set it
            if (birthData.time) {
                const [hours, minutes] = birthData.time.split(':').map(Number);
                birthDate.setHours(hours, minutes, 0);
            }
        } else if (birthData.date instanceof Date) {
            birthDate = birthData.date;
        } else {
            birthDate = new Date();
        }
        
        // Calculate planet positions
        this.planets = this.calculator.calculateAllPlanetPositions(birthDate);
        
        // Calculate house cusps (simplified)
        this.houses = this.calculator.calculateHouseCusps(
            birthDate, 
            birthData.latitude || 0, 
            birthData.longitude || 0
        );
        
        // Get planetary data for rendering
        const planetsGroup = document.getElementById("planets") || 
                          document.createElementNS("http://www.w3.org/2000/svg", "g");
        
        if (!document.getElementById("planets")) {
            planetsGroup.id = "planets";
            planetsGroup.setAttribute("transform", `translate(${this.centerX}, ${this.centerY})`);
            this.svg.appendChild(planetsGroup);
        } else {
            // Clear existing planets
            while (planetsGroup.firstChild) {
                planetsGroup.removeChild(planetsGroup.firstChild);
            }
        }
        
        // Draw planets
        this.planets.forEach(planet => {
            const planetData = PLANETS.find(p => p.name === planet.name);
            if (planetData) {
                const planetElement = this.drawPlanet(planet, planetData);
                planetsGroup.appendChild(planetElement);
            }
        });
        
        // Calculate and draw aspects
        this.calculateAspects();
        this.drawAspects();
        
        // Draw houses
        this.drawHouses(this.houses);
        
        // Update interpretations panel
        this.updateInterpretationsPanel();
        
        // If aspects view is active, update the aspects table
        if (this.currentView === 'aspects') {
            this.updateAspectsTable();
        }
        
        // If houses view is active, update house interpretations
        if (this.currentView === 'houses') {
            this.updateHousesView();
        }
        
        // If transits view is active, update transits
        if (this.currentView === 'transits') {
            this.updateTransitsView();
        }
        
        // Return data for potential external use
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
    
    // Update the interpretations panel
    updateInterpretationsPanel() {
        // Update Sun sign interpretation
        const sunPlanet = this.planets.find(p => p.name === "Sun");
        if (sunPlanet) {
            const sunPosition = this.calculator.degreeToZodiacPosition(sunPlanet.degree);
            const sunSignTitle = document.getElementById('sun-sign-title');
            const sunSignContent = document.getElementById('sun-sign-content');
            
            if (sunSignTitle && sunSignContent) {
                sunSignTitle.textContent = `Sun in ${sunPosition.sign.name}`;
                sunSignContent.textContent = this.generateSunSignInterpretation(sunPosition.sign.name);
            }
        }
        
        // Update Moon sign interpretation
        const moonPlanet = this.planets.find(p => p.name === "Moon");
        if (moonPlanet) {
            const moonPosition = this.calculator.degreeToZodiacPosition(moonPlanet.degree);
            const moonSignTitle = document.getElementById('moon-sign-title');
            const moonSignContent = document.getElementById('moon-sign-content');
            
            if (moonSignTitle && moonSignContent) {
                moonSignTitle.textContent = `Moon in ${moonPosition.sign.name}`;
                moonSignContent.textContent = this.generateMoonSignInterpretation(moonPosition.sign.name);
            }
        }
        
        // Update aspects interpretations
        const aspectsInterpretations = document.getElementById('aspects-interpretations');
        if (aspectsInterpretations) {
            // Clear existing interpretations
            aspectsInterpretations.innerHTML = '';
            
            // Get the most significant aspects (tight orbs to personal planets)
            const significantAspects = this.aspects.filter(aspect => {
                const isPersonalPlanet1 = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars'].includes(aspect.planet1.name);
                const isPersonalPlanet2 = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars'].includes(aspect.planet2.name);
                return (isPersonalPlanet1 || isPersonalPlanet2) && parseFloat(aspect.aspect.orb) < 5;
            });
            
            // Sort by significance
            significantAspects.sort((a, b) => {
                // Personal planets to personal planets first
                const aPersonal = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars'].includes(a.planet1.name) && 
                                 ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars'].includes(a.planet2.name);
                const bPersonal = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars'].includes(b.planet1.name) && 
                                 ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars'].includes(b.planet2.name);
                
                if (aPersonal && !bPersonal) return -1;
                if (!aPersonal && bPersonal) return 1;
                
                // Then by orb
                return parseFloat(a.aspect.orb) - parseFloat(b.aspect.orb);
            });
            
            // Display top aspects
            significantAspects.slice(0, 5).forEach(aspect => {
                aspectsInterpretations.innerHTML += this.generateAspectInterpretation(aspect);
            });
            
            // If no significant aspects
            if (significantAspects.length === 0) {
                aspectsInterpretations.innerHTML = '<p>No significant aspects found between personal planets.</p>';
            }
        }
    }
    
    // Set the current view (wheel, aspects, houses, transits)
    setView(viewName) {
        this.currentView = viewName;
        
        // Update UI based on view
        const viewContainers = document.querySelectorAll('.view-container');
        viewContainers.forEach(container => {
            container.style.display = 'none';
        });
        
        const activeContainer = document.getElementById(`${viewName}-view`);
        if (activeContainer) {
            activeContainer.style.display = 'block';
        }
        
        // Update specific view content if needed
        if (viewName === 'aspects') {
            this.updateAspectsTable();
        } else if (viewName === 'houses') {
            this.updateHousesView();
        } else if (viewName === 'transits') {
            this.updateTransitsView();
        }
    }
    
    // Generate a detailed chart report
    generateChartReport() {
        // Create a comprehensive report object
        const report = {
            planets: {},
            houses: {},
            aspects: [],
            dominantElements: this.calculateDominantElements(),
            dominantModalities: this.calculateDominantModalities(),
            chartPattern: this.identifyChartPattern()
        };
        
        // Fill planet information
        this.planets.forEach(planet => {
            const position = this.calculator.degreeToZodiacPosition(planet.degree);
            const sign = position.sign;
            const planetData = PLANETS.find(p => p.name === planet.name);
            
            if (planetData) {
                report.planets[planet.name] = {
                    sign: sign.name,
                    degree: position.degree.toFixed(1),
                    element: sign.element,
                    interpretation: planetData.interpretations[sign.name] || 
                                   `Your ${planet.name} in ${sign.name} represents a unique blend of these energies.`
                };
            }
        });
        
        // Fill house information
        this.houses.forEach((cusp, index) => {
            const houseNumber = index + 1;
            const position = this.calculator.degreeToZodiacPosition(cusp);
            const sign = position.sign;
            
            report.houses[houseNumber] = {
                sign: sign.name,
                degree: position.degree.toFixed(1),
                interpretation: HOUSE_INTERPRETATIONS[houseNumber]?.interpretations[sign.name] || 
                               `${sign.name} on the ${houseNumber}${this.getOrdinalSuffix(houseNumber)} house cusp suggests...`
            };
        });
        
        // Fill aspect information
        this.aspects.forEach(aspect => {
            const planet1Position = this.calculator.degreeToZodiacPosition(aspect.planet1.degree);
            const planet2Position = this.calculator.degreeToZodiacPosition(aspect.planet2.degree);
            
            report.aspects.push({
                planet1: {
                    name: aspect.planet1.name,
                    sign: planet1Position.sign.name
                },
                planet2: {
                    name: aspect.planet2.name,
                    sign: planet2Position.sign.name
                },
                aspect: aspect.aspect.name,
                orb: aspect.aspect.orb,
                nature: this.getAspectNature(aspect.aspect.name)
            });
        });
        
        return report;
    }
    
    // Helper to get aspect nature
    getAspectNature(aspectName) {
        const harmonious = ["Trine", "Sextile"];
        const challenging = ["Square", "Opposition", "Quincunx"];
        const neutral = ["Conjunction", "Semi-Sextile"];
        
        if (harmonious.includes(aspectName)) return "Harmonious";
        if (challenging.includes(aspectName)) return "Challenging";
        return "Neutral";
    }
    
    // Helper to get ordinal suffix
    getOrdinalSuffix(num) {
        const j = num % 10,
              k = num % 100;
        if (j === 1 && k !== 11) {
            return "st";
        }
        if (j === 2 && k !== 12) {
            return "nd";
        }
        if (j === 3 && k !== 13) {
            return "rd";
        }
        return "th";
    }
    
    // Calculate the dominant elements in the chart
    calculateDominantElements() {
        const elements = {
            Fire: 0,
            Earth: 0,
            Air: 0,
            Water: 0
        };
        
        // Count planets in each element
        this.planets.forEach(planet => {
            const position = this.calculator.degreeToZodiacPosition(planet.degree);
            const element = position.sign.element;
            
            // Weigh personal planets more heavily
            const weight = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars'].includes(planet.name) ? 2 : 1;
            elements[element] += weight;
        });
        
        // Sort by count
        return Object.entries(elements)
            .sort((a, b) => b[1] - a[1])
            .map(([element, count]) => ({ element, count }));
    }
    
    // Calculate the dominant modalities in the chart
    calculateDominantModalities() {
        const modalities = {
            Cardinal: 0,
            Fixed: 0,
            Mutable: 0
        };
        
        // Get modality for each sign
        const getModality = (sign) => {
            const cardinalSigns = ['Aries', 'Cancer', 'Libra', 'Capricorn'];
            const fixedSigns = ['Taurus', 'Leo', 'Scorpio', 'Aquarius'];
            const mutableSigns = ['Gemini', 'Virgo', 'Sagittarius', 'Pisces'];
            
            if (cardinalSigns.includes(sign)) return 'Cardinal';
            if (fixedSigns.includes(sign)) return 'Fixed';
            if (mutableSigns.includes(sign)) return 'Mutable';
            return '';
        };
        
        // Count planets in each modality
        this.planets.forEach(planet => {
            const position = this.calculator.degreeToZodiacPosition(planet.degree);
            const modality = getModality(position.sign.name);
            
            // Weigh personal planets more heavily
            const weight = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars'].includes(planet.name) ? 2 : 1;
            modalities[modality] += weight;
        });
        
        // Sort by count
        return Object.entries(modalities)
            .sort((a, b) => b[1] - a[1])
            .map(([modality, count]) => ({ modality, count }));
    }
    
    // Identify the chart pattern
    identifyChartPattern() {
        // Simplified pattern identification
        const planetPositions = this.planets
            .filter(p => ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn'].includes(p.name))
            .map(p => p.degree);
        
        // Check for hemisphere emphasis
        const northernHemisphere = planetPositions.filter(deg => deg >= 0 && deg < 180).length;
        const southernHemisphere = planetPositions.filter(deg => deg >= 180 && deg < 360).length;
        
        const easternHemisphere = planetPositions.filter(deg => deg >= 90 && deg < 270).length;
        const westernHemisphere = planetPositions.filter(deg => deg >= 270 || deg < 90).length;
        
        // Check for bundle pattern (all planets within 120°)
        let isBundlePattern = false;
        for (let startDeg = 0; startDeg < 360; startDeg += 10) {
            const endDeg = (startDeg + 120) % 360;
            const planetsInSection = planetPositions.filter(deg => {
                if (startDeg < endDeg) {
                    return deg >= startDeg && deg <= endDeg;
                } else {
                    return deg >= startDeg || deg <= endDeg;
                }
            }).length;
            
            if (planetsInSection === planetPositions.length) {
                isBundlePattern = true;
                break;
            }
        }
        
        // Check for seesaw pattern (two groups separated by empty space)
        let isSeesawPattern = false;
        // This is a simplification - a true seesaw detection would be more complex
        
        // Check for splash pattern (planets evenly distributed)
        const sectors = Array(12).fill(0);
        planetPositions.forEach(deg => {
            const sector = Math.floor(deg / 30);
            sectors[sector]++;
        });
        const nonEmptySectors = sectors.filter(count => count > 0).length;
        const isSplashPattern = nonEmptySectors >= 10;
        
        // Identify the most likely pattern
        if (isBundlePattern) {
            return "Bundle";
        } else if (nonEmptySectors >= 10) {
            return "Splash";
        } else if (northernHemisphere >= 6 && southernHemisphere <= 1) {
            return "Northern Hemisphere Emphasis";
        } else if (southernHemisphere >= 6 && northernHemisphere <= 1) {
            return "Southern Hemisphere Emphasis";
        } else if (easternHemisphere >= 6 && westernHemisphere <= 1) {
            return "Eastern Hemisphere Emphasis";
        } else if (westernHemisphere >= 6 && easternHemisphere <= 1) {
            return "Western Hemisphere Emphasis";
        }
        
        return "Mixed/Balanced";
    }
    
    // Add animation effects to the chart
    animateChart() {
        // Get elements to animate
        const zodiacWheel = document.getElementById('zodiac-wheel');
        const planets = document.querySelectorAll('.planet-group');
        const aspectLines = document.querySelectorAll('.aspect-line');
        
        // Reset animations
        if (zodiacWheel) {
            zodiacWheel.style.animation = 'none';
            zodiacWheel.offsetHeight; // Trigger reflow
            zodiacWheel.style.animation = 'rotateIn 1.5s';
        }
        
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
            const length = Math.hypot(
                parseFloat(line.getAttribute('x2')) - parseFloat(line.getAttribute('x1')),
                parseFloat(line.getAttribute('y2')) - parseFloat(line.getAttribute('y1'))
            );
            
            line.style.strokeDasharray = length;
            line.style.strokeDashoffset = length;
            line.style.transition = 'stroke-dashoffset 1s ease-in-out';
            
            setTimeout(() => {
                line.style.strokeDashoffset = '0';
            }, 1500 + (index * 100));
        });
    }
    
    // Add magical effects
    addMagicalEffects() {
        // Create a container for particles
        const chartContainer = document.querySelector('.chart-container');
        if (!chartContainer) return;
        
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
            
            // Random color based on zodiac colors
            const colorIndex = Math.floor(Math.random() * ZODIAC_SIGNS.length);
            particle.style.backgroundColor = ZODIAC_SIGNS[colorIndex].color;
            
            chartContainer.appendChild(particle);
        }
    }
}

// Initialize the chart when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create the enhanced chart
    const chartSvg = document.getElementById('chart-svg');
    if (!chartSvg) return;
    
    const chart = new EnhancedAstrologyChart(chartSvg);
    
    // Initialize views
    createViewContainers();
    
    // Add magical particle effects
    injectParticleStyles();
    chart.addMagicalEffects();
    
    // Handle chart generation button
    const generateButton = document.getElementById('generate-chart');
    if (generateButton) {
        generateButton.addEventListener('click', function() {
            const name = document.getElementById('name').value || 'Anonymous';
            const birthDate = document.getElementById('birth-date').value;
            const birthTime = document.getElementById('birth-time').value;
            const birthLocation = document.getElementById('birth-location').value;
            
            if (!birthDate) {
                alert('Please enter a birth date');
                return;
            }
            
            // Update the chart with birth data
            const chartData = chart.updateChart({
                date: birthDate,
                time: birthTime,
                location: birthLocation,
                // For a real application, you would need to geocode the location
                // to get latitude and longitude
                latitude: 0,
                longitude: 0
            });
            
            // Animate the new chart
            chart.animateChart();
            
            // Set default view
            chart.setView('wheel');
            
            console.log('Chart generated for:', name);
            console.log('Planet positions:', chartData.planets);
            console.log('Aspects:', chartData.aspects);
        });
    }
    
    // Handle view buttons
    const viewButtons = document.querySelectorAll('.control-btn[data-view]');
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle active button
            viewButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Set view
            const view = this.dataset.view;
            chart.setView(view);
        });
    });
    
    // Handle save button
    const saveButton = document.getElementById('save-chart');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            // Create a snapshot of the chart SVG
            const svg = document.getElementById('chart-svg');
            const serializer = new XMLSerializer();
            const svgStr = serializer.serializeToString(svg);
            
            // Create a data URL
            const svgBlob = new Blob([svgStr], {type: 'image/svg+xml;charset=utf-8'});
            const url = URL.createObjectURL(svgBlob);
            
            // Create download link
            const link = document.createElement('a');
            link.href = url;
            
            // Get name for the file (use the name entered or default)
            const name = document.getElementById('name').value || 'anonymous';
            const date = new Date().toISOString().slice(0, 10);
            link.download = `${name}-astrology-chart-${date}.svg`;
            
            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    
    // Create different view containers
    function createViewContainers() {
        const mainElement = document.querySelector('main');
        if (!mainElement) return;
        
        // Check if containers already exist
        if (document.getElementById('wheel-view')) return;
        
        // Chart container is the wheel view
        const chartContainer = document.querySelector('.chart-container');
        if (chartContainer) {
            chartContainer.id = 'wheel-view';
            chartContainer.classList.add('view-container');
        }
        
        // Create Aspects view
        const aspectsView = document.createElement('div');
        aspectsView.id = 'aspects-view';
        aspectsView.className = 'view-container';
        aspectsView.style.display = 'none// Create Aspects view
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
                    ${ASPECTS.map(aspect => `
                        <div class="aspect-legend-item">
                            <div class="aspect-color" style="background-color: ${aspect.color}"></div>
                            <div class="aspect-name">${aspect.name} (${aspect.angle}°)</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Create Houses view
        const housesView = document.createElement('div');
        housesView.id = 'houses-view';
        housesView.className = 'view-container';
        housesView.style.display = 'none';
        housesView.innerHTML = `
            <h3>House Placements</h3>
            <p>Learn about how the zodiac signs influence the different areas of your life.</p>
            <div id="houses-container" class="houses-container"></div>
        `;
        
        // Create Transits view
        const transitsView = document.createElement('div');
        transitsView.id = 'transits-view';
        transitsView.className = 'view-container';
        transitsView.style.display = 'none';
        transitsView.innerHTML = `
            <h3>Current Transits</h3>
            <p>Compare your natal chart with the current planetary positions.</p>
            <div class="transit-date-selector">
                <label for="transit-date">Transit Date:</label>
                <input type="date" id="transit-date" value="${new Date().toISOString().slice(0, 10)}">
                <button id="update-transits">Update Transits</button>
            </div>
            <div id="transits-container" class="transits-container"></div>
        `;
        
        // Add views to the document
        mainElement.insertBefore(aspectsView, document.querySelector('.legend'));
        mainElement.insertBefore(housesView, document.querySelector('.legend'));
        mainElement.insertBefore(transitsView, document.querySelector('.legend'));
        
        // Add event listener for transit date
        const transitDateInput = document.getElementById('transit-date');
        const updateTransitsButton = document.getElementById('update-transits');
        
        if (transitDateInput && updateTransitsButton) {
            updateTransitsButton.addEventListener('click', function() {
                const transitDate = new Date(transitDateInput.value);
                chart.updateTransitsView(transitDate);
            });
        }
    }
    
    // Add particle styles
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
                    transform: translate(var(--particle-x, 100px), var(--particle-y, 100px)) rotate(360deg);
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
            
            .pulse-animation {
                animation: pulse 3s infinite;
            }
            
            @keyframes pulse {
                0% {
                    transform: scale(1);
                    opacity: 0.7;
                }
                100% {
                    transform: scale(2);
                    opacity: 0;
                }
            }
            
            /* Aspect table styles */
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
                margin-top: 20px;
            }
            
            .aspect-legend-items {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-top: 10px;
            }
            
            .aspect-legend-item {
                display: flex;
                align-items: center;
                gap: 5px;
            }
            
            .aspect-color {
                width: 20px;
                height: 20px;
                border-radius: 50%;
            }
            
            /* Houses view styles */
            .houses-container {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 20px;
                margin-top: 20px;
            }
            
            .house-section {
                background: white;
                border-radius: 10px;
                padding: 15px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            
            .house-section h3 {
                color: var(--primary-color);
                margin-top: 0;
                border-bottom: 1px solid #eee;
                padding-bottom: 10px;
            }
            
            .house-sign {
                font-size: 1.1em;
                margin-bottom: 10px;
                color: var(--secondary-color);
            }
            
            .house-description {
                margin-bottom: 10px;
                font-style: italic;
                color: #666;
            }
            
            .house-interpretation {
                line-height: 1.5;
            }
            
            /* Transits view styles */
            .transit-date-selector {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 20px;
            }
            
            .transits-table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 20px;
            }
            
            .transits-table th, .transits-table td {
                padding: 8px;
                text-align: left;
                border: 1px solid #ddd;
            }
            
            .transits-table th {
                background-color: #f0f0f0;
                font-weight: bold;
            }
            
            .significant-transits {
                margin-top: 30px;
            }
            
            .transit-info {
                background: white;
                border-radius: 10px;
                padding: 15px;
                margin-bottom: 15px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            
            .transit-title {
                font-weight: bold;
                color: var(--secondary-color);
                margin-bottom: 10px;
            }
            
            .transit-description {
                line-height: 1.5;
            }
            
            /* Planet info tooltip */
            .planet-info {
                max-width: 300px;
                min-width: 200px;
                background: white;
                border-radius: 10px;
                padding: 15px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
                pointer-events: none;
                z-index: 1000;
                position: absolute;
                display: none;
            }
            
            .planet-info strong {
                color: var(--secondary-color);
                font-size: 1.1em;
                display: block;
                margin-bottom: 8px;
            }
            
            .planet-info p {
                margin: 5px 0;
                line-height: 1.4;
            }
        `;
        
        document.head.appendChild(styleElement);
    }
    
    // Generate a sample chart on page load
    setTimeout(() => {
        // Use the current date for a sample chart
        const today = new Date();
        
        // Update the chart
        chart.updateChart({
            date: today,
            latitude: 0,
            longitude: 0
        });
        
        // Animate the chart
        chart.animateChart();
        
        // Set default view
        chart.setView('wheel');
    }, 500);
});
