import { useState, useEffect } from 'react'
import { Card, CardContent, TextField, Typography, Grid } from '@mui/material'

import { UserInputDto, UserDto } from '../../common/auth/types'
import LoadingButton from '../../common/components/LoadingButton'

import useStyles from './styles'

type Props = {
    auth: UserDto
}

const UserInfo = ({ auth }: Props) => {
    const [form, setForm] = useState<UserInputDto>({} as UserInputDto)
    const [edit, setEdit] = useState(false)
    const classes = useStyles()

    useEffect(() => {
        if (auth) {
            setForm(auth)
        }
    }, [auth])

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target
        setForm({ ...form, [name]: value })
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
