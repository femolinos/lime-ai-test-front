import { api } from '@/lib/axios'

interface UpdateNoteParams {
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
}

interface UpdateNoteResponse {
  message: string
  note: {
    id: string
  }
}

export async function updateNote({
  id,
  transcription,
  summary,
  m1800,
  m1810,
  m1820,
  m1830,
  m1840,
  m1850,
  m1860,
}: UpdateNoteParams) {
  const response = await api.put<UpdateNoteResponse>(`/note/${id}`, {
    transcription,
    summary,
    m1800,
    m1810,
    m1820,
    m1830,
    m1840,
    m1850,
    m1860,
  })

  const { note } = response.data

  return note
}
