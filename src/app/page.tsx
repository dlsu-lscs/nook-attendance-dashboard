import { Navbar } from '@/components/layout/Navbar'
import { getOfficerAttendance } from '@/services/attendance.services'
import Image from 'next/image'

export default async function Dashboard() {
  const nookOfficer = await getOfficerAttendance()
  console.log(nookOfficer)
  return (
    <>
      <div>
        <Navbar />
      </div>
    </>
  )
}
