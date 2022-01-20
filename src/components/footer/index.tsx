import { Typography } from '@mui/material'
import TsanLogo from '../../assets/siren-full-logo.svg'
import Facebook from '../../assets/facebook.svg'
import YouTube from '../../assets/youtube.svg'

import useStyles from './styles'

const Footer = () => {
    const classes = useStyles()

    return (
        <div className={classes.main}>
            <div className={classes.imgContainer}>
                <img src={Facebook} alt="facebook-icon" />
                <img src={YouTube} alt="youtube-icon" className="ml-1" />
            </div>
            <Typography color="textSecondary">
                &copy; Drew Blincoe | The Spoiler Alert Network
            </Typography>
        </div>
    )
}

export default Footer
