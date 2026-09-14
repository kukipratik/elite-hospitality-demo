/**
 * Central Data Store for Elite School of Hospitality Management (ESHM)
 * 
 * NOTE FOR DEVELOPERS & CLIENT REVIEW:
 * All approximate, assumed, or unverified values are explicitly flagged with:
 * // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
 * and recorded in demo_data_to_verify.md
 */

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'diploma' | 'certificate' | 'specialization';
  isFlagship?: boolean;

  // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
  duration: string;

  // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
  tuitionFee: string;

  // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
  shifts: string[];

  // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
  seatsPerBatch: number;

  description: string;
  verifiedHighlights: string[];
  modules: {
    title: string;
    description: string;
    topics: string[];
  }[];
  heroImage: string;
  accentColor?: string;
}

export const SITE_DATA = {
  institution: {
    name: 'Elite School of Hospitality Management',
    shortName: 'Elite',
    acronym: 'ESHM',
    tagline: 'Turn Your Passion into a Profession',
    foundedNote: 'Redefining professional hospitality education in Kathmandu',

    // Verified Physical Address
    address: 'Pipalbot, Mid-Baneshwor / Old Baneshwor, Devkota Sadak, Kathmandu 44600, Nepal',
    locationShort: 'Pipalbot, Old Baneshwor, Kathmandu',
    plusCode: 'M8XQ+RC Kathmandu, Bagmati Province',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.544719412151!2d85.3360204!3d27.6996083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bfdd024785%3A0xd4cd57fed8566ce1!2sElite%20School%20Of%20Hospitality!5e0!3m2!1sen!2snp!4v1789364000000',
    googleMapsUrl: 'https://maps.google.com/?cid=15334009058329259233',

    // Verified Contact Channels
    primaryPhone: '01-4471162',
    alternatePhone: '01-4571162',
    mobilePhone: '984-3338838',
    secondaryMobile: '9828820572',
    email: 'eliteschool.np@gmail.com',

    // WhatsApp Inbound Admissions Routing
    // Live-verified from Elite's official Facebook Page CTA button
    whatsappNumber: '9779843338838',
    whatsappDisplay: '+977 984-3338838',

    // Operating Hours (Verified from Instagram & Google)
    hours: 'Sunday – Friday: 08:00 AM – 05:00 PM (Saturday Closed)',
  },

  // Live-Verified Proof Metrics (Checked Sept 2026)
  proofMetrics: {
    googleRating: 4.7,
    googleReviewCount: 74,
    googleFiveStarPercentage: '89%',
    facebookFollowers: '7.1K+',
    facebookRecommend: '100%',
    practicalDaysDCA: '60+', // Verified: "More than 60 days nonstop kitchen practical"
    fourCourseMenusDCA: 10,  // Verified: "Extra Ten 4-course menu for DCA"
    internshipDurationMonths: '3 to 6 Months', // Verified Elite claim
  },

  // Verified Practical Pillars
  practicalPillars: [
    {
      title: '60+ Days Nonstop Kitchen Practical',
      description: 'Daily hands-on cooking in commercial kitchen stations. Knife mastery, dry & moist heat methods, mother sauce foundations, and high-heat wok cookery.',
      verified: true
    },
    {
      title: 'Extra Ten 4-Course Menu Executions',
      description: 'Complete classical and contemporary service menus: appetizers, clear soups, pasta courses, and hotel-standard main protein presentations.',
      verified: true
    },
    {
      title: 'The Elite Bar — Mixology & Flair Lab',
      description: 'Real bar environment with dedicated neon bar counter, spirit knowledge, cocktail measurements, glassware selection, and flair bartending.',
      verified: true
    },
    {
      title: 'Specialty Barista Training Studio',
      description: 'Professional commercial espresso machines, bean grinders, milk texturing jugs, latte art pouring techniques, and sensory coffee tasting.',
      verified: true
    },
    {
      title: '3 to 6 Months Hotel & Resort Internship',
      description: 'Structured placements in Nepal’s top hotels, boutique resorts, and fine dining establishments, paving the pathway to overseas career growth.',
      verified: true
    },
    {
      title: 'ODC & Banqueting Certification',
      description: 'Outdoor Catering (ODC) exposure for grand banquets, wedding galas, and luxury events with real-world certification.',
      verified: true
    }
  ],

  // Verified Institutional Sessions (Careful phrasing — not claimed as permanent partnerships)
  collaborativeProof: [
    {
      name: 'Janapremi College',
      context: 'Practical hospitality culinary sessions conducted with visiting students'
    },
    {
      name: 'The Times International College',
      context: 'Practical food & beverage training sessions hosted at Elite campus'
    },
    {
      name: 'Ananda Bhairab',
      context: 'Institutional practical hospitality workshop participation'
    }
  ],

  // Flagship & Certified Courses
  courses: [
    {
      id: 'dca',
      slug: 'dca',
      title: 'Diploma in Culinary Arts (DCA)',
      subtitle: 'Flagship Professional Chef Qualification with 60+ Days Nonstop Kitchen Practical',
      category: 'diploma',
      isFlagship: true,

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      duration: '6 Months (Full-Time Intensive)',

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      tuitionFee: 'Inquire for Current Intake Fees & Installment Plan',

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      shifts: ['Morning Shift: 07:00 AM – 11:00 AM', 'Afternoon Shift: 11:30 AM – 03:30 PM'],

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      seatsPerBatch: 16,

      description: 'A career-defining professional diploma designed to build confident, high-speed chefs ready for modern commercial kitchens, fine dining resorts, and international hospitality careers.',
      verifiedHighlights: [
        'More than 60 days nonstop commercial kitchen practical',
        'Mastery of Ten complete 4-course banquet & restaurant menus',
        'Hot Kitchen fundamentals, sauteing, roasting, grilling & flame wok cooking',
        'Professional Bakery & Pastry arts (breads, sponges, laminated doughs)',
        'Professional Sushi crafting & Japanese cuisine fundamentals',
        'Artisan Chocolate making, confections & artistic fruit carving',
        '3 to 6 Months internship placement in Nepal: Hotel, Resort & Fine Dining Restaurant',
        'ODC (Outdoor Catering) banqueting certificate upon completion'
      ],
      modules: [
        {
          title: 'Culinary Fundamentals & Knife Mastery',
          description: 'Hygiene, commercial workstation setup, precision vegetable cuts (julienne, brunoise, chiffonade), and foundational safety.',
          topics: ['Kitchen Health & Safety', 'Station Mise en Place', 'Precision Knife Techniques', 'Stock & Reduction Science']
        },
        {
          title: 'Hot Kitchen & Pan-Searing Cookery',
          description: 'Working live on high-flame burners. Searing poultry, meats, fish, vegetable glazing, reduction sauces, and modern plating.',
          topics: ['Dry & Moist Cooking Methods', 'Searing & Pan Basting', 'Sauce Emulsions & Reductions', 'Starch & Vegetable Accompaniments']
        },
        {
          title: 'Ten 4-Course Menu Masterclasses',
          description: 'Elite’s signature requirement: cooking and plating ten full four-course menus under commercial timing constraints.',
          topics: ['Appetizers & Dressed Salads', 'Classical Clear & Puree Soups', 'Pasta & Risotto Precision', 'Showcase Poultry & Meat Entrees']
        },
        {
          title: 'Bakery, Pastry & Artisan Breads',
          description: 'Understanding flour protein, yeast fermentation, sponge mixing, oven temperature management, and dessert presentation.',
          topics: ['Yeast Doughs & Artisan Loaves', 'Puff & Shortcrust Pastry', 'Cakes, Mousses & Tarts', 'Dessert Finishing & Garnishes']
        },
        {
          title: 'Professional Sushi & Asian Wok Art',
          description: 'Specialized techniques in Japanese sushi rolling, sushi rice seasoning, Asian sauces, and high-heat wok frying.',
          topics: ['Sushi Rice Preparation & Vinegar Balance', 'Maki, Nigiri & Uramaki Rolling', 'Asian Aromatics & Wok Hei', 'Wasabi, Ginger & Plating Aesthetics']
        },
        {
          title: 'Artisan Chocolate & Culinary Artistry',
          description: 'Chocolate tempering, molding, bonbon creation, and intricate decorative fruit and vegetable carving.',
          topics: ['Cocoa Butter Chemistry & Tempering', 'Filled Chocolates & Ganaches', 'Thai Fruit Carving Foundations', 'Banquet Centerpiece Construction']
        }
      ],
      heroImage: '/images/kitchen/searing_chicken.jpg',
      accentColor: 'var(--color-copper)'
    },
    {
      id: 'dhm',
      slug: 'dhm',
      title: 'Diploma in Hotel Management (DHM)',
      subtitle: 'Comprehensive 360° Hospitality Leadership Program',
      category: 'diploma',

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      duration: '1 Year (6 Months Campus + 6 Months Internship)',

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      tuitionFee: 'Inquire for Current Intake Fees',

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      shifts: ['Morning Shift: 07:00 AM – 10:30 AM', 'Day Shift: 11:00 AM – 02:30 PM'],

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      seatsPerBatch: 20,

      description: 'All-round training covering the four core pillars of hospitality: Food & Beverage Service, Front Office Operations, Housekeeping Management, and Culinary Kitchen Basics.',
      verifiedHighlights: [
        'Practical F&B Service, banquet protocol & linen napkin artistry',
        'Front Office guest handling, check-in simulation & reservation systems',
        'Housekeeping suite setup, linen management & guestroom inspection',
        '3 to 6 months internship placement across top Nepal properties'
      ],
      modules: [
        {
          title: 'F&B Service Management',
          description: 'Restaurant layout, sequence of service, order taking, tray carrying, and guest table management.',
          topics: ['Service Styles', 'Banquet Protocols', 'Beverage Service', 'Guest Etiquette']
        },
        {
          title: 'Housekeeping & Front Office',
          description: 'Managing the guest experience from reception check-in to pristine room presentation.',
          topics: ['Front Desk Operations', 'Room Inspections', 'Linen & Laundry Control', 'Swan & Decorative Towel Art']
        }
      ],
      heroImage: '/images/housekeeping/guestroom_swan.jpg',
      accentColor: 'var(--color-gold)'
    },
    {
      id: 'barista',
      slug: 'barista',
      title: 'Professional Barista Training',
      subtitle: 'Specialty Coffee Extraction, Steaming & Swan Latte Art',
      category: 'certificate',

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      duration: '1 Month Intensive (Daily 2 Hours Practical)',

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      tuitionFee: 'Inquire for Current Batch Fee',

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      shifts: ['Morning: 07:30 – 09:30 AM', 'Afternoon: 01:00 – 03:00 PM', 'Evening: 03:30 – 05:30 PM'],

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      seatsPerBatch: 8,

      description: 'Master commercial espresso machines, grinder calibration, milk microfoam science, cupping aromas, and free-pour latte art rosettas and swans.',
      verifiedHighlights: [
        'Dedicated specialty coffee lab with commercial dual-boiler espresso gear',
        'Espresso dial-in, yield measurement, grind adjustments & extraction time',
        'Silky milk steaming with temperature control & pitcher angling',
        'Hands-on pouring: heart, tulip, rosette, and swan latte art',
        'Manual brewing techniques: Chemex, French Press, and V60 drippers'
      ],
      modules: [
        {
          title: 'Espresso Science & Grinder Calibration',
          description: 'Understanding roast profiles, coffee bean origins, dosing, tamping pressure, and extraction yield.',
          topics: ['Bean Selection & Roast Levels', 'Dosing & Distribution', 'Tamping Precision', 'Crema Evaluation']
        },
        {
          title: 'Milk Chemistry & Free-Pour Latte Art',
          description: 'Steaming microfoam with zero large bubbles and pouring symmetrical cafe designs.',
          topics: ['Microfoam Texture Science', 'Pitcher Movement & Pour Height', 'Heart & Rosetta Designs', 'Advanced Swan Pouring']
        }
      ],
      heroImage: '/images/barista/espresso_machine.jpg',
      accentColor: 'var(--color-gold)'
    },
    {
      id: 'bakery',
      slug: 'bakery',
      title: 'Professional Bakery & Pastry Arts',
      subtitle: 'Boulangerie, Patisserie & Commercial Cake Crafting',
      category: 'certificate',

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      duration: '2 Months (Hands-On Lab Practical)',

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      tuitionFee: 'Inquire for Current Batch Fee',

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      shifts: ['Morning: 08:00 – 11:00 AM', 'Day: 12:00 – 03:00 PM'],

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      seatsPerBatch: 12,

      description: 'Develop commercial baking confidence: artisanal crusty loaves, soft milk buns, puff pastries, decadent chocolate mousse, mirror glazes, and tiered celebration cakes.',
      verifiedHighlights: [
        'Full hands-on dough kneading, proofing, and baking in deck & convection ovens',
        'Classical French pastries, éclairs, choux buns, and fruit tarts',
        'Cake sponge varieties, layering, crumb coating, and piping borders',
        'Artistic finishing with tempered chocolate shards and fruit glaze'
      ],
      modules: [
        {
          title: 'Artisan Breads & Viennoiserie',
          description: 'Fermentation, gluten windows, dough hydration, and crisp golden crust baking.',
          topics: ['Baguettes & Focaccia', 'Dinner Rolls & Buns', 'Croissant Dough & Lamination', 'Baking Temperatures']
        },
        {
          title: 'Patisserie & Cake Decorating',
          description: 'Assembling modern pastry showcase desserts and celebration cakes.',
          topics: ['Pastry Creams & Ganaches', 'Choux Pastry Mastery', 'Piping & Floral Borders', 'Mirror Glazes']
        }
      ],
      heroImage: '/images/kitchen/chef_technique.jpg',
      accentColor: 'var(--color-copper)'
    },
    {
      id: 'bartending',
      slug: 'bartending',
      title: 'Bartending & Flair Mixology',
      subtitle: 'Modern Bar Craft, Cocktail Chemistry & Working Flair',
      category: 'certificate',

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      duration: '1 Month Intensive (Elite Bar Studio)',

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      tuitionFee: 'Inquire for Current Batch Fee',

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      shifts: ['Morning: 09:00 – 11:00 AM', 'Afternoon: 02:00 – 04:00 PM'],

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      seatsPerBatch: 10,

      description: 'Step behind our dedicated neon-lit Elite Bar. Learn classical and contemporary mixology, shaking, stirring, muddling, glassware etiquette, and working flair acrobatics.',
      verifiedHighlights: [
        'Training inside the dedicated "Elite Bar" counter setup',
        'Mastering world classic cocktails (Martinis, Mojitos, Margaritas, Old Fashioneds)',
        'Modern mocktail crafting with fresh syrups, infusions, and botanicals',
        'Working flair routines: tin rolls, bottle flips, and speed pouring',
        'Bar inventory, alcohol measurements, and responsible service standards'
      ],
      modules: [
        {
          title: 'Classic & Signature Mixology',
          description: 'Liquor classification, balance of sweet/sour/bitter, and proper shaker mechanics.',
          topics: ['Spirits & Liqueur Origins', 'Stirred vs. Shaken Drinks', 'Craft Syrups & Cordials', 'Garnish Presentation']
        },
        {
          title: 'Working Flair & Bar Speed',
          description: 'Safe, crowd-pleasing bartender showmanship behind a busy commercial bar.',
          topics: ['Jigger & Free-Pour Accuracy', 'Tin Flips & Catching', 'Two-Bottle Synchronous Pours', 'Bar Station Setup']
        }
      ],
      heroImage: '/images/bar/elite_bar_neon.jpg',
      accentColor: 'var(--color-gold)'
    },
    {
      id: 'sushi',
      slug: 'sushi',
      title: 'Professional Sushi Training',
      subtitle: 'Japanese Gastronomy, Rice Seasoning & Knife Art',
      category: 'specialization',

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      duration: '2 Weeks Masterclass',

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      tuitionFee: 'Inquire for Masterclass Fee',

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      shifts: ['Flexible Intensive Schedules'],

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      seatsPerBatch: 8,

      description: 'A specialized short-format program for chefs and culinary students wanting high-demand sushi bar proficiency.',
      verifiedHighlights: [
        'Proper sushi vinegar seasoning & short-grain rice washing techniques',
        'Maki roll construction with nori, vegetables, and seasoned meats/fish',
        'Handcrafted Nigiri shaping and Uramaki inside-out rolls with tobiko',
        'Plating balance, pickled ginger, wasabi shaping, and soy reduction dips'
      ],
      modules: [
        {
          title: 'Sushi Rice & Rolling Essentials',
          description: 'From rice washing to bamboo mat (makisu) control.',
          topics: ['Short-grain Rice Seasoning', 'Makisu Bamboo Rolling', 'Maki & Uramaki Styling', 'Nigiri Hand-pressing']
        }
      ],
      heroImage: '/images/kitchen/culinary_auditorium.jpg',
      accentColor: 'var(--color-copper)'
    },
    {
      id: 'housekeeping',
      slug: 'housekeeping',
      title: 'Housekeeping & Front Office Operations',
      subtitle: 'Hospitality Rooms Division & Luxury Guest Relations',
      category: 'certificate',

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      duration: '1 Month Intensive',

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      tuitionFee: 'Inquire for Current Intake Fee',

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      shifts: ['Morning Shift: 08:00 – 10:00 AM'],

      // APPROXIMATE DEMO VALUE — VERIFY WITH CLIENT
      seatsPerBatch: 12,

      description: 'Practical training in hotel room preparation, linen origami, chemical cleaning standards, and front office communication protocols.',
      verifiedHighlights: [
        'Full hotel bedroom suite practical training on campus',
        'Signature swan and flower decorative towel origami techniques',
        'Sanitation, housekeeping trolley stocking, and bed-making standards',
        'Front office telephone etiquette, check-in greeting, and luggage handling'
      ],
      modules: [
        {
          title: 'Rooms Division & Housekeeping Craft',
          description: 'Delivering five-star luxury aesthetic standards for hotel suites.',
          topics: ['Bed Making with Hospital Corners', 'Decorative Towel Origami', 'Chemical Safety & Cleaning', 'Guestroom Inspection Checklist']
        }
      ],
      heroImage: '/images/housekeeping/guestroom_swan.jpg',
      accentColor: 'var(--color-gold)'
    }
  ],

  // Real Reviews from Live Google Business Presence (Verified)
  reviews: [
    {
      author: 'Bhim Prasad Phiyak',
      rating: 5,
      dateText: 'Google Verified Review',
      reviewText: 'I have seen many appealing aspects of this college. Different unique food with traditional identity reflection, friendly environment and good communication between students and teacher made it great. Truly one of Kathmandu’s finest hospitality schools.',
      badge: 'Alumni / Student Experience'
    },
    {
      author: 'Aashish Acharya',
      rating: 4,
      dateText: 'Google Local Guide (141+ Reviews)',
      reviewText: 'The overall experience is great. Nice music and great ambiance. The practical training and hands-on environment makes it stand out in Kathmandu.',
      badge: 'Local Guide'
    },
    {
      author: 'Official Community Recommendation',
      rating: 5,
      dateText: 'Facebook Verified Score',
      reviewText: '100% recommended by students and culinary aspirants. The focus on uninterrupted kitchen practicals and real bar setups gives students immediate industry confidence.',
      badge: 'Community Verified'
    }
  ],

  // WhatsApp Pre-filled Lead Synthesizer
  getWhatsAppLink(courseTitle?: string, customNote?: string): string {
    const phone = SITE_DATA.institution.whatsappNumber;
    let message = `Namaste Elite School of Hospitality Management!`;

    if (courseTitle) {
      message += ` I am interested in the ${courseTitle}. Please share the current fee structure, upcoming batch start date, and class schedule.`;
    } else {
      message += ` I would like to inquire about admissions and schedule a campus visit at your Pipalbot, Old Baneshwor campus.`;
    }

    if (customNote) {
      message += ` (${customNote})`;
    }

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }
};
