'use client';
import { IconBrandCpp, IconBrandCSharp, IconBrandPython, IconBrandRust, IconBrandTypescript } from '@tabler/icons-react';
import Chart from './Chart';

export default function ChartSection() {
    return (
        <Chart
            data={[
                {
                    icon: IconBrandTypescript,
                    label: 'TypeScript',
                    value: 100,
                    color: 'colors.primary',
                },
                {
                    icon: IconBrandPython,
                    label: 'Python',
                    value: 75,
                    color: 'colors.primary',
                },
                {
                    icon: IconBrandCSharp,
                    value: 75,
                    color: 'colors.languages.csharp',
                },
                {
                    icon: IconBrandRust,
                    label: 'Rust',
                    value: 35,
                    color: 'colors.languages.rust',
                },
                {
                    icon: IconBrandCpp,
                    value: 20,
                    color: 'colors.primary',
                }
            ]}
        />
    )
}