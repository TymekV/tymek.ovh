'use client';
import { Icon } from '@tabler/icons-react';
import { bars, card, container, labels } from './styles';
import Label from './Label';
import { Card } from '../Card';
import { Token } from '@/styled-system/tokens';
import Bar from './Bar';

export type ChartLine = {
    icon: Icon;
    label?: string;
    value: number;
    color: Token;
}

export type ChartProps = {
    data: ChartLine[];
}

export default function Chart({ data }: ChartProps) {
    return (
        <Card className={card}>
            <div className={container}>
                <div className={labels}>
                    {data.map((line, i) => <Label key={i} {...line} />)}
                </div>
                <div className={bars}>
                    {data.map((line, i) => <Bar key={i} {...line} />)}
                </div>
            </div>
        </Card>
    )
}