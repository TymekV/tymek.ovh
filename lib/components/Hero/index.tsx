import { IconBrandGit, IconBrandGithub, IconBrandGitlab } from "@tabler/icons-react";
import AboutMeShort from "../AboutMeShort";
import { container, hero } from "./styles";
import HeatMapCard from "../HeatMapCard";

export default function Hero() {

    return (
        <div className={hero}>
            <div className={container}>
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