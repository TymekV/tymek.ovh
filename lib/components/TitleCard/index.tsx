import { Icon } from "@tabler/icons-react"
import { Title } from "../Title";
import { Card } from "../Card";
import { card, titleContainer } from "./styles";
import { Subtitle } from "../Subtitle";

export type TitleCardProps = {
    icon: Icon;
    title: string;
    subtitle?: string;
}

export default function TitleCard({ icon: Icon, title, subtitle }: TitleCardProps) {
    return (
        <Card className={card}>
            <Icon size={24} />
            <div className={titleContainer}>
                <Title size="sm">{title}</Title>
                {subtitle && <Subtitle size="sm">{subtitle}</Subtitle>}
            </div>
        </Card>
    );
}