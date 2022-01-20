import { makeStyles, createStyles } from '@mui/styles'

const useStyles = makeStyles(() => {
    return createStyles({
        form: {
            display: 'flex',
            flexDirection: 'column',
            '& .MuiFormControl-root:not(:first-child)': {
                marginTop: '10px',
            },
        },
    })
})

export default useStyles
