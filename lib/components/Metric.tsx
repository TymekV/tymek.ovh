import { css } from "@/styled-system/css";
import { Icon } from "@tabler/icons-react"
import { Subtitle } from "./Subtitle";

export type MetricProps = {
    icon: Icon;
    value: string;
}

export default function Metric({ icon: Icon, value }: MetricProps) {
    return (
        <div className={metric}>
            <Icon size={14} />
            <div>{value}</div>
        </div>
    )
}

const metric = css({
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
    color: 'text.1',
    fontSize: '12px',
    fontWeight: 600,
});