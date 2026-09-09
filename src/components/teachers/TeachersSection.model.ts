import type { Teacher } from '../../types/teacher.ts'

export type TeachersSectionProps = {
  teachers: Teacher[]
  isLoading: boolean
  error: string | null
  isMutating: boolean
  deletingTeacherId: number | null
  onRetry: () => void
  onAddTeacher: () => void
  onEditTeacher: (id: number) => void
  onDeleteTeacher: (id: number) => void
}
