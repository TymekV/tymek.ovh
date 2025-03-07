import { cva, sva } from "@/styled-system/css";

export const projectCard = sva({
    slots: ['card', 'image', 'technologies'],
    base: {
        card: {
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
        },
        image: {
            zIndex: 1,
            maskImage: 'linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 90%)'
        },
        technologies: {
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            position: 'absolute',
            left: '15px',
            bottom: '15px',
            color: 'text.3'
        }
    },
    variants: {
        variant: {
            horizontal: {
                card: {
                    width: '500px',
                    height: '200px',
                },
                image: {
                    height: '250px',
                }
            }
        },
        imagePosition: {
            bottom: {
                image: {
                    position: 'absolute',
                    right: '-50px',
                    bottom: '0px',
                    transform: 'translateY(70%)',
                }
            }
        }
    }
});
