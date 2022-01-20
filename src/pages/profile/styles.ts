import { makeStyles, createStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

import colors from '../../styles/colors'

const useStyles = makeStyles((theme: Theme) => {
    const { secondary } = theme.palette

    return createStyles({
        content: {
            display: 'flex',
            flexDirection: 'column',
        },
        editButton: {
            color: secondary.main,
            textDecoration: 'underline',
            cursor: 'pointer',
            width: 'fit-content',
            alignSelf: 'flex-end',
        },
        changePassword: {
            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                transform: 'none',
            },
        },
        uploadContainer: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'relative',

            '& svg:hover': {
                opacity: '0.5',
            },
        },

        accountIcon: {
            fontSize: '20rem !important',
            fill: `${colors.hoverBlue} !important`,
            cursor: 'pointer',
        },

        editIcon: {
            position: 'absolute',
            fill: `${colors.blue} !important`,
            fontSize: '5rem !important',
            left: 'auto',
            opacity: '1 !important',
        },
    })
})

export default useStyles
