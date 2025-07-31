import { Navbar } from '@/components/layout/Navbar'
import { getOfficerAttendance } from '@/services/attendance.services'
import Image from 'next/image'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { officerModel } from '@/models/officers.models'

export default async function Dashboard() {
  const nookOfficers: officerModel[] = await getOfficerAttendance()
  console.log(nookOfficers)
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="p-12 text-white">
          <div>
            <h1 className="text-4xl font-bold my-4">Nook Statistics:</h1>
          </div>
          <Table>
            <TableCaption className="text-white">
              A list of officers that went inside the nook
            </TableCaption>
            <TableHeader>
              <TableRow className="font-medium">
                <TableHead className="w-[100px] text-white px-4 py-2">
                  Name
                </TableHead>
                <TableHead className="text-white px-4 py-2">
                  Committee
                </TableHead>
                <TableHead className="text-white text-right px-4 py-2">
                  Total Hours Inside the Nook
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* {nookOfficers.map((officer, index) => {
                return (
                  <TableRow key={index} className="gap-4">
                    <TableCell className="px-4 py-2">
                      {officer.full_name}
                    </TableCell>
                    <TableCell className="px-4 py-2">
                      {officer.committee_name}
                    </TableCell>
                    <TableCell className="text-right px-4 py-2">
                      {officer.hours_rendered}
                    </TableCell>
                  </TableRow>
                )
              })} */}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
