import { css } from '@/styled-system/css';

export const hero = css({
    height: '100vh',
    backgroundImage: 'radial-gradient(#ffffff10 1px, transparent 0)',
    // backgroundSize: '40px 40px',
    // position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
});

export const container = css({
    minW: '800px',
    margin: '20px',
});