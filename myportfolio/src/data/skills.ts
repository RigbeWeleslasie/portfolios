
export interface Skill {
  name: string;
  icon: string; 
}

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