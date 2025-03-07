import { css } from '@/styled-system/css';
import { token, Token } from '@/styled-system/tokens';
import { Icon } from '@tabler/icons-react';
import { Title } from '@lib/components/Title';
import { Subtitle } from '@lib/components/Subtitle';

export type ProjectHeaderProps = {
    className?: string;
    descriptionClassName?: string;
    name: string;
    icon: Icon;
    color: Token;
    description?: string;
    rightSection?: React.ReactNode;
}

export default function ProjectHeader({ className, name, icon: Icon, color, description, descriptionClassName, rightSection }: ProjectHeaderProps) {
    return (
        <div className={`${container} ${className}`}>
            <div className={header}>
                <div className={headerLeft}>
                    <div className={iconContainer}>
                        <Icon size={20} color={token(color)} />
                    </div>
                    <Title size='sm'>{name}</Title>
                </div>
                <div className={right}>
                    {rightSection}
                </div>
            </div>
            <div className={descriptionClassName}>
                <Subtitle size='sm'>{description}</Subtitle>
            </div>
        </div>
    )
}

const container = css({
    position: 'absolute',
    left: '15px',
    top: '15px',
    right: '15px',
    zIndex: 4,
});

const header = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
});

const headerLeft = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
});

const iconContainer = css({
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    border: '1px solid token(colors.border)',

    background: 'radial-gradient(circle, #ffffff10, #00000050)',
    backgroundPosition: '-20px 20px',
    backgroundSize: '60px 60px',
    backgroundRepeat: 'no-repeat'
});

const right = css({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    marginRight: '8px'
});