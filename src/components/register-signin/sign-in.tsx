import { ChangeEvent, useState } from 'react'
import {
    FormControl,
    TextField,
    InputAdornment,
    IconButton,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

import { SignInDto } from '../../common/auth/types'

import useStyles from './styles'

type Props = {
    form: SignInDto
    handleChange: (evt: ChangeEvent<HTMLInputElement>) => void
}

const SignIn = ({ form, handleChange }: Props) => {
    const classes = useStyles()
    const [showPass, setShowPass] = useState(false)

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
                    type={showPass ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowPass(!showPass)}
                                >
                                    {showPass ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    value={form.password ?? ''}
                    onChange={handleChange}
                    fullWidth
                />
            </FormControl>
        </form>
    )
}
export default SignIn
