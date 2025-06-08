import { api } from '@/lib/axios'

interface CreateNoteBody {
  patientId: string
  audio: File
}

interface CreateNoteResponse {
  message: string
  note: {
    id: string
  }
}

export async function createNote({ patientId, audio }: CreateNoteBody) {
  const formData = new FormData()
  formData.append('patientId', patientId)
  formData.append('audio', audio)

  const response = await api.post<CreateNoteResponse>('/note', formData)

  const { note } = response.data

  return note
}
