import { IconBrandGit, IconBrandGithub, IconBrandGitlab, IconBrandNodejs, IconBrandReact, IconBrandReactNative, IconBrandTypescript, IconBrandVscode, IconFlame, IconLeaf } from "@tabler/icons-react";
import AboutMeShort from "../AboutMeShort";
import { container, hero } from "./styles";
import HeatMapCard from "../HeatMapCard";
import Tehnology, { TehnologyProps } from "../Technlogy";
import Flex from "../Flex";
import Project from "../Project";

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
                <Flex>
                    <Project
                        name="Agin Requests"
                        image="/img/agin-requests.png"
                        color="colors.primary"
                        description="Effortlessly send HTTP requests, listen to Server-Sent Events (SSE), connect to WebSocket (WS) endpoints, and communicate with Socket.IO servers — all from the comfort of your editor."
                        icon={IconFlame}
                        link="https://requests.agin.rocks"
                        repo="github"
                        githubRepo="TymekV/agin-requests"
                        imagePosition="bottom"
                        technologies={[
                            {
                                icon: IconBrandTypescript,
                                name: 'TypeScript',
                            },
                            {
                                icon: IconBrandReact,
                                name: 'React',
                            },
                            {
                                icon: IconBrandVscode,
                                name: 'VSCode API',
                            }
                        ]}
                    />
                    <Project
                        name="Agin Energy"
                        image="/img/energy.png"
                        color="colors.green.6"
                        description="Agin Energy smart sockets track energy use, helping users save power and money with data-driven tips."
                        icon={IconLeaf}
                        link="https://energy.agin.rocks"
                        repo="github"
                        githubRepo="TymekV/agin-energy"
                        technologies={[
                            {
                                icon: IconBrandTypescript,
                                name: 'TypeScript',
                            },
                            {
                                icon: IconBrandReactNative,
                                name: 'React Native (Expo)',
                            },
                            {
                                icon: IconBrandNodejs,
                                name: 'Node.js',
                            }
                        ]}
                    />
                </Flex>
            </div>
        </div>
    );
}