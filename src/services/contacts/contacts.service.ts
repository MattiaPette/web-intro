import type { Contact } from "../../types/contact"
import type { CreateContactFunction, DeleteContactFunction, GetAllContactsFunction, UpdateContactFunction } from "./contactsService.model";

const getAllContacts: GetAllContactsFunction = async () => {
  const url = "http://localhost:5555/api/rubrica";

  const fetchStream = await fetch(url, {
    method: "GET",
  });

  if (fetchStream.ok) {
    return await fetchStream.json() as Contact[];
  } else {
    return [];
  }
}

const createContact: CreateContactFunction = async (newContact) => {
  const url = "http://localhost:5555/api/rubrica";

  const fetchStream = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newContact)
  });

  if (!fetchStream.ok) {
    throw new Error("Failed to create contact");
  }
}

const deleteContact: DeleteContactFunction = async (id) => {
  // const url = `http://localhost:5555/api/rubrica/${id}`;
  const url = `http://localhost:5555/api/rubrica/` + id;

  const fetchStream = await fetch(url, {
    method: "DELETE",
  });

  if (!fetchStream.ok) {
    throw new Error("Failed to delete contact");
  }
}

const updateContact: UpdateContactFunction = async (id, updatedContact) => {
  const url = "http://localhost:5555/api/rubrica/" + id;

  const fetchStream = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedContact),
  });

  if (!fetchStream.ok) {
    throw new Error("Skill issue");
  }
}

export {
  getAllContacts,
  createContact,
  deleteContact,
  updateContact
};