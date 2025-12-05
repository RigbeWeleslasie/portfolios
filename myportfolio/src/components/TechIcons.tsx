import { JSX } from "react";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiDocusaurus,
  SiMarkdown,
  SiHtml5,
  SiCss3,
  SiChartdotjs,
  SiImdb,
} from "react-icons/si";

export const techIcons: Record<string, JSX.Element> = {
  React: <SiReact size={24} />,
  "React.js": <SiReact size={24} />,
  TypeScript: <SiTypescript size={24} />,
  "Node.js": <SiNodedotjs size={24} />,
  Express: <SiExpress size={24} />,
  Postgres: <SiPostgresql size={24} />,
  PostgreSQL: <SiPostgresql size={24} />,
  "Tailwind CSS": <SiTailwindcss size={24} />,
  "Next.js": <SiNextdotjs size={24} />,
  "Framer Motion": <SiFramer size={24} />,
  Docusaurus: <SiDocusaurus size={24} />,
  Markdown: <SiMarkdown size={24} />,
  HTML: <SiHtml5 size={24} />,
  CSS: <SiCss3 size={24} />,
  "Chart.js": <SiChartdotjs size={24} />,
  "TMDb API": <SiImdb size={24} />,
  localStorage: <span className="text-lg font-bold">LS</span>, // No icon available
};
