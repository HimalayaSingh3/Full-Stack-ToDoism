import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

export default function Dashboard() {

  const user=useUser();

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-800 text-white p-4">
      <UserButton/>
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
        <ul>
          <li className="mb-2"><Button variant="ghost">All Tasks</Button></li>
          <li className="mb-2"><Button variant="ghost">Completed</Button></li>
          <li className="mb-2"><Button variant="ghost">Pending</Button></li>
        </ul>
      </div>

      <main className="flex-1 bg-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Your Tasks</h2>
          <Button><Link to='/todo'>Add New Task</Link></Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="p-4 shadow">
            <h3 className="font-bold">Task Title</h3>
            <p>Description of the task...</p>
            <div className="flex justify-end mt-2">
              <Button variant="outline" size="sm">Complete</Button>
            </div>
          </Card>
          <Card className="p-4 shadow">Another Task</Card>
        </div>
      </main>
    </div>
  );
}
