import { api } from '@/lib/axios'

export interface FetchNotesResponse {
  message: string
  notes: {
    id: string
    patient: {
      id: string
      name: string
    }
    summary: string
    createdAt: string
  }[]
}

export async function fetchNotes() {
  const response = await api.get<FetchNotesResponse>('/notes')

  const { notes } = response.data

  return notes
}
