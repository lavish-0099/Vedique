// Central Mock Database for Vedique Wellness (Ranfort Wellness Pvt. Ltd.)

export const INITIAL_PRODUCTS = [
  {
    id: 'prod-1',
    title: 'Vedique Metabolism & Slim Detox Elixir',
    category: 'Weight & Metabolism',
    price: 1499,
    originalPrice: 1999,
    rating: 4.9,
    reviewsCount: 328,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
    description: 'Ayurvedic herbal blend crafted under Dr. Shikha Sharma guidance to enhance metabolism, reduce visceral fat, and balance Pitta-Vata energy.',
    ingredients: ['Garcinia Cambogia', 'Triphala', 'Guggulu', 'Green Tea Extract', 'Cinnamon'],
    tag: 'Best Seller'
  },
  {
    id: 'prod-2',
    title: 'Vedique Hormonal Balance & PCOS Herb Blend',
    category: 'Women Health',
    price: 1650,
    originalPrice: 2200,
    rating: 4.95,
    reviewsCount: 512,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
    description: 'Targeted formulation designed to regulate menstrual cycles, manage insulin sensitivity, and support ovarian health naturally.',
    ingredients: ['Shatavari', 'Ashwagandha', 'Lodhra', 'Kanchnar Guggulu', 'Spearmint'],
    tag: 'Doctor Recommended'
  },
  {
    id: 'prod-3',
    title: 'Vedique Gut Shield & Digestion Booster',
    category: 'Gut & Digestion',
    price: 999,
    originalPrice: 1350,
    rating: 4.85,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80',
    description: 'Eliminate bloating, hyperacidity, and sluggish digestion with active digestive enzymes and soothing Vata-balancing herbs.',
    ingredients: ['Ajwain', 'Fennel', 'Amla', 'Haritaki', 'Jeera'],
    tag: 'Trending'
  },
  {
    id: 'prod-4',
    title: 'Vedique Organic Tri-Dosha Green Tea Elixir',
    category: 'Teas & Elixirs',
    price: 799,
    originalPrice: 999,
    rating: 4.88,
    reviewsCount: 175,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    description: 'Hand-picked organic green tea infused with Tulsi, Lemongrass, and Mulethi to calm the nervous system and clear toxins (Ama).',
    ingredients: ['Organic Green Tea', 'Holy Basil (Tulsi)', 'Lemongrass', 'Licorice Root'],
    tag: 'Organic'
  },
  {
    id: 'prod-5',
    title: 'Vedique Glycemic Control & Diabetes Herbal Cap',
    category: 'Diabetes & Sugar Care',
    price: 1899,
    originalPrice: 2400,
    rating: 4.92,
    reviewsCount: 290,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    description: 'Proven botanical extracts that help maintain healthy fasting glucose, lower HbA1c, and reduce post-meal sugar spikes.',
    ingredients: ['Gurmar (Gymnema)', 'Jamun Seed', 'Karela Extract', 'Vijaysar', 'Methi'],
    tag: 'Clinical Formula'
  },
  {
    id: 'prod-6',
    title: 'Vedique Stress Relief & Sleep Nourish KSM-66',
    category: 'Mind & Immunity',
    price: 1299,
    originalPrice: 1699,
    rating: 4.97,
    reviewsCount: 410,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
    description: 'High-potency Ashwagandha KSM-66 with Brahmi and Shankhpushpi to lower cortisol levels and restore deep REM sleep.',
    ingredients: ['Ashwagandha KSM-66', 'Brahmi', 'Shankhpushpi', 'Jatamansi'],
    tag: 'Top Rated'
  }
];

export const INITIAL_DOCTORS = [
  {
    id: 'dr-1',
    name: 'Dr. Shikha Sharma',
    title: 'Founder & Chief Ayurvedic Clinical Specialist',
    qualification: 'BAMS (Univ of Delhi), PG Diploma in Clinical Nutrition',
    experience: '22+ Years Experience',
    specialty: 'Metabolic Disorders, PCOS & Chronic Disease Reversal',
    rating: 4.98,
    reviews: 1420,
    fee: 2500,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    bio: 'Dr. Shikha Sharma is a pioneer in combining 5,000-year-old Vedic principles with modern nutrition science. Having trained over 500 medical doctors and transformed over 50,000 patients globally, she advocates root-cause healing without crash dieting.',
    achievements: [
      'Featured in Times of India, NDTV, BBC Health & India Today',
      'Author of 4 Bestselling Books on Ayurvedic Diet & Wellness',
      'Honored with National Women Healthcare Excellence Award'
    ],
    availableSlots: ['10:00 AM', '11:30 AM', '02:00 PM', '04:30 PM', '06:00 PM']
  },
  {
    id: 'dr-2',
    name: 'Dr. Ananya Mukherjee',
    title: 'Senior Ayurvedic Physician & Gynaecology Expert',
    qualification: 'BAMS, MD (Ayurveda Gynaecology)',
    experience: '14+ Years Experience',
    specialty: 'PCOS/PCOD, Fertility & Hormonal Imbalance',
    rating: 4.92,
    reviews: 680,
    fee: 1500,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    bio: 'Specialist in holistic women wellness, natural fertility enhancement, and custom Prakriti-based hormonal balancing diets.',
    achievements: [
      'Over 2,500 successful PCOS reversal cases',
      'Keynote speaker at International Herbal Medical Congress'
    ],
    availableSlots: ['09:30 AM', '11:00 AM', '03:00 PM', '05:00 PM']
  },
  {
    id: 'dr-3',
    name: 'Dr. Rajesh Vaidya',
    title: 'Metabolic & Diabetes Reversal Specialist',
    qualification: 'BAMS, PG (Dietetics & Metabolic Health)',
    experience: '16+ Years Experience',
    specialty: 'Type-2 Diabetes, Fatty Liver & Lipid Management',
    rating: 4.89,
    reviews: 540,
    fee: 1400,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    bio: 'Expert in non-pharmacological blood sugar management and reversing insulin resistance through targeted Vedique diet protocols.',
    achievements: [
      'Helped 1,800+ patients reduce or stop insulin dependence',
      'Lead Researcher in Phytotherapy for Fatty Liver Grade 1 & 2'
    ],
    availableSlots: ['10:30 AM', '01:30 PM', '04:00 PM', '07:00 PM']
  },
  {
    id: 'dr-4',
    name: 'Dr. Meera Nambiar',
    title: 'Gut Microbiome & Thyroid Wellness Consultant',
    qualification: 'BAMS, Certified Clinical Nutritionist',
    experience: '11+ Years Experience',
    specialty: 'IBS, Hypothyroidism, Acid Reflux & Autoimmune Wellness',
    rating: 4.91,
    reviews: 420,
    fee: 1200,
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80',
    bio: 'Dedicated to restoring gut lining integrity, regulating T3/T4 thyroid hormone conversion, and managing autoimmune digestive flares.',
    achievements: [
      'Pioneer of Vata-Pitta Gut Repair Protocol',
      'Featured Guest Speaker on Holistic Health Podcasts'
    ],
    availableSlots: ['11:00 AM', '02:30 PM', '05:30 PM']
  }
];

export const INITIAL_CASE_STUDIES = [
  {
    id: 'cs-1',
    patientName: 'Priya S., 34 Yrs (New Delhi)',
    condition: 'PCOS & Weight Reversal',
    category: 'PCOS / PCOD',
    duration: '4 Months Vedique Program',
    weightLost: '14.5 kg',
    hba1cBefore: '6.4%',
    hba1cAfter: '5.2%',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    summary: 'Priya suffered from irregular 60-day menstrual cycles, severe acne, and weight stagnancy. Following a Pitta-Pacifying Vedique Diet with customized Shatavari elixirs, her periods normalized naturally without hormonal pills.',
    metrics: [
      { label: 'Weight Loss', value: '14.5 kg' },
      { label: 'Cycle Duration', value: '28-30 Days (Normalized)' },
      { label: 'Energy Score', value: '+85% Increase' }
    ]
  },
  {
    id: 'cs-2',
    patientName: 'Vikram R., 48 Yrs (Mumbai)',
    condition: 'Type-2 Diabetes & Fatty Liver',
    category: 'Diabetes Management',
    duration: '6 Months Vedique Program',
    weightLost: '18 kg',
    hba1cBefore: '9.2%',
    hba1cAfter: '5.8%',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    summary: 'Diagnosed with Grade-2 Fatty Liver and high fasting sugar (210 mg/dL). With Dr. Vaidya’s low-glycemic Vata-Kapha Vedique meal plan, Vikram successfully reduced his dosage and normalized liver enzymes.',
    metrics: [
      { label: 'HbA1c Reduction', value: '9.2% -> 5.8%' },
      { label: 'Fatty Liver Grade', value: 'Grade 2 -> Normal Ultrasound' },
      { label: 'Fasting Sugar', value: '94 mg/dL' }
    ]
  },
  {
    id: 'cs-3',
    patientName: 'Sunita M., 42 Yrs (Bengaluru)',
    condition: 'Severe Hypothyroidism & Bloating',
    category: 'Thyroid & Gut',
    duration: '3 Months Vedique Program',
    weightLost: '9 kg',
    hba1cBefore: 'TSH 8.5 mIU/L',
    hba1cAfter: 'TSH 2.4 mIU/L',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    summary: 'Struggling with chronic fatigue, puffiness, and constipation. By eliminating food sensitivities and adding anti-inflammatory Agni-stimulating spices, her TSH levels stabilized and body composition reshaped.',
    metrics: [
      { label: 'TSH Level', value: '8.5 -> 2.4 mIU/L' },
      { label: 'Bloating Severity', value: '100% Resolved' },
      { label: 'Skin Tone', value: 'Radiant Glow Restored' }
    ]
  }
];

export const INITIAL_BLOGS = [
  {
    id: 'blog-1',
    title: 'Understanding Your Prakriti: Vata, Pitta, or Kapha?',
    author: 'Dr. Shikha Sharma',
    date: 'August 1, 2026',
    category: 'Ayurvedic Science',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Discover why eating according to your unique constitutional Prakriti holds the key to effortless fat loss, glowing skin, and mental clarity.',
    content: `Ayurveda teaches that every human being possesses a unique genetic and metabolic bio-identity known as **Prakriti**. Formed at the moment of conception, your Prakriti is composed of three primary biological forces or Doshas: **Vata** (Ether + Air), **Pitta** (Fire + Water), and **Kapha** (Earth + Water).

### Why One-Size-Fits-All Diets Fail
Standard calorie-counting diets treat every human body like a simple furnace. However, a cooling raw salad that rejuvenates a fiery Pitta individual might cause severe gas, bloating, and joint stiffness in a Vata person with cold digestive fire (*Agni*).

### The Vedique Approach
At Vedique Wellness, our personalized food plans analyze over 24 physiological markers:
1. **Digestion Speed & Elimination Pattern**
2. **Thermal Preference (Heat vs. Cold Tolerance)**
3. **Sleep Depth & Mental Trait Tendencies**

When you nourish your body with spices and grains that balance your dominant Dosha, weight loss occurs naturally without weakness or rebound.`
  },
  {
    id: 'blog-2',
    title: '5 Common Foods That Secretly Trigger PCOS Flare-Ups',
    author: 'Dr. Ananya Mukherjee',
    date: 'July 25, 2026',
    category: 'Women Health',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Exposing hidden inflammatory foods in urban diets that worsen insulin resistance and disrupt ovarian hormone signaling.',
    content: `Polycystic Ovary Syndrome (PCOS) is fundamentally a metabolic and low-grade systemic inflammatory disorder. Here are 5 hidden triggers to eliminate today:

1. **Refined Commercial Milk (High A1 Casein)** - Causes gut micro-tears and androgen spikes.
2. **Artificial Sweeteners** - Disrupt gut microbiome and trick pancreas into releasing excess insulin.
3. **Reheated Vegetable Oils (PUFAs)** - Cause oxidative damage in ovarian tissue.
4. **Processed White Flour (Maida)** - Creates immediate glucose surges.
5. **Excessive Cold Raw Smoothies** - Suppresses digestive fire (Mandagni).`
  },
  {
    id: 'blog-3',
    title: 'How to Reset Your Digestive Agni in 7 Days',
    author: 'Dr. Meera Nambiar',
    date: 'July 18, 2026',
    category: 'Gut Health',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Simple daily rituals using household herbs like ginger, fennel, and cumin to reignite metabolic speed and eliminate metabolic waste (Ama).',
    content: `In Vedique philosophy, all diseases originate from impaired *Agni* (digestive fire). When Agni is sluggish, undigested food forms toxic metabolic sludge called *Ama*, leading to weight gain and lethargy.

### The 7-Day Agni Reset Protocol:
- **Morning**: Sip warm ginger-lemon water before 8 AM.
- **Lunch**: Eat your heaviest meal when the sun is highest (12 PM - 2 PM).
- **Dinner**: Light, cooked vegetable soup eaten at least 3 hours before sleep.`
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Meenakshi Sundaram',
    location: 'Chennai',
    role: 'IT Project Manager',
    rating: 5,
    result: 'Lost 16 kg in 4 Months',
    text: 'Vedique Diet completely transformed my life. I went from taking 3 diabetes medications to zero medications under doctor supervision! The customized herb blends and home food plan made it effortless.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-2',
    name: 'Rajesh & Kavita Sharma',
    location: 'Delhi NCR',
    role: 'Entrepreneur Couple',
    rating: 5,
    result: 'Reversed Fatty Liver & Shed 22 kg Combined',
    text: 'Dr. Shikha Sharma’s team identified our individual Prakriti types. We learned how small spice adjustments can cure acidity and boost stamina. Highly recommend Vedique Wellness!',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-3',
    name: 'Dr. Swati Sen',
    location: 'Kolkata',
    role: 'Consultant Dermatologist',
    rating: 5,
    result: 'PCOS Cured & Clear Radiant Skin',
    text: 'As a medical doctor, I was skeptical about Ayurvedic diet claims. But Vedique scientific approach grounded in gut-brain axis evidence convinced me. My period cycles are regular and acne has disappeared completely.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  }
];

export const INITIAL_LEADS = [
  {
    id: 'lead-101',
    name: 'Aarav Gupta',
    email: 'aarav.g@gmail.com',
    phone: '+91 9811223344',
    goal: 'Weight Loss & Gut Health',
    prakritiResult: 'Pitta-Kapha (Dominant Pitta 58%)',
    dateSubmitted: '2026-08-03',
    whatsappJoined: true,
    status: 'New Lead'
  },
  {
    id: 'lead-102',
    name: 'Simran Kaur',
    email: 'simran.kaur@yahoo.com',
    phone: '+91 9876543210',
    goal: 'PCOS Management',
    prakritiResult: 'Vata-Pitta (Dominant Vata 62%)',
    dateSubmitted: '2026-08-02',
    whatsappJoined: true,
    status: 'Consultation Scheduled'
  }
];