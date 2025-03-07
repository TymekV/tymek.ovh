import { css } from "@/styled-system/css";

export const container = css({
    display: 'flex',
    gap: '10px',
});

export const labels = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'flex-end',
});

export const bars = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    flex: 1,
});

export const card = css({
    padding: '15px',
    width: '510px'
});