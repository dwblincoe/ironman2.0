import React from "react";
import { CircularProgress } from "@material-ui/core";
import Button, { ButtonProps } from "@material-ui/core/Button";

type Props = {
    loading: boolean;
};

const LoadingButton: React.FC<Props & ButtonProps> = ({
    children,
    loading,
    ...rest
}) => (
    <Button {...rest} disabled={loading} className="loading">
        {children}
        {loading && <CircularProgress />}
    </Button>
);

export default LoadingButton;
