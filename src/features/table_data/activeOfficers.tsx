import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { officer } from "@/models/officers.models";
import { getActiveOfficers } from "@/services/attendance.services";

export default async function ActiveOfficersTable() {
  const active_officers: officer[] = await getActiveOfficers();

  return (
    <>
      <Table>
        <TableCaption className="text-white">
          Real-Time List of Officers in the Nook
        </TableCaption>
        <TableHeader>
          <TableRow className="font-medium">
            <TableHead className="w-[100px] text-white px-4 py-2">
              Name
            </TableHead>
            <TableHead className="text-white px-4 py-2">Committee</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {active_officers.map((officer, index) => {
            return (
              <TableRow key={index} className="gap-4">
                <TableCell className="px-4 py-2">{officer.full_name}</TableCell>
                <TableCell className="px-4 py-2">
                  {officer.committee_name}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
