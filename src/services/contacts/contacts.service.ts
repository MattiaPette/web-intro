import type { Contact } from "../../types/contact"
import type { CreateContactFunction, GetAllContactsFunction } from "./contactsService.model";

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
    throw new Error("Failed to create contract");
  }
}


export {
  getAllContacts,
  createContact
};