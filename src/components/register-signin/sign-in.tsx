import React from 'react'
import { FormControl, TextField } from '@material-ui/core'

import { SignInDto } from '../../common/auth/types'

import useStyles from './styles'

type Props = {
    form: SignInDto
    handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

const SignIn = ({ form, handleChange }: Props) => {
    const classes = useStyles()

    return (
        <form className={classes.form}>
            <FormControl>
                <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    value={form.email ?? ''}
                    onChange={handleChange}
                    fullWidth
                />
            </FormControl>
            <FormControl>
                <TextField
                    name="password"
                    label="Password"
                    variant="outlined"
                    value={form.password ?? ''}
                    onChange={handleChange}
                    fullWidth
                />
            </FormControl>
        </form>
    )
}
export default SignIn
