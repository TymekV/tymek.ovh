import { IconBrandCpp, IconBrandGit, IconBrandGithub, IconBrandGitlab, IconBrandKotlin, IconBrandMongodb, IconBrandNextjs, IconBrandNodejs, IconBrandReact, IconBrandReactNative, IconBrandRust, IconBrandSwift, IconBrandTypescript, IconBrandVscode, IconCode, IconFlame, IconLeaf, IconMusic, IconTruckDelivery } from "@tabler/icons-react";
import AboutMeShort from "../AboutMeShort";
import { container, hero } from "./styles";
import HeatMapCard from "../HeatMapCard";
import Tehnology, { TehnologyProps } from "../Technlogy";
import Flex from "../Flex";
import Project from "../Project";
import Chart from "../Chart";
import ChartSection from "../ChartSection";
import TitleCard from "../TitleCard";

const TECHNOLOGIES: TehnologyProps[] = [
    {
        name: 'React',
        image: '/img/react.png',
    },
    {
        name: 'Expo',
        image: '/img/expo.png',
    },
    {
        name: 'Next.js',
        image: '/img/next.png',
    },
    {
        name: 'MongoDB',
        image: '/img/mongodb.svg',
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
                <AboutMeShort
                    name="Tymek Vonau"
                    description="I'm a full stack developer, currently working with React, Next.js, TypeScript and Rust."
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
                    {TECHNOLOGIES.map((technology) => (
                        <Tehnology key={technology.name} {...technology} />
                    ))}
                </Flex>
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
                                icon: IconBrandNodejs,
                                name: 'Node.js',
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
                        githubRepo="TymekV/AginEnergy"
                        variant="square"
                        imagePosition="bottomSmall"
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
                            },
                            {
                                icon: IconBrandMongodb,
                                name: 'MongoDB',
                            }
                        ]}
                    />
                </Flex>
                <Flex>
                    <Project
                        name="Elfinmag"
                        color="colors.primary"
                        description="Warehouse management app for electronics production companies, streamlining inventory management and optimizing inventory."
                        icon={IconTruckDelivery}
                        repo="other"
                        variant="square"
                        imagePosition="bottomSmall"
                        technologies={[
                            {
                                icon: IconBrandNextjs,
                                name: 'Next.js',
                            },
                            {
                                icon: IconBrandReact,
                                name: 'React',
                            },
                            {
                                icon: IconBrandNodejs,
                                name: 'Node.js',
                            },
                            {
                                icon: IconBrandMongodb,
                                name: 'MongoDB',
                            },
                            {
                                icon: IconBrandCpp,
                                name: 'C++',
                            },
                        ]}
                    />
                    <Project
                        name="Agin Music"
                        image="/img/agin-music.png"
                        color="colors.text.0"
                        description="Agin Music is an open source client for OpenSubsonic-compatible servers written in React Native. It has been tested to work properly with Navidrome."
                        icon={IconMusic}
                        link="https://music.agin.rocks"
                        repo="github"
                        githubRepo="TymekV/AginMusicMobile"
                        imagePosition="right"
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
                                icon: IconBrandSwift,
                                name: 'Swift',
                            },
                            {
                                icon: IconBrandKotlin,
                                name: 'Kotlin',
                            }
                        ]}
                    />
                </Flex>
                <Flex>
                    <ChartSection />
                    <TitleCard
                        title="My Skills"
                        subtitle="I'm experienced with the following programming languages"
                        icon={IconCode}
                    />
                </Flex>
            </div>
        </div>
    );
}