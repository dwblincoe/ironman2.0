import { ChangeEvent, useState } from 'react'
import {
    FormControl,
    TextField,
    InputAdornment,
    IconButton,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

import { RegisterDto } from '../../common/auth/types'

import useStyles from './styles'

type Props = {
    form: RegisterDto
    handleChange: (evt: ChangeEvent<HTMLInputElement>) => void
}

const Register = ({ form, handleChange }: Props) => {
    const classes = useStyles()
    const [showPass, setShowPass] = useState(false)

    return (
        <div className={classes.form}>
            <TextField
                name="email"
                label="Email"
                variant="outlined"
                value={form.email ?? ''}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                name="username"
                label="Username"
                variant="outlined"
                value={form.username ?? ''}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                name="password"
                label="Password"
                variant="outlined"
                type={showPass ? 'text' : 'password'}
                value={form.password ?? ''}
                onChange={handleChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={() => setShowPass(!showPass)}>
                                {showPass ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                fullWidth
            />
        </div>
    )
}
export default Register
