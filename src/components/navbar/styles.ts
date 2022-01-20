import { Theme } from '@mui/material/styles'
import { makeStyles, createStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => {
    const { primary, common } = theme.palette

    return createStyles({
        main: {
            width: '100%',
            background: common.white,
            padding: '10px',
            boxShadow: '0 4px 2px -2px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,

            '& svg': {
                fill: primary.main,
                fontSize: '2.5rem',
                cursor: 'pointer',
            },

            '& img': {
                height: '50px',
                cursor: 'pointer',
            },
        },
    })
})

export default useStyles
