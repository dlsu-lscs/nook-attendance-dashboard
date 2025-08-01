import { Navbar } from "@/components/layout/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ActiveOfficersTable from "@/features/table_data/activeOfficers";
import CommitteeAttendanceTable from "@/features/table_data/committeeAttendance";
import OfficerAttendanceTable from "@/features/table_data/officerAttendance";

export default async function Dashboard() {
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
          <Tabs defaultValue="active">
            <TabsList>
              <TabsTrigger value="active">Active Officers</TabsTrigger>
              <TabsTrigger value="officers">Officer Attendance</TabsTrigger>
              <TabsTrigger value="committee">Committee Attendance</TabsTrigger>
            </TabsList>
            <TabsContent value="active">
              <ActiveOfficersTable />
            </TabsContent>
            <TabsContent value="officers">
              <OfficerAttendanceTable />
            </TabsContent>
            <TabsContent value="committee">
              <CommitteeAttendanceTable />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
