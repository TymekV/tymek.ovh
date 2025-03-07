import { sva } from "@/styled-system/css";

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
            objectFit: 'contain',
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
                    width: '510px',
                    height: '200px',
                },
                image: {
                    height: '250px',
                }
            },
            square: {
                card: {
                    width: '250px',
                    height: '200px',
                },
                image: {
                    height: '150px',
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
            },
            bottomSmall: {
                image: {
                    position: 'absolute',
                    right: '-20px',
                    bottom: '0px',
                    transform: 'translateY(50%)',
                }
            }
        },
        withShading: {
            true: {
                image: {
                    maskImage: 'linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 95%)',
                }
            }
        }
    },
    defaultVariants: {
        withShading: true,
    }
});
