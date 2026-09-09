import type { Teacher } from "../../types/teacher.ts";
import type {
  CreateTeacherFunction,
  DeleteTeacherFunction,
  GetAllTeachersFunction,
  GetTeacherByIdFunction,
  UpdateTeacherFunction,
} from "./teachersService.model.ts";

const teachersUrl = "http://localhost:5555/api/teachers";

type ErrorResponse = {
  message?: string;
};

async function ensureSuccessfulResponse(response: Response, fallbackMessage: string): Promise<void> {
  if (response.ok) {
    return;
  }

  let errorResponse: ErrorResponse | undefined;

  try {
    errorResponse = await response.json() as ErrorResponse;
  } catch {
    // La risposta potrebbe non contenere JSON, ad esempio per un errore 500.
  }

  throw new Error(errorResponse?.message ?? fallbackMessage);
}

const getAllTeachers: GetAllTeachersFunction = async () => {
  const response = await fetch(teachersUrl, {
    method: "GET",
  });

  await ensureSuccessfulResponse(response, "Impossibile recuperare gli insegnanti");
  return await response.json() as Teacher[];
};

const getTeacherById: GetTeacherByIdFunction = async (id) => {
  const response = await fetch(`${teachersUrl}/${id}`, {
    method: "GET",
  });

  await ensureSuccessfulResponse(response, "Impossibile recuperare l'insegnante");
  return await response.json() as Teacher;
};

const createTeacher: CreateTeacherFunction = async (newTeacher) => {
  const response = await fetch(teachersUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTeacher),
  });

  await ensureSuccessfulResponse(response, "Impossibile creare l'insegnante");
  return await response.json() as Teacher;
};

const updateTeacher: UpdateTeacherFunction = async (id, updatedTeacher) => {
  const response = await fetch(`${teachersUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTeacher),
  });

  await ensureSuccessfulResponse(response, "Impossibile aggiornare l'insegnante");
  return await response.json() as Teacher;
};

const deleteTeacher: DeleteTeacherFunction = async (id) => {
  const response = await fetch(`${teachersUrl}/${id}`, {
    method: "DELETE",
  });

  await ensureSuccessfulResponse(response, "Impossibile eliminare l'insegnante");
};

export {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher,
};
