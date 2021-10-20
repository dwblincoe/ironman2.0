import { useState, useEffect, useContext } from 'react'
import { Link, Grid, Typography } from '@material-ui/core'

import { SignInDto, RegisterDto } from '../../common/auth/types'
import { useLoginMutation, useRegisterMutation } from '../../common/auth/slice'

import { AuthContext, ContextType } from '../../common/auth/AuthContext'
import LoadingButton from '../../common/components/LoadingButton'

import SignInForm from './sign-in'
import RegisterForm from './register'

type Props = {
    setVisible: (value: boolean) => void
}

const RegisterSignIn = ({ setVisible }: Props) => {
    const { setTokenAndAuth } = useContext(AuthContext) as ContextType

    const [
        login,
        {
            data: loginUser,
            isLoading: isLoggingIn,
            isSuccess: loginSuccess,
            isError: loginError,
        },
    ] = useLoginMutation()
    const [
        register,
        {
            data: user,
            isLoading: isRegistering,
            isSuccess: registerSuccess,
            isError: registerError,
        },
    ] = useRegisterMutation()

    const [registerToggle, setRegisterToggle] = useState<boolean>(false)
    const [signInForm, setSignInForm] = useState<SignInDto>({} as SignInDto)
    const [registerForm, setRegisterForm] = useState<RegisterDto>(
        {} as RegisterDto
    )

    useEffect(() => {
        if (registerSuccess || loginSuccess) {
            const authUser = user || loginUser
            setVisible(false)

            if (authUser) {
                setTokenAndAuth(authUser)
            }
        }
    }, [registerSuccess, loginSuccess])

    const handleSubmit = () => {
        if (registerToggle) {
            register(registerForm)
        } else {
            login(signInForm)
        }
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = evt.target

        if (registerToggle) {
            setRegisterForm({ ...registerForm, [name]: value })
        } else {
            setSignInForm({ ...signInForm, [name]: value })
        }
    }

    return (
        <Grid container justifyContent="center" spacing={4}>
            <Typography variant="h4" color="textSecondary">
                {registerToggle ? 'Register' : 'Sign In'}
            </Typography>
            <Grid item xs={12}>
                {registerToggle ? (
                    <RegisterForm
                        handleChange={handleChange}
                        form={registerForm}
                    />
                ) : (
                    <SignInForm handleChange={handleChange} form={signInForm} />
                )}
            </Grid>
            <Grid item xs={12}>
                <LoadingButton
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    fullWidth
                    loading={isRegistering || isLoggingIn}
                >
                    {registerToggle ? 'Sign Up' : 'Sign In'}
                </LoadingButton>
            </Grid>
            <Grid item>
                {registerToggle ? (
                    <Typography color="textSecondary">
                        Already have an account?{' '}
                        <Link
                            onClick={() => setRegisterToggle(!registerToggle)}
                        >
                            Sign In
                        </Link>
                    </Typography>
                ) : (
                    <Typography color="textSecondary">
                        Don't have an account?
                        <Link
                            onClick={() => setRegisterToggle(!registerToggle)}
                        >
                            Register here
                        </Link>
                    </Typography>
                )}
            </Grid>
        </Grid>
    )
}

export default RegisterSignIn
