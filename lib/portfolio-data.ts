// Edit this file to personalize your portfolio. Replace every [bracketed] placeholder.

export const profile = {
  name: '[Your Name]',
  initials: 'YN',
  role: 'AI & Software Development Student',
  intro:
    'I am a B.Tech Computer Science student specializing in Artificial Intelligence. I enjoy turning ideas into working software and exploring how machine learning can solve everyday problems.',
  location: '[City, Country]',
  email: 'your.email@example.com',
  resumeUrl: '#',
  availability: 'Open to internship opportunities',
}

export const socials = {
  linkedin: 'https://www.linkedin.com/in/your-profile',
  github: 'https://github.com/your-username',
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export const about = {
  paragraphs: [
    'I am currently pursuing my B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence. My interests sit at the intersection of software engineering and intelligent systems.',
    '[Add a few sentences about what motivates you, the kind of problems you like to work on, and what you are currently learning.]',
  ],
  highlights: [
    { label: 'Focus', value: 'AI & Software' },
    { label: 'Degree', value: 'B.Tech CSE (AI)' },
    { label: 'Status', value: 'Student' },
    { label: 'Looking for', value: 'Internships' },
  ],
}

export type Skill = {
  name: string
  category: 'Programming' | 'Web' | 'AI'
  description: string
}

export const skills: Skill[] = [
  { name: 'C', category: 'Programming', description: 'Fundamentals, pointers, and problem solving' },
  { name: 'Java', category: 'Programming', description: 'Object-oriented programming and DSA' },
  { name: 'Python', category: 'Programming', description: 'Scripting, data handling, and ML workflows' },
  { name: 'HTML', category: 'Web', description: 'Semantic, accessible page structure' },
  { name: 'CSS', category: 'Web', description: 'Responsive layouts and modern styling' },
  { name: 'JavaScript', category: 'Web', description: 'Interactive, dynamic web interfaces' },
  { name: 'AI / ML', category: 'AI', description: 'Core concepts, models, and experimentation' },
]

export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: '[Project Title One]',
    description:
      '[Short description of an AI/ML project — e.g. the problem it addresses, your approach, and what you learned.]',
    image: '/projects/vision.png',
    tags: ['Python', 'AI/ML'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: '[Project Title Two]',
    description:
      '[Short description of a software project — e.g. a chatbot, tool, or app you built and its key features.]',
    image: '/projects/chatbot.png',
    tags: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: '[Project Title Three]',
    description:
      '[Short description of another project — e.g. a data analysis or Java application and the outcome.]',
    image: '/projects/dashboard.png',
    tags: ['Java', 'Python'],
    githubUrl: '#',
  },
]

export const education = {
  degree: 'B.Tech in Computer Science and Engineering',
  specialization: 'Specialization in Artificial Intelligence',
  institution: '[University / College Name]',
  duration: '[Start Year] – [Expected Graduation Year]',
  location: '[City, Country]',
  grade: '[CGPA: X.XX / 10 — optional]',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Machine Learning',
    'Artificial Intelligence',
    'Database Management Systems',
    'Operating Systems',
  ],
}
