import type { Teacher } from '../../types/teacher.ts'

export type TeacherFormData = Omit<Teacher, 'id'>

export type TeachersDialogProps = {
  open: boolean
  title: string
  initialValue?: Teacher
  isSubmitting: boolean
  onCancel: () => void
  onSubmit: (teacher: TeacherFormData) => void
}
