import { api } from '@/lib/axios'

interface FetchPatientsResponse {
  message: string
  patients: {
    id: string
    name: string
    patientId: string
  }[]
}

export async function fetchPatients() {
  const response = await api.get<FetchPatientsResponse>('/patients')

  const { patients } = response.data

  return patients
}
