"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <button 
      onClick={handleLogout}
      className="text-sm font-sans px-4 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors"
    >
      Logout
    </button>
  );
}
