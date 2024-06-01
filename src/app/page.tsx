import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { tasks } from "@/components/data/data";

export default  function Home() {

  return (
    <main>
      <DataTable data={tasks} columns={columns} />
    </main>
  );
}
