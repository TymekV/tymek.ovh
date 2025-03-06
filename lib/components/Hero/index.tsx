import { IconBrandGithub } from "@tabler/icons-react";
import AboutMeShort from "../AboutMeShort";
import { container, hero } from "./styles";

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
                            link: 'https://github.com/TymekV'
                        },
                    ]}
                />
            </div>
        </div>
    );
}