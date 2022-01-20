import { Dialog, DialogContent } from '@mui/material'

type Props = {
    visible: boolean
    setVisible: (value: boolean) => void
}

const Uploader = ({ visible, setVisible }: Props) => {
    return (
        <Dialog open={visible} onClose={() => setVisible(false)}>
            <DialogContent>
                <h1>UPLOADER</h1>
            </DialogContent>
        </Dialog>
    )
}

export default Uploader
