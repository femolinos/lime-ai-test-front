import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="mx-auto w-full max-w-4xl">
        <Outlet />
      </div>
    </div>
  )
}
