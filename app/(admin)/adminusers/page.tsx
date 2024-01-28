
import SearchUsers from "@/components/forms/SearchUsers"
import UsersTable from "@/components/tables/UsersTable"
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getAllUsers } from "@/lib/actions/user.actions";

export default async function page() {
  const session = await getServerSession(authOptions);

  if(session === undefined || session?.user.admin === false)
  {
    redirect("/")
  }

  const Users = await getAllUsers();

  return (
    <div className="md:pt-24 max-sm:pt-20 lg:pt-0 flex flex-col h-full">
      <div className="grid grid-cols-1">
      <SearchUsers />
      </div>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="grid grid-cols-1 border shadow-sm rounded-lg overflow-x-hidden">
            <UsersTable users={Users}/>
        </div>
      </main>
    </div>
  )
}

