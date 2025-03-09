import Hero from '@lib/components/Hero';

export const revalidate = 60;
export const dynamic = "force-dynamic";

export default function Page() {
    return (
        <div>
            <Hero />
        </div>
    )
}