import AccountDashboard from "@/components/nav/AccountDashboard";
import MobileAccountDashboard from "@/components/nav/MobileAccountDashboard";
import { getUser } from "@/lib/actions/admin.actions";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Layout ({ children }: { children: React.ReactNode }) {
  
    const session = await getServerSession(authOptions);

    let user = {
      username: "User",
      email: "Email"
    }

    if(session)
    {
       user = await getUser(session.user.id);
    }
 

    if(!session)
    {
      redirect("/")
    }
  
    return (
      <div className="max-xxs:mt-16 mt-20 md:mt-24 lg:mt-32 grid h-screen min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <AccountDashboard username={user.username} email={user.email}/>
        <div className="flex flex-col">
        <MobileAccountDashboard username={user.username}/>
          <main className="flex flex-1 p-4 flex-col max-xxs:mt-8 md:pt-0 sm:pt-20 lg:pt-4">
            <section>{children}</section>
          </main>
        </div>
      </div>
    );
  }
