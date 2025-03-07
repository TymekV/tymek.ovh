import { Icon, IconStar } from "@tabler/icons-react";
import { Card } from "../Card";
import { Token } from "@/styled-system/tokens";
import ProjectHeader from "./ProjectHeader";
import { projectCard } from "./styles";
import { githubRest } from "@lib/helpers";
import Metric from "../Metric";

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

export default async function Project({ name, image, icon, color, description, link, repo, githubRepo, technologies, variant = 'horizontal', imagePosition, withShading }: ProjectProps) {
    const classes = projectCard({ variant, imagePosition, withShading });

    let stargazersCount = -1;
    if (repo === 'github' && githubRepo) {
        console.log('cock', githubRepo)
        const repoDetails = await githubRest.get(`/repos/${githubRepo}`);
        const repoData = repoDetails.data;

        console.log(repoData);
        stargazersCount = repoData.stargazers_count;
    }

    return (
        <a href={link} target="_blank" rel="noreferrer">
            <Card className={classes.card}>
                <ProjectHeader name={name} icon={icon} color={color} description={description} rightSection={<>
                    {stargazersCount !== -1 && <Metric icon={IconStar} value={stargazersCount.toString()} />}
                </>} />
                <img src={image} alt={name} className={classes.image} />
                <div className={classes.technologies}>
                    {technologies.map(({ icon: Icon }, i) => (
                        <Icon size={16} key={i} />
                    ))}
                </div>
            </Card>
        </a>
    )
}