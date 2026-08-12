import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

export default function DemoDialog({
  open,
  onClose,
  onConfirm,
}: {
  open: boolean
  onClose: () => void
  onConfirm: () => void
}) {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="demo-dialog-title">
      <DialogTitle id="demo-dialog-title">Conferma azione</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Questo è un dialog di conferma. Confermando, verrà mostrata una snackbar di
          completamento.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Annulla</Button>
        <Button variant="contained" onClick={onConfirm}>
          Conferma
        </Button>
      </DialogActions>
    </Dialog>
  )
}