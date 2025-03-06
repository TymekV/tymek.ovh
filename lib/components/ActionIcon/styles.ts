import { cva } from "@/styled-system/css";

export const iconStyles = cva({
    base: {
        borderRadius: '8px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-color .3s ease, color .3s ease',
        '&:hover': {
            backgroundColor: 'tile.1',
            color: 'text.1'
        }
    },
    variants: {
        size: {
            sm: {
                width: '24px',
                height: '24px',
            },
            md: {
                width: '32px',
                height: '32px',
            },
        }
    }
});