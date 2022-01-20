import { createTheme, responsiveFontSizes } from '@mui/material/styles'

import colors from './colors'

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto',
        h1: { fontFamily: 'Montserrat' },
        h2: { fontFamily: 'Montserrat' },
        h3: { fontFamily: 'Montserrat' },
        h4: { fontFamily: 'Montserrat' },
        h5: { fontFamily: 'Montserrat' },
        h6: { fontFamily: 'Montserrat' },
    },
    palette: {
        primary: {
            main: colors.blue,
            light: colors.hoverBlue,
        },
        secondary: {
            main: colors.red,
        },
        common: {
            white: colors.white,
        },
        text: {
            primary: colors.blue,
            secondary: colors.offWhite,
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    maxHeight: 'calc(100vh - 170px)',
                    padding: '0px',
                    overflow: 'auto',
                    '@media (min-width: 600px)': {
                        padding: '0px',
                    },
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    '&.loading': {
                        '& span': {
                            position: 'relative',
                            width: 'fit-content',
                            '& .MuiCircularProgress-root': {
                                color: colors.offWhite,
                                position: 'absolute',
                                right: '-40px',
                                width: '30px !important',
                                height: '30px !important',
                            },
                        },
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '0px',
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: colors.blue,
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    borderRadius: '2px',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderRadius: '2px',
                    color: colors.blue,
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '2px',
                    '&:hover fieldset': {
                        border: `2px solid ${colors.blue} !important`,
                    },
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    cursor: 'pointer',
                },
            },
        },
        MuiGrid: {
            styleOverrides: {
                'spacing-xs-4': {
                    width: 'unset',
                    margin: 'unset',
                },
            },
        },
    },
})

export default responsiveFontSizes(theme)
