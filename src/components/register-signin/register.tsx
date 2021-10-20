import React from 'react'
import { FormControl, TextField } from '@material-ui/core'

import { RegisterDto } from '../../common/auth/types'

import useStyles from './styles'

type Props = {
    form: RegisterDto
    handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

const Register = ({ form, handleChange }: Props) => {
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
                    name="username"
                    label="Username"
                    variant="outlined"
                    value={form.username ?? ''}
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
export default Register
