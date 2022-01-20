import React from 'react'
import { Button, ButtonProps, CircularProgress } from '@mui/material'

type Props = {
    loading: boolean
}

const LoadingButton: React.FC<Props & ButtonProps> = ({
    children,
    loading,
    ...rest
}) => (
    <Button {...rest} disabled={loading} className="loading">
        {children}
        {loading && <CircularProgress />}
    </Button>
)

export default LoadingButton
