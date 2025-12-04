// src/data/skills.ts

// We'll use a type to define the structure of a skill
export interface Skill {
  name: string;
  icon: string; // This will be the name of the icon component from react-icons
}

// Group your skills by category for better organization
export const skillsData = {
  frontend: [
    { name: 'Next.js', icon: 'SiNextdotjs' },
    { name: 'React', icon: 'FaReact' },
    { name: 'TypeScript', icon: 'SiTypescript' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
  ],
  backend: [
    { name: 'Java Spring Boot', icon: 'SiSpring' },
    { name: 'Django', icon: 'SiDjango' },
  ],
  mobile: [
    { name: 'Android', icon: 'SiAndroid' },
    { name: 'Kotlin', icon: 'SiKotlin' },
  ],
};