import Image from "next/image";
import { Card } from "../Card";
import { card, imageStyles } from "./styles";
import { Title } from "../Title";

export type TehnologyProps = {
    image: string;
    name: string;
}

export default function Tehnology({ image, name }: TehnologyProps) {
    return (
        <Card className={card}>
            <Image src={image} alt={name} width={45} height={45} className={imageStyles} />
            <Title size="xs">{name}</Title>
        </Card>
    )
}