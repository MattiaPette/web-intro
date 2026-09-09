import type { Teacher } from "../../types/teacher.ts";

export type GetAllTeachersFunction = () => Promise<Teacher[]>;
export type GetTeacherByIdFunction = (id: number) => Promise<Teacher>;
export type CreateTeacherFunction = (newTeacher: Omit<Teacher, "id">) => Promise<Teacher>;
export type UpdateTeacherFunction = (
  id: number,
  updatedTeacher: Partial<Omit<Teacher, "id">>,
) => Promise<Teacher>;
export type DeleteTeacherFunction = (id: number) => Promise<void>;
