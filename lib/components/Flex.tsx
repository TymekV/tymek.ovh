import { css } from "@/styled-system/css";

export default function Flex({ children }: { children?: React.ReactNode }) {
    return (
        <div className={css({ display: 'flex', alignItems: 'stretch', gap: '10px' })}>
            {children}
        </div>
    )
}