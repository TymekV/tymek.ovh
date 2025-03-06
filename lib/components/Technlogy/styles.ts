import { css } from "@/styled-system/css";

export const card = css({
    width: '120px',
    height: '120px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    textAlign: 'center',
});

export const imageStyles = css({
    objectFit: 'contain',
    width: '45px',
    height: '45px',
});