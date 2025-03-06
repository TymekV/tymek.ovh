import { Icon } from "@tabler/icons-react";
import { Card } from "../Card";
import Image from "next/image";
import { card, photo, socialsStyles } from "./styles";
import { Title } from "../Title";
import { Subtitle } from "../Subtitle";
import ActionIcon from "../ActionIcon";

export type AboutMeShortProps = {
    profilePicture: string;
    name: string;
    description: string;
    socials: {
        name: string;
        icon: Icon;
        link: string;
    }[];
}

export default function AboutMeShort({ profilePicture, name, description, socials }: AboutMeShortProps) {
    return (
        <Card className={card}>
            <Image
                src={profilePicture}
                alt="Profile picture"
                width={100}
                height={100}
                className={photo}
            />
            <Title size="md">{name}</Title>
            <Subtitle size="sm">{description}</Subtitle>
            <div className={socialsStyles}>
                {socials.map((social) => (
                    <a key={social.name} href={social.link} target="_blank" rel="noreferrer">
                        <ActionIcon icon={social.icon} size="md" />
                    </a>
                ))}
            </div>
        </Card>
    )
}