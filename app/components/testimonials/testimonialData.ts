export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  quote: string;
  type: 'video' | 'picture' | 'text' | 'featured';
  image?: string;
  videoUrl?: string;
  videoPlatform?: 'youtube' | 'vimeo';
  initials?: string;
  accentColor?: string;
  results?: string[];
}

export const testimonials: Testimonial[] = [
  {
    id: 'sean-cannell',
    name: 'Sean Cannell',
    company: 'Think Media',
    quote: "You can't imagine the impact to have an outside, intelligent perspective on your own systems and processes. Billy's ability to rethink systems, automate tasks, and cut down on extra time and work is really incredible. We're thankful for his help in streamlining our processes.",
    type: 'featured',
    initials: 'SC',
    accentColor: 'from-cyan-500 to-cyan-600'
  },
  {
    id: 'anthony-oneal',
    name: 'Anthony Oneal',
    quote: "This has been a massive help to our team. We were struggling with the same repetitive tasks day in and day out. But since working with Billy and his team, we've been able to speed up our processes and finish more tasks and content in less time. They helped us cut down on extra work by automating and streamlining our workflows. I can't recommend this enough to anyone looking to save their time, optimize their business processes, and productivity so they can focus on what matters.",
    type: 'text',
    initials: 'AO',
    accentColor: 'from-cyan-400 to-cyan-500'
  },
  {
    id: 'vitaly-novok',
    name: 'Vitaly Novok',
    quote: "Billy has an incredible way of looking at a business and seeing exactly where systems can solve problems. He built automation that gave me back hours every week while teaching me the process. I genuinely feel more equipped to systematize my business moving forward.",
    type: 'text',
    initials: 'VN',
    accentColor: 'from-cyan-400 to-cyan-500'
  },
  {
    id: 'ashley-bullard',
    name: 'Ashley Bullard',
    quote: "He took the absolute chaos of my business and helped me build systems that actually work WITH me, not against me. I finally have automation I'll actually use, and the stress of managing everything myself is completely gone.",
    type: 'text',
    initials: 'AB',
    accentColor: 'from-cyan-400 to-cyan-500'
  },
  {
    id: 'nehemiah-davis',
    name: 'Nehemiah Davis',
    quote: "Yo, Billy completely transformed how we handle content. We were manually texting everyone about videos, tracking everything in our heads. Now? Everything runs through the system he built - nothing falls through the cracks, we're not dropping balls, and we can actually scale our content production. Game changer for real.",
    type: 'text',
    initials: 'ND',
    accentColor: 'from-cyan-400 to-cyan-500'
  },
];