import { Icon, IconStar } from "@tabler/icons-react";
import { Card } from "../Card";
import { Token } from "@/styled-system/tokens";
import ProjectHeader from "./ProjectHeader";
import { projectCard } from "./styles";
import Metric from "../Metric";

export type ProjectTechnology = {
    icon: Icon;
    name: string;
}

type ProjectCardVariants = Exclude<Parameters<typeof projectCard>[0], undefined>;

export interface ProjectProps extends ProjectCardVariants {
    name: string;
    image?: string;
    icon: Icon;
    color: Token
    description: string;
    link?: string;
    repo: 'github' | 'forgejo' | 'other';
    githubRepo?: string;
    technologies: ProjectTechnology[];
}

export const revalidate = 0;

export default async function Project({ name, image, icon, color, description, link, repo, githubRepo, technologies, variant = 'horizontal', imagePosition, withShading }: ProjectProps) {
    const classes = projectCard({ variant, imagePosition, withShading });

    let stargazersCount = -1;
    if (repo === 'github' && githubRepo) {
        console.log('cock', githubRepo)

        const repoDetails = await fetch(`https://api.github.com/repos/${githubRepo}`, {
            headers: {
                'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
            },
            cache: 'force-cache',
            next: {
                revalidate: 60,
            }
        });

        const repoData = await repoDetails.json();

        console.log(repoData);
        stargazersCount = repoData.stargazers_count;
    }

    return (
        <a href={link} target="_blank" rel="noreferrer">
            <Card className={classes.card}>
                <ProjectHeader className={classes.content} name={name} icon={icon} color={color} description={description} descriptionClassName={classes.description} rightSection={<>
                    {stargazersCount !== -1 && <Metric icon={IconStar} value={stargazersCount.toString()} />}
                </>} />
                {image && <img src={image} alt={name} className={classes.image} />}
                <div className={classes.technologies}>
                    {technologies.map(({ icon: Icon }, i) => (
                        <Icon size={16} key={i} />
                    ))}
                </div>
            </Card>
        </a>
    )
}