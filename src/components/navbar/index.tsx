import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Dialog, DialogContent, Menu, MenuItem } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'

import RegisterSignIn from '../register-signin'

import { AuthContext } from '../../common/auth/AuthContext'

import TsanLogo from '../../assets/tsan-siren-initial.svg'

import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles()
    const history = useHistory()
    const { auth, logout } = useContext(AuthContext)
    const [visible, setVisible] = useState<boolean>(false)
    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl)

    const resetAnchorEl = () => setAnchorEl(null)

    const handleClick = (page) => {
        history.push(page)
        resetAnchorEl()
    }

    const renderMenu = () => (
        <>
            <AccountCircle
                onClick={(evt: any) => setAnchorEl(evt.currentTarget)}
            />
            <Menu open={open} anchorEl={anchorEl} onClose={resetAnchorEl}>
                <MenuItem onClick={() => handleClick('/profile')}>
                    Profile
                </MenuItem>
                {auth.isAdmin && (
                    <MenuItem onClick={() => handleClick('/admin/dashboard')}>
                        Admin Dashboard
                    </MenuItem>
                )}
                <MenuItem
                    onClick={() => {
                        logout()
                        handleClick('/')
                    }}
                >
                    Log Out
                </MenuItem>
            </Menu>
        </>
    )

    return (
        <div className={classes.main}>
            <img src={TsanLogo} alt="logo" onClick={() => history.push('/')} />
            {!auth ? (
                <AccountCircle
                    onClick={() => {
                        setVisible(true)
                        resetAnchorEl()
                    }}
                />
            ) : (
                renderMenu()
            )}

            <Dialog open={visible} onClose={() => setVisible(false)} fullWidth>
                <DialogContent>
                    <RegisterSignIn setVisible={setVisible} />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Navbar
