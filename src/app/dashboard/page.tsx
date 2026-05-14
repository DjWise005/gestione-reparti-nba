import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
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
          
          {/* Logout usando UserButton di Clerk */}
          <form action="/api/auth/signout" method="POST">
            <button 
              type="submit"
              className="rounded-lg bg-red-600 px-6 py-2 text-white hover:bg-red-700 cursor-pointer"
            >
              Logout
            </button>
          </form>
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

        {/* Card next steps */}
        <div className="mt-6 rounded-lg bg-blue-50 p-6">
          <h3 className="mb-3 text-lg font-semibold text-blue-900">
            🚀 Prossimi passi
          </h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>✅ Autenticazione Clerk completa</li>
            <li>✅ Middleware protezione route attivo</li>
            <li>⏳ Database schema (Giorno 3)</li>
            <li>⏳ CRUD ordini (Giorno 4-5)</li>
            <li>⏳ Workflow reparti (Giorno 6-8)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}