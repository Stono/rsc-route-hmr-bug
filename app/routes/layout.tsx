import { Outlet } from 'react-router'

export function loader() {
  return { ready: true }
}

export default function Layout() {
  return (
    <main>
      <h1>Workplace apps</h1>
      <Outlet />
    </main>
  )
}