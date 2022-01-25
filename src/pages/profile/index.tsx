import { useContext, useState } from 'react'
import { Typography, Grid, Card, CardContent, IconButton } from '@mui/material'
import { AccountCircle, Edit } from '@mui/icons-material'

import { AuthContext } from '../../common/auth/AuthContext'

import UserInfo from './user-info'
import ChangePassword from './change-password'
import Uploader from '../../components/uploader'

import useStyles from './styles'

const Profile = () => {
    const { auth, setAuth } = useContext(AuthContext)
    const classes = useStyles()
    const [visible, setVisible] = useState(false)
    const [editVisible, setEditVisible] = useState(false)

    return (
        <div className="mt-2">
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h4">Profile Settings</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardContent className={classes.uploadContainer}>
                            {auth?.image ? (
                                'IMAGE HERE'
                            ) : (
                                <IconButton
                                    onClick={() => setVisible(true)}
                                    onMouseEnter={() => setEditVisible(true)}
                                    onMouseLeave={() => setEditVisible(false)}
                                >
                                    <AccountCircle
                                        className={classes.accountIcon}
                                        style={
                                            editVisible
                                                ? {
                                                      opacity: '0.5 !important',
                                                  }
                                                : {}
                                        }
                                    />
                                    {editVisible && (
                                        <Edit className={classes.editIcon} />
                                    )}
                                </IconButton>
                            )}
                            <Uploader
                                visible={visible}
                                setVisible={setVisible}
                            />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={9}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <UserInfo auth={auth} setAuth={setAuth} />
                        </Grid>
                        <Grid item xs={12}>
                            <ChangePassword />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Profile
