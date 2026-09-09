import { useCallback, useEffect, useState } from 'react'
import TeachersDialog from '../../components/teachers/TeachersDialog.tsx'
import type { TeacherFormData } from '../../components/teachers/TeachersDialog.model.ts'
import TeachersSection from '../../components/teachers/TeachersSection.tsx'
import type { Teacher } from '../../types/teacher.ts'
import {
  createTeacher,
  deleteTeacher,
  getAllTeachers,
  updateTeacher,
} from '../../services/teachers/teachers.service.ts'

type DialogMode = 'add' | 'edit'

function getErrorMessage(error: unknown, fallbackMessage: string) {
  return error instanceof Error && error.message ? error.message : fallbackMessage
}

export default function TeachersContainer() {
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [dialogMode, setDialogMode] = useState<DialogMode | null>(null)
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | undefined>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [deletingTeacherId, setDeletingTeacherId] = useState<number | null>(null)

  const loadTeachers = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const teachersList = await getAllTeachers()
      setTeachers(teachersList)
    } catch (loadError) {
      setError(getErrorMessage(loadError, 'Impossibile recuperare gli insegnanti.'))
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    void loadTeachers()
  }, [loadTeachers])

  const handleAddTeacher = useCallback(() => {
    setSelectedTeacher(undefined)
    setDialogMode('add')
  }, [])

  const handleEditTeacher = useCallback(
    (id: number) => {
      const teacher = teachers.find((item) => item.id === id)

      if (!teacher) {
        setError("Impossibile trovare l'insegnante selezionato.")
        return
      }

      setSelectedTeacher(teacher)
      setDialogMode('edit')
    },
    [teachers],
  )

  const handleDialogClose = useCallback(() => {
    if (isSubmitting) {
      return
    }

    setDialogMode(null)
    setSelectedTeacher(undefined)
  }, [isSubmitting])

  const handleTeacherSubmit = useCallback(
    async (teacher: TeacherFormData) => {
      if (isSubmitting) {
        return
      }

      setIsSubmitting(true)
      setError(null)

      try {
        if (dialogMode === 'edit' && selectedTeacher) {
          await updateTeacher(selectedTeacher.id, teacher)
        } else {
          await createTeacher(teacher)
        }

        setDialogMode(null)
        setSelectedTeacher(undefined)
        await loadTeachers()
      } catch (saveError) {
        setError(getErrorMessage(saveError, "Impossibile salvare l'insegnante."))
      } finally {
        setIsSubmitting(false)
      }
    },
    [dialogMode, isSubmitting, loadTeachers, selectedTeacher],
  )

  const handleDeleteTeacher = useCallback(
    async (id: number) => {
      if (deletingTeacherId !== null || isSubmitting) {
        return
      }

      setDeletingTeacherId(id)
      setError(null)

      try {
        await deleteTeacher(id)
        await loadTeachers()
      } catch (deleteError) {
        setError(getErrorMessage(deleteError, "Impossibile eliminare l'insegnante."))
      } finally {
        setDeletingTeacherId(null)
      }
    },
    [deletingTeacherId, isSubmitting, loadTeachers],
  )

  return (
    <>
      <TeachersSection
        teachers={teachers}
        isLoading={isLoading}
        error={error}
        isMutating={isSubmitting || deletingTeacherId !== null}
        deletingTeacherId={deletingTeacherId}
        onRetry={loadTeachers}
        onAddTeacher={handleAddTeacher}
        onEditTeacher={handleEditTeacher}
        onDeleteTeacher={handleDeleteTeacher}
      />

      <TeachersDialog
        open={dialogMode !== null}
        title={dialogMode === 'edit' ? 'Modifica insegnante' : 'Aggiungi insegnante'}
        initialValue={selectedTeacher}
        isSubmitting={isSubmitting}
        onCancel={handleDialogClose}
        onSubmit={handleTeacherSubmit}
      />
    </>
  )
}
