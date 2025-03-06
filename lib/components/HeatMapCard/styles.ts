import { css, cva } from "@/styled-system/css";

export const card = css({
    padding: '15px',
});

export const heatMap = css({
    display: 'grid',
    gridTemplateRows: 'repeat(7, 10px)',
    gridAutoFlow: 'column',
    gap: '3px',
});

export const day = cva({
    base: {
        width: '10px',
        height: '10px',
        borderRadius: '2px',
        backgroundColor: 'primary',
        border: '1px solid token(colors.border)',
    },
});