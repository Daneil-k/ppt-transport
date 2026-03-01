import transportHero from '@/assets/transport-hero.jpg';
import pollutionSmog from '@/assets/pollution-smog.jpg';
import climateNature from '@/assets/climate-nature.jpg';
import forestRoad from '@/assets/forest-road.jpg';
import evCharging from '@/assets/ev-charging.jpg';
import smartCity from '@/assets/smart-city.jpg';
import typesTransport from '@/assets/types-transport.jpg';
import energyFossil from '@/assets/energy-fossil.jpg';
import noiseTraffic from '@/assets/noise-traffic.jpg';
import waterPollution from '@/assets/water-pollution.jpg';
import keralaFloods from '@/assets/kerala-floods.jpg';
import urbanHeat from '@/assets/urban-heat.jpg';
import publicTransit from '@/assets/public-transit.jpg';
import cyclingCity from '@/assets/cycling-city.jpg';

export interface Slide {
  title: string;
  subtitle?: string;
  points?: string[];
  section?: string;
  sectionClass?: string;
  dotClass?: string;
  bgImage?: string;
  stat?: { value: string; label: string };
  type?: 'title' | 'content' | 'conclusion';
  note?: string;
}

export const slides: Slide[] = [
  // Title Slide
  {
    title: 'Environmental Impact of Transportation',
    subtitle: 'Exploring the Challenges, Consequences & Sustainable Solutions for a Greener Future',
    type: 'title',
    bgImage: transportHero,
  },

  // ── MEMBER 1: Introduction & Background ──
  {
    title: 'Introduction to Transportation',
    section: 'Member 1 — Introduction & Background',
    sectionClass: 'section-badge-1',
    dotClass: 'dot-accent-1',
    bgImage: transportHero,
    points: [
      'Transportation enables the movement of people and goods — the lifeline of modern civilization',
      'Backbone of economic growth and globalization, contributing ~8% to global GDP',
      'Essential for trade, industry, education, and healthcare access',
      'Rapid expansion driven by urbanization — 68% of the world will be urban by 2050',
    ],
    note: 'Every aspect of daily life depends on transport: commuting, commerce, emergency services, and supply chains',
  },
  {
    title: 'Types of Transportation',
    section: 'Member 1 — Introduction & Background',
    sectionClass: 'section-badge-1',
    dotClass: 'dot-accent-1',
    bgImage: typesTransport,
    points: [
      '🚗 Road — Cars, buses, trucks • Accounts for 72% of transport CO₂ emissions',
      '🚆 Rail — Metro, freight & passenger trains • Most energy-efficient per passenger-km',
      '✈️ Air — Domestic & international flights • Fastest growing emission source',
      '🚢 Water — Ships, boats & ferries • Carries 80% of global trade by volume',
    ],
    note: 'Road transport contributes the highest share of emissions among all modes',
  },
  {
    title: 'Growth of Transportation Sector',
    section: 'Member 1 — Introduction & Background',
    sectionClass: 'section-badge-1',
    dotClass: 'dot-accent-1',
    bgImage: noiseTraffic,
    points: [
      'Global vehicle fleet surpassed 1.4 billion — expected to reach 2 billion by 2040',
      'Massive expansion of highways, airports, and freight corridors worldwide',
      'Global fuel consumption rising at 1.3% annually despite efficiency gains',
      'Developing nations like India seeing explosive growth — 250+ million registered vehicles',
    ],
    stat: { value: '1.4B+', label: 'vehicles on roads globally' },
  },
  {
    title: 'Energy Use in Transport',
    section: 'Member 1 — Introduction & Background',
    sectionClass: 'section-badge-1',
    dotClass: 'dot-accent-1',
    bgImage: energyFossil,
    points: [
      '90% of transportation energy comes from fossil fuels — petrol, diesel, and jet fuel',
      'Transport consumes ~28% of total global energy demand',
      'Highest carbon intensity among all economic sectors',
      'Renewable energy adoption in transport remains below 4% globally',
    ],
    stat: { value: '90%', label: 'fossil fuel dependency in transport' },
  },
  {
    title: 'Why Study Environmental Impact?',
    section: 'Member 1 — Introduction & Background',
    sectionClass: 'section-badge-1',
    dotClass: 'dot-accent-1',
    bgImage: climateNature,
    points: [
      'Environmental degradation is accelerating at an unprecedented rate',
      'The climate crisis demands urgent action across all sectors',
      'Sustainable development is no longer optional — it\'s imperative',
      'Engineers bear an ethical responsibility to design for the planet\'s future',
    ],
  },

  // ── MEMBER 2: Environmental Impacts ──
  {
    title: 'Air Pollution from Transport',
    section: 'Member 2 — Environmental Impacts',
    sectionClass: 'section-badge-2',
    dotClass: 'dot-accent-2',
    bgImage: pollutionSmog,
    points: [
      'Vehicles emit CO₂, NOx, SO₂, and volatile organic compounds (VOCs)',
      'Particulate matter (PM2.5 & PM10) penetrates deep into lungs and bloodstream',
      'Smog formation in major cities: Delhi, Beijing, Los Angeles, Mexico City',
      'WHO: Air pollution causes 4.2 million premature deaths annually worldwide',
    ],
    stat: { value: '4.2M', label: 'premature deaths per year from air pollution' },
  },
  {
    title: 'Greenhouse Gas Emissions',
    section: 'Member 2 — Environmental Impacts',
    sectionClass: 'section-badge-2',
    dotClass: 'dot-accent-2',
    bgImage: pollutionSmog,
    points: [
      'Transport contributes approximately 25% of global energy-related CO₂ emissions',
      'Burning fossil fuels releases carbon stored millions of years ago',
      'Aviation emissions have doubled since 2000 and continue to rise',
      'Without intervention, transport emissions could increase 60% by 2050',
    ],
    stat: { value: '~25%', label: 'of global CO₂ emissions from transport' },
  },
  {
    title: 'Noise Pollution',
    section: 'Member 2 — Environmental Impacts',
    sectionClass: 'section-badge-2',
    dotClass: 'dot-accent-2',
    bgImage: noiseTraffic,
    points: [
      'Traffic noise affects over 100 million people in Europe alone',
      'Chronic exposure linked to sleep disturbance, stress, and cardiovascular disease',
      'Wildlife communication and breeding patterns severely disrupted',
      'Metropolitan areas experience noise levels exceeding 70 dB — above safe limits',
    ],
  },
  {
    title: 'Water & Soil Pollution',
    section: 'Member 2 — Environmental Impacts',
    sectionClass: 'section-badge-2',
    dotClass: 'dot-accent-2',
    bgImage: waterPollution,
    points: [
      'Maritime oil spills devastate marine ecosystems — Deepwater Horizon released 4.9M barrels',
      'Fuel leakage and underground storage tanks contaminate soil and groundwater',
      'Road runoff carries heavy metals (lead, zinc, copper) into rivers and lakes',
      'Microplastics from tire wear pollute waterways — 6 million tons annually',
    ],
  },
  {
    title: 'Public Health Impacts',
    section: 'Member 2 — Environmental Impacts',
    sectionClass: 'section-badge-2',
    dotClass: 'dot-accent-2',
    bgImage: pollutionSmog,
    points: [
      'Respiratory diseases: asthma, bronchitis, COPD — rising sharply in urban areas',
      'Cardiovascular problems linked directly to long-term pollution exposure',
      'Children and elderly are most vulnerable to transport-related pollution',
      'Polluted cities see 20–30% higher rates of premature death',
    ],
  },

  // ── MEMBER 3: Climate & Ecological Impact ──
  {
    title: 'Transportation & Climate Change',
    section: 'Member 3 — Climate & Ecological Impact',
    sectionClass: 'section-badge-3',
    dotClass: 'dot-accent-3',
    bgImage: climateNature,
    points: [
      'Global temperature has risen 1.1°C above pre-industrial levels',
      'Arctic ice melting at 13% per decade — glaciers retreating worldwide',
      'Sea levels rising 3.6 mm per year, threatening coastal communities globally',
      'Transport emissions are a key driver of this accelerating climate crisis',
    ],
    stat: { value: '1.1°C', label: 'global temperature rise since pre-industrial era' },
  },
  {
    title: 'Extreme Weather Events',
    section: 'Member 3 — Climate & Ecological Impact',
    sectionClass: 'section-badge-3',
    dotClass: 'dot-accent-3',
    bgImage: keralaFloods,
    points: [
      '🌊 Floods — Kerala floods (2018, 2019) displaced millions, caused ₹40,000 crore damage',
      '🔥 Heat waves — Record-breaking temperatures across India and Europe',
      '🌀 Cyclones — Increasing intensity and frequency in the Indian Ocean',
      '🌧️ Irregular rainfall — Disrupting agriculture and water resources',
    ],
    note: 'The 2018 Kerala floods were described as the worst in 100 years — a direct consequence of climate change',
  },
  {
    title: 'Urban Heat Island Effect',
    section: 'Member 3 — Climate & Ecological Impact',
    sectionClass: 'section-badge-3',
    dotClass: 'dot-accent-3',
    bgImage: urbanHeat,
    points: [
      'Concrete roads and asphalt absorb and re-radiate solar heat',
      'Vehicle engines and exhaust add significant thermal energy to urban areas',
      'Cities can be 3–8°C warmer than surrounding rural areas',
      'Increases energy demand for cooling, creating a vicious cycle of emissions',
    ],
  },
  {
    title: 'Impact on Biodiversity',
    section: 'Member 3 — Climate & Ecological Impact',
    sectionClass: 'section-badge-3',
    dotClass: 'dot-accent-3',
    bgImage: forestRoad,
    points: [
      'Deforestation for highways destroys critical habitats — Amazon, Western Ghats',
      'Habitat fragmentation isolates wildlife populations, reducing genetic diversity',
      'An estimated 1 million animals are killed on roads daily worldwide',
      'Noise and light pollution from transport corridors disrupt ecosystems',
    ],
  },
  {
    title: 'Ethical Perspective',
    section: 'Member 3 — Climate & Ecological Impact',
    sectionClass: 'section-badge-3',
    dotClass: 'dot-accent-3',
    bgImage: climateNature,
    points: [
      'Intergenerational justice — future generations inherit today\'s environmental damage',
      'Engineers must design infrastructure responsibly, considering long-term impacts',
      'Sustainable decision-making should balance growth with ecological preservation',
      'The principle of "Do no harm" extends to our planet and its ecosystems',
    ],
  },

  // ── MEMBER 4: Sustainable Solutions ──
  {
    title: 'Sustainable Transportation',
    section: 'Member 4 — Sustainable Solutions',
    sectionClass: 'section-badge-4',
    dotClass: 'dot-accent-4',
    bgImage: evCharging,
    points: [
      'Low-carbon mobility systems powered by renewable energy sources',
      'Energy-efficient infrastructure designed for minimal environmental footprint',
      'Transit-oriented development reducing the need for long commutes',
      'Circular economy principles applied to vehicle manufacturing and recycling',
    ],
  },
  {
    title: 'Public Transportation',
    section: 'Member 4 — Sustainable Solutions',
    sectionClass: 'section-badge-4',
    dotClass: 'dot-accent-4',
    bgImage: publicTransit,
    points: [
      'Buses and metro systems move more people with fewer emissions per capita',
      'A single bus can replace 40+ private cars on the road',
      'Cost-effective and inclusive — accessible to all socioeconomic groups',
      'Modern BRT (Bus Rapid Transit) systems achieve metro-like efficiency at lower cost',
    ],
  },
  {
    title: 'Electric Vehicles (EVs)',
    section: 'Member 4 — Sustainable Solutions',
    sectionClass: 'section-badge-4',
    dotClass: 'dot-accent-4',
    bgImage: evCharging,
    points: [
      'Zero tailpipe emissions — significantly cleaner than ICE vehicles',
      'Global EV sales growing 35%+ year-over-year, crossing 14 million in 2023',
      'Charging infrastructure expanding rapidly — 2.7 million public chargers worldwide',
      'Battery recycling and second-life applications addressing waste concerns',
    ],
    stat: { value: '14M+', label: 'EVs sold globally in 2023' },
  },
  {
    title: 'Non-Motorized Transport',
    section: 'Member 4 — Sustainable Solutions',
    sectionClass: 'section-badge-4',
    dotClass: 'dot-accent-4',
    bgImage: cyclingCity,
    points: [
      '🚶 Walking — The most fundamental and zero-emission mode of transport',
      '🚲 Cycling — Cities like Amsterdam & Copenhagen lead with 40%+ cycling mode share',
      'Pedestrian-friendly urban design reduces car dependency significantly',
      'Health benefits: reduces obesity, cardiovascular disease, and mental health issues',
    ],
  },
  {
    title: 'Smart Mobility',
    section: 'Member 4 — Sustainable Solutions',
    sectionClass: 'section-badge-4',
    dotClass: 'dot-accent-4',
    bgImage: smartCity,
    points: [
      'Carpooling and ride-sharing reduce the total number of vehicles on roads',
      'Apps like Uber Pool and Ola Share optimize routes and cut per-trip emissions',
      'Intelligent Traffic Systems (ITS) use AI to minimize congestion and idling',
      'Mobility-as-a-Service (MaaS) integrates all transport modes into one platform',
    ],
  },

  // ── MEMBER 5: India/Kerala Context & Future ──
  {
    title: 'Transportation in Kerala',
    section: 'Member 5 — India/Kerala Context & Future',
    sectionClass: 'section-badge-5',
    dotClass: 'dot-accent-5',
    bgImage: noiseTraffic,
    points: [
      'Kerala has one of India\'s highest vehicle densities — 300+ vehicles per 1,000 people',
      'Severe traffic congestion in Kochi, Thiruvananthapuram, and Kozhikode',
      'Air quality deteriorating in major cities due to vehicular emissions',
      'Limited public transport infrastructure despite high mobility demand',
    ],
  },
  {
    title: 'Kochi Metro — Case Study',
    section: 'Member 5 — India/Kerala Context & Future',
    sectionClass: 'section-badge-5',
    dotClass: 'dot-accent-5',
    bgImage: publicTransit,
    points: [
      'India\'s first metro system with comprehensive accessibility features',
      '25 km operational route reducing road congestion in Kochi city',
      'Estimated 65,000+ daily passengers — removing thousands of vehicles from roads',
      'Solar-powered stations and energy-efficient operations as a sustainability model',
    ],
  },
  {
    title: 'Government Initiatives',
    section: 'Member 5 — India/Kerala Context & Future',
    sectionClass: 'section-badge-5',
    dotClass: 'dot-accent-5',
    bgImage: evCharging,
    points: [
      'FAME Scheme — Faster Adoption and Manufacturing of Electric Vehicles in India',
      'Electric bus deployment: 10,000+ e-buses sanctioned across Indian cities',
      'National Electric Mobility Mission Plan targeting 6–7 million EVs by 2030',
      'Green highways policy — large-scale tree planting along national highways',
    ],
  },
  {
    title: 'Role of Engineers',
    section: 'Member 5 — India/Kerala Context & Future',
    sectionClass: 'section-badge-5',
    dotClass: 'dot-accent-5',
    bgImage: smartCity,
    points: [
      'Design green infrastructure — roads, bridges, and transit systems with minimal impact',
      'Develop renewable-energy-powered transport solutions for the future',
      'Innovate in materials science — lighter, recyclable vehicle components',
      'Advocate for and implement environmental policies in engineering practice',
    ],
  },
  {
    title: 'Future of Transportation',
    section: 'Member 5 — India/Kerala Context & Future',
    sectionClass: 'section-badge-5',
    dotClass: 'dot-accent-5',
    bgImage: smartCity,
    points: [
      '🔋 Hydrogen fuel cell vehicles — zero emissions with fast refueling capability',
      '🤖 Autonomous electric mobility — self-driving reducing accidents and emissions',
      '🏙️ Integrated smart cities — transport, energy, and buildings working as one system',
      '🎯 Net-zero transportation by 2050 — the global target for climate action',
    ],
  },
  {
    title: 'Conclusion',
    subtitle: 'Transportation significantly impacts our environment and is a major contributor to climate change. Sustainable mobility is not just essential — it\'s urgent. As future engineers, we must lead the transformation toward a greener, cleaner world.',
    type: 'conclusion',
    bgImage: transportHero,
    points: [
      'Transportation is a critical driver of environmental degradation and climate change',
      'The impacts span air, water, soil, biodiversity, and human health',
      'Sustainable solutions exist — EVs, public transit, smart mobility, non-motorized transport',
      'Engineers hold the key to designing a sustainable transportation future',
    ],
  },
];
