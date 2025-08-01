import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { committee_attendance } from "@/models/officers.models";
import { getComitteeAttendance } from "@/services/attendance.services";

export default async function CommitteeAttendanceTable() {
  const committee_attendance: committee_attendance[] =
    await getComitteeAttendance();

  return (
    <>
      <Table>
        <TableCaption className="text-white"></TableCaption>
        <TableHeader>
          <TableRow className="font-medium">
            <TableHead className="text-white px-4 py-2">Committee</TableHead>
            <TableHead className="text-white text-right px-4 py-2">
              Total Hours Inside the Nook
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {committee_attendance.length == 0 ? (
            <p>No data available.</p>
          ) : (
            committee_attendance?.map((officer, index) => {
              return (
                <TableRow key={index} className="gap-4">
                  <TableCell className="px-4 py-2">
                    {officer.committee_name}
                  </TableCell>
                  <TableCell className="text-right px-4 py-2">
                    {officer.hours_rendered}
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </>
  );
}
