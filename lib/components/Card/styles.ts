import { sva } from "@/styled-system/css";

export const card = sva({
    slots: ['card', 'border', 'blur'],
    base: {
        card: {
            borderRadius: '15px',
            overflow: 'hidden',
            position: 'relative',
            transition: 'transform .5s ease',
            display: 'flex',
            flexDir: 'column',
            _hover: {
                transform: 'scale(1.01)',
            }
        },
        border: {
            position: 'absolute',
            left: '0px',
            right: '0px',
            top: '0px',
            bottom: '0px',
            borderRadius: '15px',
            border: '1px solid token(colors.border)',
            pointerEvents: 'none',
        },
        blur: {
            width: '200px',
            height: '150px',
            backgroundColor: '#ffffff40',
            position: 'absolute',
            filter: 'blur(50px) brightness(.3)',
            transition: 'opacity 1s ease',
            zIndex: -1,
        }
    }
});