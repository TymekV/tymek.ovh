import { Icon } from "@tabler/icons-react";
import { Card } from "../Card";
import { Token } from "@/styled-system/tokens";
import ProjectHeader from "./ProjectHeader";
import { projectCard } from "./styles";

export type ProjectTechnology = {
    icon: Icon;
    name: string;
}

type ProjectCardVariants = Exclude<Parameters<typeof projectCard>[0], undefined>;

export interface ProjectProps extends ProjectCardVariants {
    name: string;
    image: string;
    icon: Icon;
    color: Token
    description: string;
    link: string;
    repo: 'github' | 'forgejo' | 'other';
    githubRepo?: string;
    technologies: ProjectTechnology[];
}

export default function Project({ name, image, icon, color, description, link, repo, githubRepo, technologies, variant = 'horizontal', imagePosition }: ProjectProps) {
    const classes = projectCard({ variant, imagePosition });

    return (
        <a href={link} target="_blank" rel="noreferrer">
            <Card className={classes.card}>
                <ProjectHeader name={name} icon={icon} color={color} description={description} />
                <img src={image} alt={name} className={classes.image} />
                <div className={classes.technologies}>
                    {technologies.map(({ icon: Icon, name }, i) => (
                        <Icon size={16} />
                    ))}
                </div>
            </Card>
        </a>
    )
}