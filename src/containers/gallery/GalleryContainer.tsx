import { Alert, Box, Paper, Snackbar, Tab, Tabs, Typography } from '@mui/material'
import { useCallback, useMemo, useState } from 'react'
import DataSection from '../../components/gallery/DataSection'
import DemoDialog from '../../components/gallery/DemoDialog'
import FeedbackSection from '../../components/gallery/FeedbackSection'
import InputsSection from '../../components/gallery/InputsSection'
import LayoutSection from '../../components/gallery/LayoutSection'
import { DEFAULT_GALLERY_FORM, type GalleryFormState } from '../../types/gallery'

type GalleryTab = 'inputs' | 'feedback' | 'data' | 'layout'

const TABS: { value: GalleryTab; label: string }[] = [
  { value: 'inputs', label: 'Input' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'data', label: 'Contenuto e dati' },
  { value: 'layout', label: 'Layout' },
]

const STEPS_COUNT = 3

/**
 * Container della galleria: tutta la logica di stato vive qui
 * (tab attiva, form, snackbar, dialog, stepper) e viene passata
 * ai componenti di sola presentazione sotto forma di props.
 */
export default function GalleryContainer() {
  const [tab, setTab] = useState<GalleryTab>('inputs')
  const [form, setForm] = useState<GalleryFormState>(DEFAULT_GALLERY_FORM)
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [stepperStep, setStepperStep] = useState(0)
  const updateForm = useCallback((patch: Partial<GalleryFormState>) => {
    setForm((prev) => ({ ...prev, ...patch }))
  }, [])

  const showSnackbar = useCallback((message: string) => setSnackbarMessage(message), [])
  const hideSnackbar = useCallback(() => setSnackbarMessage(null), [])

  const handleOpenDialog = useCallback(() => setDialogOpen(true), [])
  const handleCloseDialog = useCallback(() => setDialogOpen(false), [])
  const handleConfirmDialog = useCallback(() => {
    setDialogOpen(false)
    setSnackbarMessage('Azione confermata dal dialog')
  }, [])

  const handleStepperNext = useCallback(
    () => setStepperStep((prev) => Math.min(prev + 1, STEPS_COUNT - 1)),
    [],
  )
  const handleStepperBack = useCallback(() => setStepperStep((prev) => Math.max(prev - 1, 0)), [])

  const tabPanel = useMemo(() => {
    switch (tab) {
      case 'inputs':
        return <InputsSection form={form} onChange={updateForm} />
      case 'feedback':
        return <FeedbackSection onShowSnackbar={showSnackbar} onOpenDialog={handleOpenDialog} />
      case 'data':
        return (
          <DataSection
            stepperStep={stepperStep}
            onStepperBack={handleStepperBack}
            onStepperNext={handleStepperNext}
          />
        )
      case 'layout':
        return <LayoutSection />
    }
  }, [tab, form, updateForm, showSnackbar, handleOpenDialog, stepperStep, handleStepperBack, handleStepperNext])

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1100, mx: 'auto' }}>
      <Typography variant="h1" gutterBottom>
        Gallery MUI
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
        Una panoramica dei componenti principali di Material UI, con stato gestito dal
        container e presentazione delegata ai componenti.
      </Typography>

      <Tabs
        value={tab}
        onChange={(_e, value: GalleryTab) => setTab(value)}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}
      >
        {TABS.map((item) => (
          <Tab key={item.value} label={item.label} value={item.value} />
        ))}
      </Tabs>

      <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 } }}>
        {tabPanel}
      </Paper>

      <DemoDialog open={dialogOpen} onClose={handleCloseDialog} onConfirm={handleConfirmDialog} />

      <Snackbar
        open={snackbarMessage !== null}
        autoHideDuration={4000}
        onClose={hideSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" onClose={hideSnackbar}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  )
}