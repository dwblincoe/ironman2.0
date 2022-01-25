import { useState, useEffect } from 'react'
import { Card, CardContent, TextField, Typography, Grid } from '@mui/material'
import { toast } from 'react-toastify'

import {
    UserInputDto,
    UserDto,
    UpdateUserInputDto,
} from '../../common/auth/types'
import { useUpdateUserMutation } from '../../common/auth/slice'
import LoadingButton from '../../common/components/LoadingButton'

import useStyles from './styles'

type Props = {
    auth: UserDto
    setAuth: (user: UserDto) => void
}

const UserInfo = ({ auth, setAuth }: Props) => {
    const [form, setForm] = useState<UserInputDto>({} as UserInputDto)
    const [edit, setEdit] = useState<boolean>(false)
    const [updateUser, { data: updatedUser, isSuccess }] =
        useUpdateUserMutation()
    const classes = useStyles()

    useEffect(() => {
        if (auth) {
            setForm({
                firstName: auth.firstName,
                lastName: auth.lastName,
                email: auth.email,
                username: auth.username,
            })
        }
    }, [auth])

    useEffect(() => {
        if (isSuccess) {
            toast.success('Profile updated!')
        }
    }, [isSuccess])

    useEffect(() => {
        if (updatedUser) {
            setAuth(updatedUser)
        }
    }, [updatedUser])

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = () => {
        const value = {
            id: auth.id,
            ...form,
        } as UpdateUserInputDto

        updateUser(value)
    }

    return (
        <Card>
            <CardContent className={classes.content}>
                {edit ? (
                    <>
                        <Typography
                            className={classes.editButton}
                            onClick={() => setEdit(false)}
                        >
                            Cancel
                        </Typography>
                        <Grid container spacing={4} className="pt-1">
                            <Grid item xs={6} className="pt-0">
                                <TextField
                                    name="firstName"
                                    label="First Name"
                                    variant="outlined"
                                    value={form.firstName ?? ''}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6} className="pt-0">
                                <TextField
                                    name="lastName"
                                    label="Last Name"
                                    variant="outlined"
                                    value={form.lastName ?? ''}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    value={form.email ?? ''}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="username"
                                    label="Username"
                                    variant="outlined"
                                    value={form.username ?? ''}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <LoadingButton
                                    loading={false}
                                    variant="contained"
                                    onClick={handleSubmit}
                                >
                                    Save
                                </LoadingButton>
                            </Grid>
                        </Grid>
                    </>
                ) : (
                    <>
                        <Typography
                            className={classes.editButton}
                            onClick={() => setEdit(true)}
                        >
                            Edit
                        </Typography>
                        <Grid container spacing={4} className="pt-1">
                            <Grid item xs={6} className="pt-0">
                                <Typography variant="h6">First Name</Typography>
                                <Typography>
                                    {auth?.firstName ?? '-'}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} className="pt-0">
                                <Typography variant="h6">Last Name</Typography>
                                <Typography>{auth?.lastName ?? '-'}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">Username</Typography>
                                <Typography>{auth?.username}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">Email</Typography>
                                <Typography>{auth?.email}</Typography>
                            </Grid>
                        </Grid>
                    </>
                )}
            </CardContent>
        </Card>
    )
}

export default UserInfo
