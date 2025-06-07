import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="m-auto flex w-full items-center justify-center px-4">
        <Outlet />
      </div>
    </div>
  )
}
