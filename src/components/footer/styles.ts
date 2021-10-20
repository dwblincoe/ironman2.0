import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => {
    const { primary } = theme.palette;

    return createStyles({
        main: {
            maxWidth: "inherit",
            width: "100%",
            background: primary.main,
            padding: "10px",
            position: "fixed",
            bottom: 0,
            minHeight: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
        },

        imgContainer: {
            display: "flex",

            "& img": {
                width: "25px",
                cursor: "pointer",
            },
        },
    });
});
