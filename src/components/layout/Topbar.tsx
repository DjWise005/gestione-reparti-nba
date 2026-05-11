"use client";

import { usePathname } from "next/navigation";

const routeTitles: Record<string, string> = {
  "/dashboard":    "Dashboard",
  "/reparti":      "Reparti",
  "/impostazioni": "Impostazioni",
};

function getTitle(pathname: string): string {
  for (const [route, title] of Object.entries(routeTitles)) {
    if (pathname === route || pathname.startsWith(route + "/")) return title;
  }
  return "Gestione Reparti";
}

export function Topbar() {
  const pathname = usePathname();

  return (
    <header className="h-16 flex items-center justify-between px-6 bg-slate-900 border-b border-white/10 shrink-0">
      <span className="text-white font-semibold text-base">
        {getTitle(pathname)}
      </span>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center">
          <span className="text-slate-300 text-xs font-medium">U</span>
        </div>
        <span className="text-slate-400 text-sm">Utente</span>
      </div>
    </header>
  );
}
