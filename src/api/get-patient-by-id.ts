import { api } from '@/lib/axios'

interface GetPatientByIdParams {
  id: string
}

interface GetPatientByIdResponse {
  message: string
  patient: {
    id: string
    name: string
    dateOfBirth: Date
    patientId: string
  }
}

export async function getPatientById({ id }: GetPatientByIdParams) {
  const response = await api.get<GetPatientByIdResponse>(`/patient/${id}`)

  const { patient } = response.data

  return patient
}
