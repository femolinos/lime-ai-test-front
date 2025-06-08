import { api } from '@/lib/axios'

interface GetNoteByIdParams {
  id: string
}

interface GetNoteByIdResponse {
  message: string
  note: {
    id: string
    transcription: string
    summary: string
    m1800: string
    m1810: string
    m1820: string
    m1830: string
    m1840: string
    m1850: string
    m1860: string
    patientId: string
    createdAt: string
  }
}

export async function getNoteById({ id }: GetNoteByIdParams) {
  const response = await api.get<GetNoteByIdResponse>(`/note/${id}`)

  const { note } = response.data

  return note
}
