import { Icon } from '@tabler/icons-react';
import { css } from '@/styled-system/css';
import { Subtitle } from '../Subtitle';

export type LabelProps = {
    icon: Icon;
    label?: string;
}

export default function Label({ icon: Icon, label }: LabelProps) {
    return (
        <div className={container}>
            <Icon size={16} />
            {label && <Subtitle size="sm" weight={600}>{label}</Subtitle>}
        </div>
    )
}

const container = css({
    display: 'flex',
    gap: '6px',
    alignItems: 'center',
    color: 'text.1',
});