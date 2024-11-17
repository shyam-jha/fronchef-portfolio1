import TracingBeam from "@/components/aceternity/TracingBeam";
import ScrollReveal from "@/components/custom/ScrollReveal";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  StarsCard,
} from "./ui/card";
import SectionWrapper from "./custom/SectionWrapper";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Intern",
    company: "Vice Chancellor Intership Scheme",
    period: "June 2022 - October 2023",
    description:
      "In my role i voluntered in the internal work of CIE (Central Institute of Eduction) office.",
    skills: [
      "Web Design",
      "Agile Methodologies",
      "GitLab",
      "Figma",
      "ASP.NET",
      "MVC",
      "Bootstrap",
      "SQL",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "AJAX",
    ],
  },
  {
    title: "StartUp Founder",
    company: "Fronchef",
    period: "Starter on November 2024",
    description:
      "I directed a dynamic team of 3, crafting captivating web and mobile apps along with a compelling landing site, all with a focus on user engagement. Spearheading frontend development, I upheld industry best practices to ensure stellar user experience and performance. Leveraging a no-code solution, we swiftly deployed the company's landing site, maintaining a competitive edge in the industry. I facilitated communication with upper management, securing operational expenditures to boost team productivity. Thorough code reviews were conducted to uphold top-tier code quality and prevent tech debt.",
    skills: [
      "Web Design",
      "Agile Methodologies",
      "Code Review",
      "Unit Testing",
      "Figma",
      "Jira",
      "Webflow",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "SQL",
      "Git",
    ],
  },
  {
    title: "Director Of Research and Developmnet",
    company: "Enactus DDUC",
    period: "some date",
    description:
      "Worked in research depetarment as head",
    skills: [
      "Angular",
      "ASP .NET",
      "Playwright",
      "Microfrontend",
      "Microservices",
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper>
      <TracingBeam>
        <h2 className="mb-40 text-5xl font-bold tracking-tight text-center text-primary">
          Experience
        </h2>

        <div className="flex flex-col" id="experience">
          {experiences.map((experience, index) => (
            <ExperienceComponent experience={experience} key={index} />
          ))}
        </div>
      </TracingBeam>
    </SectionWrapper>
  );
}

function ExperienceComponent({ experience }: { experience: Experience }) {
  return (
    <StarsCard>
      <div className="flex flex-col md:grid md:grid-cols-5 md:gap-4">
        <CardHeader className={cn("pb-0 md:col-span-2 md:pr-0")}>
          <ScrollReveal x={-20} duration="1000ms" threshold={0.75}>
            <CardTitle className={cn("text-xl")}>{experience.title}</CardTitle>
            <CardDescription>
              {experience.company}
              <br />
              {experience.period}
            </CardDescription>
          </ScrollReveal>
        </CardHeader>
        <CardContent className={cn("pt-6 pb-0 md:pl-0 md:col-span-3")}>
          <ScrollReveal y={-20} duration="1000ms" threshold={0.75}>
            <p>{experience.description}</p>
          </ScrollReveal>
        </CardContent>
      </div>
      <CardFooter className={cn("pt-6 flex gap-2 flex-wrap")}>
        {experience.skills.map((skill, index) => (
          <ScrollReveal x={20} duration="1000ms" threshold={0.75} key={index}>
            <Badge>{skill}</Badge>
          </ScrollReveal>
        ))}
      </CardFooter>
    </StarsCard>
  );
}
