import { IconBrandGit, IconBrandGithub, IconBrandGitlab } from "@tabler/icons-react";
import AboutMeShort from "../AboutMeShort";
import { container, hero } from "./styles";
import HeatMapCard from "../HeatMapCard";
import Tehnology, { TehnologyProps } from "../Technlogy";
import Flex from "../Flex";

const TECHNOLOGIES: TehnologyProps[] = [
    {
        name: 'React',
        image: '/img/react.png',
    },
    {
        name: 'Next.js',
        image: '/img/next.png',
    },
    {
        name: 'TypeScript',
        image: '/img/typescript.png',
    },
    {
        name: 'Node.js',
        image: '/img/node.svg',
    },
    {
        name: 'Docker',
        image: '/img/docker.webp',
    },
    {
        name: 'Git',
        image: '/img/git.png',
    }
]

export default function Hero() {
    return (
        <div className={hero}>
            <div className={container}>
                <Flex>
                    {TECHNOLOGIES.map((technology) => (
                        <Tehnology key={technology.name} {...technology} />
                    ))}
                </Flex>
                <AboutMeShort
                    name="Tymek Vonau"
                    description="I'm a full stack developer, currently working with React, Next.js, and TypeScript."
                    profilePicture="/profile.jpg"
                    socials={[
                        {
                            name: 'GitHub',
                            icon: IconBrandGithub,
                            link: 'https://github.com/TymekV',
                        },
                        {
                            name: 'Forgejo',
                            icon: IconBrandGit,
                            link: 'https://git.tymek.ovh/Tymek',
                        },
                        {
                            name: 'GitLab',
                            icon: IconBrandGitlab,
                            link: 'https://gitlab.com/TymekV',
                        },
                    ]}
                />
                <HeatMapCard />
            </div>
        </div>
    );
}