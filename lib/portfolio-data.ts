// Edit this file to personalize your portfolio.
// Optional fields (email, resumeUrl, project links) are hidden on the site while left empty.

export const profile = {
  name: 'Siddharth Kushwah',
  initials: 'SK',
  role: 'AI & Software Development Student',
  intro:
    'I am a B.Tech Computer Science and Engineering student at Parul University, specializing in Artificial Intelligence. I enjoy turning ideas into working software and exploring how machine learning can solve everyday problems.',
  location: 'Vadodara, Gujarat, India',
  email: '',
  resumeUrl: '',
  availability: 'Seeking internship opportunities',
}

// Add your full profile URLs here, e.g. 'https://www.linkedin.com/in/...'.
// Links stay hidden on the site until a URL is provided.
export const socials = {
  linkedin: '',
  github: '',
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
    'I am Siddharth Kushwah, currently pursuing my B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence at Parul University in Vadodara, Gujarat.',
    'My interests sit at the intersection of software engineering and intelligent systems. I am building a strong foundation in programming with C, Java, and Python, learning web development with HTML, CSS, and JavaScript, and exploring the core ideas behind AI and machine learning.',
    'I am looking for an internship where I can learn from experienced engineers, contribute to real projects, and keep growing as a developer.',
  ],
  highlights: [
    { label: 'Focus', value: 'AI & Software' },
    { label: 'Degree', value: 'B.Tech CSE (AI)' },
    { label: 'University', value: 'Parul University' },
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
  { name: 'Java', category: 'Programming', description: 'Object-oriented programming concepts' },
  { name: 'Python', category: 'Programming', description: 'Scripting, data handling, and ML basics' },
  { name: 'HTML', category: 'Web', description: 'Semantic, accessible page structure' },
  { name: 'CSS', category: 'Web', description: 'Responsive layouts and modern styling' },
  { name: 'JavaScript', category: 'Web', description: 'Interactive, dynamic web interfaces' },
  { name: 'AI / ML', category: 'AI', description: 'Core concepts, models, and experimentation' },
]

export type Project = {
  title: string
  label: 'Sample Project' | 'Learning Project'
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Image Classification with Python',
    label: 'Learning Project',
    description:
      'A learning project concept for exploring how machine learning models recognize objects in images, from preparing a dataset to training and evaluating a simple classifier.',
    image: '/projects/vision.png',
    tags: ['Python', 'AI/ML'],
  },
  {
    title: 'Web-Based Chatbot Interface',
    label: 'Sample Project',
    description:
      'A sample project idea for a responsive chat interface built with HTML, CSS, and JavaScript, designed as a front end for experimenting with conversational AI.',
    image: '/projects/chatbot.png',
    tags: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Student Data Dashboard',
    label: 'Sample Project',
    description:
      'A sample project idea for organizing and visualizing simple datasets, combining Java fundamentals with Python-based data analysis.',
    image: '/projects/dashboard.png',
    tags: ['Java', 'Python'],
  },
]

export const education = {
  degree: 'B.Tech in Computer Science and Engineering',
  specialization: 'Specialization in Artificial Intelligence',
  institution: 'Parul University',
  status: 'Currently pursuing',
  location: 'Vadodara, Gujarat, India',
  interests: [
    'Artificial Intelligence',
    'Machine Learning',
    'Software Development',
    'Web Development',
    'Programming Fundamentals',
    'Problem Solving',
  ],
}
