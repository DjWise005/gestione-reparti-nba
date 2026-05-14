import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-2xl space-y-8 px-4 text-center">
        <div>
          <h1 className="text-5xl font-bold text-gray-900">
            Gestione Reparti NBA
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Sistema di gestione commesse automotive
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href="/sign-in"
            className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-700"
          >
            Accedi
          </Link>
          <Link
            href="/sign-up"
            className="rounded-lg bg-white px-8 py-3 text-lg font-semibold text-blue-600 shadow-lg hover:bg-gray-50"
          >
            Registrati
          </Link>
        </div>
      </div>
    </div>
  );
}