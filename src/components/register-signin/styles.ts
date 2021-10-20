import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => {
    return createStyles({
        form: {
            display: "flex",
            flexDirection: "column",
            "& .MuiFormControl-root:not(:first-child)": {
                marginTop: "10px",
            },
        },
    });
});
