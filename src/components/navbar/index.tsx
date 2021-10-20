import { useState } from "react";
import { Dialog, TextField, DialogContent } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

import RegisterSignIn from "../register-signin";

import TsanLogo from "../../assets/tsan-siren-initial.svg";

import useStyles from "./styles";

const Navbar = () => {
    const classes = useStyles();
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className={classes.main}>
            <img src={TsanLogo} alt="logo" />
            <AccountCircle onClick={() => setVisible(true)} />
            <Dialog open={visible} onClose={() => setVisible(false)} fullWidth>
                <DialogContent>
                    <RegisterSignIn setVisible={setVisible} />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Navbar;
