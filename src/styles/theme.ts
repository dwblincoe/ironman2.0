import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

import colors from "./colors";

const theme = createTheme({
    typography: {
        fontFamily: "Roboto",
        h1: { fontFamily: "Montserrat" },
        h2: { fontFamily: "Montserrat" },
        h3: { fontFamily: "Montserrat" },
        h4: { fontFamily: "Montserrat" },
        h5: { fontFamily: "Montserrat" },
        h6: { fontFamily: "Montserrat" },
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
            primary: colors.offWhite,
            secondary: colors.blue,
        },
    },
    props: {
        MuiButtonBase: {
            disableRipple: true,
        },
    },
    overrides: {
        MuiContainer: {
            root: {
                minHeight: "100vh",
                padding: "0px",
                overflow: "auto",
                "@media (min-width: 600px)": {
                    padding: "0px",
                },
            },
        },
        MuiButtonBase: {
            root: {
                "&.loading": {
                    "& span": {
                        position: "relative",
                        width: "fit-content",
                        "& .MuiCircularProgress-root": {
                            color: colors.offWhite,
                            position: "absolute",
                            right: "-40px",
                            width: "30px !important",
                            height: "30px !important",
                        },
                    },
                },
            },
        },
        MuiButton: {
            root: {
                borderRadius: "0px",
            },
        },
        MuiInput: {
            root: {
                borderRadius: "2px",
            },
        },
        MuiInputBase: {
            root: {
                borderRadius: "2px",
                color: colors.blue,
            },
        },
        MuiOutlinedInput: {
            root: {
                borderRadius: "2px",
                "&:hover fieldset": {
                    border: `2px solid ${colors.blue} !important`,
                },
            },
        },
        MuiLink: {
            root: {
                cursor: "pointer",
            },
        },
        MuiGrid: {
            "spacing-xs-4": {
                width: "unset",
                margin: "unset",
            },
        },
    },
});

export default responsiveFontSizes(theme);
