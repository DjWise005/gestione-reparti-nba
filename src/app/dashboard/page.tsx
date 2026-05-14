import { auth, currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header con logout */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Dashboard
            </h1>
            <p className="mt-2 text-gray-600">
              Benvenuto, {user?.firstName || user?.emailAddresses[0]?.emailAddress}!
            </p>
          </div>
          
          <SignOutButton>
            <button className="rounded-lg bg-red-600 px-6 py-2 text-white hover:bg-red-700">
              Logout
            </button>
          </SignOutButton>
        </div>

        {/* Card informazioni */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold">
            🎉 Autenticazione funzionante!
          </h2>
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>User ID:</strong> {userId}</p>
            <p><strong>Email:</strong> {user?.emailAddresses[0]?.emailAddress}</p>
            <p><strong>Nome:</strong> {user?.firstName} {user?.lastName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}