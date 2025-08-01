import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { officer_attendance } from "@/models/officers.models";
import { getOfficerAttendance } from "@/services/attendance.services";

export default async function OfficerAttendanceTable() {
  const officer_attendance: officer_attendance[] = await getOfficerAttendance();

  return (
    <>
      <Table>
        <TableCaption className="text-white">
          Committees Logged as Present in the Nook
        </TableCaption>
        <TableHeader>
          <TableRow className="font-medium">
            <TableHead className="w-[100px] text-white px-4 py-2">
              Name
            </TableHead>
            <TableHead className="text-white px-4 py-2">Committee</TableHead>
            <TableHead className="text-white text-right px-4 py-2">
              Total Hours Inside the Nook
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {officer_attendance.map((officer, index) => {
            return (
              <TableRow key={index} className="gap-4">
                <TableCell className="px-4 py-2">{officer.full_name}</TableCell>
                <TableCell className="px-4 py-2">
                  {officer.committee_name}
                </TableCell>
                <TableCell className="text-right px-4 py-2">
                  {officer.hours_rendered}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
