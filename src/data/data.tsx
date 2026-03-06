import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Sushrut Hajirnis',
  description:
    'Senior Site Reliability Engineer at Intuit. Building reliability into infrastructure that powers prosperity around the world.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Projects: 'projects',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi ! I'm Sushrut Hajirnis.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a California based <strong className="text-stone-100">Site Reliability Engineer</strong>, currently working
        at <strong className="text-stone-100">Intuit</strong> helping build reliability and confidence in the infrastructure at Intuit that Powers
        Prosperity Around the World
      </p>
    </>
  ),
  actions: [
    {
      href: 'resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `SRE with 8+ years designing and operating large-scale distributed systems at Intuit. I've built platforms serving 500+ microservices and millions of users, with deep focus on Kubernetes, chaos engineering, and GitOps. Born and raised in India, moved to the US in 2012 for my Masters'. Outside work I follow Tennis and Cricket — and try to get in a set or two when I can.`,
  aboutItems: [
    {label: 'Location', text: 'San Diego, CA', Icon: MapIcon},
    {label: 'Age', text: String(new Date().getFullYear() - 1989 - (new Date().getMonth() < 7 ? 1 : 0)), Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Reading, Tennis, Cricket', Icon: SparklesIcon},
    {label: 'Study', text: 'San Jose State University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Intuit, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Cloud & Infrastructure',
    skills: [
      {name: 'Kubernetes', level: 9},
      {name: 'AWS', level: 9},
      {name: 'Terraform', level: 7},
      {name: 'Docker / Helm', level: 7},
    ],
  },
  {
    name: 'Observability & Reliability',
    skills: [
      {name: 'Prometheus / Grafana', level: 9},
      {name: 'SLO / SLI Frameworks', level: 8},
      {name: 'PagerDuty', level: 8},
      {name: 'OpenTelemetry', level: 7},
    ],
  },
  {
    name: 'Chaos Engineering',
    skills: [
      {name: 'GameDay Orchestration', level: 9},
      {name: 'Litmus Chaos', level: 8},
      {name: 'Failure Injection', level: 8},
    ],
  },
  {
    name: 'DevOps & Automation',
    skills: [
      {name: 'GitOps / ArgoCD', level: 8},
      {name: 'CI/CD Pipelines', level: 8},
      {name: 'GitHub Actions', level: 8},
    ],
  },
  {
    name: 'Programming',
    skills: [
      {name: 'Python', level: 8},
      {name: 'Golang', level: 7},
      {name: 'Bash', level: 7},
      {name: 'Java', level: 6},
    ],
  },
  {
    name: 'Spoken Languages',
    skills: [
      {name: 'Marathi', level: 10},
      {name: 'Hindi', level: 9},
      {name: 'English', level: 8},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const experience: TimelineItem[] = [
  {
    date: 'August 2019 – Present',
    location: 'Intuit Inc · San Diego, CA',
    title: 'Senior Software Engineer, Site Reliability Engineering',
    content: (
      <ul className="list-disc space-y-1.5 pl-4 marker:text-violet-500">
        <li>Architected Kubernetes-based failover platform serving 100+ microservices, reducing developer friction through custom APIs that abstract complex k8s internals</li>
        <li>Built Python-based GameDay orchestration framework testing resilience of 150+ applications with automated failure injection and real-time observability dashboards</li>
        <li>Maintained 99.95% uptime SLA through 24/7 on-call rotation, incident response, and root cause analysis</li>
      </ul>
    ),
  },
  {
    date: 'August 2017 – August 2019',
    location: 'Intuit Inc · San Diego, CA',
    title: 'Software Engineer in Quality, Platform Reliability',
    content: (
      <ul className="list-disc space-y-1.5 pl-4 marker:text-violet-500">
        <li>Built end-to-end API test automation framework using Karate, achieving 85% test coverage and cutting regression time by 60%</li>
        <li>Conducted reliability testing for the login widget across TurboTax products, ensuring seamless SSO for 50M+ users</li>
      </ul>
    ),
  },
  {
    date: 'October 2015 – July 2017',
    location: 'Intuit Inc · San Diego, CA',
    title: 'Software Engineer in Quality, Identity Platform',
    content: (
      <ul className="list-disc space-y-1.5 pl-4 marker:text-violet-500">
        <li>Core member of enterprise-wide authentication and SSO infrastructure supporting all Intuit product offerings</li>
        <li>Drove failure-mode test scenarios with development teams, improving resilience and reducing production incidents</li>
      </ul>
    ),
  },
  {
    date: 'June 2015 – October 2015',
    location: 'Qualcomm Inc · San Diego, CA',
    title: 'Engineer I',
    content: <p>Worked on the RMS system linking network service providers and SIM card registration.</p>,
  },
  {
    date: 'February 2014 – December 2014',
    location: 'PTC (Parametric Technology Corporation)',
    title: 'Software Engineer Intern',
    content: <p>Built Python scripts to automate installation and local testing of the Windchill product suite.</p>,
  },
];

export const education: TimelineItem[] = [
  {
    date: 'December 2014',
    location: 'San Jose State University · San Jose, CA',
    title: 'Master of Science, Software Engineering',
    content: <p>Specialization in Enterprise Software Technologies.</p>,
  },
  {
    date: 'August 2011',
    location: 'University of Mumbai · Mumbai, India',
    title: 'Bachelor of Engineering, Computer Engineering',
    content: <p>Foundations in algorithms, computer architecture, and software systems.</p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Open to connecting, collaborating, or chatting about reliability engineering. Resume available on request.',
  items: [
    {
      type: ContactType.Github,
      text: 'sushruthajirnis',
      href: 'https://github.com/sushruthajirnis',
    },
    {
      type: ContactType.LinkedIn,
      text: 'sushruthajirnis',
      href: 'https://www.linkedin.com/in/sushruthajirnis/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/sushruthajirnis'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sushruthajirnis/'},
];
