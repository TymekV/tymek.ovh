import { css } from "@/styled-system/css";

export const photo = css({
    width: '100px',
    height: '100px',
    borderRadius: '999999px',
    border: '1px solid token(colors.border)',
    marginBottom: '10px',
});

export const card = css({
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3px',
});

export const socialsStyles = css({
    display: 'flex',
    gap: '10px',
    marginTop: '7px',
    alignItems: 'center',
});