import { Icon } from "@tabler/icons-react";
import { HTMLAttributes } from "react";
import { iconStyles } from "./styles";

type IconVariants = Exclude<Parameters<typeof iconStyles>[0], undefined>;

export interface ActionIconProps extends HTMLAttributes<HTMLDivElement>, IconVariants {
    icon: Icon;
}

export default function ActionIcon({ icon: Icon, size = 'sm', ...props }: ActionIconProps) {
    return (
        <div className={iconStyles({ size })} {...props}>
            <Icon size={size === 'sm' ? 16 : 20} />
        </div>
    )
}