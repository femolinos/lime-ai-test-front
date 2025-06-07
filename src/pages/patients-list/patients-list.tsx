export function PatientsList() {
  return (
    <div className="my-2 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Patients</h1>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span>Patient 1</span>
          <span>100</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Patient 2</span>
          <span>200</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Patient 3</span>
          <span>300</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Patient 4</span>
          <span>400</span>
        </div>
      </div>
    </div>
  )
}
