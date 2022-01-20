import { useState } from 'react'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    TextField,
    Grid,
    Typography,
} from '@mui/material'

import { PasswordChangeInputDto } from '../../common/auth/types'
import LoadingButton from '../../common/components/LoadingButton'

import useStyles from './styles'

const ChangePassword = () => {
    const [form, setForm] = useState<PasswordChangeInputDto>(
        {} as PasswordChangeInputDto
    )
    const classes = useStyles()

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target
        setForm({ ...form, [name]: value })
    }

    return (
        <Accordion>
            <AccordionSummary
                className={classes.changePassword}
                expandIcon={
                    <div>
                        <Typography>Change</Typography>
                    </div>
                }
            >
                <Typography variant="h6">Change Password</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            name="currentPassword"
                            label="Current Password"
                            variant="outlined"
                            value={form.currentPassword ?? ''}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="newPassword"
                            label="New Pawssword"
                            variant="outlined"
                            value={form.newPassword ?? ''}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="confirmNewPassword"
                            label="Confirm New Password"
                            variant="outlined"
                            value={form.confirmNewPassword ?? ''}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <LoadingButton loading={false} variant="contained">
                            Save
                        </LoadingButton>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}

export default ChangePassword
